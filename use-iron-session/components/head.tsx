import Link from "next/link"

export default function Head() {
  return (
    <div className="flex py-4 border-b border-slate-900/10 lg:border-0 dark:border-slate-300/10 text-2xl font-semibold text-slate-700 dark:text-slate-200">
      <Link href="/">
        <div className="hover:text-sky-500 dark:hover:text-sky-400 mr-4">Home</div>
      </Link>
      <Link href="/profile">
        <div className="hover:text-sky-500 dark:hover:text-sky-400">profile</div>
      </Link>
    </div>
  )
}