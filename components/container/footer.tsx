"use client";
import React from "react";
import { Footer_1, Footer_2 } from "./smaller_container";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  console.log(pathname);

  // const = excludeRoute = ""
  return (
    <section className="size-full flex  flex-col sm:gap-[88] gap-40 items-center justify-center overflow-x-hidden">
      {pathname !== "/about" && <Footer_1 />}
      <Footer_2 />
    </section>
  );
};

export default Footer;
