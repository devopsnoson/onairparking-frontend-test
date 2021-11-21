import MenuMobile from '@components/MenuMobile';
import { useMobxStores } from '@stores/index';
import { observer } from 'mobx-react';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, useEffect, useState } from 'react';

function NavBar(): ReactElement {
  const { uiStore } = useMobxStores();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <nav className="bg-white shadow z-11">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/">
                <Image
                  src="/staticmyapp/logo-registred.svg"
                  width="112"
                  height="56"
                  alt="On Air Parking"
                  priority
                  quality={100}
                />
              </a>
            </div>
          </div>
          <ul
            className={`hidden md:flex ml-auto items-baseline justify-center`}
            id="menu-link"
          >
            <li>
              <Link href={'/'}>
                <a className="font-bold">Home</a>
              </Link>
            </li>
            <li>
              <Link href={'/about'}>
                <a className="font-bold">About</a>
              </Link>
            </li>
            <li>
              <Link href={'/contact'}>
                <a className="font-bold">Contact</a>
              </Link>
            </li>
            <li>
              <Link href={'/faq'}>
                <a className="font-bold">FAQ</a>
              </Link>
            </li>
            {loggedIn && (
              <li>
                <div
                  onClick={() => {
                    console.log('foo');
                  }}
                  className="font-bold text-xs text-primary uppercase cursor-pointer hover:underline"
                >
                  GIVE 5
                </div>
              </li>
            )}
            <li>
              <Link href="/blog">
                <a className="font-bold">Blog</a>
              </Link>
            </li>
            <li>
              <Link href={'/myreservation/membership'}>
                <a className="font-bold">Membership</a>
              </Link>
            </li>
            {!loggedIn && (
              <li>
                <Link href={'/login'} passHref>
                  <a className="flex bg-white border border-primary hover:no-underline rounded-full mx-auto uppercase w-24 justify-center items-center sign-in">
                    Sign In
                  </a>
                </Link>
              </li>
            )}
          </ul>

          {uiStore.showMenu && <MenuMobile />}
          <div className="flex md:hidden bg-primary absolute rounded-bl-full w-12 h-12 top-0 right-0">
            <button
              className="inline-flex items-center justify-center absolute top-1.5 right-1.5 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={() => uiStore.toggleMenu()}
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default observer(NavBar);
