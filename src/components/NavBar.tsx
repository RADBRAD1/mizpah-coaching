"use client";

//navbar renders on the client side so we have the above statement.
//the fetch statement in the  header happens server side. 
import { Content } from '@prismicio/client';
// import WordMark from './WordMark';
import Link from 'next/link';
import { PrismicNextLink } from '@prismicio/next';
import ButtonLink from './ButtonLink';
import { YBlogo } from './svgs';

type NavBarProps = {
  settings: Content.SettingsDocument
}

export default function NavBar({settings}: NavBarProps) {
  return (
    <div className = "mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center"> 
        <Link href ="/">
        <YBlogo />
        <span> Your Brother Home Page</span>
        </Link>
        <nav className = "px-4 py-4 md:px-6 md- :py-6" aria-label = "Main">
          <ul className = "flex-gap-6">
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