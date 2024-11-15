'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '@//assets/images/cityoforlando_horizontal_logo_official.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-blue-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between w-full">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              id="mobile-dropdown-button"
              data-testid="mobile-dropdown-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-blue-900 hover:bg-blue-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center md:items-center md:justify-between ml-6 md:ml-0">
            {/* <!-- Logo --> */}
            <Link className="flex items-center" href="/">
              <Image
                className="h-16 w-auto"
                src={logo}
                alt="OrlandoRecycling"
              />
            </Link>
            {/* <!-- Desktop Menu Hidden below md screens --> */}
            <div className="hidden md:block">
              <div className="flex space-x-2">
                <Link
                  href="/"
                  className={`${
                    pathname === '/' ? 'bg-black text-white' : 'text-blue-700'
                  } hover:bg-gray-300 hover:text-blue-900 rounded-md px-3 py-2`}
                >
                  Home
                </Link>
                <Link
                  href="/whatGoesWhere"
                  className={`${
                    pathname === '/whatGoesWhere' ? 'bg-black text-white' : 'text-blue-700'
                  } hover:bg-gray-300 hover:text-blue-900 rounded-md px-3 py-2`}
                >
                  What Goes Where
                </Link>
                <Link
                  href="/benefits"
                  className={`${
                    pathname === '/benefits' ? 'bg-black text-white' : 'text-blue-700'
                  } hover:bg-gray-300 hover:text-blue-900 rounded-md px-3 py-2`}
                >
                  Benefits
                </Link>
                <Link
                  href="/pickupSchedule"
                  className={`${
                    pathname === '/pickupSchedule' ? 'bg-black text-white' : 'text-blue-700'
                  } hover:bg-gray-300 hover:text-blue-900 rounded-md px-3 py-2`}
                >
                  Locations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isMobileMenuOpen && (
        <div aria-label='mobile-menu' className="block md:hidden" id="mobile-menu">
          <div className="flex flex-col space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/"
              data-testid="mobile-home-link"
              className={`${
                pathname === '/' ? 'bg-black text-white' : 'text-blue-700'
              } rounded-md px-3 py-2`}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              Home
            </Link>
            <Link
              href="/whatGoesWhere"
              className={`${
                pathname === '/whatGoesWhere' ? 'bg-black text-white' : 'text-blue-700'
              } rounded-md px-3 py-2`}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              What Goes Where
            </Link>
            <Link
              href="/benefits"
              className={`${
                pathname === '/benefits' ? 'bg-black text-white' : 'text-blue-700'
              } rounded-md px-3 py-2`}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              Benefits
            </Link>
            <Link
              href="/pickupSchedule"
              className={`${
                pathname === '/pickupSchedule' ? 'bg-black text-white' : 'text-blue-700'
              } rounded-md px-3 py-2`}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              Pick-Up Schedule
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
