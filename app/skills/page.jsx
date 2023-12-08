"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  "javascript",
  "react",
  "nextjs",
  "nodejs",
  "html",
  "css",
  "sass",
  "mui",
  "bootstrap",
  "tailwind",
  "git",
  "github1",
  "linux",
  "vscode",
  "figma",
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export default function Skills() {
  return (
    <div className="p-6 mx-auto max-w-7xl lg:px-8 scroll-smooth">
      <div className="relative pt-16 bg-white isolate">
        <div
          className="absolute inset-x-0 top-0 flex pt-32 overflow-hidden opacity-25 -z-10 transform-gpu blur-3xl sm:pt-40 xl:justify-end"
          aria-hidden="true"
        >
          <div
            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      <div className="">
        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          role="list"
          className="container grid grid-cols-2 place-content-center gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-8 xl:gap-x-8"
        >
          {skills.map((file, Idx) => (
            <motion.li key={file + Idx} className="item" variants={item}>
              <div className="block w-full h-full overflow-hidden bg-transparent rounded-lg ">
                <Image
                  src={`/assets/skills/${file}.png`}
                  alt=""
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="object-contain w-full h-full py-1 pointer-events-none "
                />
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
