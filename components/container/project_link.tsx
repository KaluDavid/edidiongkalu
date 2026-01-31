"use client";
import { H_Tag } from "./smaller_container";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Project_Link = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/work/0" && (
        <div className="flex flex-col items-center justify-center py-16 border border-[#CCCCCC]">
          <H_Tag className="flex flex-col items-center text-4xl!">
            <p>
              View the website{" "}
              <Link
                href={"https://www.kobosmart.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cm-green underline underline-offset-6"
              >
                here
              </Link>
            </p>
          </H_Tag>
        </div>
      )}
    </>
  );
};

export default Project_Link;
