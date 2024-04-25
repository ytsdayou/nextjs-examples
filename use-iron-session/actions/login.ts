'use server';

import { getIronSession } from "iron-session";
import { sessionOption, ISessionData, defaultSession } from "../lib/session";
import { cookies } from "next/headers";
import { fetchData } from "@/lib/fetch";
import { redirect } from "next/navigation";
import { FormState, LoginFormSchema } from "@/lib/form/login";

export const getSession = async () => {
  const session = await getIronSession<ISessionData>(cookies(), sessionOption);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
}

export const loginAction  = async (
  state: FormState, formData: FormData
) => {
  // Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    username: formData.get('username'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const session = await getSession();
  const user = await fetchData('/auth/login', validatedFields.data);

  if (!user.id) {
    return {
      errors: {
        form: [user.message]
      }
    }
  } else {
    session.isLoggedIn = true;
    session.userId = user.id;
    session.userName = user.username;
    session.error = '';

    await session.save();
    redirect('/profile');
  }
}