import { AppProvider } from "@/component/Context";
import "./globals.css";
import Navbar from "@/component/Navbar/Navbar";

export const metadata = {
  title: "Crawl App",
  description: "This is crawl app",
};

import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  display: 'swap',          // avoids FOIT
  variable: '--font-sans',  // <— gives you a CSS variable!
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.variable}>
      <body
        className="dark:bg-gray-900 dark:text-white"
      >
        <AppProvider>
          <Navbar />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
