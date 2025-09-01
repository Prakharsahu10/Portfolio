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

export default function FinTrackPage() {
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
                <div className="h-64 md:h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-8xl text-white/40">🚀</div>
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
              Fintrack
            </motion.h1>

            <motion.div className="space-y-4 text-gray-300" variants={fadeInUp}>
              <p className="leading-relaxed mb-6">
                A comprehensive{" "}
                <span className="gradient-text">
                  financial tracker platform
                </span>{" "}
                designed to help users manage their finances efficiently.
              </p>

              <div className="space-y-6">
                {/* Core Financial Management */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Complete{" "}
                    <span className="gradient-text">financial management</span>{" "}
                    with account creation,{" "}
                    <span className="gradient-text">monthly budget</span>{" "}
                    setting, clear{" "}
                    <span className="gradient-text">transaction lists</span>,
                    and interactive{" "}
                    <span className="gradient-text">data visualization</span>{" "}
                    through charts and pie chart breakdowns for spending
                    analysis
                  </p>
                </div>

                {/* AI-Powered Features */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Revolutionary{" "}
                    <span className="gradient-text">
                      AI-powered receipt scanner
                    </span>{" "}
                    enables effortless transaction addition by simply scanning
                    receipts, streamlining the expense tracking process
                  </p>
                </div>

                {/* Automation & Alerts */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Smart automation with{" "}
                    <span className="gradient-text">Inngest cron jobs</span>{" "}
                    providing{" "}
                    <span className="gradient-text">email alerts</span> for
                    budget limits,{" "}
                    <span className="gradient-text">
                      monthly financial reports
                    </span>
                    , and{" "}
                    <span className="gradient-text">
                      recurring transactions
                    </span>{" "}
                    management
                  </p>
                </div>

                {/* Security & Authentication */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Enterprise-grade security with{" "}
                    <span className="gradient-text">Clerk authentication</span>,{" "}
                    <span className="gradient-text">rate limiting</span>, and{" "}
                    <span className="gradient-text">bot protection</span>{" "}
                    ensuring seamless and secure user experience
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
                  "React",
                  "TypeScript",
                  "TailwindCSS",
                  "PostgreSQL",
                  "Clerk Auth",
                  "Inngest",
                  "AI/ML",
                  "Chart.js",
                  "Prisma ORM",
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
