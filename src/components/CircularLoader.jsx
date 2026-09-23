"use client";

import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";

export default function CircularLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressTimer;

    progressTimer = setInterval(() => {
      setProgress((previous) => {
        if (previous >= 100) {
          clearInterval(progressTimer);

          // Give the final 100% a moment to display
          setTimeout(() => {
            setLoading(false);
          }, 250);

          return 100;
        }

        return previous + 5;
      });
    }, 30);

    return () => {
      clearInterval(progressTimer);
    };
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#09090b]">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative flex w-full max-w-sm flex-col items-center px-6">
        {/* Logo */}
        <div className="relative mb-8">
          <div className="absolute -inset-4 rounded-2xl bg-cyan-400/10 blur-xl" />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900">
            <Code2
              size={34}
              className="text-cyan-300"
            />
          </div>
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold text-white">
          Shivansh Mishra
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          Full Stack Developer
        </p>

        {/* Progress */}
        <div className="mt-10 w-full">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-xs text-zinc-600">
              LOADING
            </span>

            <span className="font-mono text-xs text-cyan-400">
              {progress}%
            </span>
          </div>

          <div className="h-1 overflow-hidden rounded-full bg-white/5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
              style={{
                width: `${progress}%`,
                transition: "width 30ms linear",
              }}
            />
          </div>
        </div>

        <p className="mt-5 text-xs text-zinc-600">
          Preparing your experience...
        </p>
      </div>
    </div>
  );
}