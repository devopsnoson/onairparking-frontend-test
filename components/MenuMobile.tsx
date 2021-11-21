import { CloseOutlined, UserOutlined } from '@components/Icons';
import { useMobxStores } from '@stores/index';
import { Button, Divider } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function MenuMobile() {
  const { uiStore, authStore } = useMobxStores();
  const user = authStore.user;
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(authStore.isSignedIn());
  }, [authStore]);

  return (
    <div className="container w-full h-full overflow-y-auto bg-primary z-50 absolute top-0 right-0 overflow-y-auto rounded-bl-90 px-1">
      <div className="h-16 px-3 items-center justify-start flex">
        <Image
          className="mr-auto cursor-pointer"
          src="/staticmyapp/logo-registred-white.svg"
          alt="On Air Parking"
          width="112"
          height="56"
          onClick={() => {
            uiStore.toggleMenu();
          }}
          quality={100}
        />
        <Button
          type="link"
          icon={<CloseOutlined />}
          className="flex justify-center items-center text-white absolute top-1.5 right-1.5"
          onClick={() => uiStore.toggleMenu()}
        />
      </div>
      <div className="mt-10 flex flex-col items-center justify-center space-y-4 ">
        <Link href="/">
          <a
            className="text-white text-base font-bold uppercase hover:text-white"
            onClick={() => uiStore.toggleMenu()}
          >
            Home
          </a>
        </Link>
        <Link href="/about">
          <a
            className="text-white text-base font-bold uppercase hover:text-white"
            onClick={() => uiStore.toggleMenu()}
          >
            About
          </a>
        </Link>
        <Link href="/contact">
          <a
            className="text-white text-base font-bold uppercase hover:text-white"
            onClick={() => uiStore.toggleMenu()}
          >
            Contact
          </a>
        </Link>
        <Link href="/faq">
          <a
            className="text-white text-base font-bold uppercase hover:text-white"
            onClick={() => uiStore.toggleMenu()}
          >
            FAQ
          </a>
        </Link>
        {loggedIn && (
          <div
            onClick={() => {
              uiStore.toggleMenu();
            }}
            className="text-white text-base font-bold uppercase hover:text-white cursor-pointer hover:underline"
          >
            GIVE 5
          </div>
        )}
        <Link href="/blog">
          <a
            className="text-white text-base font-bold uppercase hover:text-white"
            onClick={() => uiStore.toggleMenu()}
          >
            Blog
          </a>
        </Link>
        <Link href={'/myreservation/membership'}>
          <a
            className="text-white text-base font-bold uppercase hover:text-white"
            onClick={() => uiStore.toggleMenu()}
          >
            Membership
          </a>
        </Link>
        {!loggedIn ? (
          <Link href={'/login'}>
            <a
              className="bg-secondary text-base font-bold uppercase text-white py-2.5 px-12 text-center hover:text-white rounded-full uppercase"
              onClick={() => uiStore.toggleMenu()}
            >
              Sign In
            </a>
          </Link>
        ) : (
          <>
            <Divider
              type="horizontal"
              className="px-8 bg-white opacity-20"
              style={{
                width: '200px !important',
                minWidth: 'inherit !important',
              }}
            />
            <Button
              type="text"
              className="uppercase flex flex-row items-center text-white hover:text-white hover:bg-primary font-400 text-base"
            >
              <UserOutlined /> {user.member_first_name}
            </Button>
            <Link href={'/myreservation/account'}>
              <a
                className="text-white text-base font-bold uppercase hover:text-white"
                onClick={() => uiStore.toggleMenu()}
              >
                My Account
              </a>
            </Link>
            <Link href={'/myreservation'}>
              <a
                className="text-white text-base font-bold uppercase hover:text-white"
                onClick={() => uiStore.toggleMenu()}
              >
                My Reservations
              </a>
            </Link>
            <Link href="/logout">
              <a
                className="text-white text-base font-bold uppercase hover:text-white"
                onClick={() => uiStore.toggleMenu()}
              >
                Logout
              </a>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
