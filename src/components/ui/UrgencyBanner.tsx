"use client";

type BannerConfig = {
  className: string;
  text: string;
};

const getBannerConfig = (hour: number): BannerConfig => {
  if (hour >= 11 && hour < 15) {
    return {
      className: "bg-[#E27D60] text-black",
      text: "🔥 Lunch service is live! Walk in or reserve your table.",
    };
  }

  if (hour >= 15 && hour < 19) {
    return {
      className: "bg-[#1A1A1A] text-white",
      text: "✨ Evening prep mode. Book your table for dinner.",
    };
  }

  if (hour >= 19 && hour < 22) {
    return {
      className: "bg-red-900 text-white",
      text: "🚨 Dinner Rush! Tables filling up fast. Reserve now.",
    };
  }

  return {
    className: "bg-[#1A1A1A] text-white",
    text: "✨ Evening prep mode. Book your table for dinner.",
  };
};

export default function UrgencyBanner() {
  const hour = new Date().getHours();
  const { className, text } = getBannerConfig(hour);

  return (
    <div
      className={`w-full px-4 py-1.5 text-center text-sm font-medium z-50 ${className}`}
    >
      {text}
    </div>
  );
}
