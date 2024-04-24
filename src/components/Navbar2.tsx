"use client";


/*

//navbar renders on the client side so we have the above statement.
//the fetch statement in the  header happens server side. 
import { Content } from '@prismicio/client';
// import WordMark from './WordMark';
import Link from 'next/link';
import { PrismicNextLink } from '@prismicio/next';
import ButtonLink from './ButtonLink';
import { YBlogo } from './svgs';
import {MdMenu, MdClose} from "react-icons/md";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type NavBarProps = {
  settings: Content.SettingsDocument
}

export default function NavBar({settings}: NavBarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  
  return (
    <div className = "mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center"> 
        <div className="flex items-center justify-between"> 
        <Link href ="/">
        <YBlogo />
        <span className = "sr-only"> Your Brother Home Page</span>
        </Link>
        <button type="button"
            className="block p-2 text-3xl text-white md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(true)}>
        <MdMenu />
        <span className="sr-only">Open menu</span>
        </button>
        </div> 
         { Mobile Nav }
         <div
          className={clsx(
            "ga-4 fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col items-end bg-[#070815] pr-4 pt-14 transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]",
          )}
        >
          <button
            type="button"
            className="fixed right-4 top-4 mb-4 block p-2 text-3xl text-white md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(false)}
          >
            <MdClose />
            <span className="sr-only">Close menu</span>
          </button>

        <nav className = "px-4 py-4 md:px-6 md- :py-6" aria-label = "Main">
          <ul className = "flex-gap-6">
          <div className="grid justify-items-end gap-8">
            {settings.data.navigation.map((item) => {

          if (item.cta_button) {
            return (
              <ButtonLink key={item.label} field = {item.link}>
                {item.label}
               </ButtonLink>
                    );
                  }
              
              <li key = {item.label}>
                <PrismicNextLink field = {item.link} className = "inline-flex min-h-11 items-center">
                  
                {item.label}
                </PrismicNextLink>
              </li>
          })}
          </ul>
        </nav>
    </div>
  )
}

//the function navbar parameters settings destructures navbarprops. 

*/