'use server';

import { getIronSession } from "iron-session";
import { sessionOption, ISessionData, defaultSession } from "../lib/session";
import { cookies } from "next/headers";
import { fetchData } from "@/lib/fetch";
import { redirect } from "next/navigation";

export const getSession = async () => {
  const session = await getIronSession<ISessionData>(cookies(), sessionOption);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
}

export const loginAction  = async (
  formData: {username: string; password: string},
) => {
  const session = await getSession();
  const user = await fetchData('/auth/login', formData);

  if (!user.id) {
    throw new Error(user.message);
  } else {
    session.isLoggedIn = true;
    session.userId = user.id;
    session.userName = user.username;
    session.error = '';

    await session.save();
    redirect('/profile');
  }
}