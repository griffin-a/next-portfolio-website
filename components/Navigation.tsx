import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link href="/">
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
            }
          >
            Griffin
          </a>
        </Link>

        <span className="container px-4 mx-auto lg:max-w-4xl flex justify-end">
          <Link href="/">
            <a className="float-right px-4 hover:text-sky-500">About</a>
          </Link>
          <Link href="/projects">
            <a className="float-right px-4 hover:text-sky-500">Projects</a>
          </Link>
          <Link href="mailto:griffinalmquist@gmail.com">
            <a className="float-right px-4 hover:text-sky-500">Contact</a>
          </Link>
        </span>

        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navigation;
