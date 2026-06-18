"use client";

import { useMemo, useState } from "react";

import Link from "next/link";

import { SitayyaLogo } from "@/components/ui/Logo";

const stars = [1, 2, 3, 4, 5] as const;

export default function RatePage() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const isFiveStar = rating === 5;
  const showFeedback = rating > 0 && rating < 5;

  const feedbackUrl = useMemo(() => {
    const message = feedback.trim()
      ? `[Feedback from site] ${feedback.trim()}`
      : "[Feedback from site]";

    return `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`;
  }, [feedback]);

  const handleSubmit = () => {
    window.open(feedbackUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 py-16 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-2xl flex-col items-center justify-center text-center">
        <Link href="/" className="mb-8 flex items-center justify-center">
          <SitayyaLogo className="h-14 w-14" />
        </Link>

        <p className="text-xs uppercase tracking-[0.35em] text-royal-gold/70">
          Royal Feedback
        </p>
        <h1 className="mt-4 font-heading text-4xl text-royal-gold sm:text-5xl">
          How was your Royal Experience?
        </h1>

        <div className="mt-8 flex items-center gap-3">
          {stars.map((star) => {
            const active = rating >= star;
            return (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="text-4xl transition hover:scale-110"
                aria-label={`${star} star rating`}
              >
                <span className={active ? "text-royal-gold" : "text-white/25"}>
                  ★
                </span>
              </button>
            );
          })}
        </div>

        {isFiveStar ? (
          <div className="mt-10 flex flex-col items-center gap-6">
            <p className="text-lg text-white/80">Thank You!</p>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-royal-gold px-6 py-3 text-sm font-semibold text-[#0A0A0A] transition hover:bg-royal-saffron"
            >
              Leave a Google Review
            </a>
          </div>
        ) : null}

        {showFeedback ? (
          <div className="mt-10 w-full rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur">
            <label className="block text-sm font-medium text-white/70">
              How can we improve?
            </label>
            <textarea
              value={feedback}
              onChange={(event) => setFeedback(event.target.value)}
              rows={5}
              className="mt-3 w-full rounded-2xl border border-white/10 bg-[#111] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-royal-gold"
              placeholder="Tell us what we could do better..."
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="mt-4 rounded-full bg-royal-gold px-6 py-3 text-sm font-semibold text-[#0A0A0A] transition hover:bg-royal-saffron"
            >
              Send Feedback
            </button>
          </div>
        ) : null}
      </div>
    </main>
  );
}
