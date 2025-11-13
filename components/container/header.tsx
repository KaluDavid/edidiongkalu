"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { transition } from "../style/style";

const nav = [
  { name: "HOME", link: "/" },
  { name: "ABOUT", link: "/about" },
  { name: "WORK", link: "/work" },
];
export const Header = () => {
  const b_style =
    "flex items-center rounded-full 3xl:border-5  border-3 border-black";
  const pathname = usePathname();

  const isActiveRoute = (link: string) => {
    return (
      pathname === link || (pathname.startsWith("/work") && link === "/work")
    );
  };
  return (
    <header className="flex py-8 px-5 sm:gap-10 sm:px-10 lg:px-[90] 3xl:py-16 bg-background items-center justify-between  w-full ">
      <div className="flex lg:gap-4 sm:gap-10  justify-between w-full sm:w-fit">
        <Link
          href={"/"}
          className={clsx(
            "3xl:w-[308] px-8 lg:w-[215] justify-center py-2 sm:py-4 3xl:py-6  object-contain",
            b_style
          )}
        >
          <Image
            src={"/Logo.svg"}
            alt="Logo"
            height={48}
            width={94}
            priority
            className="3xl:size-auto"
          />
        </Link>
        <nav
          className={clsx(
            "sm:px-12 px-8 3xl:px-18 py-2 sm:py-4 gap-16 font-bold sm:font-semibold text-xl 3xl:text-[30px]",
            b_style
          )}
        >
          {nav?.map((nav, index) => {
            return (
              <Link
                key={index}
                href={nav.link}
                className={clsx(
                  "hidden sm:block",
                  transition,
                  isActiveRoute(nav.link) && "text-[#5E5E5E] line-through "
                )}
              >
                {nav.name}
              </Link>
            );
          })}
          <Link href={"/about"} className="sm:hidden">
            MENU
          </Link>
        </nav>
      </div>
      <span
        className={clsx(
          "p-4 3xl:p-5 3xl:text-5xl hidden sm:block  justify-center text-3xl",
          b_style
        )}
      >
        <PiLinkedinLogoLight />
      </span>
    </header>
  );
};
