import React from "react";
import AboutImage from "@/public/assets/about/about.jpeg";
import GmailIcon from "@/public/assets/about/gmail.png";
import LinkdinIcon from "@/public/assets/about/linkdin.png";
import GitHubIcon from "@/public/assets/skills/github.png";
import Image from "next/image";

export default function About() {
  return (
    <div className="mx-auto max-w-7xl lg:px-8 scroll-smooth">
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
      <div className="absolute px-4 pt-8 mx-auto">
        <div className="justify-between w-full gap-9 items-cente lg:flex">
          <div className="h-full rounded-lg lg:w-1/3">
            <Image
              alt="about-me-image"
              src={AboutImage}
              width="0"
              height="0"
              sizes="100wh"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="h-full py-3 pt-10 text-justify lg:w-2/3">
            <h1 className="mb-3 font-bold">About Me</h1>
            <p className="inline-block lg:w-2/3">
              I'm a passionate front-end developer with over a year of hands-on
              experience, specializing in React.js and Next.js. Armed with a
              solid educational foundation in information technology
              engineering, I am driven by a relentless pursuit of knowledge and
              innovation. As a self-learner, I thrive in dynamic environments,
              continuously expanding my skill set to tackle new challenges and
              deliver exceptional user experiences.
            </p>

            <div className="flex items-center gap-3 mt-4">
              <a
                target="_blank"
                rel="noopener noreferre"
                href="https://www.linkedin.com/in/atefeh-karimi-kia/"
              >
                <Image src={LinkdinIcon} alt="linkdin" className="w-7 h-7" />
              </a>

              <a
                href="mailto:atefeh.karimi.kia@gmail.com"
                className="cursor-pointer"
              >
                <Image src={GmailIcon} alt="gmail" className="h-8 w-7 " />
              </a>
              <a
                target="_blank"
                rel="noopener noreferre"
                href="https://github.com/atefeh-karimi"
                className="cursor-pointer"
              >
                <Image src={GitHubIcon} alt="gmail" className="h-8 w-7 " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
