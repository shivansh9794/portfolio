"use client";

import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";

export default function LoaderPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((previous) => {
        if (previous >= 100) {
          clearInterval(interval);
          return 100;
        }

        return previous + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#09090b]">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[100px]" />

      <div className="relative flex w-full max-w-sm flex-col items-center px-6">
        {/* Logo */}
        <div className="relative mb-8">
          <div className="absolute -inset-4 animate-pulse rounded-2xl bg-cyan-400/10 blur-xl" />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/20 bg-zinc-900 shadow-2xl">
            <Code2 size={34} className="text-cyan-300" />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-center text-2xl font-bold tracking-tight text-white">
          Shivansh Mishra
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          Full Stack Developer
        </p>

        {/* Progress */}
        <div className="mt-10 w-full">
          <div className="mb-3 flex items-center justify-between text-xs">
            <span className="font-mono text-zinc-600">
              INITIALIZING
            </span>

            <span className="font-mono text-cyan-400">
              {progress}%
            </span>
          </div>

          <div className="h-1 overflow-hidden rounded-full bg-white/5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-5 flex items-center gap-2 text-xs text-zinc-600">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />

          <span>Loading portfolio...</span>
        </div>
      </div>
    </main>
  );
}