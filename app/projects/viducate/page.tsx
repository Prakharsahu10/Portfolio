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

export default function ViducatePage() {
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
          >
            <Card className="bg-white/5 border-white/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 md:h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-8xl text-white/40">📚</div>
                </div>
              </CardContent>
            </Card>
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
              Viducate
            </motion.h1>

            <motion.div className="space-y-6 text-gray-300" variants={fadeInUp}>
              <p className="leading-relaxed text-lg">
                Viducate is an{" "}
                <span className="gradient-text font-semibold">
                  AI-powered educational platform
                </span>{" "}
                that converts text lessons into interactive videos with virtual
                avatars, offering a gamified learning experience that transforms
                traditional education.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Revolutionary{" "}
                    <span className="gradient-text">AI Video Generation</span>{" "}
                    system featuring{" "}
                    <span className="gradient-text">
                      text-to-video conversion
                    </span>{" "}
                    with customizable avatars and multi-language support,
                    enabling educators to create engaging visual content
                    effortlessly.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Advanced{" "}
                    <span className="gradient-text">gamification system</span>{" "}
                    with points, achievements, leaderboards, and interactive
                    quizzes to enhance student engagement and provide
                    comprehensive{" "}
                    <span className="gradient-text">progress tracking</span>.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Comprehensive{" "}
                    <span className="gradient-text">
                      user management system
                    </span>{" "}
                    with secure authentication, distinct student/teacher roles,
                    and{" "}
                    <span className="gradient-text">
                      personalized dashboards
                    </span>{" "}
                    tailored to individual learning paths and teaching
                    requirements.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Built with modern technologies including{" "}
                    <span className="gradient-text">Next.js</span> for optimal
                    performance,{" "}
                    <span className="gradient-text">Prisma ORM</span> for
                    seamless database management, and{" "}
                    <span className="gradient-text">Supabase</span> for scalable
                    backend infrastructure.
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
                  "Next.js",
                  "Tailwind CSS",
                  "Prisma ORM",
                  "Supabase",
                  "TypeScript",
                  "API Integration",
                  "AI Technology",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300 hover:gradient-text hover:bg-white/20 hover:border-purple-400/50 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            <motion.div className="flex space-x-6" variants={fadeInUp}>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-blue-400 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} className="group-hover:animate-pulse" />
                <span className="font-medium">View Code</span>
              </motion.a>

              <motion.a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-green-400 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={24} className="group-hover:animate-pulse" />
                <span className="font-medium">Live Demo</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
