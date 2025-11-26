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
  if (!data) return <div>No Data Found</div>;

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
    <>
      <section className="flex flex-col justify-center py-10 sm:py-20 size-full  overflow-x-hidden  gap-16 sm:gap-16 px-5 sm:px-10 lg:px-[90] relative ">
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
          {data.description?.map((res) => (
            <span key={res.length}>{res}</span>
          ))}
        </P_Tag>
        {renderProjectContent()}
      </section>
      {/* 
      <div className="flex flex-col bg-cm-yellow border-3 rounded-4xl py-10 sm:py-20 px-5 sm:px-10 lg:px-[90] justify-center text-center items-center gap-[88px]">
        <H_Tag className="3xl:text-6xl! sm:leading-[120%]! sm:text-[45px]! text-[35px]! ">
          View these other Projects
        </H_Tag>
        <div className="flex w-full overflow-x-scroll inset-0 *:min-w-[350px] sm:*:min-w-[476px] gap-8">
          {projects_card?.map((res) => {
            return res.id === data.id ? null : (
              <Project_Card
                key={res.id}
                text={res.text}
                bg={res.bg}
                link={`/work/${res.id}`}
              />
            );
          })}
        </div>
      </div> */}
    </>
  );
};
export default Project;
