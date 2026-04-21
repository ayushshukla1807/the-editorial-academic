"use client";

import { useState, useEffect } from "react";

/**
 * Simulates real-time presence/activity for engagement.
 * Returns a stable but dynamic-looking number of "current viewers" and "recent activity".
 */
export function useRealtimeActivity(minViewers = 2, maxViewers = 18) {
  const [viewers, setViewers] = useState(0);
  const [lastActivity, setLastActivity] = useState<string>("");

  useEffect(() => {
    // Initial random values
    setViewers(Math.floor(Math.random() * (maxViewers - minViewers + 1)) + minViewers);
    
    const activities = [
      "Last booked 4h ago",
      "Inquired recently",
      "3 students visited today",
      "Just updated",
      "High demand",
    ];
    setLastActivity(activities[Math.floor(Math.random() * activities.length)]);

    // Occasional flicker/update of viewers to seem "live"
    const interval = setInterval(() => {
      setViewers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newVal = prev + change;
        return newVal >= minViewers && newVal <= maxViewers ? newVal : prev;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [minViewers, maxViewers]);

  return { viewers, lastActivity };
}
