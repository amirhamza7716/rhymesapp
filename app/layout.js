// import { Inter } from "next/font/google";
import "./globals.css";
import '../lib/fontawesome';

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book of Rhymes",
  description: "Book of Rhymes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
