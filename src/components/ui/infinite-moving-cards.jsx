"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
 <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-[380px] max-w-full shrink-0 rounded-2xl border border-zinc-200 bg-white px-8 py-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900"
          >
            <div className="flex flex-col gap-4">
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {item.text}
              </p>

              {/* Bullet Points */}
              {item.li && (
                <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                  {item.li.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}

              {/* Optional Footer (If Needed) */}
              {item.name && (
                <div className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
                  <p>{item.name}</p>
                  <p>{item.title}</p>
                </div>
              )}

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
