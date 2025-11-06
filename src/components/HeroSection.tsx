import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail, Globe } from "lucide-react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min.js";
import { Button } from "@/components/ui/button";

const roles = [
  "Full Stack Developer",
  "Team Lead",
  "AI Enthusiast",
  "Problem Solver",
  "Open Source Contributor",
];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (!vantaEffect && vantaRef.current) {
      const effect = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: prefersDark ? 0x1d4ed8 : 0x2563eb, // deep blue
        backgroundColor: prefersDark ? 0x000000 : 0xf8fafc,
        points: 10.0,
        maxDistance: 20.0,
        spacing: 18.0,
      });
      setVantaEffect(effect);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      ref={vantaRef}
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center transition-colors duration-500 bg-slate-50 dark:bg-[#000000] text-gray-900 dark:text-white"
    >
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white/90 dark:from-black/80 dark:via-black/90 dark:to-[#020617]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            className="text-lg md:text-xl text-blue-600 dark:text-blue-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            👋 Hello, I’m
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(37,99,235,0.25)]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            Pandiselvam
          </motion.h1>

          {/* Rotating Roles */}
          <div className="h-16 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentRole}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-blue-200"
              >
                {roles[currentRole]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.p
            className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Passionate about building scalable web applications and leading
            teams to craft AI-powered experiences using{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              React, NestJS, and LangGraph
            </span>
            . Currently at{" "}
            <span className="font-semibold text-blue-700 dark:text-blue-300">
              Skillmine
            </span>
            .
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center space-x-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[
              { icon: <Github />, href: "https://github.com/pandiselvam" },
              {
                icon: <Linkedin />,
                href: "https://linkedin.com/in/pandiselvam",
              },
              { icon: <Mail />, href: "mailto:pandiselvam.dev@gmail.com" },
              { icon: <Globe />, href: "https://pandiselvam.dev" },
            ].map(({ icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="relative group"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white/70 dark:bg-black/40 backdrop-blur-md border border-blue-200/30 dark:border-blue-900/40 text-blue-600 dark:text-blue-300 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(37,99,235,0.35)]">
                  {icon}
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* 🔵 Refined Matching Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-5 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            {[
              {
                label: "🚀 View My Work",
                action: () =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" }),
              },
              {
                label: "📄 Download Resume",
                href: "/assets/Pandiselvam_Resume.pdf",
                download: true,
              },
              {
                label: "💬 Contact Me",
                action: () =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" }),
              },
            ].map((btn, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {btn.href ? (
                  <a
                    href={btn.href}
                    download={btn.download}
                    className="flex items-center justify-center px-8 py-3 rounded-full text-base font-medium bg-white/80 dark:bg-black/40 border border-blue-300/50 dark:border-blue-900/40 text-blue-700 dark:text-blue-200 shadow-sm hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    {btn.label}
                  </a>
                ) : (
                  <button
                    onClick={btn.action}
                    className="flex items-center justify-center px-8 py-3 rounded-full text-base font-medium bg-white/80 dark:bg-black/40 border border-blue-300/50 dark:border-blue-900/40 text-blue-700 dark:text-blue-200 shadow-sm hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    {btn.label}
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          delay: 1.5,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 flex flex-col items-center cursor-pointer group"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-sm text-gray-600 dark:text-gray-400 mb-2 opacity-70">
          Scroll Down
        </span>
        <ArrowDown className="h-6 w-6 text-blue-500 dark:text-blue-400 group-hover:translate-y-1 transition-transform duration-300" />
      </motion.div>
    </section>
  );
}
