"use client";

import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowLeft,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Server,
  Terminal,
} from "lucide-react";

const technicalSkills = [
  {
    title: "Languages",
    icon: Terminal,
    items: ["Java", "JavaScript"],
  },
  {
    title: "Frontend",
    icon: Code2,
    items: [
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
    items: [
      "Node.js",
      "Express",
      "Spring",
      "Socket.io",
      "WebRTC",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "Tools",
    icon: Layers3,
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Firebase",
      "Cloudinary",
    ],
  },
];

const strengths = [
  "Full Stack Web Development",
  "MERN Stack Development",
  "Java Programming",
  "REST API Development",
  "Real-Time Applications",
  "Database Design",
  "Problem Solving & DSA",
  "Responsive UI Development",
];

const currentFocus = [
  "Mastering Next.js",
  "Learning TypeScript",
  "Exploring System Design",
  "Building scalable backend applications",
  "Solving Java DSA problems",
];

export default function ResumePage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-6 lg:px-10">

      {/* Background */}
      <div className="pointer-events-none absolute left-1/3 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-0 top-[800px] -z-10 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <section className="mb-16">

          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
                <BriefcaseBusiness size={15} />
                Professional Profile
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Shivansh

                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Mishra
                </span>
              </h1>

              <p className="mt-5 text-lg text-zinc-400">
                Full Stack Developer · Java Developer · MERN Stack Enthusiast
              </p>

            </div>

            {/* Download / Print button */}
            <button
              type="button"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:-translate-y-1 hover:bg-cyan-300"
              onClick={() => window.print()}
            >
              <Download size={18} />
              Print / Save Resume
            </button>

          </div>
        </section>

        {/* ================= CONTACT STRIP ================= */}
        <section className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {/* Email */}
          <a
            href="mailto:mshivansh549@gmail.com"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/20"
          >
            <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
              <Mail size={20} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-600">
                Email
              </p>

              <p className="mt-1 text-sm text-zinc-300">
                mshivansh549@gmail.com
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="rounded-xl bg-purple-400/10 p-3 text-purple-300">
              <MapPin size={20} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-600">
                Location
              </p>

              <p className="mt-1 text-sm text-zinc-300">
                India
              </p>
            </div>
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/shivansh9794"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/20 sm:col-span-2 lg:col-span-1"
          >
            <div className="rounded-xl bg-white/5 p-3 text-zinc-300">
              <Code2 size={20} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-600">
                GitHub
              </p>

              <p className="mt-1 text-sm text-zinc-300">
                github.com/shivansh9794
              </p>
            </div>
          </a>

        </section>

        {/* ================= PROFESSIONAL SUMMARY ================= */}
        <section className="mb-20 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Profile
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white">
              Professional Summary
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">

            <p className="text-base leading-8 text-zinc-400">
              I am a Full Stack Developer and MCA student specializing in MERN
              stack development and Java programming. I enjoy designing and
              developing modern web applications, REST APIs, real-time
              applications and database-driven systems.
            </p>

            <p className="mt-5 text-base leading-8 text-zinc-400">
              My development interests include backend engineering, real-time
              communication, system design and clean user interfaces. I am
              currently expanding my knowledge of Next.js, TypeScript and
              scalable application architecture.
            </p>

            <p className="mt-5 text-base leading-8 text-zinc-400">
              My goal is to grow as a Software Development Engineer while
              continuously improving my problem-solving and software
              development skills.
            </p>

          </div>
        </section>

        {/* ================= EDUCATION ================= */}
        <section className="mb-20">

          <div className="mb-10">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Education
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white">
              Academic Journey
            </h2>

          </div>

          <div className="relative ml-3 border-l border-white/10 pl-8">

            {/* MCA */}
            <div className="relative pb-10">

              <div className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/30 bg-zinc-950">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

                <div className="flex flex-col justify-between gap-2 sm:flex-row">

                  <div className="flex items-center gap-3">

                    <GraduationCap
                      size={22}
                      className="text-cyan-300"
                    />

                    <h3 className="text-xl font-semibold text-white">
                      Master of Computer Applications
                    </h3>

                  </div>

                  <span className="w-fit rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                    Currently Pursuing
                  </span>

                </div>

                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  Currently pursuing MCA with a focus on software development,
                  programming and computer science fundamentals.
                </p>

              </div>
            </div>

            {/* Previous education */}
            <div className="relative">

              <div className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-zinc-950">
                <span className="h-2 w-2 rounded-full bg-zinc-600" />
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

                <div className="flex items-center gap-3">

                  <GraduationCap
                    size={22}
                    className="text-zinc-400"
                  />

                  <h3 className="text-xl font-semibold text-white">
                    Higher Secondary Education
                  </h3>

                </div>

                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  Completed higher secondary education before pursuing
                  computer applications and software development.
                </p>

              </div>
            </div>

          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section className="mb-20">

          <div className="mb-10">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Experience
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white">
              Professional Experience
            </h2>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">

            <div className="flex flex-col justify-between gap-5 md:flex-row">

              <div>

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
                    <BriefcaseBusiness size={22} />
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-white">
                      MERN Stack Developer Trainee
                    </h3>

                    <p className="mt-1 text-sm text-cyan-300">
                      Techdock Labs, Lucknow
                    </p>

                  </div>
                </div>
              </div>

              <span className="h-fit w-fit rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-500">
                Trainee Experience
              </span>

            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {[
                "Worked with the MERN stack for full-stack application development.",
                "Developed frontend interfaces using React.",
                "Worked with Node.js and Express for backend development.",
                "Worked with MongoDB for application data management.",
                "Built and integrated REST APIs.",
                "Worked with modern development tools and workflows.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-white/5 bg-black/20 p-4"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-cyan-400"
                  />

                  <p className="text-sm leading-6 text-zinc-400">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section className="mb-20">

          <div className="mb-10">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Skills
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white">
              Technical Expertise
            </h2>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {technicalSkills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/20"
                >

                  <div className="flex items-center gap-3">

                    <div className="rounded-xl bg-white/5 p-3 text-cyan-300">
                      <Icon size={20} />
                    </div>

                    <h3 className="font-semibold text-white">
                      {skill.title}
                    </h3>

                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-zinc-400"
                      >
                        {item}
                      </span>
                    ))}

                  </div>
                </div>
              );
            })}

          </div>
        </section>

        {/* ================= STRENGTHS ================= */}
        <section className="mb-20 grid gap-10 lg:grid-cols-2">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Strengths
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white">
              What I bring to a team.
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-zinc-500">
              A combination of full-stack development experience, Java
              programming, problem-solving practice and an interest in
              building scalable software.
            </p>

          </div>

          <div className="grid gap-3 sm:grid-cols-2">

            {strengths.map((strength) => (
              <div
                key={strength}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >

                <CheckCircle2
                  size={18}
                  className="shrink-0 text-cyan-400"
                />

                <span className="text-sm text-zinc-300">
                  {strength}
                </span>

              </div>
            ))}

          </div>
        </section>

        {/* ================= CURRENT FOCUS ================= */}
        <section className="mb-20 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/[0.02] to-purple-500/10 p-7 sm:p-10">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Currently Learning
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white">
                Always improving.
              </h2>

              <p className="mt-4 leading-7 text-zinc-500">
                Technology keeps evolving, and so does my learning journey.
              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {currentFocus.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4"
                >

                  <span className="font-mono text-xs text-cyan-400">
                    0{index + 1}
                  </span>

                  <span className="text-sm text-zinc-300">
                    {item}
                  </span>

                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= FOOTER CTA ================= */}
        <section className="pb-10 text-center">

          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Interested in working together?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-zinc-500">
            Feel free to explore my projects or get in touch for opportunities
            and collaboration.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/30"
            >
              View Projects
            </Link>

            <a
              href="mailto:mshivansh549@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              <Mail size={17} />
              Contact Me
            </a>

          </div>
        </section>

      </div>
    </main>
  );
}