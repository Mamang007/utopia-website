'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {logo, hamburger, close} from '@/assets/images';

const LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Whitepaper',
    href: '/whitepaper',
  },
  {
    label: 'Token Sale',
    href: '/token-sale',
  },
  {
    label: 'Project',
    href: '/project',
  },
  {
    label: 'Contact Us',
    href: '/contact-us',
  },
];

export default function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="pt-5 sm:pt-12 z-10">
      <nav className="flex items-center justify-between relative">
        <Link href="/">
          <Image src={logo} alt="logo" width={140.51} height={50.87} />
        </Link>

        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="w-6 h-6">
            <Image
              src={isMobileMenuOpen ? close : hamburger}
              alt="menu"
              width={24}
              height={24}
            />
          </button>
        </div>

        <ul
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } absolute bg-linear-gradient6 text-white top-20 py-6 px-4 flex items-start gap-6 font-medium flex-col w-screen -ml-[50vw] left-1/2`}
        >
          {LINKS.map(({label, href}) => (
            <li key={label}>
              <Link
                className={`px-1 pb-3 ${
                  isActive(href)
                    ? 'relative after:absolute after:content-[""] after:bg-white after:w-full after:h-[2px] after:left-0 after:-bottom-0 after:rounded-full'
                    : ''
                }`}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="hidden lg:flex text-lg xl:text-xl font-medium flex-col lg:flex-row lg:items-center gap-10 xl:gap-16 mt-4 lg:mt-0">
          {LINKS.map(({label, href}) => (
            <li key={label}>
              <Link
                className={`px-1 pb-3 ${
                  isActive(href)
                    ? 'relative after:absolute after:content-[""] after:bg-white after:w-full after:h-[2px] after:left-0 after:-bottom-0 after:rounded-full'
                    : ''
                }`}
                href={href}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
