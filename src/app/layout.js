import { AppProvider } from "@/component/Context";
import "./globals.css";
import Navbar from "@/component/Navbar/Navbar";

export const metadata = {
  title: "Crawl App",
  description: "This is crawl app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
