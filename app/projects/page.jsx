"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import GitHubIcon from "@/public/assets/skills/github.png";
import Link from "next/link";
import { projects } from "@/public/assets/data";
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
    <div className="mx-auto max-w-7xl lg:px-8">
      <div className="relative pt-8 bg-white isolate ">
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
      <div className="mb-20 2xl:mt-44">
        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          role="list"
          className="grid grid-cols-1 px-4 mt-6 0lg:px- gap-x-8 gap-y-16 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.li
              key={project.id}
              className="relative w-full h-full border rounded-lg shadow-lg group"
              variants={item}
            >
              {/* image */}
              <div className="w-full shadow-sm h-60 ">
                <Image
                  src={`/assets/projects/${project.image}.png`}
                  alt=""
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="object-center w-full h-full rounded-t-lg "
                />
              </div>
              {/* description */}
              <div className="flex flex-col px-4 py-4 text-base font-medium text-gray-900 border ">
                <div>
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="mt-1 leading-relaxed text-justify text-gray-500 h-60 text-md">
                    {project.description}
                  </p>
                </div>
                {/* social */}
                <div className="flex items-center gap-3 mt-8">
                  {project?.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        src={GitHubIcon}
                        width="0"
                        height="0"
                        alt="github-icon"
                        className="w-6 h-6"
                      />
                    </Link>
                  )}
                  {project?.webUrl && (
                    <Link
                      href={project.webUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <GlobeAltIcon className="w-7 h-7" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
