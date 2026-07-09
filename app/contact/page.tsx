"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle, Code2 as Github, MessageCircle as Twitter, Briefcase as Linkedin, ArrowRight } from 'lucide-react';
import { useTranslations } from "next-intl";
import { brandEmail, brandName } from "@/lib/data";
import { fadeInUp, fadeIn, staggerContainer, scaleIn } from "@/lib/motion";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    color: "hover:text-white hover:border-white/30",
    description: "See my code",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
    color: "hover:text-sky-400 hover:border-sky-400/30",
    description: "Follow updates",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "hover:text-blue-400 hover:border-blue-400/30",
    description: "Connect professionally",
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${brandEmail}`,
    color: "hover:text-purple-400 hover:border-purple-400/30",
    description: brandEmail,
  },
];

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const inputVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const floatingOrb: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactPage() {
  const t = useTranslations();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({
    name: false,
    email: false,
    message: false,
  });

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  function validate(field: keyof FormState, value: string): string {
    if (field === "name") {
      if (!value.trim()) return t("contact.errors.name_required");
      if (value.trim().length < 2) return t("contact.errors.name_short");
      return "";
    }
    if (field === "email") {
      if (!value.trim()) return t("contact.errors.email_required");
      if (!validateEmail(value)) return t("contact.errors.email_invalid");
      return "";
    }
    if (field === "message") {
      if (!value.trim()) return t("contact.errors.message_required");
      if (value.trim().length < 10) return t("contact.errors.message_short");
      return "";
    }
    return "";
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validate(field, value) }));
    }
  }

  function handleBlur(field: keyof FormState) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validate(field, form[field]) }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors: FormErrors = {
      name: validate("name", form.name),
      email: validate("email", form.email),
      message: validate("message", form.message),
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (newErrors.name || newErrors.email || newErrors.message) return;

    setSubmitStatus("loading");

    setTimeout(() => {
      setSubmitStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
      setErrors({ name: "", email: "", message: "" });
    }, 1600);
  }

  function resetForm() {
    setSubmitStatus("idle");
  }

  const isLoading = submitStatus === "loading";

  return (
    <main className="relative min-h-screen bg-[#0f0f0f] overflow-hidden">
      {/* Animated background gradient orbs */}
      <motion.div
        variants={floatingOrb}
        initial="hidden"
        animate="visible"
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-indigo-600/8 blur-[100px]" />
        <div className="absolute top-[40%] left-[-5%] w-[300px] h-[300px] rounded-full bg-violet-500/6 blur-[80px]" />
      </motion.div>

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-32 pb-24">
        {/* Page header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center mb-14"
        >
          <motion.div variants={fadeIn} className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-widest uppercase">
              <Mail className="w-3 h-3" />
              {t("contact.badge")}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight text-balance mb-4"
          >
            {t("contact.heading")}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg leading-relaxed text-pretty max-w-xl mx-auto"
          >
            {t("contact.subheading")}
          </motion.p>
        </motion.div>

        {/* Glassmorphism card */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="relative rounded-2xl border border-white/8 bg-white/4 backdrop-blur-xl shadow-[0_1px_2px_rgba(0,0,0,0.2),0_24px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* Card top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

          <div className="p-8 md:p-10">
            <AnimatePresence mode="wait">
              {submitStatus === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-5"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center"
                  >
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </motion.div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2">
                      {t("contact.success.title")}
                    </h2>
                    <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">
                      {t("contact.success.body")}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={resetForm}
                    className="mt-2 px-5 py-2.5 rounded-xl bg-white/6 border border-white/10 text-white/70 text-sm font-medium hover:bg-white/10 hover:text-white transition-all duration-300"
                  >
                    {t("contact.success.again")}
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6"
                >
                  {/* Name field */}
                  <motion.div variants={inputVariants} initial="hidden" animate="visible" className="space-y-1.5">
                    <label htmlFor="name" className="flex items-center gap-2 text-xs font-semibold text-white/50 uppercase tracking-widest">
                      <User className="w-3 h-3" />
                      {t("contact.form.name_label")}
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        placeholder={t("contact.form.name_placeholder")}
                        disabled={isLoading}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/25 text-sm transition-all duration-300 outline-none focus:ring-2 focus:ring-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed ${
                          touched.name && errors.name
                            ? "border-red-500/50 bg-red-500/5"
                            : touched.name && !errors.name && form.name
                            ? "border-green-500/40 bg-green-500/5"
                            : "border-white/8 hover:border-white/15 focus:border-purple-500/50"
                        }`}
                      />
                      {touched.name && !errors.name && form.name && (
                        <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-400" />
                      )}
                      {touched.name && errors.name && (
                        <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-red-400" />
                      )}
                    </div>
                    <AnimatePresence>
                      {touched.name && errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.2 }}
                          className="text-xs text-red-400 flex items-center gap-1"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Email field */}
                  <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ transitionDelay: "0.05s" }}
                    className="space-y-1.5"
                  >
                    <label htmlFor="email" className="flex items-center gap-2 text-xs font-semibold text-white/50 uppercase tracking-widest">
                      <Mail className="w-3 h-3" />
                      {t("contact.form.email_label")}
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        placeholder={t("contact.form.email_placeholder")}
                        disabled={isLoading}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/25 text-sm transition-all duration-300 outline-none focus:ring-2 focus:ring-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed ${
                          touched.email && errors.email
                            ? "border-red-500/50 bg-red-500/5"
                            : touched.email && !errors.email && form.email
                            ? "border-green-500/40 bg-green-500/5"
                            : "border-white/8 hover:border-white/15 focus:border-purple-500/50"
                        }`}
                      />
                      {touched.email && !errors.email && form.email && (
                        <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-400" />
                      )}
                      {touched.email && errors.email && (
                        <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-red-400" />
                      )}
                    </div>
                    <AnimatePresence>
                      {touched.email && errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.2 }}
                          className="text-xs text-red-400"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Message field */}
                  <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ transitionDelay: "0.1s" }}
                    className="space-y-1.5"
                  >
                    <label htmlFor="message" className="flex items-center gap-2 text-xs font-semibold text-white/50 uppercase tracking-widest">
                      <MessageSquare className="w-3 h-3" />
                      {t("contact.form.message_label")}
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        onBlur={() => handleBlur("message")}
                        placeholder={t("contact.form.message_placeholder")}
                        disabled={isLoading}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/25 text-sm transition-all duration-300 outline-none focus:ring-2 focus:ring-purple-500/50 resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
                          touched.message && errors.message
                            ? "border-red-500/50 bg-red-500/5"
                            : touched.message && !errors.message && form.message
                            ? "border-green-500/40 bg-green-500/5"
                            : "border-white/8 hover:border-white/15 focus:border-purple-500/50"
                        }`}
                      />
                      {touched.message && !errors.message && form.message && (
                        <CheckCircle className="absolute right-3 top-3 w-4 h-4 text-green-400" />
                      )}
                      {touched.message && errors.message && (
                        <AlertCircle className="absolute right-3 top-3 w-4 h-4 text-red-400" />
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <AnimatePresence>
                        {touched.message && errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.2 }}
                            className="text-xs text-red-400"
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                      <span className="text-xs text-white/25 ml-auto">
                        {form.message.length} {t("contact.form.chars")}
                      </span>
                    </div>
                  </motion.div>

                  {/* Submit button */}
                  <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ transitionDelay: "0.15s" }}
                  >
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={isLoading ? {} : { scale: 1.02 }}
                      whileTap={isLoading ? {} : { scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-semibold text-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_24px_rgba(168,85,247,0.25)] hover:shadow-[0_0_32px_rgba(168,85,247,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                    >
                      {isLoading ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
                          />
                          {t("contact.form.sending")}
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          {t("contact.form.submit")}
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex items-center gap-4 my-10"
        >
          <div className="flex-1 h-px bg-white/6" />
          <span className="text-xs text-white/25 uppercase tracking-widest font-medium">
            {t("contact.or_find_me")}
          </span>
          <div className="flex-1 h-px bg-white/6" />
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                variants={fadeInUp}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`group flex flex-col items-center gap-2.5 p-4 rounded-xl bg-white/4 border border-white/8 text-white/40 transition-all duration-300 ${social.color} hover:bg-white/7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500`}
              >
                <Icon className="w-5 h-5 transition-colors duration-300" />
                <div className="text-center">
                  <p className="text-xs font-semibold tracking-wide transition-colors duration-300">
                    {social.label}
                  </p>
                  <p className="text-[10px] text-white/25 mt-0.5 truncate max-w-[100px]">
                    {social.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-xs text-white/25 mt-10 leading-relaxed"
        >
          {t("contact.response_note")}
        </motion.p>
      </div>
    </main>
  );
}