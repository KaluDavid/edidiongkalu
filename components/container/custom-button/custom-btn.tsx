import { Button } from "@/components/ui/button";
import clsx from "clsx";
import React, { ReactNode } from "react";

export const Custom_Btn = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <Button
      className={clsx(
        "border-3 3xl:border-5 border-black 3xl:rounded-3xl rounded-[19px] bg-cm-green 3xl:p-4 p-2 sm:p-3 h-fit cursor-pointer",
        className
      )}
    >
      <span className="bg-black px-6 py-3 3xl:py-4 rounded-xl text-white 3xl:text-2xl flex items-center text-base font-semibold justify-center gap-1 w-full sm:w-fit">
        {children}
      </span>
    </Button>
  );
};
