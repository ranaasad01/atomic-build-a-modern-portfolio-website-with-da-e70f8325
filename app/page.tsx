"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Code, Layout, Sparkles, Code2 as Github, MessageCircle as Twitter, Briefcase as Linkedin, Mail, Check, Eye, Heart } from 'lucide-react';
import { brandName, brandTagline, brandEmail } from "@/lib/data";
import { fadeInUp, fadeIn, staggerContainer, scaleIn, slideInLeft, slideInRight } from "@/lib/motion";
import { useTranslations } from "next-intl";

const featuredProjects = [
  {
    id: "1",
    title: "Orbit Design System",
    description: "A comprehensive component library built for scale. Covers tokens, accessibility, dark mode, and full Figma integration across 200+ components.",
    tags: ["React", "TypeScript", "Storybook", "Figma"],
    image: "https://s3-alpha.figma.com/hub/file/2243587999456758553/75e4372a-8462-487a-9eef-232cbcde11ad-cover.png",
    href: "/projects",
    featured: true,
    stat: "200+ components",
  },
  {
    id: "2",
    title: "Pulse Analytics",
    description: "Real-time data dashboard for SaaS teams. Visualizes user behavior, funnel drop-off, and revenue metrics with sub-second refresh rates.",
    tags: ["Next.js", "D3.js", "Supabase", "Tailwind"],
    image: "https://media.licdn.com/dms/image/v2/C560BAQFE9hgXdIuk8g/company-logo_200_200/company-logo_200_200/0/1630666773600/pulsedigital_logo?e=2147483647&v=beta&t=bZmZ1PqmRtJYH98AP9oD8heKWwDkKZXGbUyBxAe-vy0",
    href: "/projects",
    featured: true,
    stat: "10k+ users",
  },
  {
    id: "3",
    title: "Folio CMS",
    description: "Headless content management built for creative studios. Drag-and-drop layout editor, multi-locale support, and a GraphQL API out of the box.",
    tags: ["Node.js", "GraphQL", "PostgreSQL", "React"],
    image: "https://folio.org/wp-content/uploads/2023/08/folio-site-general-Illustration-social-image-1200.jpg",
    href: "/projects",
    stat: "50+ studios",
  },
];

const skills = [
  { name: "React & Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "GraphQL", category: "API" },
  { name: "Figma", category: "Design" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Framer Motion", category: "Animation" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Prisma", category: "ORM" },
  { name: "Vercel", category: "Deployment" },
];

const services = [
  {
    icon: Layout,
    title: "UI Engineering",
    description: "Pixel-perfect interfaces built with accessibility and performance as first-class concerns. From design tokens to production-ready components.",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "End-to-end product development covering APIs, databases, auth, and deployment. Shipped fast, built to last.",
  },
  {
    icon: Sparkles,
    title: "Creative Direction",
    description: "Brand identity, motion design, and visual systems that give products a distinct, memorable presence in a crowded market.",
  },
];

const testimonials = [
  {
    quote: "Alex transformed our product from a rough prototype into something our users genuinely love. The attention to detail is extraordinary.",
    author: "Sarah Chen",
    role: "CPO at Lumen Labs",
    avatar: "https://cdn.tatlerasia.com/tatlerasia/i/2023/10/18163147-untitled-design-4_cover_1600x938.jpg",
  },
  {
    quote: "Working with Alex felt like having a senior engineer and a lead designer in one. Delivery was fast, quality was exceptional.",
    author: "Marcus Reid",
    role: "Founder, Stackwise",
    avatar: "https://i.ytimg.com/vi/3pLk7sdrcuc/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHgCIAC0AWKAgwIABABGGUgYChYMA8=&rs=AOn4CLBH4YhPZSncmnX4I1oweRFsSNWHwQ",
  },
  {
    quote: "The design system Alex built cut our frontend development time in half. It's the foundation everything else is built on now.",
    author: "Priya Nair",
    role: "Engineering Lead, Orbit",
    avatar: "https://images.ctfassets.net/vztl6s0hp3ro/26BxtJGxXUMSWAQfPZfbVC/3838688bab3369fc3e6ee9bf9629a427/The-entry-level-listing-asking-for_-3-plus-years-of-experience.jpg",
  },
];

const stats = [
  { value: "8+", label: "Years of experience" },
  { value: "60+", label: "Projects shipped" },
  { value: "30+", label: "Happy clients" },
  { value: "99%", label: "Client satisfaction" },
];

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations();

  const motionProps = (variants: Variants) =>
    shouldReduceMotion ? {} : { variants, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-80px" } };

  return (
    <main className="bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 px-6">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-800/8 rounded-full blur-[80px]" />
        </div>

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold tracking-wide w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              {t("hero.available")}
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.05]"
            >
              {t("hero.headline_1")}{" "}
              <span className="text-purple-400">{t("hero.headline_accent")}</span>{" "}
              {t("hero.headline_2")}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/50 leading-relaxed max-w-md text-pretty"
            >
              {t("hero.subtext")}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-400 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_32px_rgba(168,85,247,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                {t("hero.cta_primary")}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/8 text-white/80 hover:text-white text-sm font-semibold rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                {t("hero.cta_secondary")}
              </Link>
            </motion.div>

            {/* Social proof mini */}
            <motion.div variants={fadeIn} className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {testimonials.map((tm) => (
                  <img
                    key={tm.author}
                    src={tm.avatar}
                    alt={tm.author}
                    className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={12} className="fill-purple-400 text-purple-400" />
                  ))}
                </div>
                <span className="text-xs text-white/40">{t("hero.social_proof")}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: floating card stack */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative hidden md:flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Main card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative rounded-2xl overflow-hidden border border-white/8 shadow-[0_8px_40px_rgba(0,0,0,0.6)] bg-[#111]"
              >
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQGb2qP9LgY89w/profile-displayphoto-scale_200_200/B4EZnHKmDhKkAY-/0/1759983069021?e=2147483647&v=beta&t=adX6PjxoqZM6h0myi-EwMwZSiivARvT6MQkdfctIP68"
                  alt="Alex Mercer workspace"
                  className="w-full h-64 object-cover opacity-80"
                />
                <div className="p-5">
                  <p className="text-xs text-purple-400 font-semibold tracking-wide uppercase mb-1">{brandTagline}</p>
                  <p className="text-white font-semibold text-lg">{brandName}</p>
                  <p className="text-white/40 text-sm mt-1">{t("hero.card_desc")}</p>
                </div>
              </motion.div>

              {/* Floating badge: currently building */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
                className="absolute -top-4 -right-6 bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              >
                <p className="text-[10px] text-white/40 font-medium uppercase tracking-wider">{t("hero.badge_building")}</p>
                <p className="text-sm text-white font-semibold mt-0.5">Orbit v2.0</p>
              </motion.div>

              {/* Floating badge: open to work */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5, ease: "easeOut" }}
                className="absolute -bottom-4 -left-6 bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-sm text-white font-semibold">{t("hero.badge_open")}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="border-y border-white/5 bg-white/[0.02] py-12 px-6">
        <motion.div
          variants={staggerContainer}
          {...motionProps(staggerContainer)}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="flex flex-col items-center text-center gap-1"
            >
              <span className="text-4xl font-bold text-white tracking-tight">{stat.value}</span>
              <span className="text-sm text-white/40">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            {...motionProps(staggerContainer)}
            className="mb-16"
          >
            <motion.p variants={fadeIn} className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
              {t("services.label")}
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance max-w-xl">
              {t("services.heading")}
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-white/50 text-lg leading-relaxed max-w-lg text-pretty">
              {t("services.subtext")}
            </motion.p>
          </motion.div>

          {/* Asymmetric bento layout */}
          <motion.div
            variants={staggerContainer}
            {...motionProps(staggerContainer)}
            className="grid md:grid-cols-3 gap-5"
          >
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  variants={scaleIn}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`relative rounded-2xl border border-white/8 bg-white/[0.03] p-7 flex flex-col gap-4 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-8px_rgba(0,0,0,0.4)] hover:border-purple-500/30 hover:bg-white/[0.05] transition-all duration-300 ${i === 0 ? "md:col-span-2" : ""}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center">
                    <Icon size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{svc.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{svc.description}</p>
                  </div>
                  <div className="mt-auto pt-2">
                    <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200">
                      {t("services.cta")} <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section id="projects" className="py-28 px-6 bg-white/[0.015]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            {...motionProps(staggerContainer)}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          >
            <div>
              <motion.p variants={fadeIn} className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
                {t("projects.label")}
              </motion.p>
              <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
                {t("projects.heading")}
              </motion.h2>
            </div>
            <motion.div variants={fadeIn}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white font-medium transition-colors duration-200"
              >
                {t("projects.view_all")} <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            {...motionProps(staggerContainer)}
            className="flex flex-col gap-6"
          >
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`group grid md:grid-cols-2 gap-0 rounded-2xl border border-white/8 overflow-hidden bg-[#111] shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_32px_-8px_rgba(0,0,0,0.5)] hover:border-purple-500/25 transition-all duration-300 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-56 md:h-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111]/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                      {project.stat}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center gap-4">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                  <p className="text-white/50 leading-relaxed text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-white/50 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200 mt-2 group/link"
                  >
                    {t("projects.view_case")}
                    <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          {/* Left: copy */}
          <motion.div
            variants={staggerContainer}
            {...motionProps(staggerContainer)}
            className="flex flex-col gap-6"
          >
            <motion.p variants={fadeIn} className="text-xs font-semibold text-purple-400 uppercase tracking-widest">
              {t("skills.label")}
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
              {t("skills.heading")}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/50 leading-relaxed text-pretty">
              {t("skills.subtext")}
            </motion.p>
            <motion.ul variants={staggerContainer} className="flex flex-col gap-3 mt-2">
              {[t("skills.point_1"), t("skills.point_2"), t("skills.point_3")].map((point) => (
                <motion.li key={point} variants={fadeInUp} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-purple-500/15 border border-purple-500/25 flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-purple-400" />
                  </span>
                  <span className="text-white/60 text-sm leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeInUp}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 hover:border-purple-500/40 bg-white/5 hover:bg-purple-500/10 text-white/80 hover:text-white text-sm font-semibold rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                {t("skills.cta")} <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: skill grid */}
          <motion.div
            variants={staggerContainer}
            {...motionProps(staggerContainer)}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={scaleIn}
                whileHover={{ scale: 1.04, borderColor: "rgba(168,85,247,0.35)" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3.5 flex flex-col gap-1 cursor-default shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
              >
                <span className="text-[10px] font-semibold text-purple-400/70 uppercase tracking-widest">{skill.category}</span>
                <span className="text-sm font-medium text-white/80">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 px-6 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            {...motionProps(staggerContainer)}
            className="text-center mb-16"
          >
            <motion.p variants={fadeIn} className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
              {t("testimonials.label")}
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
              {t("testimonials.heading")}
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            {...motionProps(staggerContainer)}
            className="grid md:grid-cols-3 gap-5"
          >
            {testimonials.map((tm, i) => (
              <motion.div
                key={tm.author}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`rounded-2xl border border-white/8 bg-white/[0.03] p-7 flex flex-col gap-5 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-8px_rgba(0,0,0,0.4)] hover:border-purple-500/25 transition-all duration-300 ${i === 1 ? "md:mt-6" : ""}`}
              >
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} size={13} className="fill-purple-400 text-purple-400" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed flex-1">{tm.quote}</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                  <img
                    src={tm.avatar}
                    alt={tm.author}
                    className="w-10 h-10 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{tm.author}</p>
                    <p className="text-xs text-white/40">{tm.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            {...motionProps(staggerContainer)}
            className="flex flex-col items-center gap-6"
          >
            <motion.div variants={scaleIn} className="w-16 h-16 rounded-2xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center">
              <Heart size={28} className="text-purple-400" />
            </motion.div>

            <motion.p variants={fadeIn} className="text-xs font-semibold text-purple-400 uppercase tracking-widest">
              {t("cta.label")}
            </motion.p>

            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              {t("cta.heading")}
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-white/50 text-lg leading-relaxed max-w-lg text-pretty">
              {t("cta.subtext")}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 justify-center pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-purple-500 hover:bg-purple-400 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-[0_0_28px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                {t("cta.button_primary")}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
              <a
                href={`mailto:${brandEmail}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/8 text-white/80 hover:text-white text-sm font-semibold rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                <Mail size={15} />
                {brandEmail}
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeIn} className="flex items-center gap-4 pt-4">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:border-purple-500/40 hover:bg-purple-500/10 flex items-center justify-center text-white/50 hover:text-purple-400 transition-all duration-300"
                  >
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
