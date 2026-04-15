"use client";

import Image from "next/image";
import { useState } from "react";
import Frame1948755428 from "./components/Header/Header";
import TestimonialsSection from "./components/Testimonials/Testimonials";

const A = "/assets/figma/website-page";

const featureCards = [
  {
    icon: `${A}/e6953b17-5e8e-4047-a413-2cba45ef619d.svg`,
    title: "Zero-Touch GST Invoicing",
    copy: "Ramesh General Store ko 50 kilo chawal ka bill bhej do. The agent resolves identity, checks ledger for old Udhaar (credit), applies tiered discounts, calculates GST/HSN codes, and sends WhatsApp invoice with UPI link—automatically",
  },
  {
    icon: `${A}/2bd35cf7-4a4b-44de-9123-b955c44f1750.svg`,
    title: "Automatic GST Reconciliation",
    copy: "Automatically reconciles purchase records with GSTR-2A/2B. Proactively alerts about missing invoices.",
  },
  {
    icon: `${A}/0847cfc1-0f60-4db8-b982-8e8483096fab.svg`,
    title: "Digital Twin Inventory",
    copy: "Updates stock via natural speech. Flags near-expiry items for clearance automatically.",
  },
  {
    icon: `${A}/def58c92-70ce-4fe3-b5e1-64fbcf34a034.svg`,
    title: "Autonomous Collections",
    copy: "Tracks Accounts Receivable and sends tiered reminders (Friendly → Firm → Formal) to recover debts.",
  },
] as const;

const featureIcons: Record<string, string> = {
  'Voice-First "No-UI"': '/vc.svg',
  'GST Compliance': '/invoice.svg',
  'IdleAI GST Automation': '/ai.svg',
  'Security features': '/shield.svg',
};

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
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* ─── Warm peach gradient background ─── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, #ffe1cc 0%, rgba(255,255,255,0) 48.56%, #ffe1cc 98.56%)",
        }}
      />

      {/* Ambient glow behind hero */}
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full z-0"
        style={{
          bottom: 0,
          width: 900,
          height: 700,
          background:
            "radial-gradient(ellipse, rgba(236,72,72,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ─── NAVIGATION ─── */}
        <header className="pt-4">
          <Frame1948755428 />
        </header>

        {/* ─── HERO SECTION (Framer-style) ─── */}
        <section className="relative px-2 pb-16 pt-12 text-center sm:pt-16 lg:pt-20">
          {/* Hero headline */}
          <h1
            className="mx-auto max-w-4xl text-[clamp(2rem,5.5vw,4rem)] font-bold leading-[1.1] tracking-[-2px] text-[#282828] sm:text-[clamp(2.5rem,5.5vw,4rem)]"
            style={{ fontFamily: "var(--font-figtree), Figtree, sans-serif" }}
          >
            From Voice to Invoice Instantly.
          </h1>
          <p
            className="mx-auto mt-4 max-w-4xl text-[clamp(2rem,5.5vw,4rem)] font-bold leading-[1.1] tracking-[-2px] text-[#ec4848] sm:text-[clamp(2.5rem,5.5vw,4rem)]"
            style={{ fontFamily: "var(--font-figtree), Figtree, sans-serif" }}
          >
            <span className="text-[#282828]">powered by </span><a href="https://cyfernova.in" target="_blank" rel="noopener noreferrer" className="text-[#ec4848] hover:no-underline">CyferNova </a><span className="text-[#282828]">.</span>
          </p>

          {/* App store buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-[60px] gap-y-4 max-sm:gap-x-4 max-sm:mt-8">
            <a
              href="#"
              className="group relative h-[57px] w-[203px] cursor-pointer max-sm:h-12 max-sm:w-[140px]"
            >
              <div
                className="absolute inset-0 rounded-[3px] transition-transform group-hover:translate-x-[1px] group-hover:translate-y-[1px]"
                style={{
                  backgroundColor: "#ec4848",
                  boxShadow: "1px 2px 0px #282828",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/assets/apple.svg"
                  alt="Download on App Store"
                  width={48}
                  height={48}
                  className="pointer-events-none max-sm:w-10 max-sm:h-10"
                />
              </div>
            </a>
            <a
              href="#"
              className="group relative h-[57px] w-[203px] cursor-pointer max-sm:h-12 max-sm:w-[140px]"
            >
              <div
                className="absolute inset-0 rounded-[3px] transition-transform group-hover:translate-x-[1px] group-hover:translate-y-[1px]"
                style={{
                  backgroundColor: "#ec4848",
                  boxShadow: "1px 2px 0px #282828",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/assets/playstore.svg"
                  alt="Get it on Play Store"
                  width={48}
                  height={48}
                  className="pointer-events-none max-sm:w-10 max-sm:h-10"
                />
              </div>
            </a>
          </div>

          {/* Hero illustration with phone mockup + floating cards */}
          <div className="relative mx-auto mt-10 max-w-3xl">
            {/* Mobile and tablet badges */}
            <div className="mb-4 px-1 xl:hidden">
              <div
                className="flex items-center rounded-2xl p-3"
                style={{
                  backgroundColor: "rgba(255,255,255,0.72)",
                  boxShadow: "0.8px 1.7px 22px 2px rgba(0,0,0,0.07)",
                }}
              >
                <Image
                  src="/assets/star.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="shrink-0"
                />
                <div className="ml-2.5 flex flex-col">
                  <span
                    className="text-[14px] font-semibold leading-[1.2] text-[#282828]"
                    style={{ fontFamily: "var(--font-figtree), Figtree, sans-serif" }}
                  >
                    Agentic Automation
                  </span>
                  <span
                    className="text-[13px] font-medium leading-[1.2] text-[#5e5d5b]"
                    style={{ fontFamily: "var(--font-figtree), Figtree, sans-serif" }}
                  >
                    Easy billing & <span style={{ color: "#ec4848" }}>AI</span>{" "}
                    support
                  </span>
                </div>
              </div>
            </div>

            {/* Agentic Automation badge (left) */}
            <div
              className="absolute z-10 hidden overflow-hidden rounded-[20px] backdrop-blur-sm xl:block"
              style={{
                top: 200,
                left: -200,
                width: 296.3,
                height: 81,
                backgroundColor: "rgba(255,255,255,0.65)",
                opacity: 0.93,
                boxShadow: "0.8px 1.7px 32px 10px rgba(0,0,0,0.06)",
              }}
            >
              <Image
                src="/assets/star.svg"
                alt=""
                width={48}
                height={48}
                className="absolute"
                style={{ top: 14.19, left: 10.97 }}
              />
              <div
                className="absolute flex flex-col gap-0.5"
                style={{ top: 19, left: 72, width: 205 }}
              >
                <span
                  className="absolute text-[15.7px] font-semibold leading-[19.72px] tracking-[-0.17px] text-[#282828]"
                  style={{ fontFamily: "var(--font-figtree), Figtree, sans-serif", top: -0.36, left: 0 }}
                >
                  Agentic Automation
                </span>
                <span
                  className="absolute text-[15px] font-medium leading-[19.72px] tracking-[-0.17px]"
                  style={{ fontFamily: "var(--font-figtree), Figtree, sans-serif", color: "rgba(63,63,63,0.75)", top: 18.36, left: 0 }}
                >
                  Easy billing & <span style={{ color: "#ec4848" }}>AI</span>{" "}
                  <span style={{ color: "#797876" }}>support</span>
                </span>
              </div>
            </div>

            {/* Voice powered AI badge (right) */}
            <div
              className="absolute z-10 hidden overflow-hidden rounded-[20px] backdrop-blur-sm xl:block"
              style={{
                top: 90,
                right: -190,
                width: 296.3,
                height: 81,
                backgroundColor: "rgba(255,255,255,0.65)",
                opacity: 0.93,
                boxShadow: "0.8px 1.7px 32px 10px rgba(0,0,0,0.06)",
              }}
            >
              <Image
                src="/assets/voice.svg"
                alt=""
                width={48}
                height={48}
                className="absolute"
                style={{ top: 14.19, left: 10.97 }}
              />
              <div
                className="absolute flex flex-col gap-0.5"
                style={{ top: 18.97, left: 71.97, width: 128.9 }}
              >
                <span
                  className="absolute text-[15.7px] font-semibold leading-[19.72px] tracking-[-0.17px] text-[#282828]"
                  style={{ fontFamily: "var(--font-figtree), Figtree, sans-serif", top: -0.36, left: 0 }}
                >
                  Voice powered <span style={{ color: "#ec4848" }}>AI</span>{" "}
                </span>
                <span
                  className="absolute text-[15px] font-medium leading-[19.72px] tracking-[-0.17px]"
                  style={{ fontFamily: "var(--font-figtree), Figtree, sans-serif", color: "rgba(63,63,63,0.75)", top: 21.03, left: 0 }}
                >
                  billing Assistant
                </span>
              </div>
              <div
                className="absolute flex items-center justify-center overflow-hidden"
                style={{ top: 18.97, left: 210.83, width: 61.5, height: 41.4 }}
              >
              </div>
            </div>

            {/* Decorative circles */}
            <Image
              src="/assets/round.svg"
              alt=""
              width={86}
              height={86}
              className="absolute z-[3] hidden xl:block"
              style={{ top: -25, left: "calc(50% - 390px)" }}
            />
            <Image
              src="/assets/round.svg"
              alt=""
              width={86}
              height={86}
              className="absolute z-[3] hidden xl:block"
              style={{ top: 450, left: "calc(50% + 310px)" }}
            />

            {/* Phone mockup frame */}
            <div
              className="relative mx-auto w-full overflow-hidden rounded-[24px] border-[8px] border-white/50 box-border sm:rounded-[32px] sm:border-[12px] lg:rounded-[44px] lg:border-[19px]"
              style={{
                maxWidth: 737,
                aspectRatio: "737 / 518",
              }}
            >
              <Image
                src="/assets/billvec.png"
                alt="Billeif app illustration"
                width={644}
                height={429}
                unoptimized
                className="absolute left-1/2 top-1/2 w-[92%] max-w-[644px] -translate-x-1/2 -translate-y-1/2 h-auto"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>

            <div className="mt-4 px-1 xl:hidden">
              <div
                className="flex items-center rounded-2xl p-3"
                style={{
                  backgroundColor: "rgba(255,255,255,0.72)",
                  boxShadow: "0.8px 1.7px 22px 2px rgba(0,0,0,0.07)",
                }}
              >
                <Image
                  src="/assets/voice.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="shrink-0"
                />
                <div className="ml-2.5 flex flex-col">
                  <span
                    className="text-[14px] font-semibold leading-[1.2] text-[#282828]"
                    style={{ fontFamily: "var(--font-figtree), Figtree, sans-serif" }}
                  >
                    Voice powered
                  </span>
                  <span
                    className="text-[13px] font-medium leading-[1.2] text-[#5e5d5b]"
                    style={{ fontFamily: "var(--font-figtree), Figtree, sans-serif" }}
                  >
                    billing Assistant
                  </span>
                </div>
                <span
                  className="ml-auto text-[14px] font-semibold text-[#ec4848]"
                  style={{ fontFamily: "var(--font-figtree), Figtree, sans-serif" }}
                >
                  AI
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS SECTION ─── */}
        <TestimonialsSection />

        {/* ─── FEATURES SECTION ─── */}
        <section
          id="features"
          className="scroll-mt-32 px-4 py-12 lg:px-4 lg:py-20"
        >
          {/* Billing pill */}
          <div
            style={{
              borderRadius: '12px',
              background: 'radial-gradient(50% 50% at 50% 50%, #fff, #F7B2AC) border-box, #f7b2ac padding-box',
              border: '1.1px solid #f7b2ac',
              boxSizing: 'border-box',
              width: 'auto',
              display: 'inline-flex',
              alignItems: 'center',
              padding: '8.6px 17.2px',
              marginBottom: '16px',
              fontFamily: 'Figtree, sans-serif',
            }}
          >
            <div
              style={{
                position: 'relative',
                lineHeight: '17.17px',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: '#0b0b0b',
                fontFamily: 'Figtree, sans-serif',
                fontSize: '15.02px',
              }}
            >
              Billing Made Simple
            </div>
          </div>

          {/* Heading + Description row */}
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10 mb-12">
            <b
              style={{
                width: '100%',
                maxWidth: '662px',
                fontSize: 'clamp(26px, 4vw, 51.5px)',
                lineHeight: '120%',
                display: 'inline-block',
                fontFamily: 'Figtree, sans-serif',
                textAlign: 'left',
                color: '#282828',
                fontWeight: 700,
              }}
            >
              Powerful Features to Keep{' '}
              <span style={{ color: '#ec4848' }}>Your Business On Track</span>
            </b>

            <div
              style={{
                width: '100%',
                maxWidth: '400px',
                fontSize: 'clamp(13px, 1.5vw, 20px)',
                lineHeight: '150%',
                fontFamily: 'Figtree, sans-serif',
                color: '#0b0b0b',
                textAlign: 'left',
                opacity: 0.7,
                paddingTop: '4px',
              }}
            >
              Billeif is designed to save you time and simplify your billing.
              Here&apos;s how our powerful features help you stay on top of your
              payments and invoices effortlessly.
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featureCards.map((feature) => (
              <article
                key={feature.title}
                style={{
                  boxShadow: '2.86px 2.86px 10.8px 1.43px rgba(0, 0, 0, 0.05)',
                  borderRadius: '8.58px',
                  background: 'linear-gradient(180deg, rgba(255, 237, 213, 0) 14.42%, #fff7ed 35.1%, #fd8877)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '24px',
                  gap: '14px',
                }}
              >
                <div style={{ width: '43px', height: '43px', position: 'relative' }}>
                  <Image
                    src="/assets/round.svg"
                    alt=""
                    width={43}
                    height={43}
                    style={{ position: 'absolute', top: 0, left: 0, objectFit: 'contain', zIndex: 1 }}
                  />
                  <Image
                    src={feature.icon}
                    alt=""
                    width={20}
                    height={20}
                    style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', objectFit: 'contain', zIndex: 2 }}
                  />
                </div>

                <h3
                  style={{
                    alignSelf: 'stretch',
                    position: 'relative',
                    lineHeight: '130%',
                    fontSize: 'clamp(14px, 1.5vw, 18px)',
                    fontWeight: 700,
                    color: '#0b0b0b',
                    fontFamily: 'Figtree, sans-serif',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    alignSelf: 'stretch',
                    position: 'relative',
                    fontSize: 'clamp(11px, 1vw, 14px)',
                    lineHeight: '150%',
                    color: '#0b0b0b',
                    fontFamily: 'Figtree, sans-serif',
                  }}
                >
                  {feature.copy}
                </p>
              </article>
            ))}
          </div>

<div className="my-15">

</div>
          {/* Bro illustration (center) + Detailed features (right) */}
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="flex items-start justify-center mt-[20px]">
              <Image
                src="/assets/bro.svg"
                alt="Billing illustration"
                width={719}
                height={661}
                className="w-full max-w-[520px]"
              />
            </div>
                        <div className="space-y-5">
              {detailedFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-[42.9px] relative"
                >
                  {/* Icon with crcl.svg background */}
                  <div
                    style={{
                      width: 43,
                      height: 43,
                      borderRadius: '50%',
                      backgroundImage: 'url(/crcl.svg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      boxShadow: '2.86px 2.86px 10.8px 1.43px rgba(0,0,0,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    <Image
                      src={featureIcons[feature.title]}
                      alt=""
                      width={24}
                      height={24}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex-1 flex flex-col items-start gap-[10.7px] pb-5">
                    <b
                      style={{
                        alignSelf: 'stretch',
                        lineHeight: '140%',
                        color: '#221c1b',
                      }}
                    >
                      {feature.title}
                    </b>
                    <ul className="space-y-1.5 pl-0" style={{ opacity: 0.7 }}>
                      {feature.points.map((point) => (
                        <li
                          key={point}
                          style={{
                            fontSize: 20,
                            lineHeight: '150%',
                            color: '#5f5451',
                          }}
                        >
                          • {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dashed connector — only shown for non-last items */}
                  <div
                    style={{
                      position: 'absolute',
                      left: 21,
                      top: 43,
                      bottom: 0,
                      width: 0,
                      borderRight: '2.1px dashed #ec4848',
                      zIndex: 0,
                      display: detailedFeatures.indexOf(feature) < detailedFeatures.length - 1 ? 'block' : 'none',
                    }}
                  />
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
            {/* Get Started Today pill — matching "Billing Made Simple" style */}
            <div
              style={{
                borderRadius: '12px',
                background: 'radial-gradient(50% 50% at 50% 50%, #fff, #F7B2AC) border-box, #f7b2ac padding-box',
                border: '1.1px solid #f7b2ac',
                boxSizing: 'border-box',
                width: 'auto',
                display: 'inline-flex',
                alignItems: 'center',
                padding: '8.6px 17.2px',
                marginBottom: '16px',
                fontFamily: 'Figtree, sans-serif',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  lineHeight: '17.17px',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  color: '#0b0b0b',
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '15.02px',
                }}
              >
                Get Started Today — Your Billing, Your Way
              </div>
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

          {/* Pricing cards grid */}
          <style>{`
            .pricing-card { transition: all 0.3s ease; cursor: pointer; }
            .pricing-card:hover { transform: translateY(-4px); box-shadow: 0px 20px 40px -8px rgba(242, 128, 14, 0.2), 0px 8px 16px -4px rgba(10, 13, 18, 0.08) !important; border-color: #f2800e !important; }
            @media (max-width: 1024px) {
              .pricing-grid { grid-template-columns: 1fr !important; max-width: 480px !important; }
            }
          `}</style>
          <div className="mx-auto mt-10 grid pricing-grid max-w-5xl gap-5 lg:grid-cols-3 items-stretch">

            {/* ── FREE PLAN ── */}
            <div className="pricing-card w-full rounded-2xl border border-[#fff0f3] bg-white flex flex-col items-start overflow-hidden" style={{ boxShadow: '0px 11.47px 15.29px -3.82px rgba(10, 13, 18, 0.08), 0px 3.82px 5.73px -1.91px rgba(10, 13, 18, 0.03)', fontFamily: 'Figtree, sans-serif', color: '#181d27' }}>
              {/* Badge */}
              <div className="w-full bg-[#ec4848] flex items-center justify-center py-2 px-3">
                <b className="text-white text-center" style={{ fontSize: 'clamp(11px, 2vw, 17.2px)', lineHeight: 1.5 }}>For one person</b>
              </div>

              {/* Header */}
              <div className="w-full bg-[#fff0f3] flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pt-8 pb-4 gap-4">
                {/* Illustration */}
                <div className="w-16 h-16 sm:w-[76px] sm:h-[76px] relative flex-shrink-0">
                  <Image src="/rocket.svg" alt="" fill style={{ objectFit: 'contain' }} />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="uppercase font-semibold" style={{ fontSize: 'clamp(16px, 3vw, 22.93px)', lineHeight: 1.26 }}>FREE PLAN</div>
                  <div style={{ fontSize: 'clamp(12px, 2vw, 17.2px)', color: '#50535b', lineHeight: 1.5 }}>Billed annually.</div>
                </div>
                <div className="font-bold" style={{ fontSize: 'clamp(28px, 5vw, 45.86px)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>₹0/Month</div>
                <div style={{ fontSize: 'clamp(11px, 1.5vw, 13.38px)', color: '#50535b', lineHeight: 1.4 }}>Design anything and bring your ideas to life</div>
              </div>

              {/* Content */}
              <div className="w-full flex flex-col p-4 sm:p-6 lg:p-8 gap-5 flex-1">
                <div className="font-semibold" style={{ fontSize: 'clamp(13px, 1.8vw, 15.29px)', lineHeight: 1.5 }}>Features you'll get:</div>
                <div className="flex flex-col gap-3 sm:gap-4" style={{ color: '#50535b' }}>
                  {[
                    'Easy drag & drop editor',
                    'Large library of professionally designed templates',
                    '1000+ design types',
                    'Large library of stock photos & graphics',
                    '10 GB of cloud storage',
                  ].map((text) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
                        <Image src="/assets/figma/website-page/769d85c0-4a14-4a45-aa9b-d12bcb93e9c9.svg" alt="" fill style={{ objectFit: 'contain' }} />
                      </div>
                      <span className="flex-1" style={{ fontSize: 'clamp(12px, 1.6vw, 15.29px)', lineHeight: 1.5 }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="w-full p-4 sm:p-6 lg:p-8 pt-0 flex flex-col gap-3">
                <a href="#contact" className="w-full h-11 sm:h-[49.7px] rounded-lg bg-white border border-[#242424] flex items-center justify-center text-[#242424] no-underline font-semibold" style={{ fontSize: 'clamp(13px, 1.8vw, 17.2px)', lineHeight: 1.5 }}>
                  Get Started
                </a>
              </div>
            </div>

            {/* ── PRO PLAN (Featured) ── */}
            <div className="pricing-card w-full rounded-2xl border border-[#fff0f3] bg-white flex flex-col items-start overflow-hidden" style={{ boxShadow: '0px 11.47px 15.29px -3.82px rgba(10, 13, 18, 0.08), 0px 3.82px 5.73px -1.91px rgba(10, 13, 18, 0.03)', fontFamily: 'Figtree, sans-serif', color: '#181d27' }}>
              {/* Badge */}
              <div className="w-full bg-[#f24822] flex items-center justify-center py-2 px-3">
                <b className="text-white text-center" style={{ fontSize: 'clamp(11px, 2vw, 17.2px)', lineHeight: 1.5 }}>For one person | Most Popular</b>
              </div>

              {/* Header */}
              <div className="w-full bg-[#fff0f3] flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pt-8 pb-4 gap-4">
                {/* Illustration */}
                <div className="w-16 h-16 sm:w-[76px] sm:h-[76px] relative flex-shrink-0">
                  <Image src="/thunder.svg" alt="" fill style={{ objectFit: 'contain' }} />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="uppercase font-semibold" style={{ fontSize: 'clamp(16px, 3vw, 22.93px)', lineHeight: 1.26 }}>PRO PLAN</div>
                  <div style={{ fontSize: 'clamp(12px, 2vw, 17.2px)', color: '#50535b', lineHeight: 1.5 }}>Billed annually.</div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="font-bold" style={{ fontSize: 'clamp(28px, 5vw, 45.86px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#181d27' }}>₹599/Month</div>
                  <div style={{ fontSize: 'clamp(11px, 1.5vw, 15.29px)', color: '#50535b', lineHeight: 1.5 }}>₹7200/Year</div>
                </div>
                <div style={{ fontSize: 'clamp(11px, 1.5vw, 13.38px)', color: '#50535b', lineHeight: 1.4 }}>Unlock more powerful design tools.</div>
              </div>

              {/* Content */}
              <div className="w-full flex flex-col p-4 sm:p-6 lg:p-8 gap-5 flex-1 bg-white">
                <div className="font-semibold" style={{ fontSize: 'clamp(13px, 1.8vw, 15.29px)', lineHeight: 1.5 }}>In addition to free, you'll get:</div>
                <div className="flex flex-col gap-3 sm:gap-4" style={{ color: '#50535b' }}>
                  {[
                    'Unlimited premium templates',
                    'Customizable brand kits to manage your brands',
                    '100 M+ visual assets',
                    'Quickly resize and translate designs to increase efficiency',
                    '30 GB of cloud storage',
                  ].map((text) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
                        <Image src="/assets/figma/website-page/769d85c0-4a14-4a45-aa9b-d12bcb93e9c9.svg" alt="" fill style={{ objectFit: 'contain' }} />
                      </div>
                      <span className="flex-1" style={{ fontSize: 'clamp(12px, 1.6vw, 15.29px)', lineHeight: 1.5 }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="w-full p-4 sm:p-6 lg:p-8 pt-0 flex flex-col bg-white">
                <a href="#contact" className="w-full h-11 sm:h-[49.7px] rounded-lg flex items-center justify-center text-white font-semibold no-underline" style={{ fontSize: 'clamp(13px, 1.8vw, 17.2px)', lineHeight: 1.5, backgroundColor: '#f92d59', border: '1px solid #f92d59' }}>
                  Start Free Trial
                </a>
              </div>
            </div>

            {/* ── TEAM PLAN ── */}
            <div className="pricing-card w-full rounded-2xl border border-[#fff0f3] bg-white flex flex-col items-start overflow-hidden" style={{ boxShadow: '0px 11.47px 15.29px -3.82px rgba(10, 13, 18, 0.08), 0px 3.82px 5.73px -1.91px rgba(10, 13, 18, 0.03)', fontFamily: 'Figtree, sans-serif', color: '#181d27' }}>
              {/* Badge */}
              <div className="w-full bg-[#ec4848] flex items-center justify-center py-2 px-3">
                <b className="text-white text-center" style={{ fontSize: 'clamp(11px, 2vw, 17.2px)', lineHeight: 1.5 }}>For your team</b>
              </div>

              {/* Header */}
              <div className="w-full bg-[#fff0f3] flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pt-8 pb-4 gap-4">
                {/* Illustration */}
                <div className="w-16 h-16 sm:w-[76px] sm:h-[76px] relative flex-shrink-0">
                  <Image src="/team.svg" alt="" fill style={{ objectFit: 'contain' }} />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="uppercase font-semibold" style={{ fontSize: 'clamp(16px, 3vw, 22.93px)', lineHeight: 1.26 }}>TEAM PLAN</div>
                  <div style={{ fontSize: 'clamp(12px, 2vw, 17.2px)', color: '#50535b', lineHeight: 1.5 }}>Billed annually.</div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="font-bold" style={{ fontSize: 'clamp(28px, 5vw, 45.86px)', letterSpacing: '-0.02em', lineHeight: 1.2, color: '#181d27' }}>₹699/Month*</div>
                  <div style={{ fontSize: 'clamp(11px, 1.5vw, 15.29px)', color: '#50535b', lineHeight: 1.5 }}>₹8388/Year</div>
                  <div style={{ fontSize: 'clamp(11px, 1.5vw, 15.29px)', color: '#50535b', lineHeight: 1.5 }}>* per person cost</div>
                </div>
                <div style={{ fontSize: 'clamp(11px, 1.5vw, 13.38px)', color: '#50535b', lineHeight: 1.4 }}>Transform and grow your teamwork.</div>
              </div>

              {/* Content */}
              <div className="w-full flex flex-col p-4 sm:p-6 lg:p-8 gap-5 flex-1">
                <div className="font-semibold" style={{ fontSize: 'clamp(13px, 1.8vw, 15.29px)', lineHeight: 1.5 }}>In addition to pro, you'll get:</div>
                <div className="flex flex-col gap-3 sm:gap-4" style={{ color: '#50535b' }}>
                  {[
                    'Scale and centralize brand identity',
                    'Ensure brand consistency with streamlined approvals',
                    'Team reports and insights',
                    'Edit, comment and collaborate in real time',
                    '1 TB of cloud storage',
                  ].map((text) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
                        <Image src="/assets/figma/website-page/769d85c0-4a14-4a45-aa9b-d12bcb93e9c9.svg" alt="" fill style={{ objectFit: 'contain' }} />
                      </div>
                      <span className="flex-1" style={{ fontSize: 'clamp(12px, 1.6vw, 15.29px)', lineHeight: 1.5 }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="w-full p-4 sm:p-6 lg:p-8 pt-0 flex flex-col gap-3">
                <a href="#contact" className="w-full h-11 sm:h-[49.7px] rounded-lg bg-white border border-[#242424] flex items-center justify-center text-[#242424] no-underline font-semibold" style={{ fontSize: 'clamp(13px, 1.8vw, 17.2px)', lineHeight: 1.5 }}>
                  Start Free Trial
                </a>
                <a href="#contact" className="w-full h-11 sm:h-[49.7px] rounded-lg bg-white flex items-center justify-center text-[#f92d59] no-underline font-semibold" style={{ fontSize: 'clamp(13px, 1.8vw, 17.2px)', lineHeight: 1.5, border: '1px solid transparent' }}>
                  Contact Sales
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ─── FAQS SECTION ─── */}
        <section
          id="faqs"
          className="scroll-mt-32 px-2 py-12 lg:px-4 lg:py-20"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-center text-4xl font-bold tracking-[-0.03em] text-[#F92D59] sm:text-5xl">
              F.A.Qs
            </h2>

            <div className="mt-10">
              {faqs.map((item, i) => (
                <details
                  key={item.question}
                  className="group border-b border-[rgba(36,29,29,0.12)] py-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-base font-medium text-[#211a1a] hover:text-[#F92D59] transition-colors">
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
                        stroke="#F92D59"
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
            <div className="mt-14 flex flex-col items-center gap-10 w-full">
              <div className="w-full flex flex-col items-center gap-4 max-w-full">
                <h3 className="w-full font-bold text-center text-[#0b0b0b]" style={{ fontSize: 'clamp(22px, 4vw, 34.33px)', lineHeight: '130%', fontFamily: 'Figtree, sans-serif' }}>
                  Still have a question?
                </h3>
                <p className="w-full text-center" style={{ fontSize: 'clamp(13px, 2vw, 17.17px)', lineHeight: '150%', color: '#0b0b0b', opacity: 0.7, fontFamily: 'Figtree, sans-serif' }}>
                  We've covered the most common questions, but if you're still curious about how FlowPay works or need specific details, we're here to help. Don't hesitate to reach out—we're happy to provide more information and guide you through anything you need.
                </p>
              </div>

              {/* Contact button */}
              <div className="relative w-[203px] h-[57px] cursor-pointer group">
                <div
                  className="absolute inset-0 rounded-[3px] transition-transform group-hover:translate-x-[1px] group-hover:translate-y-[1px]"
                  style={{ backgroundColor: '#ec4848', boxShadow: '1px 2px 0px #282828' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src="/call.svg" alt="Contact" width={48} height={48} />
                </div>
              </div>
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
            <div className="mt-10 flex flex-col items-center gap-3">
              <Image
                src="/assets/billeif.png"
                alt="Billeif"
                width={200}
                height={160}
                className="h-32 w-auto sm:h-40"
                style={{ objectFit: "contain" }}
              />
              <Image
                src="/assets/billeif-header.png"
                alt="Billeif"
                width={140}
                height={48}
                className="h-10 w-auto sm:h-12"
              />
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
