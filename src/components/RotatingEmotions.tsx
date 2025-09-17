"use client";
import { useEffect, useMemo, useState } from "react";

const emotions = ["angry", "curious", "frustrated", "desperate", "worried"] as const;

export default function RotatingEmotions() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % emotions.length);
    }, 1800);
    return () => clearInterval(intervalId);
  }, []);

  const current = useMemo(() => emotions[index], [index]);

  return (
    <div className="text-center text-2xl sm:text-3xl text-black font-semibold leading-tight">
      <div className="mx-auto max-w-2xl">
      <div className="flex justify-center items-baseline">
        <span className="mr-1">I am</span>
        <span className="inline-block text-center align-baseline" style={{ minWidth: '120px' }}>
          <span key={current} className="inline-block animate-fade-slide text-[#fbb040]">
            {current}
          </span>
        </span>
      </div>
      <p className="mt-2 text-base sm:text-lg text-black/85 font-normal">
        Help me use data to make my neighborhood better
      </p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <a href="#" className="inline-flex items-center justify-center rounded-md bg-black text-white px-6 py-2.5 text-sm font-medium hover:opacity-90 w-20">Explore</a>
        <a href="#" className="inline-flex items-center justify-center rounded-md border border-black/30 text-black px-6 py-2.5 text-sm font-medium hover:bg-black/10 w-20">Learn</a>
        <a href="#" className="inline-flex items-center justify-center rounded-md border border-black/30 text-black px-6 py-2.5 text-sm font-medium hover:bg-black/10 w-20">Act</a>
      </div>
      </div>

      <style jsx global>{`
        @keyframes fade-slide {
          0% { opacity: 0; transform: translateY(8px); }
          15% { opacity: 1; transform: translateY(0); }
          85% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-8px); }
        }
        .animate-fade-slide {
          animation: fade-slide 1.8s ease-in-out;
        }
      `}</style>
    </div>
  );
}


