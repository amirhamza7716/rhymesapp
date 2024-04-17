// import { Inter } from "next/font/google";
import "./globals.css";
import '../lib/fontawesome';

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BOR WEB",
  description: "BOR WEB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
