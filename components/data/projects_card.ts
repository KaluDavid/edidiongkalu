type Project_Card = {
  id: string;
  text: string;
  link: string;
  bg: string;
  head: string;
  img: string;
  role: string;
  timeline: string;
  industry: string;
  description: string[];
}[];
export type { Project_Card };

export const projects_card: Project_Card = [
  {
    id: "0",
    text: "Creating Nigeria’s most accessible stock insight platform by rethinking how financial information is delivered.",
    link: "",
    bg: "bg-[url('/work1.png')]",

    // OTHERS
    head: "KBS Insight: Financial Literacy for all Nigerians",
    img: "/img2.png",
    role: "Sole Product Designer",
    timeline: "August 2025 - October 2025",
    industry: "Fintech",
    description: [
      "When I began designing KBS Insight, my goal was to build a finance advisory platform that makes investment knowledge accessible to everyday Nigerians, not just financial experts or stockbrokers. The idea was to simplify how people interact with market data without stripping away the depth that serious investors need. As the sole product designer, I shaped the experience from the ground up, conducting research, mapping user flows, and creating an interface that feels modern, trustworthy, and easy to navigate. Every design decision was guided by the goal, to help users feel more confident and in control of their finances.",
    ],
  },
  {
    id: "1",
    text: "Transforming bill payments for over 3,000 residents across multiple estates through intuitive design.",
    link: "",
    bg: "bg-[url('/work2.png')]",

    // OTHERs
    head: "KoboSmart: Building a Smarter Way to Manage Estates and Pay Bills",
    img: "/project2_1.png",
    role: "Sole Product Designer",
    timeline: "Feb 2025 - Jul 2025",
    industry: "Fintech",
    description: [
      "Estate management in Nigeria has long depended on manual processes. Payments are collected through cash, bank transfers, and WhatsApp messages, leaving both residents and administrators struggling to stay organized. KoboSmart was designed to close this gap. It brings together bill payments, community management, and accountability into one digital platform.",
      "When I joined the project, my role was to lead the design for the entire product from concept to high-fidelity execution. I was responsible for shaping the resident experience, building admin tools, designing security interactions, and architecting the super admin web dashboard. The goal was to: design a unified platform that simplifies life for everyone in the estate ecosystem, residents, estate admins, security teams, and platform administrators.",
    ],
  },
  {
    id: "2",
    text: "Accelerating digital health adoption by creating a user friendly website that clearly communicates impact.",
    link: "",
    bg: "bg-[url('/work3.png')] ",

    // OTHERS
    head: "Enhancing Healthcare Record-Keeping for Mothers and Children",
    img: "/project3_1.png",
    role: "Sole Product Designer",
    timeline: "4 Weeks (September 2024)",
    industry: "HealthTech",
    description: [
      "VaxNow is a digital health platform designed to centralize vaccination and medication records for families. The idea was born from a simple observation. Many parents struggle to keep track of vaccination schedules, medication routines, and reliable health information. Paper cards get lost, hospitals rarely synchronize data, and reminders are inconsistent. VaxNow provides a structured system that brings record keeping, reminders, consultations, and hospital guidance into one unified experience.",
      "The platform was created to support parents, especially in regions where vaccination adherence is low and medical documentation is fragmented. With VaxNow, families gain visibility into their health data, healthcare providers gain accuracy, and children receive timely care.",
    ],
  },
  {
    id: "3",
    text: "Driving better financial habits for students by simplifying savings, debt tracking and long-term goal planning.",
    link: "",
    bg: "bg-[url('/work4.png')]",

    // OTHERS
    head: "FundFlow: Building Financial Discipline  For Students",
    img: "/img3.png",
    role: "Sole Product Designer",
    timeline: "Sept. 2024 - Dec. 2024",
    industry: "Fintech",
    description: [
      "Managing finances as a student can be challenging, with limited income, academic expenses, and the temptation of impulse spending. Many students struggle to build healthy savings habits, plan for long-term goals, and manage debt effectively. This project focuses on developing a student-focused savings application that simplifies financial planning, promotes disciplined saving and provides tools to help students achieve financial security during and after their studies.",
      "The app is designed to empower students to save, budget, and manage debt, enabling them to build habits that lead to financial independence. It introduces innovative features such as goal-based savings, group savings, and a unique lock funds feature, allowing students to secure savings until after graduation, ensuring they have funds available for important life transitions.",
    ],
  },
];
