import localFont from "next/font/local";
import "./globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const header = (
    <header className=" top-0 left-0 w-full z-10 bg-white">
      <nav className="flex justify-between p-10 align-items-center ">
        <div className="font-bold text-2xl">
          {" "}
          <span className="text-purple-800 relative before:content-['']  before:absolute before:top-0 before:left-0 before:w-1/2 before:h-1 before:bg-black  ">
            Ali{" "}
          </span>{" "}
          <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-1/2 after:h-1 after:bg-purple-800">
            Ammar
          </span>
        </div>
        <div className="text-lg hidden md:block">
          <button className="px-4">Experience</button>
          <button className="px-4">Contact</button>
        </div>
      </nav>
    </header>
  );

  const footer = (
    <footer className="w-full">
      <footer className="bg-black text-white flex justify-center align-items-center p-4">
        copyright © 2024 Ammar Shahzad
      </footer>
    </footer>
  );
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {header}
        <main className="flex-grow mt-20">{children}</main>
        {footer}
      </body>
    </html>
  );
}