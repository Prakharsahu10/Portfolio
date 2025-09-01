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

export default function FeastFlyPage() {
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
                <div className="h-64 md:h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                  <div className="text-8xl text-white/40">🍽️</div>
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
              🍔 FeastFly
            </motion.h1>

            <motion.div className="space-y-4 text-gray-300" variants={fadeInUp}>
              <p className="leading-relaxed mb-6">
                A modern{" "}
                <span className="gradient-text">
                  React Native food ordering app
                </span>{" "}
                built with cutting-edge technologies for seamless mobile dining
                experience.
              </p>

              <div className="space-y-6">
                {/* Full-Stack Mobile Development */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">
                      Full-Stack Mobile Development
                    </span>{" "}
                    with <span className="gradient-text">React Native</span> and{" "}
                    <span className="gradient-text">Expo Router</span>,
                    featuring <span className="gradient-text">TypeScript</span>{" "}
                    for type safety and{" "}
                    <span className="gradient-text">Zustand</span> for state
                    management
                  </p>
                </div>

                {/* Authentication & Backend */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">Robust Authentication</span>{" "}
                    with <span className="gradient-text">Appwrite BaaS</span>,
                    secure user management,{" "}
                    <span className="gradient-text">session handling</span>, and{" "}
                    <span className="gradient-text">Sentry integration</span>{" "}
                    for error tracking
                  </p>
                </div>

                {/* Advanced UI/UX */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">Advanced UI/UX</span> with{" "}
                    <span className="gradient-text">dynamic menu browsing</span>
                    ,{" "}
                    <span className="gradient-text">
                      interactive cart system
                    </span>
                    , and{" "}
                    <span className="gradient-text">responsive layouts</span>{" "}
                    for all screen sizes
                  </p>
                </div>

                {/* Database & Production Features */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">
                      Complex Database Design
                    </span>{" "}
                    with{" "}
                    <span className="gradient-text">relational schemas</span>,{" "}
                    <span className="gradient-text">automated seeding</span>,
                    and{" "}
                    <span className="gradient-text">
                      production-ready features
                    </span>{" "}
                    with comprehensive documentation
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
                  "Zustand",
                  "TailwindCSS",
                  "NativeWind",
                  "Appwrite",
                  "Sentry",
                  "MongoDB",
                  "File-based Routing",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300 hover:gradient-text hover:bg-white/20 hover:border-orange-400/50 transition-all duration-300 cursor-default"
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
