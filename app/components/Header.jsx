"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const navigation = [
  { name: "home", href: "/" },
  { name: "skills", href: "/skills" },
  { name: "projects", href: "/projects" },
  { name: "about", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const langs = {
    en: { name: "en" },
    fa: { name: "fa" },
  };

  return (
    <header className="w-full pr-3 bg-transparent lg:pr-0">
      <div className="flex items-center justify-center gap-5 pt-5">
        {Object.keys(langs).map((lang) => (
          <button
            type="submit"
            key={lang}
            onClick={() => i18n.changeLanguage(lang)}
            disabled={i18n.resolvedLanguage === lang}
            className="disabled:text-gray-400"
          >
            {t(langs[lang].name)}
          </button>
        ))}
      </div>
      <nav
        className="flex items-center justify-between w-full mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">My LOGO</span>
            <Image alt="AT-logo" src={Logo} height={100} width={100} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-7 h-7" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={` ${pathname === item.href ? "active  " : "link"}
              text-base font-semibold leading-6 text-gray-900 cursor-pointer`}
            >
              {t(item.name)}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 bg-red-500" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">My logo</span>
              <Image alt="AT-logo" src={Logo} height={80} width={80} />
            </Link>
            <button
              type="button"
              className="-m-1.5 rounded-md p-1.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 ">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg cursor-pointer hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
