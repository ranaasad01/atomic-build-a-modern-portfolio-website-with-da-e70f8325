"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Code2 as Github, Star } from 'lucide-react';
import { fadeInUp, fadeIn, staggerContainer, scaleIn } from "@/lib/motion";
import { useTranslations } from "next-intl";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  image: string;
  href: string;
  githubHref: string;
  featured?: boolean;
  year: string;
}

const projects: ProjectItem[] = [
  {
    id: "1",
    title: "Luminary Design System",
    description: "A comprehensive component library built for scale, with dark-mode-first tokens and full accessibility compliance.",
    longDescription: "Luminary is a battle-tested design system powering 12 production apps. It ships with 80+ components, a Figma kit, and automated visual regression tests.",
    tags: ["React", "TypeScript", "Storybook", "CSS Variables"],
    category: "Frontend",
    image: "https://i.ytimg.com/vi/glCQ5z3yMno/maxresdefault.jpg",
    href: "https://github.com",
    githubHref: "https://github.com",
    featured: true,
    year: "2024",
  },
  {
    id: "2",
    title: "Orbit Analytics Dashboard",
    description: "Real-time SaaS analytics platform with customizable widgets, cohort analysis, and one-click PDF exports.",
    longDescription: "Orbit processes over 2M events per day, surfacing actionable insights through a drag-and-drop dashboard builder and smart alerting.",
    tags: ["Next.js", "Recharts", "Prisma", "PostgreSQL"],
    category: "Full Stack",
    image: "https://static1.agorapulse.com/video-tutorials/wp-content/uploads/sites/21/2023/11/maxresdefault-3.png",
    href: "https://github.com",
    githubHref: "https://github.com",
    featured: true,
    year: "2024",
  },
  {
    id: "3",
    title: "Pulse — AI Writing Assistant",
    description: "GPT-4-powered writing tool that adapts to your tone, suggests edits inline, and tracks document history.",
    longDescription: "Pulse integrates with Notion and Google Docs, offering context-aware suggestions and a distraction-free editor mode.",
    tags: ["OpenAI", "Next.js", "Tailwind", "Supabase"],
    category: "AI / ML",
    image: "https://preview.redd.it/3d-exaggerated-topographic-globe-v0-o4nec9m13s8a1.jpg?auto=webp&s=1d2cc4b2adc1b417b6dde98a355cbc4a78a67e5e",
    href: "https://github.com",
    githubHref: "https://github.com",
    featured: true,
    year: "2024",
  },
  {
    id: "4",
    title: "Terrain 3D Globe",
    description: "Interactive WebGL globe visualizing global climate data with animated heatmaps and time-scrubbing.",
    longDescription: "Built with Three.js and custom GLSL shaders, Terrain renders 50 years of climate data at 60fps on modern hardware.",
    tags: ["Three.js", "WebGL", "GLSL", "D3.js"],
    category: "Creative",
    image: "https://www.esds.co.in/blog/wp-content/uploads/2011/01/internet-relay-chat.jpg",
    href: "https://github.com",
    githubHref: "https://github.com",
    year: "2023",
  },
  {
    id: "5",
    title: "Relay — Real-time Chat",
    description: "End-to-end encrypted messaging app with presence indicators, file sharing, and thread replies.",
    longDescription: "Relay uses WebSockets and CRDT-based conflict resolution to deliver sub-100ms message delivery across 30+ countries.",
    tags: ["Socket.io", "Redis", "React", "Node.js"],
    category: "Full Stack",
    image: "https://nearesttruth.com/wp-content/uploads/2020/11/HollyRoussellcEugeneHyland-scaled.jpg",
    href: "https://github.com",
    githubHref: "https://github.com",
    year: "2023",
  },
  {
    id: "6",
    title: "Mosaic — Photo Curator",
    description: "Smart photo organization app that auto-tags images using on-device ML and generates shareable galleries.",
    longDescription: "Mosaic runs entirely on-device using TensorFlow Lite, ensuring privacy while delivering instant tagging and face grouping.",
    tags: ["React Native", "TensorFlow Lite", "Expo", "SQLite"],
    category: "Mobile",
    image: "https://picsum.photos/seed/91cdae5f146b/800/600",
    href: "https://github.com",
    githubHref: "https://github.com",
    year: "2023",
  },
  {
    id: "7",
    title: "Beacon — Open Source CMS",
    description: "Headless CMS with a visual block editor, multi-locale support, and a GraphQL API out of the box.",
    longDescription: "Beacon has 3.2k GitHub stars and is used by teams at startups and agencies worldwide for content-heavy sites.",
    tags: ["GraphQL", "TypeScript", "MongoDB", "React"],
    category: "Full Stack",
    image: "https://i.ytimg.com/vi/p-41A0a3Syw/maxresdefault.jpg",
    href: "https://github.com",
    githubHref: "https://github.com",
    year: "2022",
  },
  {
    id: "8",
    title: "Flux Motion Library",
    description: "Lightweight animation library for React with spring physics, gesture recognition, and layout transitions.",
    longDescription: "Flux weighs under 8kb gzipped and supports React 18 concurrent features, making it ideal for performance-critical UIs.",
    tags: ["TypeScript", "React", "Web Animations API", "Rollup"],
    category: "Frontend",
    image: "https://picsum.photos/seed/149b8dd9e7ae/800/600",
    href: "https://github.com",
    githubHref: "https://github.com",
    year: "2022",
  },
  {
    id: "9",
    title: "Spectra — Color Intelligence",
    description: "AI-powered color palette generator that extracts brand palettes from images and checks WCAG contrast ratios.",
    longDescription: "Spectra has been used to generate over 500k palettes and integrates directly with Figma via a plugin.",
    tags: ["Python", "FastAPI", "React", "Canvas API"],
    category: "AI / ML",
    image: "https://file.loading.io/color/feature/thumb/Spectral-8.png",
    href: "https://github.com",
    githubHref: "https://github.com",
    year: "2022",
  },
];

const categories = ["All", "Frontend", "Full Stack", "AI / ML", "Creative", "Mobile"];

export default function ProjectsPage() {
  const t = useTranslations();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const featured = useMemo(() => filtered.filter((p) => p.featured), [filtered]);
  const rest = useMemo(() => filtered.filter((p) => !p.featured), [filtered]);

  return (
    <main className="min-h-screen bg-[#0f0f0f] pt-24 pb-32">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.p
            variants={fadeIn}
            className="text-xs font-semibold text-purple-400 uppercase tracking-[0.2em] mb-4"
          >
            Selected Work
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight text-balance mb-6"
          >
            Projects &amp; Case Studies
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-white/50 leading-relaxed max-w-xl text-pretty"
          >
            A curated collection of work spanning design systems, full-stack applications, AI tooling, and creative experiments.
          </motion.p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
                activeCategory === cat
                  ? "bg-purple-500 border-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                  : "bg-white/5 border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto flex items-center text-xs text-white/30 font-medium">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Featured — large cards */}
            {featured.length > 0 && (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5"
              >
                {featured.map((project, i) => (
                  <motion.div
                    key={project.id}
                    variants={scaleIn}
                    className={`relative group rounded-2xl overflow-hidden border border-white/8 bg-white/3 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_32px_-8px_rgba(0,0,0,0.4)] cursor-pointer ${
                      i === 0 ? "md:col-span-2 lg:col-span-2" : ""
                    }`}
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* Image */}
                    <div className={`relative overflow-hidden ${i === 0 ? "h-72 md:h-80" : "h-56"}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent" />

                      {/* Hover overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0 bg-purple-900/60 backdrop-blur-sm flex flex-col items-center justify-center gap-4 p-6"
                      >
                        <p className="text-white/90 text-sm text-center leading-relaxed max-w-xs">
                          {project.longDescription}
                        </p>
                        <div className="flex gap-3">
                          <a
                            href={project.githubHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors duration-200"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={14} />
                            Code
                          </a>
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500 text-white text-sm font-medium hover:bg-purple-400 transition-colors duration-200"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={14} />
                            Live
                          </a>
                        </div>
                      </motion.div>

                      {/* Featured badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm">
                        <Star size={10} className="text-purple-400 fill-purple-400" />
                        <span className="text-xs font-semibold text-purple-300">Featured</span>
                      </div>

                      {/* Year badge */}
                      <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm">
                        <span className="text-xs font-medium text-white/60">{project.year}</span>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h2 className="text-base font-semibold text-white leading-snug">{project.title}</h2>
                        <span className="shrink-0 text-xs font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-sm text-white/50 leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {(project.tags ?? []).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium text-white/40 bg-white/5 border border-white/8 px-2 py-0.5 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Rest — smaller masonry-style grid */}
            {rest.length > 0 && (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {rest.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={fadeInUp}
                    className="relative group rounded-2xl overflow-hidden border border-white/8 bg-white/3 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_32px_-8px_rgba(0,0,0,0.4)] cursor-pointer"
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/30 to-transparent" />

                      {/* Hover overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0 bg-purple-900/60 backdrop-blur-sm flex flex-col items-center justify-center gap-3 p-5"
                      >
                        <p className="text-white/90 text-xs text-center leading-relaxed">
                          {project.longDescription}
                        </p>
                        <div className="flex gap-2">
                          <a
                            href={project.githubHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition-colors duration-200"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={12} />
                            Code
                          </a>
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500 text-white text-xs font-medium hover:bg-purple-400 transition-colors duration-200"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={12} />
                            Live
                          </a>
                        </div>
                      </motion.div>

                      {/* Year badge */}
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm">
                        <span className="text-xs font-medium text-white/50">{project.year}</span>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h2 className="text-sm font-semibold text-white leading-snug">{project.title}</h2>
                        <span className="shrink-0 text-xs font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-xs text-white/50 leading-relaxed mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {(project.tags ?? []).slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium text-white/40 bg-white/5 border border-white/8 px-2 py-0.5 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-xs font-medium text-white/30 px-1">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Empty state */}
            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-32 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <Star size={24} className="text-white/20" />
                </div>
                <p className="text-white/40 text-sm">No projects in this category yet.</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-24 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl border border-white/8 bg-white/3 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_8px_32px_-8px_rgba(0,0,0,0.3)]"
        >
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Have a project in mind?</h3>
            <p className="text-sm text-white/50">I am always open to discussing new opportunities and ideas.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:shadow-[0_0_28px_rgba(168,85,247,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
          >
            Get in touch
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}