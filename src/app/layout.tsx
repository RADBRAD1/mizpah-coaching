import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";
import {DM_Sans} from 'next/font/google'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})
 



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // brackets {} in classnames are used to specify class inheritance.
  return (
    <html lang="en" className = {dm_sans.variable}>
      <body className = "bg-[#070815] text-white">
        <Header />
        <main> 
          {children}
        </main>
        <Footer />
        </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
