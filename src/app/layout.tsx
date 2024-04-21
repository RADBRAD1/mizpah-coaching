import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";
import {DM_Sans} from 'next/font/google'

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
      <body className = "bg-red-500">{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
