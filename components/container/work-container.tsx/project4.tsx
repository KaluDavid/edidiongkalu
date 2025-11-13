import { Project_Card } from "@/components/data/projects_card";
import React from "react";

export const Project4 = ({ data }: { data: Project_Card[number] }) => {
  return (
    <div className="bg-white p-6">
      <h2>Standard Project</h2>
      <p>{data.text}</p>
      <button>Edit Project</button>
    </div>
  );
};
