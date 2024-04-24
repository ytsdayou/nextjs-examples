import { getSession } from "@/actions/login";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect('/login');
  }

  return <div>this is profile page</div>;
}
