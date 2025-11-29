import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { transition } from "../style/style";
import clsx from "clsx";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { b_style } from "./header";
const nav = [
  { name: "HOME", link: "/" },
  { name: "ABOUT", link: "/about" },
  { name: "WORK", link: "/work" },
];
export const Nav = ({
  className,
  close,
}: {
  className: string;
  close?: () => void;
}) => {
  const pathname = usePathname();

  const isActiveRoute = (link: string) => {
    return (
      pathname === link || (pathname.startsWith("/work") && link === "/work")
    );
  };

  return (
    <>
      {nav?.map((nav, index) => {
        return (
          <Link
            key={index}
            onClick={close}
            href={nav.link}
            className={clsx(
              className,
              transition,
              isActiveRoute(nav.link) && "text-[#5E5E5E] line-through "
            )}
          >
            {nav.name}
          </Link>
        );
      })}
    </>
  );
};

export const LinkedIN = ({ className }: { className: string }) => {
  return (
    <Link
      href={"mailto:edidiongkalu@gmail.com"}
      rel="noopener noreferrer"
      target="_blank"
      className={clsx(
        "sm:p-3 max-sm:py-2 max-sm:px-4 3xl:p-5 3xl:text-5xl items-center  justify-center text-3xl w-full sm:w-fit max-sm:rounded-2xl flex max-sm:gap-3",
        className,
        b_style
      )}
    >
      <img
        src="/sms.svg"
        alt="mail"
        loading="lazy"
        className="size-8 object-contain"
      />
      <span className="sm:hidden font-bold text-xl! pt-0.5">EMAIL</span>
    </Link>
  );
};
