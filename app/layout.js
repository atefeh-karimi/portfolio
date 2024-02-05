import React, { Suspense } from "react";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
import Loading from "./Loading";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
        <Suspense fallback={<Loading />}>
          <div>
            <Header />
            {children}
          </div>
        </Suspense>
      </body>
    </html>
  );
}
