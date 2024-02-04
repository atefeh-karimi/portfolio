"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import GitHubIcon from "@/public/assets/projects/github.svg";
import Link from "next/link";
const projects = [
  {
    id: 1,
    image: "danaboom-desk-en",
    description: "description1",
    name: "Danaboom",
    githubUrl: "",
    webUrl: "",
  },
  {
    id: 2,
    image: "iconnect-desk",
    description: "description2",
    name: "Iconnect",
    githubUrl: "",
    webUrl: "",
  },
  {
    id: 2,
    image: "baki-desk",
    description: "description2",
    name: "Baki",
    githubUrl: "",
    webUrl: "",
  },
  {
    id: 3,
    image: "store",
    description: "description2",
    name: "Store",
    githubUrl: "",
    webUrl: "",
  },
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
export default function Projects() {
  return (
    <div className="p-6 mx-auto max-w-7xl lg:px-8">
      <div className="relative pt-16 bg-white isolate ">
        <div
          className="absolute inset-x-0 top-0 flex pt-10 overflow-hidden opacity-25 -z-10 transform-gpu blur-3xl sm:pt-40 xl:justify-end"
          aria-hidden="true"
        >
          <div
            className="ml-[-20rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[45deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <div className="2xl:mt-44">
        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          role="list"
          className="grid grid-cols-1 mt-6 bg-white gap-x-8 gap-y-16 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.li
              key={project.id}
              className="relative w-full h-full bg-white border rounded-lg shadow-lg group"
              variants={item}
            >
              <div className="w-full overflow-hidden shadow-sm h-60 ">
                <Image
                  src={`/assets/projects/${project.image}.png`}
                  alt=""
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="object-center w-full h-full rounded-t-lg "
                />
              </div>
              <div className="flex flex-col px-2 py-4 text-base font-medium text-gray-900 bg-white border">
                <h3>{project.name}</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <Link href="">
                    <GlobeAltIcon className="w-7 h-7" />
                  </Link>
                  <Link href="">
                    <Image
                      src={GitHubIcon}
                      width="0"
                      height="0"
                      alt="github-icon"
                      className="w-6 h-6"
                    />
                  </Link>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
