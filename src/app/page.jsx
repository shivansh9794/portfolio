// import React from 'react'
// import CircularLoader from '@/components/CircularLoader'
// const page = () => {

//   return (
//     <div className='w-full h-auto bg-neutral-800 backdrop-blur-lg p-10 rounded-b-[25px]  '>
//       <CircularLoader/>
//       <div>

//         <h1 className='font-bold text-3xl font-body'>About me</h1>

//         <hr className="w-16 h-1 mt-2  mb-4 bg-gray-100 border-0 rounded md:mb-5 dark:bg-neutral-400"></hr>


//         <p className='m-5 mb-10 font-sans text-lg text-pretty text-neutral-400'>I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>

//         <h1 className='font-bold text-3xl font-body'>What i'm Doing </h1>

//         <div className='gap-10 flex grid-cols-3 justify-center mt-5 max-sm:flex max-sm:flex-col'>

//           <div className='flex items-center justify-center h-56 w-80 col-span-1 text-white border-none bg-transparent   p-3 rounded-b-2xl shadow-2xl shadow-zinc-700 my-4 sm:col-span-3 '>
//             <h1 className='font-bold text-2xl font-mono text-neutral-400'>Website Development Using HTML,CSS,JS</h1>
//           </div>

//           <div className='flex items-center justify-center h-56 w-80 col-span-1 text-white border-none bg-transparent backdrop:blur-md p-3 rounded-b-2xl shadow-xl shadow-zinc-700 my-4'>
//             <h1 className='font-bold font-mono text-2xl text-neutral-400'>Website Development Using MERN Stack</h1>
//           </div>

//           <div className='flex items-center justify-center h-56 w-80 col-span-1 text-white border-none bg-transparent backdrop:blur-md p-3 rounded-b-2xl shadow-xl shadow-zinc-700 my-4'>
//             <h1 className='font-bold font-mono text-2xl text-neutral-400'>Java application Development</h1>
//           </div>
//         </div>

//         <div >
//           <h1 className='font-bold text-3xl mt-5 mb-10 font-body'>Language</h1>

//           <div className='flex h-auto w-full max-sm:grid max-sm:grid-cols-1'>
//             <div className='border flex border-none rounded-xl h-[70px] bg-transparent items-center justify-center shadow-lg shadow-zinc-700 mx-5 font-bold font-mono text-neutral-400 text-2xl w-44 max-sm:w-full '>Java</div>

//             <h1 className='border flex border-none rounded-xl h-[70px] bg-transparent items-center justify-center shadow-lg shadow-zinc-700 mx-5 font-bold font-mono text-neutral-400 text-2xl w-44 max-sm:w-full '>JavaScript</h1>

//             <h1 className='border flex border-none rounded-xl h-[70px] bg-transparent items-center justify-center shadow-lg shadow-zinc-700 mx-5 font-bold font-mono text-neutral-400 text-2xl w-44 max-sm:w-full '>C Language</h1>

//             <h1 className='border flex border-none rounded-xl h-[70px] bg-transparent items-center justify-center shadow-lg shadow-zinc-700 mx-5 font-bold font-mono text-neutral-400 text-2xl w-44 max-sm:w-full '>PHP</h1>

//           </div>

//         </div>

//         <div>
//           <h1 className='font-bold text-3xl mt-11 mb-10 font-body'>Frameworks</h1>

//           <div className='flex h-auto w-full max-sm:grid max-sm:grid-cols-1'>
//             <div className='border flex border-none rounded-xl h-[70px] bg-transparent items-center justify-center shadow-lg shadow-zinc-700 mx-5 font-bold font-mono text-neutral-400 text-2xl w-44 max-sm:w-full '>NEXT Js</div>

//             <h1 className='border flex border-none rounded-xl h-[70px] bg-transparent items-center justify-center shadow-lg shadow-zinc-700 mx-5 font-bold font-mono text-neutral-400 text-2xl w-44 max-sm:w-full '>Express Js</h1>

//             <h1 className='border flex border-none rounded-xl h-[70px] bg-transparent items-center justify-center shadow-lg shadow-zinc-700 mx-5 font-bold font-mono text-neutral-400 text-2xl w-44 max-sm:w-full '>Tailwind CSS</h1>

//             <h1 className='border flex border-none rounded-xl h-[70px] bg-transparent items-center justify-center shadow-lg shadow-zinc-700 mx-5 font-bold font-mono text-neutral-400 text-2xl w-44 max-sm:w-full '>Bootstrap </h1>

//           </div>

//         </div>
//       </div>

//     </div>
//   )
// }

// export default page



"use client";

import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Database,
  ExternalLink,
  Layers3,
  Server,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express",
      "Spring",
      "Socket.io",
      "WebRTC",
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Languages & Tools",
    icon: Terminal,
    skills: [
      "Java",
      "JavaScript",
      "Git",
      "GitHub",
      "Postman",
      "Cloudinary",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Real-Time Chat Application",
    description:
      "A real-time communication platform with messaging, file sharing, typing indicators, reactions, unread counts and WebRTC calling.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "WebRTC",
    ],
    icon: Zap,
  },
  {
    number: "02",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application featuring authentication, product management, admin functionality, orders and reviews.",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
    ],
    icon: Layers3,
  },
  {
    number: "03",
    title: "Portfolio Website",
    description:
      "A responsive developer portfolio designed to showcase projects, technical skills, education and professional information.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
    ],
    icon: Sparkles,
  },
];

const focusAreas = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building complete web applications from responsive interfaces to scalable backend APIs.",
  },
  {
    icon: Zap,
    title: "Real-Time Applications",
    description:
      "Working with technologies such as Socket.io and WebRTC to create interactive experiences.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Designing APIs, authentication flows, database models and server-side application logic.",
  },
];

/* =========================
   GitHub SVG Icon
========================= */
const GithubIcon = ({ size = 20, className = "" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.88-1.35-3.88-1.35-.53-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
};

/* =========================
   LinkedIn SVG Icon
========================= */
const LinkedinIcon = ({ size = 20, className = "" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.98h3.41v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.98H3.56v11.47ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z" />
    </svg>
  );
};

export default function Home() {
  return (
    <main className="relative overflow-hidden">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-0 top-[500px] -z-10 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[130px]" />

      {/* ================= HERO ================= */}
      <section className="flex min-h-[calc(100vh-80px)] items-center px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">

          <div>

            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              Full Stack Developer
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building digital

              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                experiences that matter.
              </span>
            </h1>

            {/* Intro */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              I&apos;m{" "}
              <span className="font-semibold text-white">
                Shivansh Mishra
              </span>
              , a Full Stack Developer and MCA student focused on building
              modern, scalable web applications using the MERN stack and Java.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                Explore Projects

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10"
              >
                View Resume
              </Link>

            </div>

            {/* Social */}
            <div className="mt-9 flex items-center gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/shivansh9794"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-zinc-400 transition hover:border-cyan-400/30 hover:text-white"
              >
                <GithubIcon size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/shivansh-mishra-4a2241330/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-zinc-400 transition hover:border-cyan-400/30 hover:text-white"
              >
                <LinkedinIcon size={20} />
              </a>

              {/* Email */}
              <a
                href="mailto:mshivansh549@gmail.com"
                aria-label="Email"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-zinc-400 transition hover:border-cyan-400/30 hover:text-white"
              >
                <ExternalLink size={20} />
              </a>

            </div>
          </div>

          {/* ================= HERO VISUAL ================= */}
          <div className="relative mx-auto hidden w-full max-w-md lg:block">

            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/80 p-6 shadow-2xl backdrop-blur-xl">

              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-white/10 pb-5">

                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />

                <span className="ml-3 text-xs text-zinc-500">
                  shivansh@developer ~
                </span>

              </div>

              {/* Code */}
              <div className="space-y-4 py-7 font-mono text-sm">

                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">developer</span>{" "}
                  <span className="text-white">=</span> {"{"}
                </p>

                <p className="pl-5">
                  <span className="text-zinc-500">name:</span>{" "}
                  <span className="text-green-300">
                    &quot;Shivansh&quot;
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-zinc-500">role:</span>{" "}
                  <span className="text-green-300">
                    &quot;Full Stack Developer&quot;
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-zinc-500">language:</span>{" "}
                  <span className="text-green-300">
                    &quot;Java&quot;
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-zinc-500">stack:</span>{" "}
                  <span className="text-green-300">
                    &quot;MERN&quot;
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-zinc-500">focus:</span> [
                </p>

                <p className="pl-10 text-green-300">
                  &quot;Scalable Systems&quot;,
                </p>

                <p className="pl-10 text-green-300">
                  &quot;Real-Time Apps&quot;,
                </p>

                <p className="pl-10 text-green-300">
                  &quot;Clean UI&quot;
                </p>

                <p className="pl-5">]</p>

                <p>{"}"}</p>

                <div className="mt-6 flex items-center gap-2 text-cyan-400">
                  <span>$</span>
                  <span className="animate-pulse">
                    building...
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="border-y border-white/5 bg-white/[0.015] px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                About Me
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Developer focused on building, learning and improving.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-zinc-400">

              <p>
                I specialize in full-stack development, MERN applications and
                Java programming. I enjoy turning ideas into functional,
                responsive and maintainable applications.
              </p>

              <p>
                My current learning journey includes Next.js, TypeScript and
                System Design while continuing to strengthen my problem-solving
                skills through Java and DSA.
              </p>

              <p>
                My long-term goal is to grow as a Software Development Engineer
                and work on products that solve meaningful real-world problems.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ================= FOCUS AREAS ================= */}
      <section className="px-4 py-24 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              What I Build
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Turning ideas into working products.
            </h2>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {focusAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/20 hover:bg-white/[0.05]"
                >

                  <div className="mb-6 inline-flex rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="border-y border-white/5 bg-white/[0.015] px-4 py-24 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Tech Stack
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Tools I work with.
              </h2>
            </div>

            <Link
              href="/resume"
              className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              View complete profile

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            {skills.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-black/20 p-6"
                >

                  <div className="flex items-center gap-3">

                    <div className="rounded-lg bg-white/5 p-2 text-cyan-300">
                      <Icon size={20} />
                    </div>

                    <h3 className="font-semibold text-white">
                      {item.title}
                    </h3>

                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-400 transition hover:border-cyan-400/20 hover:text-cyan-300"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="px-4 py-24 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Featured Work
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Projects I&apos;ve built.
              </h2>
            </div>

            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              View all projects

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>

          <div className="grid gap-5 lg:grid-cols-3">

            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/20"
                >

                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl transition group-hover:bg-cyan-500/20" />

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <span className="font-mono text-sm text-cyan-400">
                        {project.number}
                      </span>

                      <div className="rounded-xl border border-white/10 bg-black/20 p-2.5 text-zinc-400">
                        <Icon size={20} />
                      </div>

                    </div>

                    <h3 className="mt-8 text-xl font-semibold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-3 min-h-[100px] leading-7 text-zinc-400">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">

                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-zinc-400"
                        >
                          {technology}
                        </span>
                      ))}

                    </div>

                  </div>
                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-4 pb-24 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 px-6 py-16 text-center sm:px-10">

            <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="relative">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Let&apos;s Connect
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-white sm:text-5xl">
                Have an idea or opportunity?
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-zinc-400">
                I&apos;m always interested in learning, building and
                collaborating on interesting software projects.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">

                <a
                  href="mailto:mshivansh549@gmail.com"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition hover:-translate-y-1 hover:bg-cyan-300"
                >
                  Get In Touch
                  <ArrowRight size={18} />
                </a>

                <a
                  href="https://github.com/shivansh9794"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400/30"
                >
                  <GithubIcon size={18} />
                  GitHub
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

