import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mark Inger",
  initials: "MI",
  url: "https://markinger.tech",
  location: "Almaty, Kazakhstan",
  locationLink: "https://www.google.com/maps/place/Almaty",
  description:
    "A 17-year-old guy who likes to code and build customer-oriented software and then sell it.",
  summary:
    "I started by landing an internship at a US-based startup. Having worked there for 2 years, I've grown as an engineer. In 2023, I started my first reasonable startup [Jumify](https://www.linkedin.com/company/jumify/). A year later I started [Pleep](https://pleep.app), a service for creating AI-assistants for SMBs that focuses not on tech guys, but on real entrepreneurs, allowing them to make state-of-the-art AI-assistants in just 5 minutes. We recently raised $100K in a pre-seed round.",
  avatarUrl: "/me.JPG",
  skills: ["React", "Next.js", "Typescript", "Node.js", "Python", "Docker"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    // { href: "#projects", icon: CodeIcon, label: "Projects" },
    // { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "mark@pleep.app",
    tel: "+7 777 155 54 16",
    social: {
      Telegram: {
        name: "Telegram",
        url: "https://t.me/markingers",
        icon: Icons.telegram,
        navbar: true,
      },
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
        "Pleep is a service for creating state-of-art AI assistants for small & medium-sized businesses. We allow any business owner to create, set up, & integrate their own AI assistant in their business in 5 minutes. It's literally the easiest product –– try it. We just raised $100K in a pre-seed round.",
    },
    {
      company: "Starfund",
      href: "https://starfund.stream",
      badges: [],
      location: "Remote",
      title: "Full-Stack Software Engineer",
      logoUrl:
        "https://yt3.googleusercontent.com/ytc/AIdro_nv_GCRVnmpMt5Cnipl_g96U20d3HwE1xkZsN9HpbQHr7o=s900-c-k-c0x00ffffff-no-rj",
      start: "Apr 2023",
      end: "Aug 2024",
      description:
        "Starfund is an online streaming service for MMA fights. I built the front-end part of our service and worked on implementing new features. I also worked on the back-end part of the service.",
    },
    {
      company: "Jumify",
      href: "https://www.linkedin.com/company/jumify/",
      badges: [],
      location: "Remote",
      title: "CEO & Co-Founder",
      logoUrl: "/jumify.png",
      start: "Mar 2023",
      end: "Feb 2023",
      description:
        "Jumify connected experience-free specialists with early-stage startups allowing them to benefit from each other. I built this service solely because of my pain in finding my first working experience. Unfortunately, I lacked the business experience and was too much focused on the product (I was this 'tech' founder), so the service didn't get enough traction and we had to shut it down.",
    },
    {
      company: "Freelance",
      href: "https://fl.ru",
      badges: [],
      location: "Remote",
      title: "Web Developer",
      logoUrl:
        "https://cdn6.aptoide.com/imgs/c/c/e/cce0e7459ea7616b88ef83accb646f4c_icon.png",
      start: "Feb 2022",
      end: "Mar 2023",
      description:
        "I started off in Web Development by taking different projects as a freelancer. Here I firstly applied my knowledge to practice.",
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
      className: "",
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
      className: "",
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
      className: "",
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
    {
      title: "Terricon Valley Incubator for Startups",
      dates: "Jul 2023 - Oct 2023",
      location: "Almaty, Kazakhstan",
      description:
        "We completed this incubation program with our startup - Jumify. By the end, we graduated with a working MVP and a small user base.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRspwo7AqRqIE8Uk5VZ4SDlXJom_Idur2JLSA&s",
      className: "bg-black",
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          title: "Terricon Valley",
          href: "https://terricon.kz/ru",
        },
      ],
    },
    {
      title: "Full Javascript Stack Development Course",
      dates: "Sep 2022 - Oct 2022",
      location: "Almaty, Kazakhstan",
      className: "",
      description:
        "I've been selected as 1 of 10 students to participate in the Full Stack Development Course held by American Space Almaty for free. I've learned the basics of React.js here and learned how to build Back-End.",
      image:
        "https://d2v9ipibika81v.cloudfront.net/uploads/sites/23/2016/04/americanspaces750-750x350.png",
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          title: "American Space & Makerspace Almaty",
          href: "https://www.instagram.com/asalmaty",
        },
      ],
    },
    {
      title: "Android Development Course",
      dates: "Aug 2022 - Sep 2022",
      location: "Almaty, Kazakhstan",
      className: "",
      description:
        "I've been selected as 1 of 12 students to participate in the Android Development Course held by American Space Almaty for free. I've learned Java and basics of Android development there.",
      image:
        "https://d2v9ipibika81v.cloudfront.net/uploads/sites/23/2016/04/americanspaces750-750x350.png",
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          title: "American Space & Makerspace Almaty",
          href: "https://www.instagram.com/asalmaty",
        },
      ],
    },
  ],
} as const;
