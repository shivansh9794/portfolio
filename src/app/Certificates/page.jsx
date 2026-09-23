"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Award,
  ExternalLink,
  Maximize2,
  X,
} from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Deloitte Certificate",
    issuer: "Deloitte",
    image:
      "https://res.cloudinary.com/dbugkyyly/image/upload/v1790185950/deloitte_Certificatee_d1ms9j.jpg",
    description:
      "Certificate of completion from Deloitte.",
  },
  {
    id: 2,
    title: "LeetCode 50 Days Badge",
    issuer: "LeetCode",
    image:
      "https://res.cloudinary.com/dbugkyyly/image/upload/v1790185950/leetcode_50_eaytcc.png",
    description:
      "Recognition for maintaining a consistent LeetCode problem-solving streak.",
  },
  {
    id: 3,
    title: "LeetCode 100 Days Badge",
    issuer: "LeetCode",
    image:
      "https://res.cloudinary.com/dbugkyyly/image/upload/v1790185950/Leetcode_100_xjb5s8.png",
    description:
      "Recognition for completing a 100-day LeetCode problem-solving streak.",
  },
];

export default function CertificatesPage() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-6 lg:px-10">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/3 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-0 top-[600px] -z-10 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[130px]" />

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

          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <Award size={15} />
              Achievements
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Certificates &
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Achievements.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              A collection of certifications and coding achievements that
              represent my continuous learning and problem-solving journey.
            </p>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="mb-14 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="font-mono text-3xl font-bold text-cyan-300">03</p>
            <p className="mt-2 text-sm text-zinc-500">
              Certificates & achievements
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="font-mono text-3xl font-bold text-cyan-300">02</p>
            <p className="mt-2 text-sm text-zinc-500">
              LeetCode milestones
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="font-mono text-3xl font-bold text-cyan-300">01</p>
            <p className="mt-2 text-sm text-zinc-500">
              Professional certificate
            </p>
          </div>
        </section>

        {/* ================= CERTIFICATE GRID ================= */}
        <section>
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                My Credentials
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                Learning milestones
              </h2>
            </div>

            <span className="hidden font-mono text-sm text-zinc-600 sm:block">
              03 ITEMS
            </span>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate) => (
              <article
                key={certificate.id}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/20"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/50">
                    <button
                      type="button"
                      onClick={() => setSelectedCertificate(certificate)}
                      className="flex translate-y-4 items-center gap-2 rounded-xl border border-white/20 bg-black/70 px-4 py-2.5 text-sm font-medium text-white opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <Maximize2 size={16} />
                      View Certificate
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                        {certificate.issuer}
                      </p>

                      <h3 className="mt-2 text-lg font-semibold text-white">
                        {certificate.title}
                      </h3>
                    </div>

                    <div className="shrink-0 rounded-xl border border-white/10 bg-white/5 p-2.5 text-cyan-300">
                      <Award size={18} />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-zinc-500">
                    {certificate.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(certificate)}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-cyan-300"
                  >
                    View certificate
                    <ExternalLink size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= BOTTOM CTA ================= */}
        <section className="mt-24 pb-10">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/[0.02] to-purple-500/10 p-8 text-center sm:p-12">
            <Award className="mx-auto text-cyan-300" size={30} />

            <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
              Continuous learning is part of the journey.
            </h2>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-zinc-500">
              I continuously work on improving my technical skills through
              projects, coding practice and learning new technologies.
            </p>

            <Link
              href="/projects"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              Explore Projects
              <ExternalLink size={17} />
            </Link>
          </div>
        </section>
      </div>

      {/* ================= FULLSCREEN MODAL ================= */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setSelectedCertificate(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedCertificate(null)}
            className="absolute right-5 top-5 z-10 rounded-xl border border-white/10 bg-white/10 p-3 text-white transition hover:bg-white/20"
            aria-label="Close certificate"
          >
            <X size={22} />
          </button>

          <div
            className="relative flex max-h-[90vh] max-w-6xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </main>
  );
}