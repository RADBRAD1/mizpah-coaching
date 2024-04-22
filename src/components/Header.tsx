import { createClient } from "@/prismicio";
import NavBar from "./NavBar";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings"); 

  return (
    <header> 
        <NavBar settings={settings} />
    </header>
  )
}

//define settings as a const in header and pass it down to the navbar section. 