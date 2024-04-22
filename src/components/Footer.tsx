import WordMark from "@/components/WordMark";
import { createClient } from "@/prismicio"; //not prismic client import, handles fetching data, previes, etc. handles caching and has routes.  
import { PrismicNextLink } from "@prismicio/next";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <footer>
        <WordMark />
        <nav>
          <ul>
            {settings.data.navigation.map((item) => (
              <li key = {item.label}>
                <PrismicNextLink field = {item.link}>
                {item.label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
    </footer>
  )
}

