import React, { useEffect, useState } from "react";

// Countdown duration in milliseconds
const COUNTDOWN_DURATION =
  (4 * 24 * 60 * 60 + 4 * 60 * 60 + 40 * 60 + 40) * 1000;
// 4 days, 4 hours, 40 minutes, 40 seconds

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_DURATION);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1000) {
          return COUNTDOWN_DURATION; // restart when it reaches 0
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Helper to format time
  const formatTime = (ms) => {
    let totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    totalSeconds %= 24 * 60 * 60;
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="flex gap-2 justify-center text-2xl tracking-widest md:text-[32px] lg:text-5xl">
      <span>{String(days).padStart(2, "0")}</span>:
      <span>{String(hours).padStart(2, "0")}</span>:
      <span>{String(minutes).padStart(2, "0")}</span>:
      <span>{String(seconds).padStart(2, "0")}</span>
    </div>
  );
}
