"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { transition } from "../style/style";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LinkedIN, Nav } from "./nav";

export const b_style =
  "flex items-center rounded-full 3xl:border-5  border-3 border-black";
export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  const handleMenu = (time: number) => {
    setTimeout(() => {
      setIsOpen((prev) => !prev);
    }, time);
  };
  return (
    // <motion.header
    //   key={pathname}
    //   initial={{ opacity: 0, y: -80 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 1 }}
    <header className="flex py-6 px-5 sm:gap-10 fixed top-0 z-90 sm:px-10 lg:px-[90] 3xl:py-16 bg-white/90 backdrop-blur-xs  items-center justify-between  w-full ">
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
            b_style,

            isOpen && "bg-black/25"
          )}
        >
          <Nav className="hidden sm:block" />
          <div
            className={clsx("sm:hidden ", isOpen && transition)}
            onClick={() => handleMenu(200)}
          >
            {isOpen ? "CLOSE" : "MENU"}
          </div>
        </nav>
      </div>
      <LinkedIN className="hidden sm:block" />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{
              opacity: { duration: 0.4 },
              x: { type: "tween", stiffness: 60, damping: 12 },
            }}
            className="flex flex-col items-center fixed top-28  shadow-2xl rounded-4xl py-8 px-4 bg-background  z-90  gap-12 w-[210px] right-3 "
          >
            <Nav close={() => handleMenu(300)} className="sm:hidden" />
            <LinkedIN className="sm:hidden" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    // {/* </motion.header> */}
  );
};
