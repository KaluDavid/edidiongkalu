import clsx from "clsx";
import React, { ReactNode } from "react";
import { LiaArrowRightSolid } from "react-icons/lia";
import Link from "next/link";
import { RiMessage2Fill } from "react-icons/ri";
import Image from "next/image";
import { PiLinkedinLogoLight, PiDribbbleLogo } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { projects_card } from "../data/projects_card";

// HEAD TAGS

export const H_Tag = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "font-bold 3xl:text-[114px] leading-[130%] text-[54px] sm:text-7xl sm:max-3xl:leading-20 font-clashGrotesk",
        className
      )}
    >
      {children}
    </div>
  );
};

export const LG = () => {
  return (
    <H_Tag className="hidden sm:block w-full ">
      I help <span className="text-selections">product owners</span>{" "}
      <br className="xl:block hidden" />
      find new ways to grow <br className="lg:block hidden" /> and scale.
    </H_Tag>
  );
};
export const SMALL = () => {
  return (
    <H_Tag className=" sm:hidden text-[52px]!">
      <span className="whitespace-nowrap">
        I help <span className="text-selections">product </span>
      </span>{" "}
      <span className="text-selections"> owners</span> find new ways to grow{" "}
      <br className="sm:block hidden" /> and <br className="sm:hidden " />{" "}
      scale.
    </H_Tag>
  );
};

export const P_Tag = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={clsx(
        "2xl:font-semibold font-medium text-xl sm:text-[22px] 3xl:text-3xl ",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Project_Card = ({
  text,
  bg,
  link,
}: {
  text: string;
  bg: string;
  link: string;
}) => {
  return (
    <fieldset
      className={clsx(
        "3xl:border-4 border-3 w-full rounded-2xl sm:rounded-4xl  pb-2  sm:pb-4 border-black flex flex-col justify-between sm:justify-end items-end bg-cover xl:h-fit bg-[#e6e6e6] bg-top  bg-no-repeat max-sm:h-[480px] 3xl:h-[900]"
      )}
    >
      <img
        src={bg}
        width={1520}
        height={1036}
        alt="mic"
        className="relative bg-clip-border   object-cover  rounded-2xl sm:rounded-4xl max-sm:h-[400px]"
        loading="lazy"
      />
      <div className="w-full px-2 sm:px-4  -mt-30 z-10 m-auto">
        <div className="3xl:border-4 border-3 border-black rounded-2xl sm:rounded-4xl bg-[#FEFEFE] sm:p-12 p-[13px] flex flex-col gap-6.5 sm:gap-22  w-full *:first:max-3xl:text-2xl ">
          <P_Tag className="max-sm:leading-[150%] max-sm:font-medium max-sm:text-lg!">
            {text}
          </P_Tag>
          <Link
            href={link}
            className="flex gap-2 items-center text-sm sm:text-xl 3xl:text-2xl font-bold font-clashGrotesk"
          >
            <span> View Case Study</span>
            <LiaArrowRightSolid
              className="font-black! text-2xl sm:text-3xl"
              fontWeight={900}
            />
          </Link>
        </div>
      </div>
    </fieldset>
  );
};

export const Footer_1 = () => {
  return (
    <div className="lg:px-[90] px-5 py-16 sm:px-10 lg:py-20 3xl:py-[128] relative flex flex-col sm:gap-28 gap-24 3xl:gap-[180]  items-center justify-center w-full">
      {/* <hr className={clsx("w-full border 3xl:border-2")} /> */}
      <span />{" "}
      <fieldset className="absolute lg:max-xl:left-0 xl:mr-[55rem] bottom-0 lg:flex hidden  justify-center items-center ">
        <img
          loading="lazy"
          src={"/tho.svg"}
          width={342}
          height={308}
          alt="thoughts"
          className="relative 3xl:size-90 size-70 "
        />
        <div className="absolute -rotate-15 flex justify-center gap-1 items-center ">
          <span className="3xl:p-2 p-1.5 bg-text-color rounded-full " />
          <span className="3xl:text-2xl text-xl font-medium 3xl:font-semibold ">
            Career Path
          </span>
        </div>
      </fieldset>
      <div className="items-center justify-center flex gap-1 sm:gap-4 flex-col relative">
        <span className="rounded-full text-white bg-cm-green -rotate-14 size-11.5 sm:size-16 3xl:size-24 flex items-center justify-center 3xl:border-5 border-3 border-black absolute sm:-top-25 -top-7 3xl:-top-30 sm:mt-10 -ml-53 sm:-ml-30 3xl:-ml-50">
          <RiMessage2Fill className="3xl:text-[52px] text-2xl sm:text-3xl" />
        </span>
        <H_Tag className="3xl:text-[178px]! sm:text-[100px] tracking-[-1%] whitespace-nowrap">
          Let&rsquo;s Discuss
        </H_Tag>

        <P_Tag className="font-bold! text-2xl! sm:text-3xl! 3xl:text-[37px]!">
          edidiongkalu@gmail.com
        </P_Tag>
        <span className="3xl:py-4 3xl:px-8  sm:py-2.5 py-2 px-4 sm:px-4.5 3xl:border-5 border-3 border-black mb-5 -rotate-9 bg-cm-yellow text-black flex items-center gap-2 absolute 3xl:right-0 max-sm:-left-10 sm:-right-10 3xl:-top-10 sm:-top-11 max-sm:-bottom-21">
          <span className="rounded-full 3xl:p-2 p-1.5 bg-black " />
          <p className="3xl:text-2xl text-lg sm:text-xl font-medium 3xl:font-semibold">
            Project Idea
          </p>
        </span>

        <span className="3xl:py-4 3xl:px-8  sm:py-2.5 py-2 px-4 rounded-full 3xl:border-5 border-3 border-black rotate-7 bg-selections text-white flex items-center gap-2 absolute 3xl:right-20 -right-10 sm:-right-20 3xl:bottom-0 -bottom-40 sm:-bottom-2">
          <span className="rounded-full 3xl:p-2 p-1.5 bg-white " />
          <p className="3xl:text-2xl text-lg sm:text-xl font-medium 3xl:font-semibold">
            Project Direction
          </p>
        </span>

        <img
          loading="lazy"
          src="/star_blue.svg"
          alt="blue star"
          width={105}
          height={105}
          className="absolute bottom-0 -mb-20 sm:-mb-10 sm:left-10 size-10.5 sm:size-20 3xl:size-auto 3xl:left-55"
        />
      </div>
    </div>
  );
};

export const Footer_2 = () => {
  return (
    <div className="sm:px-10 lg:px-[90] px-6 relative flex flex-col py-16 lg:py-32  items-center justify-center w-full bg-[#111111] sm:rounded-t-4xl rounded-t-2xl  gap-16 text-xl 3xl:text-[30px] text-[#FFFAEB] font-medium 3xl:font-semibold">
      <div className="flex sm:items-center items-start sm:md:gap-20 justify-between w-full">
        <div className="flex sm:flex-row flex-col sm:items-center flex-wrap gap-4">
          <p>Hello!</p>
          <img
            src={"/starr.svg"}
            alt={"star"}
            width={20}
            height={20}
            loading="lazy"
          />
          <Link href={"/about"}>About Me</Link>
          <img
            src={"/starr.svg"}
            alt={"star"}
            width={20}
            height={20}
            loading="lazy"
          />
          <Link href={"/Edidiong Kalu CV.pdf"} download>
            Resume
          </Link>
        </div>{" "}
        <div className="flex sm:items-center gap-4 sm:flex-row flex-col flex-wrap ">
          <Link href={"/work/0"}>Project 1</Link>
          <img
            src={"/starr.svg"}
            alt={"star"}
            width={20}
            height={20}
            loading="lazy"
          />
          <Link href={"/work/1"}>Project 2</Link>
          <img
            src={"/starr.svg"}
            alt={"star"}
            width={20}
            height={20}
            loading="lazy"
          />
          <Link href={"/work/2"}>Project 3</Link>{" "}
          <img
            src={"/starr.svg"}
            alt={"star"}
            width={20}
            height={20}
            loading="lazy"
          />
          <Link href={"/work/3"}>Project 4</Link>
        </div>
      </div>

      <hr className={clsx("w-full border 3xl:border-2 text-[#5E5E5E]")} />
      <div className="flex max-sm:flex-col-reverse  max-sm:gap-8 sm:items-center justify-between w-full">
        <p>© {new Date().getFullYear()}. All rights reserved. Edidiong Kalu.</p>
        <div className="flex items-center gap-4  text-2xl 3xl:text-5xl">
          <Link
            href={"https://www.linkedin.com/in/edidiongkalu/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <PiLinkedinLogoLight />
          </Link>{" "}
          <PiDribbbleLogo /> <FaXTwitter />
        </div>
      </div>
    </div>
  );
};

export const Quote = () => {
  return (
    <span className=" tracking-tight text-9xl font-clashGrotesk size-fit ">
      “
    </span>
  );
};

export const Card = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={clsx(
        "sm:rounded-4xl rounded-2xl sm:border-5 border-3 border-black sm:gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CD = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "sm:border-5 absolute border-3 border-black flex items-center gap-2 w-fit pr-10 xl:pr-5 3xl:pr-10 rounded-2xl p-4 bg-cm-green",
        className
      )}
    >
      <img
        src={"/star.png"}
        alt="quote"
        width={25}
        height={25}
        className="rotate-3 object-contain size-5 3xl:size-[25px]"
        loading="lazy"
      />
      <H_Tag className="text-[25px]! 1xl:text-[26px]! 3xl:text-[37px]! leading-[130%]! 3xl:leading-[140%]! text-white">
        {" "}
        {children}
      </H_Tag>
    </div>
  );
};

export const Project_List = () => {
  return (
    <div className="flex flex-col size-full  gap-8">
      {projects_card?.map((res) => (
        <Project_Card
          key={res.id}
          text={res.text}
          bg={res.bg}
          link={`/work/${res.id}`}
        />
      ))}
    </div>
  );
};
import { RiAsterisk } from "react-icons/ri";

export const Project_Box = ({
  type,
  text,
  className,
}: {
  type: string;
  text: string;
  className: string;
}) => {
  return (
    <div
      className={clsx(
        "rounded-2xl sm:rounded-4xl p-8  3xl:p-12 flex flex-col gap-4  [&_h4]:flex [&_h4]:gap-1 [&_h4]:font-bold [&_h4]:font-clashGrotesk [&_h4]:text-3xl 3xl:[&_h4]:text-4xl text-background border-black w-full border-3!",
        className
      )}
    >
      <h4>
        <RiAsterisk /> {type}
      </h4>
      <P_Tag className="text-[20px]!">{text}</P_Tag>
    </div>
  );
};

export const Project_Tag = ({
  head_text,
  children,
}: {
  head_text: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col  gap-3 sm:gap-4 font-semibold text-lg">
      <H_Tag className="3xl:text-6xl! sm:leading-[120%]! sm:text-[45px]! text-[35px]! w-full">
        {head_text}
      </H_Tag>
      <P_Tag className="leading-[150%] flex flex-col gap-8">{children}</P_Tag>
    </div>
  );
};

export const User_Story = ({ text }: { text: string }) => {
  return (
    <div
      className={clsx(
        "rounded-[23px] sm:rounded-[34px]  flex flex-col items-start  border-black w-full border-3!"
      )}
    >
      <p className="text-text-color py-2.5 rounded-t-2xl sm:rounded-t-4xl px-6 bg-cm-yellow w-full flex gap-1 font-bold font-clashGrotesk text-3xl 3xl:text-4xl">
        User Story
      </p>
      <P_Tag className="text-[20px]! size-full rounded-b-2xl sm:rounded-b-4xl bg-cm-green text-white px-6 py-2.5 ">
        {text}
      </P_Tag>
    </div>
  );
};

const findings = [
  {
    head: "Financial Challenges",
    text: "97% of students face difficulties managing limited income, covering school fees, and handling daily expenses.",
    num: "01",
  },
  {
    head: "Saving Habits",
    text: "70% of students struggle with consistent saving due to impulse spending, peer pressure, and lack of budgeting strategies.",
    num: "02",
  },
  {
    head: "Long-Term Planning",
    text: "Most students recognize the importance of saving for the future but lack tools to enforce discipline and structure.",
    num: "03",
  },
  {
    head: "Debt Management",
    text: "75% of students often rely on loans or borrow money to meet urgent needs, leading to stress about repayments.",
    num: "04",
  },
  {
    head: "Desired Features",
    text: "60% said a feature where they can save in groups would be appreciated, as it would help them save more consistently",
    num: "05",
  },
];
export const Findings_Box = () => {
  return (
    <div
      className={clsx(
        "grid lg:grid-cols-4 xl:grid-cols-5 sm:grid-cols-4  w-full gap-5 font-karl pt-5"
      )}
    >
      {findings?.map((res) => (
        <div
          key={res.num}
          className="flex p-4  text-background flex-col gap-3 bg-[#5E5E5E] rounded-2xl"
        >
          <p className="text-base font-medium">{res.head}</p>
          <p className="text-sm">{res.text}</p>
          <p className="text-3xl tracking-wide sm:tracking-wider text-cm-yellow font-semibold">
            {res.num}
          </p>
        </div>
      ))}
    </div>
  );
};
