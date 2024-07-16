import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Mark Inger",
  initials: "MI",
  url: "https://markinger.tech",
  location: "Almaty, Kazakhstan",
  locationLink: "https://www.google.com/maps/place/Almaty",
  description:
    "I'm a 17-year-old entrepreneur & software engineer who likes to build customer-oriented software in demand :)",
  summary:
    "I have 2,5 years of experience working as a software engineer & 1,5 years of experience running tech startups. My first reasonable startup was [Jumify](https://www.linkedin.com/company/98498106/admin/dashboard/), and now I run [Pleep](https://pleep.app), helping businesses to reach more figures with AI assistants. I'm also a [LaunchX](https://www.launchx.com/) alumni and have completed more than 5 international accelerators with my startups, one of which is [Domino Ventures Accelerator](https://dominovc.com/news-detail/startupsgraduated) which I completed with Pleep.",
  avatarUrl: "/me.JPG",
  skills: ["React", "Next.js", "Typescript", "Node.js", "Python", "Docker"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
    // { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "mark@pleep.app",
    tel: "+7 777 155 54 16",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/markushha",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mark-inger/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Youtube: {
        name: "YouTube",
        url: "https://www.youtube.com/@marktriedcoding",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mark@pleep.app",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Pleep",
      href: "https://pleep.app",
      badges: [],
      location: "Remote",
      title: "CEO & Founder",
      logoUrl: "/pleep.jpeg",
      start: "Jan 2024",
      end: "Present",
      description:
        "Pleep is a service for creating tailored AI assistants for small & medium-sized businesses. We allow any business owner to create, set up, & integrate their own AI assistant in their business in just under 30 minutes. We recently received $5K from Nazarbayev University to take our service to the next level.",
    },
    {
      company: "Starfund",
      href: "https://starfund.stream",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl:
        "https://yt3.googleusercontent.com/ytc/AIdro_nv_GCRVnmpMt5Cnipl_g96U20d3HwE1xkZsN9HpbQHr7o=s900-c-k-c0x00ffffff-no-rj",
      start: "Apr 2023",
      end: "Present",
      description:
        "Starfund is an online streaming service for MMA fights. I built the front-end part of our service and worked on implementing new features.",
    },
    {
      company: "Jumify",
      href: "https://jumify.kz",
      badges: [],
      location: "Remote",
      title: "CEO & Co-Founder",
      logoUrl: "/jumify.png",
      start: "Mar 2023",
      end: "Feb 2023",
      description:
        "Jumify connected experience-free specialists with early-stage startups allowing them to benefit from each other. I built this service solely because of my pain in finding my first working experience. Unfortunately, I lacked the business experience and was too much focused on the product (I was this 'tech' founder), so the service didn't get enough traction and we had to shut it down.",
    },
  ],
  education: [
    {
      school: "LaunchX",
      href: "https://launchx.com",
      degree: "Bay Area Entrepreneurship Program",
      logoUrl: "/launchx.png",
      start: "Jul 2024",
      end: "Aug 2024",
    },
    {
      school: "Oraz Jandosov's International Linguistic Gymnasium",
      href: "https://yandex.com/maps/org/gymnasium_105_named_after_oraz_zhandosov/90995541994/?ll=76.911895%2C43.239416&z=16",
      degree: "High School Diploma",
      logoUrl: "/ib.png",
      start: "2014",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Startup Garage Accelerator",
      dates: "Mar 2024 - Jul 2024",
      location: "Astana, Kazakhstan",
      description:
        "We completed the Startup Garage Accelerator with Pleep and participated in the Demo Day, in which only 15 startups out of 315 were selected to participate in.",
      image:
        "https://pbs.twimg.com/profile_images/1758318748375584768/kUkUah1f_400x400.jpg",
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          title: "Astana Hub",
          href: "https://astanahub.com/ru/",
        },
        {
          icon: <Icons.youtube className="size-3" />,
          title: "Demo Day",
          href: "https://www.youtube.com/live/h7NEcyK0uDo?si=pccsbaySF6GxSXvB",
        },
      ],
    },
    {
      title: "DOMiNO Ventures Accelerator - I Batch",
      dates: "Mar 2024 - Jul 2024",
      location: "Istanbul, Turkey",
      description:
        "We were selected as 1 of 10 startups to participate in the first batch of DOMiNO Ventures Accelerator out of 1000+ applications. We successfully completed the program and started raising pre-seed round right after this.",
      image:
        "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/yrsjedel4yhwp0vlnz95",
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          title: "DOMiNO Ventures",
          href: "https://dominovc.com/",
        },
        {
          icon: <Icons.youtube className="size-3" />,
          title: "Demo Day",
          href: "https://youtu.be/MlQFwIgIV3s?si=3wjHloNOBZ6w0eaG",
        },
      ],
    },
    {
      title: "NURIS Quick Start Accelerator - XV Batch",
      dates: "Apr 2024 - Jun 2024",
      location: "Astana, Kazakhstan",
      description:
        "Pleep was selected as 1 of 12 projects among the big pool of candidates to participate in the NURIS Quick Start Accelerator. After completion, we also received $5K in pre-seed funding from the Nazarbayev University Research and Innovation System to boost Pleep.",
      image:
        "https://static.tildacdn.pro/tild6265-3961-4236-b930-336139323938/NU_Logo_ENG-01_1.png",
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          title: "NURIS",
          href: "https://nuris.nu.edu.kz",
        },
        {
          icon: <Icons.globe className="size-3" />,
          title: "Digital Business About Pleep",
          href: "https://digitalbusiness.kz/2024-06-13/pomozhem-biznesu-otvechat-klientam-vsego-za-9-sekund-kakie-startapi-stali-pobeditelyami-na-nuris-demo-day-2024/",
        },
      ],
    },
  ],
} as const;
