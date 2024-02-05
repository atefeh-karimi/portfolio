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
    description:
      "As the sole front-end developer for the International Student Portal, I orchestrated the development of multi-panels catering to students, university staff, and agency members. Using React.js and Tailwind CSS,Headlessui, I ensured an intuitive and fully responsive user interface that seamlessly switched between two languages. My focus also extended to optimizing user interactions on public pages, like the dynamic search interface, to provide a seamless and user-friendly experience for individuals worldwide exploring educational opportunities.",
    name: "Danaboom",
    githubUrl: "",
    webUrl: "https://danaboom.com/",
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
    description:
      "As the primary front-end developer for our immigration connection platform, I utilized Next.js and integrated the Ant Design framework to create a user-friendly interface. The project connects individuals planning immigration with experienced influencers and immigration companies. Using multi-panels tailored for influencers, companies, and customers, the platform incorporates a powerful calendar system (Big Calendar) for scheduling sessions and booking consultations. This dynamic environment facilitates seamless interactions, allowing influencers and immigration companies to offer valuable guidance to individuals embarking on their immigration journey.",
    name: "Baki",
    githubUrl: "",
    webUrl: "https://ba-ki.com/",
  },
  {
    id: 3,
    image: "store",
    description:
      "As the sole developer for my personal store project, I employed Next.js and integrated Tailwind CSS to craft a sleek and responsive user interface. The store features essential components like a cart, a searchable product list, and a user-friendly login page. With a focus on user experience, the project seamlessly combines Next.js functionalities with Tailwind CSS styling, creating an intuitive environment for customers to browse, search, and manage their purchases effortlessly.",
    name: "Store",
    githubUrl: "https://github.com/atefeh-karimi/store-nextjs",
    webUrl: "https://store-nextjs.atefehkarimikia.ir/",
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
          className="grid grid-cols-1 mt-6 gap-x-8 gap-y-16 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.li
              key={project.id}
              className="relative w-full h-full border rounded-lg shadow-lg group"
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
              <div className="flex flex-col justify-between px-4 py-4 text-base font-medium text-gray-900 border h-[500px]">
                <div>
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="mt-1 leading-relaxed text-justify text-gray-500 text-md">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 pb-3">
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
