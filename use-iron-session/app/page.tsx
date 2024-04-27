import { getSession } from "@/actions/login";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect('/login');
  } else {
    redirect('/dashboard');
  }
}
