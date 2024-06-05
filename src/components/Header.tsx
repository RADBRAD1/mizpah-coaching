import { createClient } from "@/prismicio";
import NavBar from "./NavBar";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings"); 

  return (
    <header> 
      <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-KCLY47Q7F0`}/>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KCLY47Q7F0', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <NavBar settings={settings} />

    </header>
  )
}

//define settings as a const in header and pass it down to the navbar section. 