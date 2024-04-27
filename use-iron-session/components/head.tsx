import { getSession } from "@/actions/login";
import Logout from "./logout";
import Menu from "./menu";

export default async function Head() {
  const session = await getSession();
  
  return (
    <div className="flex items-end py-4 border-b border-slate-900/10 lg:border-0 dark:border-slate-300/10 text-2xl font-semibold text-slate-700 dark:text-slate-200">
      <Menu />
      {session.isLoggedIn && <Logout />}
    </div>
  )
}