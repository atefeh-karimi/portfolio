"use client";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";
export default function Hero() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto mt-16 lg:mt-44">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 lg:col-span-7 lg:px-0 xl:col-span-6">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              {t("hello")}
            </h1>
            <p className="mt-6 mb-2 text-lg leading-8 text-gray-600">
              {t("frontEndDeveloper")}
            </p>
            <TypeAnimation
              sequence={[
                "As a dedicated front-end enthusiast, I specialize in creating responsive, visually stunning interfaces. My love for UX extends beyond aesthetics — I believe in designing experiences that delight users and enhance usability.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
