import Project_Link from "@/components/container/project_link";
import {
  H_Tag,
  P_Tag,
  Project_Box,
} from "@/components/container/smaller_container";
import { Project1 } from "@/components/container/work-container.tsx/project1";
import { Project2 } from "@/components/container/work-container.tsx/project2";
import { Project3 } from "@/components/container/work-container.tsx/project3";
import { Project4 } from "@/components/container/work-container.tsx/project4";
import { projects_card } from "@/components/data/projects_card";

const Project = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const data = projects_card.find((res) => res.id === id);

  // Guard: handle missing project
  if (!data) {
    return (
      <>
        <section className="flex flex-col justify-center pb-10 sm:pb-20 pt-30 sm:pt-50 size-full overflow-x-hidden gap-1 px-5 sm:px-10 lg:px-[90] relative">
          <H_Tag className="sm:text-[67px]! text-[35px]! w-full">
            Project not found
          </H_Tag>
          <P_Tag className="flex flex-col gap-8">
            <span>The project you requested does not exist.</span>
          </P_Tag>
        </section>
        <Project_Link />
      </>
    );
  }

  const renderProjectContent = () => {
    switch (data.id) {
      case "0":
        return <Project2 />;
      case "1":
        return <Project1 />;
      case "2":
        return <Project3 />;
      case "3":
        return <Project4 />;
      default:
        return <div>No layout defined.</div>;
    }
  };

  return (
    <>
      <section className="flex flex-col justify-center pb-10 sm:pb-20 pt-30 sm:pt-50 size-full  overflow-x-hidden  gap-16 sm:gap-16 px-5 sm:px-10 lg:px-[90] relative ">
        <H_Tag className="sm:text-[67px]! text-[35px]! w-full ">
          {data.head}
        </H_Tag>{" "}
        <div className="size-full flex flex-col gap-8 items-center">
          <img
            src={data.img}
            alt="project image"
            className="size-full rounded-2xl sm:rounded-4xl border-3"
            loading="lazy"
          />
          <div className="flex sm:flex-row flex-col w-full justify-between gap-8 ">
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
          {data.description?.map((res, idx) => (
            <span key={idx}>{res}</span>
          ))}
        </P_Tag>
        {renderProjectContent()}
      </section>
      <Project_Link />
      {/* ...existing code... */}
    </>
  );
};
// ...existing code...;

export default Project;
