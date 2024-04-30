import Menu from "@/components/menu";
import Logout from "@/components/logout";
import { getSession } from "@/actions/login";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect('/login');
  }

  return <main className="h-screen flex">
    <div className="bg-gray-700 w-72 text-slate-500">
      <div className="my-10 text-4xl text-center text-slate-300">Admin Panel</div>
      <Menu />
    </div>
    <div className="grow flex flex-col">
      <div className="bg-white h-20 flex flex-row-reverse items-center pr-3">
        <Logout />
      </div>
      <div className="bg-slate-100 grow p-4">
        {children}
      </div>
    </div>
  </main>
}