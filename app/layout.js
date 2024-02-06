import React from "react";
import Header from "./components/Header";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
