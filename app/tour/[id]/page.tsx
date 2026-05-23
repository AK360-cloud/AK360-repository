"use client";

import { useEffect, useState, use } from "react";

export default function TourPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // 🌍 LOADING SCREEN
  if (loading) {
    return (
      <div className="h-screen w-screen bg-black flex flex-col items-center justify-center text-white px-4">

        {/* EARTH LOADER */}
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden mb-6 relative">

          <img
  src="/earth.png"
  alt="Earth"
  style={{
    animation: "spinEarth 6s linear infinite",
  }}
  className="w-full h-full object-cover"
/>

          {/* glow effect */}
          <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-2xl"></div>

        </div>

        {/* AK360 BRAND */}
        <h1 className="text-3xl sm:text-5xl font-bold tracking-wide bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
          AK360
        </h1>

        <p className="text-gray-400 mt-2 text-sm sm:text-base text-center">
          Loading immersive 360 experience...
        </p>

        <p className="text-gray-600 text-xs mt-6">
          Optimized for mobile & desktop
        </p>

      </div>
    );
  }

  // 🌐 TOUR VIEWER
  return (
    <div className="h-screen w-screen bg-black relative">

      {/* small label */}
      <div className="absolute top-3 left-3 z-10 text-white text-xs sm:text-sm bg-black/50 px-3 py-1 rounded">
        Tour: {id}
      </div>

      {/* Marzipano Tour */}
      <iframe
        src={`/tours/${id}/index.html`}
        className="w-full h-full border-0"
      />

    </div>
  );
}