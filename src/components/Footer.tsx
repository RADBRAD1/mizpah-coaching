//import WordMark from "@/components/WordMark";
import { createClient } from "@/prismicio"; //not prismic client import, handles fetching data, previes, etc. handles caching and has routes.  
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { YBlogo } from "./svgs";


export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <footer className = "flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 py-7 md:flex-row">
      <Link href ="/">
        <YBlogo/>
        <span className = "sr-only"> Your Brother Home Page</span>
        </Link>
        <nav aria-label = "Footer">
          <ul className = "flex-gap-6">
            {settings.data.navigation.map((item) => (
              <li key = {item.label}>
                <PrismicNextLink field = {item.link} className = "inline-flex min-h-11 items-center">
                  
                {item.label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
    </footer>
  )
}

// the span in wordmark is used if the visual doesnt display audio readers will still get a description
//prismicnextlink specifically used for links referenced to a prismic page, otherwise <Link> should be used. 
//aria-label attributes added to elements to give descriptors such as screen readers.
//