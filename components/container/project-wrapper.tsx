"use client";

import { useEffect, useState } from "react";
import {
  H_Tag,
  P_Tag,
  Project_Box,
} from "@/components/container/smaller_container";
import { Project1 } from "@/components/container/work-container.tsx/project1";
import { Project2 } from "@/components/container/work-container.tsx/project2";
import { Project3 } from "@/components/container/work-container.tsx/project3";
import { Project4 } from "@/components/container/work-container.tsx/project4";
import { PasswordModal } from "./password-modal";

const PROTECTED_PROJECT_ID = "3";

export const ProjectWrapper = ({
  data,
  projectId,
}: {
  data: any;
  projectId: string;
}) => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // Check if this is the protected project
    if (projectId === PROTECTED_PROJECT_ID) {
      setIsUnlocked(false);
    } else {
      setIsUnlocked(true);
    }
  }, [projectId]);

  const handlePasswordSuccess = () => {
    setIsUnlocked(true);
  };

  // Show modal if project is protected and not unlocked
  if (projectId === PROTECTED_PROJECT_ID && !isUnlocked) {
    return <PasswordModal onSuccess={handlePasswordSuccess} />;
  }

  const renderProjectContent = () => {
    switch (data.id) {
      case "0":
        return <Project1 />;
      case "1":
        return <Project2 />;
      case "2":
        return <Project3 />;
      case "3":
        return <Project4 />;
      default:
        return <div>No layout defined.</div>;
    }
  };

  return (
    <section className="flex flex-col justify-center pb-10 sm:pb-20 pt-30 sm:pt-50 size-full overflow-x-hidden gap-16 sm:gap-16 px-5 sm:px-10 lg:px-[90] relative">
      <H_Tag className="sm:text-[67px]! text-[35px]! w-full">{data.head}</H_Tag>
      <div className="size-full flex flex-col gap-8 items-center">
        <img
          src={data.img}
          alt="project image"
          className="size-full rounded-2xl sm:rounded-4xl border-3"
          loading="lazy"
        />
        <div className="flex sm:flex-row flex-col w-full justify-between gap-8">
          <Project_Box
            type="Role"
            text={data.role}
            className="bg-cm-yellow text-text-color"
          />
          <Project_Box
            type="Timeline"
            text={data.timeline}
            className="bg-cm-green"
          />
          <Project_Box
            type="Industry"
            text={data.industry}
            className="bg-selections"
          />
        </div>
      </div>
      <P_Tag className="flex flex-col gap-8">
        {data.description?.map((res: string) => (
          <span key={res.length}>{res}</span>
        ))}
      </P_Tag>
      {renderProjectContent()}
    </section>
  );
};
