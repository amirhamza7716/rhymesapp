// import { Inter } from "next/font/google";
import "./globals.css";
import '../lib/fontawesome';
import FavIcon  from '../public/images/favicon.ico';

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book of Rhymes",
  description: "Book of Rhymes",
  icons:{
    icon:["/images/favicon.ico"],
    apple:["/images/favicon.ico"],
    shortcut:["/images/favicon.ico"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
