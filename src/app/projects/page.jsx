"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
  MessageCircle,
  ShoppingCart,
  Sparkles,
  Terminal,
  Video,
  Zap,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Real-Time Chat Application",
    shortTitle: "Real-Time Chat",
    category: "Full Stack • Real-Time",
    description:
      "A full-stack real-time communication platform designed for fast and interactive messaging. The application supports one-to-one and group conversations with modern messaging features.",
    icon: MessageCircle,
    gradient: "from-cyan-500/20 to-blue-500/5",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "WebRTC",
      "Cloudinary",
    ],
    features: [
      "Real-time messaging",
      "One-to-one and group chats",
      "File and media sharing",
      "Typing indicators",
      "Message reactions",
      "Unread message counts",
      "Seen message status",
      "WebRTC calling",
    ],
  },

  {
    number: "02",
    title: "E-Commerce Platform",
    shortTitle: "E-Commerce",
    category: "Full Stack • MERN",
    description:
      "A complete e-commerce web application built around product discovery, authentication, order management and customer reviews.",
    icon: ShoppingCart,
    gradient: "from-purple-500/20 to-pink-500/5",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Cloudinary",
    ],
    features: [
      "User authentication",
      "Product management",
      "Category-based products",
      "Admin dashboard",
      "Order management",
      "Product reviews",
      "Seller functionality",
      "Image management",
    ],
  },

  {
    number: "03",
    title: "Portfolio Website",
    shortTitle: "Developer Portfolio",
    category: "Frontend • Next.js",
    description:
      "A modern responsive portfolio designed to present my development journey, technical skills, projects, education and professional profile.",
    icon: Sparkles,
    gradient: "from-blue-500/20 to-purple-500/5",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
    ],
    features: [
      "Responsive design",
      "Modern dark UI",
      "Project showcase",
      "Resume section",
      "Certificates section",
      "Social links",
      "Reusable components",
      "Mobile navigation",
    ],
  },

  {
    number: "04",
    title: "Java DSA Repository",
    shortTitle: "Java DSA",
    category: "Problem Solving • Java",
    description:
      "A collection of Java implementations covering data structures, algorithms and common coding-problem patterns for continuous problem-solving practice.",
    icon: Terminal,
    gradient: "from-orange-500/20 to-yellow-500/5",
    technologies: [
      "Java",
      "DSA",
      "Algorithms",
      "Problem Solving",
    ],
    features: [
      "Arrays",
      "Strings",
      "Linked Lists",
      "Stacks",
      "Queues",
      "Trees",
      "Searching",
      "Sorting",
    ],
  },
];

const categories = [
  {
    icon: Code2,
    title: "Frontend",
    description: "Responsive and interactive user interfaces.",
  },
  {
    icon: Layers3,
    title: "Backend",
    description: "APIs, authentication and application logic.",
  },
  {
    icon: Database,
    title: "Database",
    description: "Structured data models and persistence.",
  },
  {
    icon: Zap,
    title: "Real-Time",
    description: "Live communication and interactive systems.",
  },
];

/* =========================
   GitHub SVG Icon
========================= */
const GithubIcon = ({ size = 20, className = "" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.88-1.35-3.88-1.35-.53-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-6 lg:px-10">

      {/* Background */}
      <div className="pointer-events-none absolute left-1/3 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-0 top-[700px] -z-10 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <section className="mb-20">

          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="max-w-4xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <Code2 size={15} />
              My Work
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Projects that turn

              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                ideas into products.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              A selection of applications and technical projects I have built
              while developing my skills across full-stack development, Java,
              real-time systems and modern frontend technologies.
            </p>

          </div>
        </section>

        {/* ================= PROJECT STATS ================= */}
        <section className="mb-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-cyan-400/20"
              >
                <div className="mb-4 inline-flex rounded-xl bg-white/5 p-3 text-cyan-300">
                  <Icon size={20} />
                </div>

                <h2 className="font-semibold text-white">
                  {item.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {item.description}
                </p>
              </div>
            );
          })}

        </section>

        {/* ================= PROJECT LIST ================= */}
        <section>

          <div className="mb-10 flex items-end justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Featured Projects
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                Things I&apos;ve built
              </h2>

            </div>

            <span className="hidden font-mono text-sm text-zinc-600 sm:block">
              04 PROJECTS
            </span>

          </div>

          <div className="space-y-8">

            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 transition duration-500 hover:border-cyan-400/20"
                >

                  {/* Card glow */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 transition duration-500 group-hover:opacity-70`}
                  />

                  <div className="relative grid lg:grid-cols-[0.8fr_1.2fr]">

                    {/* ================= LEFT ================= */}
                    <div className="border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r">

                      <div className="flex items-start justify-between">

                        <span className="font-mono text-sm text-cyan-400">
                          / {project.number}
                        </span>

                        <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-zinc-300">
                          <Icon size={24} />
                        </div>

                      </div>

                      <div className="mt-12">

                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                          {project.category}
                        </p>

                        <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                          {project.title}
                        </h3>

                        <p className="mt-5 leading-7 text-zinc-400">
                          {project.description}
                        </p>

                      </div>

                      {/* Technologies */}
                      <div className="mt-8">

                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                          Technologies
                        </p>

                        <div className="flex flex-wrap gap-2">

                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-400"
                            >
                              {technology}
                            </span>
                          ))}

                        </div>
                      </div>

                      {/* Project links */}
                      <div className="mt-8 flex gap-3">

                        <a
                          href="https://github.com/shivansh9794"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View GitHub"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-cyan-400/30 hover:text-white"
                        >
                          <GithubIcon size={16} />
                          GitHub
                        </a>

                        <button
                          type="button"
                          disabled
                          className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-2.5 text-sm font-medium text-zinc-600"
                        >
                          <ArrowUpRight size={16} />
                          Live Demo
                        </button>

                      </div>
                    </div>

                    {/* ================= RIGHT ================= */}
                    <div className="p-7 sm:p-9">

                      <div className="mb-7 flex items-center gap-3">

                        <div className="rounded-xl border border-cyan-400/10 bg-cyan-400/5 p-2.5 text-cyan-300">
                          <Sparkles size={18} />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-white">
                            Key Features
                          </p>

                          <p className="text-xs text-zinc-600">
                            Core functionality
                          </p>
                        </div>

                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">

                        {project.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3 rounded-xl border border-white/5 bg-black/20 p-4 transition hover:border-white/10 hover:bg-white/[0.03]"
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-xs text-cyan-300">
                              ✓
                            </span>

                            <span className="text-sm text-zinc-400">
                              {feature}
                            </span>
                          </div>
                        ))}

                      </div>

                      {/* Technical visual */}
                      <div className="mt-8 overflow-hidden rounded-2xl border border-white/5 bg-black/30">

                        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">

                          <span className="h-2 w-2 rounded-full bg-red-400/70" />
                          <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                          <span className="h-2 w-2 rounded-full bg-green-400/70" />

                          <span className="ml-2 font-mono text-[10px] text-zinc-600">
                            project.config
                          </span>

                        </div>

                        <div className="p-5 font-mono text-xs leading-7">

                          <p>
                            <span className="text-purple-400">
                              project
                            </span>

                            <span className="text-zinc-600">
                              {" = "}
                            </span>

                            <span className="text-cyan-300">
                              &quot;{project.shortTitle}&quot;
                            </span>
                          </p>

                          <p>
                            <span className="text-purple-400">
                              type
                            </span>

                            <span className="text-zinc-600">
                              {" = "}
                            </span>

                            <span className="text-green-300">
                              &quot;{project.category}&quot;
                            </span>
                          </p>

                          <p>
                            <span className="text-purple-400">
                              status
                            </span>

                            <span className="text-zinc-600">
                              {" = "}
                            </span>

                            <span className="text-green-300">
                              &quot;Built&quot;
                            </span>
                          </p>

                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="mt-24">

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center sm:p-12">

            <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-purple-500/10 blur-[100px]" />

            <div className="relative">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                <Video size={25} />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                Want to know more about my work?
              </h2>

              <p className="mx-auto mt-3 max-w-xl leading-7 text-zinc-500">
                Explore my resume to learn more about my technical background,
                education and development journey.
              </p>

              <Link
                href="/resume"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                View Resume
                <ArrowUpRight size={18} />
              </Link>

            </div>
          </div>
        </section>

      </div>
    </main>
  );
}