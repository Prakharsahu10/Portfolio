"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default function BrainBlitzPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Project Thumbnail */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={slideInLeft}
            className="space-y-6"
          >
            <Card className="bg-white/5 border-white/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 md:h-96 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
                  <div className="text-8xl text-white/40">🧠</div>
                </div>
              </CardContent>
            </Card>

            {/* Links */}
            <motion.div
              className="flex justify-center space-x-6"
              variants={fadeInUp}
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={36} className="group-hover:animate-pulse" />
              </motion.a>

              <motion.a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400 transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={36} className="group-hover:animate-pulse" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={slideInRight}
            className="space-y-6"
          >
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-white"
              variants={fadeInUp}
            >
              🧠 BrainBlitz
            </motion.h1>

            <motion.div className="space-y-4 text-gray-300" variants={fadeInUp}>
              <p className="leading-relaxed mb-6">
                A comprehensive{" "}
                <span className="gradient-text">React quiz application</span>{" "}
                designed to test React.js knowledge with interactive learning
                features.
              </p>

              <div className="space-y-6">
                {/* Interactive Learning Platform */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">
                      Interactive Learning Platform
                    </span>{" "}
                    with{" "}
                    <span className="gradient-text">
                      7 challenging questions
                    </span>{" "}
                    focused on{" "}
                    <span className="gradient-text">React.js concepts</span>,
                    hooks, JSX, and{" "}
                    <span className="gradient-text">state management</span>
                  </p>
                </div>

                {/* Advanced State Management */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">
                      Advanced State Management
                    </span>{" "}
                    with{" "}
                    <span className="gradient-text">user answer tracking</span>{" "}
                    system categorizing{" "}
                    <span className="gradient-text">
                      correct, incorrect, and skipped
                    </span>{" "}
                    responses with{" "}
                    <span className="gradient-text">performance analytics</span>
                  </p>
                </div>

                {/* Real-time Timer Feature */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">
                      Real-time Question Timer
                    </span>{" "}
                    with{" "}
                    <span className="gradient-text">
                      custom timer component
                    </span>{" "}
                    adding <span className="gradient-text">time pressure</span>{" "}
                    to simulate{" "}
                    <span className="gradient-text">interview conditions</span>
                  </p>
                </div>

                {/* Modern React Architecture */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">
                      Modern React Architecture
                    </span>{" "}
                    using <span className="gradient-text">React 18</span>,{" "}
                    <span className="gradient-text">functional components</span>
                    , <span className="gradient-text">hooks</span>, and{" "}
                    <span className="gradient-text">Vite</span> for optimized
                    development
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInUp}>
              <h3 className="text-xl font-semibold text-white">
                Technologies Used:
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React 18",
                  "JavaScript",
                  "Vite",
                  "ESLint",
                  "useState",
                  "useCallback",
                  "JSX",
                  "Component Composition",
                  "Functional Components",
                  "Modern Hooks",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300 hover:gradient-text hover:bg-white/20 hover:border-violet-400/50 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
