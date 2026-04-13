"use client";

import Image from "next/image";
import { useState } from "react";

const A = "/assets/figma/website-page";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Pricing", href: "#pricing" },
  { label: "F A Qs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
] as const;

const featureCards = [
  {
    icon: `${A}/e6953b17-5e8e-4047-a413-2cba45ef619d.svg`,
    title: "Zero-Touch GST Invoicing",
    copy: "Research Generate lines to fill 60 characters from your voice entries, decode ledger codes for all 50 Indian Identity, Dealer types and more effortlessly. HSN codes, and same WhatsApp receipts old PDF format.",
  },
  {
    icon: `${A}/2bd35cf7-4a4b-44de-9123-b955c44f1750.svg`,
    title: "Automatic GST Reconciliation",
    copy: "Updates stock-level records automatically from voice entries with GSTR 2A/2B. Possible with same GST details.",
  },
  {
    icon: `${A}/0847cfc1-0f60-4db8-b982-8e8483096fab.svg`,
    title: "Digital Twin Inventory",
    copy: "Tracks invoice reminders and live stock movement. Then recoup entries automatically. It forms an actual debit note/credit note.",
  },
  {
    icon: `${A}/def58c92-70ce-4fe3-b5e1-64fbcf34a034.svg`,
    title: "Autonomous Collections",
    copy: "Tracks Accounts Receivable and sends intelligent payment reminders. E.g. - it forms an actual debit note.",
  },
] as const;

const detailedFeatures = [
  {
    title: 'Voice-First "No-UI"',
    points: [
      "Onboarding snaps from hours to minutes",
      "Invoice creation ~15.7x faster than typing",
      "Eliminates literacy and UI learning barriers",
      "Drives Tier 2/3 adoption and daily usage habits",
    ],
  },
  {
    title: "GST Compliance",
    points: [
      "Digitizes records of wholesale purchases into the subsidiary ledger",
      "Inventory system updates with pricing and supplier tracking",
      "GST compliance with automated tax calculation and categorization",
      "Auto-fills GSTR1 report for GST monthly return filing",
    ],
  },
  {
    title: "IdleAI GST Automation",
    points: [
      "Daily GSTR reconciliation vs monthly manual work",
      "Multi-supplier compliance tracking",
      "One-command GST filing",
      "Prevents FIAB: IOK yearly credit loss + saves ~$25 hrs/ month",
    ],
  },
  {
    title: "Security features",
    points: [
      "End-to-end data protection with AES-GCM encryption",
      "SHA-256 hashing, and log redaction",
      "Role-based access control RBAC2, Secure OTP login",
      "Rate limiting, Secure OTP login",
    ],
  },
] as const;

const stories = [
  {
    quote:
      "Your app brings so much peace and clearance to our home.",
    author: "— Pune, India",
    role: "",
  },
  {
    quote:
      "I care to learn that the storyline in my head ... was holding me back.",
    author: "— Peter, Nigeria",
    role: "",
  },
  {
    quote:
      "Headspace provides me with ... a distraction to myself, and a disconnection from negative thoughts, feelings, and sensations.",
    author: "",
    role: "",
  },
  {
    quote:
      "Changing my relationship has allowed me to change my at ...",
    author: "",
    role: "",
  },
] as const;

const plans = [
  {
    name: "FREE PLAN",
    tag: "For one person",
    price: "₹0",
    period: "/Month",
    billing: "Billed annually",
    subtitle: "Keep your team healthy and happy. Start for free.",
    featured: false,
    cta: "Get Started",
    ctaStyle: "outline" as const,
    heading: "Features you'll get:",
    points: [
      "Easy step & sleep meditation",
      "Wellness checks",
      "Access library of professionally",
      "Basics of Guided Meditation",
      "Basics of mindfulness & practice",
      "0.5 GB of cloud storage",
    ],
    footer: null,
  },
  {
    name: "PRO PLAN",
    tag: "For one person | Most Popular",
    price: "₹599",
    period: "/Month",
    billing: "Billed annually",
    subtitle: "For individual practitioners needing ready tools.",
    featured: true,
    cta: "Start Free Trial",
    ctaStyle: "filled" as const,
    heading: "In addition to free, you'll get:",
    points: [
      "Unlimited personal reminders",
      "Daily specialized techniques",
      "Access to sleep, focus, move and more",
      "1 profile and template designs in Canva",
      "Create invoices and receipts on your phone",
      "100 GB of cloud storage",
    ],
    footer: null,
  },
  {
    name: "TEAM PLAN",
    tag: "For your team",
    price: "₹699",
    period: "/Month*",
    billing: "1 per person/month",
    subtitle: "Scale and monitor your team's activities easily.",
    featured: false,
    cta: "Start Free Trial",
    ctaStyle: "outline" as const,
    heading: "In addition to pro, you'll get:",
    points: [
      "Scale and monitor your entire team",
      "Guided meditation and templates",
      "Priority email support",
      "1 TB of cloud storage",
    ],
    footer: "Contact Sales",
  },
] as const;

const faqs = [
  {
    question: "Can I send invoices directly through FlowPay?",
    answer:
      "Yes! FlowPay automatically generates invoice based on your WebiVoice billing. With just one click, you can send them directly to your clients. FlowPay also handles payment reminders, ensuring you stay on top of unpaid invoices.",
  },
  {
    question: "How do I get started with FlowPay?",
    answer:
      "Getting started is simple. Sign up for a free account, connect your voice capture device, and start creating invoices instantly with AI-powered billing.",
  },
  {
    question: "How does FlowPay help me get paid faster?",
    answer:
      "FlowPay automates invoice generation and sends payment reminders to your clients. This reduces the time between service delivery and payment collection.",
  },
] as const;

export default function Home() {
  const [billingPeriod, setBillingPeriod] = useState<"yearly" | "monthly">(
    "yearly"
  );

  return (
    <main className="relative overflow-x-clip bg-[var(--color-cream)] text-[var(--color-ink)]">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(252,187,148,0.28),_transparent_35%),linear-gradient(180deg,_rgba(255,255,255,0.72)_0%,_rgba(255,248,240,0.96)_14%,_rgba(255,243,237,1)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[48rem] overflow-hidden">
        <div className="absolute left-1/2 top-[-6rem] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-[rgba(255,205,168,0.42)] blur-3xl" />
        <Image
          src={`${A}/718ed619-c497-4434-9c2f-5759f15bf4bf.svg`}
          alt=""
          width={1224}
          height={1120}
          className="absolute left-1/2 top-0 w-[min(92rem,110vw)] -translate-x-1/2 opacity-75"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-5 sm:px-8 lg:px-10">
        {/* ─── NAVIGATION ─── */}
        <header className="relative z-20 flex items-center justify-between px-2 py-4">
          <div className="flex items-center gap-2">
            <Image
              src={`${A}/73b12338-23a7-4666-9243-7a63df613684.svg`}
              alt="Billeif"
              width={32}
              height={40}
              className="h-8 w-auto"
            />
            <span className="font-serif text-2xl font-bold italic text-[#ec4848]">
              billeif
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#3d3331] md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-[#ec4848]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#pricing"
            className="rounded-xl bg-[#ec4848] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(236,72,72,0.6)] transition hover:bg-[#df4040]"
          >
            Get started
          </a>
        </header>

        {/* ─── HERO SECTION ─── */}
        <section className="relative px-2 pb-16 pt-12 text-center sm:pt-16 lg:pt-20">
          <h1 className="font-display mx-auto max-w-4xl text-[clamp(2.4rem,5.5vw,4.2rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-[#231d1c]">
            From Voice to Invoice — Instantly.
            <br />
            <span className="font-serif italic text-[#231d1c] font-normal">
              powered by AI.
            </span>
          </h1>

          {/* Action buttons */}
          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              type="button"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ec4848] shadow-[0_12px_30px_-10px_rgba(236,72,72,0.7)] transition hover:scale-105"
            >
              <Image
                src={`${A}/e6c885a2-c4e2-4e3c-8953-6b426d4c0cbb.svg`}
                alt="Play video"
                width={24}
                height={24}
              />
            </button>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2a2322]">
                <Image
                  src={`${A}/276e3ee0-fa02-401a-96ec-b6dc9495e3d4.svg`}
                  alt="Apple"
                  width={24}
                  height={24}
                />
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2a2322]">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                  <path
                    d="M1 1L11 11L1 21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 4L17 11L7 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Hero illustration with floating badges */}
          <div className="relative mx-auto mt-10 max-w-3xl">
            {/* Instagram icon */}
            <div className="absolute left-0 top-0 z-10 hidden lg:block">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 shadow-[0_12px_30px_-16px_rgba(42,31,31,0.4)]">
                <Image
                  src={`${A}/3fc27bd9-cae3-436a-a2c3-02d08ff6ca32.svg`}
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </span>
            </div>

            {/* Agentic Automation badge */}
            <div className="float-slow absolute left-[-2%] top-[35%] z-10 hidden lg:block">
              <div className="rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_16px_40px_-24px_rgba(42,31,31,0.4)] backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff2ec]">
                    <Image
                      src={`${A}/def58c92-70ce-4fe3-b5e1-64fbcf34a034.svg`}
                      alt=""
                      width={20}
                      height={20}
                    />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#241d1d]">
                      Agentic Automation
                    </p>
                    <p className="text-xs text-[#8b7570]">
                      Your billing is done by that&apos;s pad
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Voice powered AI badge */}
            <div className="float-delayed absolute right-[-2%] top-[20%] z-10 hidden lg:block">
              <div className="rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_16px_40px_-24px_rgba(42,31,31,0.4)] backdrop-blur">
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-sm font-semibold text-[#241d1d]">
                      Voice powered
                    </p>
                    <p className="text-xs text-[#8b7570]">AI</p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff2ec]">
                    <Image
                      src={`${A}/ad8bee2a-fef0-4bb8-9e54-413f4c0401c5.svg`}
                      alt=""
                      width={17}
                      height={22}
                    />
                  </span>
                </div>
              </div>
            </div>

            {/* Floating sparkles */}
            <Image
              src={`${A}/48bde17d-08d6-4603-ad11-ebafd096a484.svg`}
              alt=""
              width={12}
              height={12}
              className="float-slow absolute left-[15%] top-[10%] hidden w-3 lg:block"
            />
            <Image
              src={`${A}/c5ae22ff-e5c9-4c3e-998e-54e95aff050e.svg`}
              alt=""
              width={8}
              height={8}
              className="float-delayed absolute right-[20%] top-[5%] hidden w-2 lg:block"
            />

            {/* Main illustration */}
            <div className="relative mx-auto max-w-xl">
              <Image
                src={`${A}/73ebdb35-8b49-4539-b032-de8774fc6d7d.png`}
                alt="Billeif billing illustration"
                width={1080}
                height={720}
                priority
                className="mx-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS SECTION ─── */}
        <section className="relative px-2 pb-16">
          <div className="rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,238,228,0.95)_0%,rgba(255,248,244,0.98)_100%)] px-6 py-10 sm:px-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stories.map((story, i) => (
                <article
                  key={i}
                  className="relative rounded-2xl border border-white/80 bg-white/90 p-5 shadow-[0_12px_30px_-20px_rgba(42,31,31,0.2)]"
                >
                  <div className="mb-3 flex h-8 w-8 items-center justify-center">
                    <Image
                      src={`${A}/75fe4fe3-4508-45b1-a7f4-1160e3349a9d.svg`}
                      alt=""
                      width={28}
                      height={28}
                      className="opacity-60"
                    />
                  </div>
                  <p className="text-sm leading-6 text-[#3d3331]">
                    {story.quote}
                  </p>
                  {story.author && (
                    <p className="mt-3 text-xs font-medium text-[#907d78]">
                      {story.author}
                    </p>
                  )}
                </article>
              ))}
            </div>
            {/* Carousel arrows */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(36,29,29,0.12)] bg-white"
                aria-label="Previous"
              >
                <Image
                  src={`${A}/78076023-0876-40eb-9b7b-779dc8938881.svg`}
                  alt=""
                  width={20}
                  height={20}
                />
              </button>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(36,29,29,0.12)] bg-white"
                aria-label="Next"
              >
                <Image
                  src={`${A}/d194a1c2-0b98-4833-be10-402409a3a47d.svg`}
                  alt=""
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        </section>

        {/* ─── FEATURES SECTION ─── */}
        <section
          id="features"
          className="scroll-mt-32 px-2 py-12 lg:px-4 lg:py-20"
        >
          {/* Top row: label + description */}
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-[rgba(236,72,72,0.15)] bg-white/80 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#c84f4a]">
              <span className="h-2 w-2 rounded-full bg-[#ec4848]" />
              Billing Made Simple
            </div>
            <p className="max-w-md text-sm leading-6 text-[#6f6561] lg:text-right">
              Billeif is designed to save you time and simplify your billing.
              Here&apos;s how our powerful features help you stay on top of your
              payments and invoice effortlessly.
            </p>
          </div>

          {/* Heading */}
          <h2 className="font-display mb-10 max-w-2xl text-4xl leading-[1.15] font-semibold tracking-[-0.03em] text-[#211a1a] sm:text-5xl">
            Powerful Features to Keep
            <br />
            <span className="font-serif italic text-[#ec4848]">
              Your Business On Track
            </span>
          </h2>

          {/* Feature cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl bg-[#fce8df] p-5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/70">
                  <Image
                    src={feature.icon}
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <h3 className="font-display text-base font-semibold tracking-[-0.02em] text-[#221c1b]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-[#71645f]">
                  {feature.copy}
                </p>
              </article>
            ))}
          </div>

          {/* Dashed divider */}
          <div className="my-12">
            <div className="border-t-2 border-dashed border-[#ec4848]" />
          </div>

          {/* Bro illustration (center) + Detailed features (right) */}
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="flex items-center justify-center">
              <Image
                src="/assets/bro.svg"
                alt="Billing illustration"
                width={719}
                height={661}
                className="w-full max-w-[520px]"
              />
            </div>
            <div className="space-y-6">
              {detailedFeatures.map((feature) => (
                <div key={feature.title}>
                  <div className="mb-2 flex items-center gap-2">
                    <Image
                      src={`${A}/769d85c0-4a14-4a45-aa9b-d12bcb93e9c9.svg`}
                      alt=""
                      width={20}
                      height={20}
                      className="shrink-0"
                    />
                    <h3 className="font-display text-lg font-bold text-[#221c1b]">
                      {feature.title}
                    </h3>
                  </div>
                  <ul className="space-y-1 pl-7">
                    {feature.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm leading-6 text-[#5f5451]"
                      >
                        -{point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PRICING SECTION ─── */}
        <section
          id="pricing"
          className="scroll-mt-32 px-2 py-12 lg:px-4 lg:py-20"
        >
          <div className="text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(236,72,72,0.15)] bg-white/80 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#c84f4a]">
              <span className="h-2 w-2 rounded-full bg-[#ec4848]" />
              Get Started Today — Your Billing, Your Way
            </div>
            <h2 className="font-display mx-auto max-w-3xl text-4xl leading-tight tracking-[-0.03em] text-[#211a1a] sm:text-5xl">
              Find{" "}
              <span className="font-serif italic text-[#ec4848]">
                the Right Plan
              </span>{" "}
              to Manage
              <br />
              Your Billing
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6f6561]">
              Whether you&apos;re a solo freelancer or managing a large team,
              FlowPay&apos;s pricing is built to scale with your business.
            </p>

            {/* Billing toggle */}
            <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-full border border-[rgba(36,29,29,0.08)] bg-white/90 p-1.5 shadow-[0_8px_24px_-16px_rgba(52,30,30,0.3)]">
              <button
                type="button"
                onClick={() => setBillingPeriod("yearly")}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  billingPeriod === "yearly"
                    ? "bg-[#ec4848] text-white"
                    : "text-[#6f6561]"
                }`}
              >
                Bill Yearly
              </button>
              <button
                type="button"
                onClick={() => setBillingPeriod("monthly")}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  billingPeriod === "monthly"
                    ? "bg-[#ec4848] text-white"
                    : "text-[#6f6561]"
                }`}
              >
                Bill Monthly
              </button>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative rounded-2xl border text-left ${
                  plan.featured
                    ? "border-[rgba(236,72,72,0.2)] bg-white shadow-[0_20px_50px_-20px_rgba(236,72,72,0.2)]"
                    : "border-[rgba(36,29,29,0.08)] bg-white"
                }`}
              >
                {/* Tag banner */}
                <div
                  className={`rounded-t-2xl px-5 py-2.5 text-center text-xs font-semibold ${
                    plan.featured
                      ? "bg-[#ec4848] text-white"
                      : "bg-[#fff3eb] text-[#8b7570]"
                  }`}
                >
                  {plan.tag}
                </div>

                <div className="p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#3d3331]">
                    {plan.name}
                  </p>
                  <p className="mt-1 text-xs text-[#8b7570]">{plan.billing}</p>

                  <div className="mt-4 flex items-end gap-1">
                    <span className="font-display text-4xl font-bold leading-none tracking-[-0.04em] text-[#221c1b]">
                      {plan.price}
                    </span>
                    <span className="pb-1 text-sm text-[#8d7a75]">
                      {plan.period}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#71645f]">
                    {plan.subtitle}
                  </p>

                  {/* Divider */}
                  <div className="my-5 h-px bg-[rgba(36,29,29,0.08)]" />

                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#8b7570]">
                    {plan.heading}
                  </p>

                  <ul className="space-y-3">
                    {plan.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm leading-5 text-[#5f5451]"
                      >
                        <Image
                          src={`${A}/769d85c0-4a14-4a45-aa9b-d12bcb93e9c9.svg`}
                          alt=""
                          width={18}
                          height={18}
                          className="mt-0.5 shrink-0"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`mt-6 flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                      plan.ctaStyle === "filled"
                        ? "bg-[#ec4848] text-white hover:bg-[#df4040]"
                        : "border border-[rgba(36,29,29,0.12)] bg-white text-[#2b2221] hover:border-[rgba(36,29,29,0.2)]"
                    }`}
                  >
                    {plan.cta}
                  </a>

                  {plan.footer && (
                    <a
                      href="#contact"
                      className="mt-3 block text-center text-sm font-medium text-[#ec4848] underline underline-offset-2"
                    >
                      {plan.footer}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ─── FAQS SECTION ─── */}
        <section
          id="faqs"
          className="scroll-mt-32 px-2 py-12 lg:px-4 lg:py-20"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-center text-4xl font-bold tracking-[-0.03em] text-[#211a1a] sm:text-5xl">
              F.A.Qs
            </h2>

            <div className="mt-10">
              {faqs.map((item, i) => (
                <details
                  key={item.question}
                  className="group border-b border-[rgba(36,29,29,0.12)] py-5"
                  open={i === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-base font-medium text-[#211a1a]">
                      {item.question}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="shrink-0 transition duration-300 group-open:rotate-180"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="#6f6561"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </summary>
                  <p className="pt-3 pr-8 text-sm leading-6 text-[#6f6561]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>

            {/* Still have a question */}
            <div className="mt-14 text-center">
              <h3 className="font-display text-2xl font-bold text-[#211a1a] sm:text-3xl">
                Still have a question?
              </h3>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#6f6561]">
                We&apos;ve covered the most common questions, but if you&apos;re
                still curious about how FlowPay works or need specific details,
                we&apos;re here to help. Don&apos;t hesitate to reach out —
                we&apos;re happy to provide more information and guide you
                through anything you need.
              </p>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer
          id="contact"
          className="scroll-mt-32 px-2 pb-0 pt-12 lg:px-4 lg:pt-16"
        >
          <div className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,238,228,0.7)_0%,rgba(255,248,244,0.95)_100%)] px-8 py-12 sm:px-12 lg:px-16 lg:py-14">
            {/* Top row: text left, social + nav right */}
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-[#211a1a] sm:text-4xl">
                  Break free from
                  <br />
                  <span className="font-serif text-[#ec4848] italic font-normal">
                    manual time-tracking.
                  </span>
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-6 text-[#6f6561]">
                  See how Billeif can automate your invoicing.
                </p>
              </div>

              <div className="flex flex-col gap-6 lg:items-end">
                {/* Social icons */}
                <div className="flex items-center gap-3">
                  {[
                    `${A}/3fc27bd9-cae3-436a-a2c3-02d08ff6ca32.svg`,
                    `${A}/24c0dd09-c0c0-4ace-8635-fd2118f20a07.svg`,
                    `${A}/919b75c7-e86a-4406-aa8d-62dd5400ba5f.svg`,
                  ].map((icon) => (
                    <span
                      key={icon}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(36,29,29,0.1)] bg-white/80"
                    >
                      <Image src={icon} alt="" width={18} height={18} />
                    </span>
                  ))}
                </div>

                {/* Footer nav - stacked vertically */}
                <nav className="flex flex-col gap-2 text-sm text-[#6f6561] lg:items-end">
                  <a href="#" className="hover:text-[#ec4848]">
                    Home
                  </a>
                  <a href="#pricing" className="hover:text-[#ec4848]">
                    pricing
                  </a>
                  <a href="#faqs" className="hover:text-[#ec4848]">
                    F.A.Qs
                  </a>
                  <a href="#contact" className="hover:text-[#ec4848]">
                    Contact Us
                  </a>
                </nav>
              </div>
            </div>

            {/* Large logo + billeif text */}
            <div className="mt-10 flex items-end gap-3">
              <Image
                src={`${A}/73b12338-23a7-4666-9243-7a63df613684.svg`}
                alt="Billeif"
                width={244}
                height={313}
                className="h-40 w-auto sm:h-52"
              />
              <span className="font-display pb-2 text-3xl font-bold tracking-wide text-[#211a1a] sm:text-4xl">
                bille<span className="text-[#ec4848]">i</span>f
              </span>
            </div>
          </div>

          {/* Copyright bar */}
          <div className="flex flex-col items-center justify-between gap-3 bg-[rgba(255,248,244,0.95)] px-8 py-5 text-xs text-[#8b7570] sm:flex-row sm:px-16">
            <p>
              &copy; 2026 Billeif Incorporated. Made in India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#ec4848]">
                Privacy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-[#ec4848]">
                Site Terms
              </a>
              <span>|</span>
              <a href="#" className="hover:text-[#ec4848]">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
