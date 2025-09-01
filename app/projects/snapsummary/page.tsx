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

export default function SnapSummaryPage() {
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
                <div className="h-64 md:h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                  <div className="text-8xl text-white/40">🧩</div>
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
              SnapSummary - Chrome Extension
            </motion.h1>

            <motion.div className="space-y-6 text-gray-300" variants={fadeInUp}>
              <p className="leading-relaxed text-lg">
                SnapSummary is a{" "}
                <span className="gradient-text font-semibold">
                  Chrome extension
                </span>{" "}
                that instantly transforms any webpage into concise, readable
                summaries with a single click, powered by{" "}
                <span className="gradient-text">Google&apos;s Gemini AI</span>{" "}
                technology.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">
                      AI-Powered Content Extraction:
                    </span>{" "}
                    Leverages{" "}
                    <span className="gradient-text">
                      Google&apos;s Gemini AI
                    </span>{" "}
                    to extract and analyze important content from articles, blog
                    posts, and web pages with intelligent content recognition.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">
                      Customizable Summary Formats:
                    </span>{" "}
                    Choose between brief overviews, detailed summaries, or{" "}
                    <span className="gradient-text">
                      easy-to-scan bullet points
                    </span>{" "}
                    tailored to your reading preferences and time constraints.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">One-Click Simplicity:</span>{" "}
                    Perfect for researchers, students, and{" "}
                    <span className="gradient-text">busy professionals</span>{" "}
                    who need to quickly understand web content without reading
                    entire pages.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">Seamless Integration:</span>{" "}
                    Built with{" "}
                    <span className="gradient-text">Manifest V3</span>{" "}
                    technology, featuring simple API key setup and delivering{" "}
                    <span className="gradient-text">
                      intelligent web summaries
                    </span>{" "}
                    whenever needed.
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
                  "JavaScript",
                  "Chrome Extension",
                  "Manifest V3",
                  "CSS3",
                  "Google Gemini API",
                  "HTML5",
                  "Web APIs",
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
