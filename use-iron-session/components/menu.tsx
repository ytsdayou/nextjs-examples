'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import classNames from 'classnames';

export default function Menu() {
  const pathname = usePathname();

  return <>
    <Link href="/">
      <div className={
        classNames("hover:text-sky-500 dark:hover:text-sky-400 py-3 px-5 mr-4", {
          'bg-muted': pathname === '/'
        })
        }>Home</div>
    </Link>
    <Link href="/profile">
      <div className={classNames("hover:text-sky-500 dark:hover:text-sky-400  py-3 px-5  mr-4", {
          'bg-muted': pathname === '/profile'
        })}>profile</div>
    </Link>
  </>
}