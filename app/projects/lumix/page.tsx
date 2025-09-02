"use client";

import { motion } from "framer-motion";
import { Github, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
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

export default function LumixPage() {
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
                <div className="aspect-[4/3] bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/projects/lumix.jpg"
                    alt="Lumix Project Screenshot"
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = "flex";
                      }
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center text-8xl text-white/40">
                    🎬
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Links */}
            <motion.div
              className="flex justify-center space-x-6"
              variants={fadeInUp}
            >
              <motion.a
                href="https://github.com/Prakharsahu10/Lumix_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={36} className="group-hover:animate-pulse" />
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
              Lumix
            </motion.h1>

            <motion.div className="space-y-4 text-gray-300" variants={fadeInUp}>
              <p className="leading-relaxed mb-6">
                A modern{" "}
                <span className="gradient-text">
                  React Native movie discovery app
                </span>{" "}
                built with cutting-edge cross-platform architecture and stunning
                UI design.
              </p>

              <div className="space-y-6">
                {/* Modern Cross-Platform Architecture */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Built with{" "}
                    <span className="gradient-text">React Native 0.79.5</span>{" "}
                    and <span className="gradient-text">Expo Router</span> for
                    seamless cross-platform deployment on{" "}
                    <span className="gradient-text">iOS, Android, and web</span>{" "}
                    with TypeScript for type safety and file-based routing
                  </p>
                </div>

                {/* Advanced UI/UX Design */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Stunning{" "}
                    <span className="gradient-text">dark-themed interface</span>{" "}
                    using{" "}
                    <span className="gradient-text">
                      TailwindCSS + NativeWind
                    </span>{" "}
                    with custom trending movie cards, parallax scrolls, and{" "}
                    <span className="gradient-text">glassmorphism effects</span>
                  </p>
                </div>

                {/* API Integration & Backend */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Integrated <span className="gradient-text">TMDB API</span>{" "}
                    for comprehensive movie data and{" "}
                    <span className="gradient-text">
                      Appwrite Backend-as-a-Service
                    </span>{" "}
                    for user management, search history, and real-time database
                    operations
                  </p>
                </div>

                {/* Smart Search & Features */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Advanced{" "}
                    <span className="gradient-text">real-time search</span> with
                    instant results,{" "}
                    <span className="gradient-text">
                      trending movie tracking
                    </span>
                    , and personalized user profiles with activity tracking
                  </p>
                </div>

                {/* Professional Development */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Clean architecture with{" "}
                    <span className="gradient-text">ESLint code quality</span>,{" "}
                    <span className="gradient-text">organized components</span>,
                    and comprehensive documentation following modern development
                    practices
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
                  "React Native",
                  "Expo Router",
                  "TypeScript",
                  "TailwindCSS",
                  "NativeWind",
                  "TMDB API",
                  "Appwrite",
                  "React Native Reanimated",
                  "ESLint",
                  "iOS",
                  "Android",
                  "Web",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300 hover:gradient-text hover:bg-white/20 hover:border-pink-400/50 transition-all duration-300 cursor-default"
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
