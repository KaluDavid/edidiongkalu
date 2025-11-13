import { Project_Card } from "@/components/data/projects_card";
import React from "react";
import {
  Findings_Box,
  H_Tag,
  P_Tag,
  Project_Tag,
  User_Story,
} from "../smaller_container";
import clsx from "clsx";
import { ol, span } from "@/components/style/style";

export const Project3 = ({ data }: { data: Project_Card[number] }) => {
  return (
    <>
      <Project_Tag head_text="Business Goal: Promoting Financial Responsibility Among Students">
        The business goal was to help students save with discipline by
        introducing a structured, user-friendly app tailored to their lifestyle.
        FundFlow empowers students to set target savings goals (e.g.,
        graduation, travel, emergency funds), lock funds to prevent impulse
        spending, collaborate through group savings for shared goals and
        track income, expenses, and debts in one place. The product’s vision was
        not just to help students save, it aimed to build lifelong financial
        responsibility.
      </Project_Tag>{" "}
      <Project_Tag head_text="Market Size & Growth">
        The student fintech market in Africa is expanding rapidly, driven by
        rising smartphone adoption and the demand for accessible financial
        tools. Over 25 million tertiary students across Africa manage money
        digitally, yet only 15% use structured savings tools. In Nigeria
        alone, youth fintech adoption grew by 45% in 2024, indicating strong
        potential for student-focused solutions. This gap represents an
        opportunity to position FundFlow as the leading savings companion for
        students.
      </Project_Tag>{" "}
      <Project_Tag head_text="Forecast & Strategy">
        The forecast centred on achieving steady adoption by partnering early
        with universities and student bodies to build trust and drive initial
        engagement. This strategy also relied heavily on using peer
        influence through features like Group Savings to boost ongoing
        engagement, alongside a referral reward system designed to encourage
        organic growth. The ultimate plan was for the app to grow with its users
        by gradually expanding into the young professional market as students
        transitioned after graduation, supporting them through their journey to
        financial independence.
      </Project_Tag>{" "}
      <Project_Tag head_text="Project Goal">
        As the designer, my goal was to create a platform that translates
        complex financial habits into simple, guided experiences, making every
        interaction feel friendly, goal-driven, and rewarding by focusing
        on simplicity in saving and goal-setting, transparency in tracking
        progress, and motivation through visual milestones and community
        support.
      </Project_Tag>{" "}
      <Project_Tag head_text="Research">
        <span>
          Fundflow was researched based on industry trends and validated through
          user interviews to fit the current job market where every penny
          matters.
        </span>
        <span>
          For this project, I utilized both qualitative and quantitative
          research methods. The quantitative approach involved distributing
          survey questionnaires to 28 undergraduate students, while the
          qualitative approach included conducting virtual interviews with 2
          undergraduates via Google Meet. These methods were carefully selected
          to ensure a comprehensive understanding of the problem and to gather
          valuable insights.{" "}
        </span>
      </Project_Tag>
      <Project_Tag head_text="Some Key Findings">
        <Findings_Box />
      </Project_Tag>
      <Project_Tag head_text="Competitive Analysis">
        <ul className={clsx("list-disc", ol, span)}>
          <li>
            <span>Piggyvest: </span>Focuses heavily on general savings plans but
            lacks education-focused features like graduation locks or
            student-specific budget categories.
          </li>
          <li>
            <span>Risevest: </span>Targets investment-oriented users but
            overlooks basic savings structures and day-to-day budgeting tools.
          </li>
          <li>
            {" "}
            <span>Cowrywise:</span> Emphasizes structured savings, yet it
            lacks social and group-saving features that attract younger,
            collaborative users.
          </li>
        </ul>
      </Project_Tag>
      <Project_Tag head_text="My Opportunity">
        <ul className={clsx("list-disc", ol, span)}>
          <li>
            <span>Lock Funds Feature:</span> Allows students to secure savings
            until graduation, solving impulse spending issues—a feature
            competitors lack.
          </li>
          <li>
            <span>Group Savings:</span> Promotes accountability and teamwork,
            ideal for younger, socially connected users.
          </li>
          <li>
            <span>Debt Management:</span> Tools to track and reduce debt,
            helping students prepare for life after graduation.
          </li>{" "}
        </ul>
      </Project_Tag>
      <Project_Tag head_text="User Stories">
        <span>
          After analyzing research insights and identifying key pain points, I
          converted user needs into actionable user stories. These stories
          helped guide the design process by focusing on what students truly
          wanted to achieve with the app. Each story represents a real scenario
          drawn from user interviews and surveys, ensuring the final product
          solves genuine problems and supports everyday financial goals.
        </span>

        <div className="flex sm:flex-row flex-col w-full justify-between  gap-8">
          <User_Story text="As a student, I want to lock funds until after graduation so I can avoid spending impulsively" />{" "}
          <User_Story text="As a student, I want to save with my friends toward a shared goal so we can stay accountable." />{" "}
          <User_Story text="As a student in debt, I want to track what I owe and plan repayments." />
        </div>
      </Project_Tag>
      <Project_Tag head_text="User Flow">
        This user flow shows the roadmap that guides users through the
        app&apos;s functionalities, ensuring a seamless and intuitive
        experience. This user flow will map out the onboarding and savings flow
      </Project_Tag>
      <Project_Tag head_text="Onboarding Flow">
        This user flow shows the roadmap that guides users through the app's
        functionalities, ensuring a seamless and intuitive experience. This user
        flow will map out the onboarding and savings flow
      </Project_Tag>
      <img
        src={"/prod3_img2.png.png"}
        alt="onboarding flow"
        className="size-full"
      />
      <Project_Tag head_text="Savings Flow"> </Project_Tag>
      <img
        src={"/prod3_img3.png.png"}
        alt="savings flow"
        className="size-full"
      />
      <Project_Tag head_text="Research Reality">
        <span>
          Right from the start of the design phase, it was clear the mobile
          experience was everything for KoboSmart. Most residents and estate
          admins preferred using their phones to manage day-to-day activities
          like payments, guest passes, and communication. Prioritizing mobile
          was not just a design choice. It was a reflection of how people live,
          pay, and interact with their communities.
        </span>
        <span>
          The design approach focused on clarity and accessibility. We aimed
          to make every interaction smooth, whether a user was viewing a bill or
          signing up, ultimately building trust and a feeling of simplicity.
          Each flow was built around real-world actions that users perform
          daily, tested against scenarios drawn from interviews and mock
          simulations with early adopters.
        </span>
        <span>
          The result was a cohesive system that connects everyone in an estate:
          residents, admins, and security.
        </span>
      </Project_Tag>
    </>
  );
};
