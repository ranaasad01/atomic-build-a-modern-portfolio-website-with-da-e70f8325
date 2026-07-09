"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Calendar, Coffee, Code2, Palette, Database, Globe, Smartphone, Terminal, Layers, Zap } from 'lucide-react';
import { brandName, brandTagline, brandEmail } from "@/lib/data";
import { fadeInUp, fadeIn, staggerContainer, scaleIn, slideInLeft, slideInRight } from "@/lib/motion";
import { useTranslations } from "next-intl";

const skills = [
  { name: "React", category: "Frontend", icon: Code2 },
  { name: "Next.js", category: "Frontend", icon: Globe },
  { name: "TypeScript", category: "Frontend", icon: Code2 },
  { name: "Tailwind CSS", category: "Frontend", icon: Palette },
  { name: "Framer Motion", category: "Frontend", icon: Zap },
  { name: "Node.js", category: "Backend", icon: Terminal },
  { name: "PostgreSQL", category: "Backend", icon: Database },
  { name: "Prisma", category: "Backend", icon: Layers },
  { name: "GraphQL", category: "Backend", icon: Globe },
  { name: "Redis", category: "Backend", icon: Database },
  { name: "React Native", category: "Mobile", icon: Smartphone },
  { name: "Expo", category: "Mobile", icon: Smartphone },
  { name: "Figma", category: "Design", icon: Palette },
  { name: "Illustrator", category: "Design", icon: Palette },
  { name: "Docker", category: "DevOps", icon: Layers },
  { name: "AWS", category: "DevOps", icon: Globe },
  { name: "Vercel", category: "DevOps", icon: Zap },
  { name: "GitHub Actions", category: "DevOps", icon: Terminal },
];

const categories = ["Frontend", "Backend", "Mobile", "Design", "DevOps"];

const categoryColors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  Frontend: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-300",
    dot: "bg-purple-400",
  },
  Backend: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-300",
    dot: "bg-blue-400",
  },
  Mobile: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-300",
    dot: "bg-emerald-400",
  },
  Design: {
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    text: "text-pink-300",
    dot: "bg-pink-400",
  },
  DevOps: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-300",
    dot: "bg-amber-400",
  },
};

const stats = [
  { label: "Years Experience", value: "6+", icon: Calendar },
  { label: "Projects Shipped", value: "40+", icon: Layers },
  { label: "Cups of Coffee", value: "∞", icon: Coffee },
  { label: "Technologies", value: "18+", icon: Code2 },
];

export default function AboutPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero / Bio Split */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — Portrait */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
              className="relative flex justify-center lg:justify-start"
            >
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 blur-sm" />
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/30 to-blue-500/30" />

                {/* Portrait image */}
                <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
                  <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/198143ff-55cc-44d3-a66f-e19c60f91635/ddutnwl-8f83b483-9f4f-41f4-b79a-41e45d67f9ae.jpg/v1/fill/w_821,h_973,q_70,strp/alex_mercer_portrait_by_maironru_ddutnwl-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA0NiIsInBhdGgiOiIvZi8xOTgxNDNmZi01NWNjLTQ0ZDMtYTY2Zi1lMTljNjBmOTE2MzUvZGR1dG53bC04ZjgzYjQ4My05ZjRmLTQxZjQtYjc5YS00MWU0NWQ2N2Y5YWUuanBnIiwid2lkdGgiOiI8PTg4MyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.I8v4Uzq6CdpcLr4WQiaFXRz860wN0yPXIssFD8pjdpk"
                    alt={`${brandName} — ${brandTagline}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background = "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)";
                        const initials = document.createElement("div");
                        initials.className = "absolute inset-0 flex items-center justify-center";
                        initials.innerHTML = `<span style="font-size:5rem;font-weight:700;color:rgba(168,85,247,0.6);font-family:sans-serif">AM</span>`;
                        parent.appendChild(initials);
                      }
                    }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                  className="absolute -bottom-4 -right-4 bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex items-center gap-2.5"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-medium text-white/80">Available for work</span>
                </motion.div>

                {/* Location badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
                  className="absolute -top-4 -left-4 bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex items-center gap-2"
                >
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  <span className="text-sm font-medium text-white/80">San Francisco, CA</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right — Bio */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-4">
                  <span className="w-6 h-px bg-purple-400" />
                  About Me
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
                  Crafting digital experiences that{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    matter
                  </span>
                </h1>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-lg text-white/60 leading-relaxed">
                I&apos;m {brandName}, a {brandTagline} based in San Francisco. I build fast, accessible, and beautifully designed web applications that solve real problems for real people.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-base text-white/50 leading-relaxed">
                With over six years of experience across the full stack, I specialize in React ecosystems, performant Node.js APIs, and thoughtful UI design. I care deeply about the intersection of engineering rigor and creative expression.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-base text-white/50 leading-relaxed">
                When I&apos;m not shipping code, you&apos;ll find me hiking the Marin Headlands, experimenting with generative art, or obsessing over a perfectly dialed espresso.
              </motion.p>

              {/* Contact line */}
              <motion.div variants={fadeInUp} className="flex items-center gap-2 text-sm text-white/40">
                <span>Reach me at</span>
                <a
                  href={`mailto:${brandEmail}`}
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium"
                >
                  {brandEmail}
                </a>
              </motion.div>

              {/* Resume CTA */}
              <motion.div variants={fadeInUp} className="pt-2">
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-purple-500 hover:bg-purple-400 text-white font-semibold rounded-xl transition-colors duration-300 shadow-[0_4px_20px_rgba(168,85,247,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f]"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16 border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/20 hover:bg-white/[0.05] transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)]"
                >
                  <Icon className="w-5 h-5 text-purple-400 mb-3" />
                  <span className="text-3xl font-bold text-white tracking-tight">{stat.value}</span>
                  <span className="text-sm text-white/40 mt-1">{stat.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-500/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-purple-400" />
              Skills
              <span className="w-6 h-px bg-purple-400" />
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Technologies I work with
            </h2>
            <p className="mt-4 text-white/50 max-w-xl mx-auto leading-relaxed">
              A curated toolkit built over years of shipping production software across web, mobile, and cloud platforms.
            </p>
          </motion.div>

          {/* Category groups */}
          <div className="flex flex-col gap-12">
            {categories.map((category) => {
              const categorySkills = skills.filter((s) => s.category === category);
              const colors = categoryColors[category] ?? categoryColors["Frontend"];

              return (
                <motion.div
                  key={category}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                    <h3 className={`text-sm font-semibold uppercase tracking-widest ${colors.text}`}>
                      {category}
                    </h3>
                    <div className="flex-1 h-px bg-white/5" />
                    <span className="text-xs text-white/20">{categorySkills.length} tools</span>
                  </div>

                  {/* Skill badges */}
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-20px" }}
                    className="flex flex-wrap gap-3"
                  >
                    {categorySkills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <motion.div
                          key={skill.name}
                          variants={scaleIn}
                          whileHover={{ scale: 1.06, y: -2, transition: { duration: 0.2 } }}
                          whileTap={{ scale: 0.96 }}
                          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border ${colors.bg} ${colors.border} cursor-default select-none shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_-4px_rgba(0,0,0,0.15)] transition-shadow duration-300 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)]`}
                        >
                          <Icon className={`w-3.5 h-3.5 ${colors.text}`} />
                          <span className={`text-sm font-medium ${colors.text}`}>{skill.name}</span>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy / Values */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >
            {/* Left — heading */}
            <motion.div variants={slideInLeft} className="lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-4">
                <span className="w-6 h-px bg-purple-400" />
                Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight text-balance">
                How I approach every project
              </h2>
              <p className="mt-5 text-white/50 leading-relaxed">
                Good software is invisible. It gets out of the user&apos;s way and lets them accomplish what they came to do. That principle guides every decision I make.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 border border-white/10 hover:border-purple-500/40 text-white/70 hover:text-white text-sm font-medium rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                Work with me
              </motion.a>
            </motion.div>

            {/* Right — values list */}
            <motion.div variants={staggerContainer} className="flex flex-col gap-6">
              {[
                {
                  number: "01",
                  title: "Performance is a feature",
                  body: "Every millisecond counts. I optimize for Core Web Vitals from day one, not as an afterthought. Fast software respects the user&apos;s time.",
                },
                {
                  number: "02",
                  title: "Accessibility is non-negotiable",
                  body: "The web is for everyone. I build with semantic HTML, ARIA where needed, and keyboard navigation baked in from the start.",
                },
                {
                  number: "03",
                  title: "Design and code are one discipline",
                  body: "The best interfaces emerge when engineering and design thinking happen together. I work closely with designers and often prototype directly in code.",
                },
                {
                  number: "04",
                  title: "Ship, learn, iterate",
                  body: "Perfect is the enemy of shipped. I favor tight feedback loops, real user data, and continuous improvement over lengthy waterfall cycles.",
                },
              ].map((item) => (
                <motion.div
                  key={item.number}
                  variants={fadeInUp}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="group flex gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 hover:bg-white/[0.04] transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)]"
                >
                  <span className="text-2xl font-bold text-purple-500/30 group-hover:text-purple-500/50 transition-colors duration-300 leading-none mt-0.5 tabular-nums">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/45 leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Resume CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-transparent to-blue-500/8" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 text-balance">
            Want the full picture?
          </h2>
          <p className="text-white/50 max-w-md mx-auto mb-8 leading-relaxed">
            Download my resume for a complete overview of my experience, education, and accomplishments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-purple-500 hover:bg-purple-400 text-white font-semibold rounded-xl transition-colors duration-300 shadow-[0_4px_24px_rgba(168,85,247,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f]"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-medium rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              Get in touch
            </motion.a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}