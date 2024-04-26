import { logoutAction } from "@/actions/login";

export default function Logout() {
  return <form action={logoutAction}>
    <button className="hover:text-sky-500 dark:hover:text-sky-400 text-lg">logout</button>
  </form>;
}