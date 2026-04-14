"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const A = "/assets/figma/website-page";

const AVATAR_SVG = `${A}/0cdbf94f-5a60-4c27-b0e6-6487cc645336.svg`;
const ARROW_RIGHT_SVG = `${A}/78076023-0876-40eb-9b7b-779dc8938881.svg`;
const ARROW_LEFT_SVG = `${A}/d194a1c2-0b98-4833-be10-402409a3a47d.svg`;

const testimonials = [
  {
    quote: ["Headspace gives me a", "slice of the day that's", "just for me."],
    author: "Nadien, New Mexico",
    topic: "On prioritizing self-care",
  },
  {
    quote: [
      "The stress and loneliness",
      "courses taught me how to",
      "comfort myself.",
    ],
    author: "Alicia, Canada",
    topic: "On managing the trauma of sexual assault",
  },
  {
    quote: ["Your app brings so much", "peace and tolerance to", "our home."],
    author: "Rachael, UK",
    topic: "On meditation's positive effect on family life",
  },
  {
    quote: [
      "I came to learn that the",
      "storyline in my head …",
      "was holding me back.",
    ],
    author: "Peter, Belgium",
    topic: "On what he learned when sitting with himself",
  },
  {
    quote: [
      "Headspace provides me",
      "with … a connection to",
      "myself, and a",
      "disconnection from",
      "negative thoughts,",
      "feelings, and sensations.",
    ],
    author: "Keri, UK",
    topic: "On finding her happy place",
  },
  {
    quote: ["Changing my thoughts", "has allowed me to", "change my life."],
    author: "Davide, London",
    topic: "On using meditation to turn his life around",
  },
  {
    quote: [
      "A happy workforce leads",
      "to a happy work",
      "environment.",
    ],
    author: "Jaime, Spain",
    topic: "On the benefits of his employees embracing meditation",
  },
  {
    quote: ["I never thought I'd find", "peace until I gave", "meditation a try."],
    author: "Sofia, Brazil",
    topic: "On discovering inner calm",
  },
] as const;

function TestimonialCard({
  testimonial,
  isActive,
  isVisible,
  scale,
  ...rest
}: {
  testimonial: (typeof testimonials)[number];
  isActive: boolean;
  isVisible: boolean;
  scale: number;
  [key: string]: unknown;
}) {
  const { quote, author, topic } = testimonial;
  const isShortQuote = quote.length <= 3;

  // Scaled values
  const cardW = 336.6 * scale;
  const cardH = 383.4 * scale;
  const avatarW = 67.5 * scale;
  const avatarH = 72 * scale;
  const avatarTop = 14 * scale;
  const avatarLeft = 14 * scale;
  const innerLeft = 28.8 * scale;
  const quoteTop = 79.2 * scale;
  const quoteW = 279 * scale;
  const lineH = 32.4 * scale;
  const authorTop = 320.4 * scale;
  const authorW = cardW - 57.6 * scale;
  const cornerTop = 14 * scale;
  const cornerLeft = 14 * scale;

  // Font sizes
  const quoteFontSize = isShortQuote ? 24.3 * scale : 22.5 * scale;
  const authorFontSize = 11.7 * scale;
  const topicFontSize = 9.9 * scale;
  const authorLineH = 16.2 * scale;
  const topicLineH = 14.4 * scale;
  const authorHeight = 15.3 * scale;
  const topicHeight = 12.6 * scale;
  const authorTopOffset = 0;
  const topicTopOffset = 24.3 * scale;
  const borderRadius = 10.8 * scale;

  return (
    <div
      className="shrink-0"
      data-testimonial={rest["data-testimonial"]}
      style={{
        width: `${cardW}px`,
        height: `${cardH}px`,
        willChange: "transform, opacity",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? `scale(${isActive ? 1 : 0.94}) translateY(${isActive ? "0px" : `${10 * scale}px`})`
          : `scale(0.94) translateY(${10 * scale}px)`,
        transition: `opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms cubic-bezier(0.4, 0, 0.2, 1)`,
        scrollSnapAlign: "center",
      }}
    >
      <div
        className="relative h-full overflow-hidden"
        style={{
          width: `${cardW}px`,
          height: `${cardH}px`,
          borderRadius: `${borderRadius}px`,
          background: isActive ? "#ffffff" : "#f5f2ed",
          opacity: isActive ? 1 : 0.4,
          boxShadow: isActive
            ? `0 ${20 * scale}px ${60 * scale}px ${-15 * scale}px rgba(236, 72, 72, 0.18), 0 ${8 * scale}px ${20 * scale}px ${-8 * scale}px rgba(42, 31, 31, 0.08)`
            : `0 ${4 * scale}px ${12 * scale}px ${-4 * scale}px rgba(42, 31, 31, 0.05)`,
          border: isActive
            ? `${1.5 * scale}px solid rgba(236, 72, 72, 0.12)`
            : `${1.5 * scale}px solid transparent`,
          transition:
            "background 450ms cubic-bezier(0.4, 0, 0.2, 1), opacity 450ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 450ms cubic-bezier(0.4, 0, 0.2, 1), border 450ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Face SVG at top-left corner */}
        <Image
          src={AVATAR_SVG}
          alt=""
          width={avatarW}
          height={avatarH}
          className="absolute"
          style={{
            top: `${avatarTop}px`,
            left: `${avatarLeft}px`,
            width: `${avatarW}px`,
            height: `${avatarH}px`,
            opacity: isActive ? 1 : 0.45,
            filter: isActive ? "none" : "grayscale(0.3) brightness(0.85)",
            transition:
              "opacity 450ms cubic-bezier(0.4, 0, 0.2, 1), filter 450ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          unoptimized
        />

        {/* Quote text lines */}
        <div
          className="absolute"
          style={{
            top: `${quoteTop}px`,
            left: `${innerLeft}px`,
            width: `${quoteW}px`,
          }}
        >
          {quote.map((line, i) => (
            <p
              key={i}
              className="absolute left-0 w-full"
              style={{
                fontFamily: "var(--font-figtree), Figtree, sans-serif",
                fontWeight: 500,
                fontSize: `${quoteFontSize}px`,
                letterSpacing: `${-0.63 * scale}px`,
                lineHeight: `${lineH}px`,
                color: isActive ? "#2a1f1f" : "#413d45",
                top: `${i * lineH}px`,
                height: `${lineH}px`,
                display: "flex",
                alignItems: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                transition: "color 450ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Author & topic */}
        <div
          className="absolute"
          style={{
            top: `${authorTop}px`,
            left: `${innerLeft}px`,
            width: `${authorW}px`,
            height: `${37.8 * scale}px`,
          }}
        >
          <p
            className="absolute left-0"
            style={{
              fontFamily: "var(--font-figtree), Figtree, sans-serif",
              fontWeight: 500,
              fontSize: `${authorFontSize}px`,
              letterSpacing: `${-0.13 * scale}px`,
              lineHeight: `${authorLineH}px`,
              color: isActive ? "#2a1f1f" : "#413d45",
              top: `${authorTopOffset}px`,
              height: `${authorHeight}px`,
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              transition: "color 450ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {author}
          </p>
          <p
            className="absolute left-0"
            style={{
              fontFamily: "var(--font-figtree), Figtree, sans-serif",
              fontWeight: 500,
              fontSize: `${topicFontSize}px`,
              letterSpacing: `${-0.11 * scale}px`,
              lineHeight: `${topicLineH}px`,
              color: isActive ? "#67646a" : "#413d45",
              top: `${topicTopOffset}px`,
              height: `${topicHeight}px`,
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              transition: "color 450ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {topic}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(3);
  const [scale, setScale] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(activeIndex);
  const scrollHandlerRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);

  // Calculate responsive scale based on viewport width
  useEffect(() => {
    const updateScale = () => {
      const vw = window.innerWidth;
      // Base card is 336.6px wide
      // Scale down proportionally on smaller screens
      if (vw < 400) {
        setScale((vw - 64) / 336.6);
      } else if (vw < 640) {
        setScale(Math.min((vw - 80) / 336.6, 0.9));
      } else if (vw < 1024) {
        setScale(Math.min((vw - 120) / 336.6, 0.95));
      } else {
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  // Intersection Observer for reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Sync ref with state
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Scroll tracking
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const findCentered = () => {
      if (scrollHandlerRef.current !== null) return;
      scrollHandlerRef.current = requestAnimationFrame(() => {
        scrollHandlerRef.current = null;
        const cards = el!.querySelectorAll("[data-testimonial]");
        if (!cards.length) return;
        const elRect = el!.getBoundingClientRect();
        const elCenterX = elRect.left + elRect.width / 2;

        let closest = 0;
        let minDist = Infinity;
        cards.forEach((card, i) => {
          const rect = card.getBoundingClientRect();
          const cardCenterX = rect.left + rect.width / 2;
          const dist = Math.abs(cardCenterX - elCenterX);
          if (dist < minDist) {
            minDist = dist;
            closest = i;
          }
        });

        if (closest !== activeIndexRef.current) {
          setActiveIndex(closest);
        }
      });
    };

    el.addEventListener("scrollend", findCentered, { passive: true });
    el.addEventListener("scroll", findCentered, { passive: true });

    const timer = setTimeout(findCentered, 200);

    return () => {
      el.removeEventListener("scrollend", findCentered);
      el.removeEventListener("scroll", findCentered);
      clearTimeout(timer);
      if (scrollHandlerRef.current !== null) {
        cancelAnimationFrame(scrollHandlerRef.current);
      }
    };
  }, []);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.querySelectorAll("[data-testimonial]");
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
    setActiveIndex(index);
  };

  const scrollPrev = () => {
    const newIndex =
      (activeIndex - 1 + testimonials.length) % testimonials.length;
    scrollToIndex(newIndex);
  };

  const scrollNext = () => {
    const newIndex = (activeIndex + 1) % testimonials.length;
    scrollToIndex(newIndex);
  };

  const cardWidth = 336.6 * scale;

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(245, 242, 237, 0.2) 0%, rgba(255, 248, 244, 0.3) 100%)",
        borderTop: "1px solid rgba(236, 72, 72, 0.06)",
        borderBottom: "1px solid rgba(236, 72, 72, 0.06)",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          height: "2px",
          width: "100%",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(236,72,72,0.1) 20%, rgba(236,72,72,0.1) 80%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-10">

        {/* Horizontal scroll */}
        <div className="relative">
          {/* Left fade */}
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 z-10"
            style={{
              width: `${Math.max(32, 48 * scale)}px`,
              background:
                "linear-gradient(90deg, rgba(255,248,244,1) 0%, rgba(255,248,244,0) 100%)",
            }}
          />
          {/* Right fade */}
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 z-10"
            style={{
              width: `${Math.max(32, 48 * scale)}px`,
              background:
                "linear-gradient(90deg, rgba(255,248,244,0) 0%, rgba(255,248,244,1) 100%)",
            }}
          />

          <div
            ref={scrollRef}
            className="flex items-center overflow-x-auto pb-8 scroll-smooth"
            style={{
              scrollSnapType: "x mandatory",
              scrollPaddingLeft: `calc(50vw - ${cardWidth / 2}px)`,
              scrollPaddingRight: `calc(50vw - ${cardWidth / 2}px)`,
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              gap: `${20 * scale}px`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                data-testimonial={index}
                testimonial={testimonial}
                isActive={index === activeIndex}
                isVisible={isVisible}
                scale={scale}
              />
            ))}
          </div>
        </div>

        {/* Navigation: < + dots + > */}
        <div
          className="flex items-center justify-center pb-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(12px)",
            transition:
              "opacity 500ms ease-out 200ms, transform 500ms ease-out 200ms",
            gap: `${12 * scale}px`,
          }}
        >
          {/* > arrow — left side */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Next testimonial"
            className="group flex items-center justify-center rounded-full border transition-all duration-200 hover:border-[rgba(236,72,72,0.25)]"
            style={{
              backgroundColor: "rgba(255,255,255,0.9)",
              borderColor: "rgba(236, 72, 72, 0.12)",
              boxShadow: "0 2px 8px rgba(42, 31, 31, 0.04)",
              width: `${28.8 * scale}px`,
              height: `${28.8 * scale}px`,
              flexShrink: 0,
            }}
          >
            <Image
              src={ARROW_RIGHT_SVG}
              alt=""
              width={28.8 * scale}
              height={28.8 * scale}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
              unoptimized
            />
          </button>

          {/* Dot indicators */}
          <div
            className="flex items-center"
            style={{ gap: `${6 * scale}px` }}
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className="rounded-full"
                style={{
                  width: activeIndex === index ? `${20 * scale}px` : `${6 * scale}px`,
                  height: `${6 * scale}px`,
                  backgroundColor:
                    activeIndex === index ? "#ec4848" : "rgba(236,72,72,0.25)",
                  boxShadow:
                    activeIndex === index
                      ? "0 2px 6px rgba(236,72,72,0.3)"
                      : "none",
                  transition:
                    "width 350ms cubic-bezier(0.4, 0, 0.2, 1), background-color 200ms ease",
                }}
              />
            ))}
          </div>

          {/* < arrow — right side */}
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="group flex items-center justify-center rounded-full border transition-all duration-200 hover:border-[rgba(236,72,72,0.25)]"
            style={{
              backgroundColor: "rgba(255,255,255,0.9)",
              borderColor: "rgba(236, 72, 72, 0.12)",
              boxShadow: "0 2px 8px rgba(42, 31, 31, 0.04)",
              width: `${28.8 * scale}px`,
              height: `${28.8 * scale}px`,
              flexShrink: 0,
            }}
          >
            <Image
              src={ARROW_LEFT_SVG}
              alt=""
              width={28.8 * scale}
              height={28.8 * scale}
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
              unoptimized
            />
          </button>
        </div>
      </div>
    </section>
  );
}
