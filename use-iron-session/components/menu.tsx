'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import classNames from 'classnames';

export default function Menu() {
  const pathname = usePathname();

  return <>
    <Link href="/">
      <div className={
        classNames("hover:text-slate-300 py-3 px-5 mr-4", {
          'text-white hover:text-white': pathname === '/dashboard'
        })
        }>Dashboard</div>
    </Link>
    <Link href="/dashboard/profile">
      <div className={classNames("hover:text-slate-300 py-3 px-5  mr-4", {
          'text-white hover:text-white': pathname === '/dashboard/profile'
        })}>Profile</div>
    </Link>
  </>
}