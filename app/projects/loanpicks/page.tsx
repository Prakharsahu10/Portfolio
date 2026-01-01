"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
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

export default function LoanPicksPage() {
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
                <div className="aspect-[4/3] bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/projects/loanpicks.png"
                    alt="Loan Picks Project Screenshot"
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
                    💰
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
                href="https://github.com/Prakharsahu10/Loan_Picks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={36} className="group-hover:animate-pulse" />
              </motion.a>

              <motion.a
                href="https://loanpicks-woad.vercel.app/"
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
              Loan Picks
            </motion.h1>

            <motion.div className="space-y-4 text-gray-300" variants={fadeInUp}>
              <p className="leading-relaxed mb-6">
                An{" "}
                <span className="gradient-text">
                  AI-powered loan comparison platform
                </span>{" "}
                that helps users find their perfect loan from{" "}
                <span className="gradient-text">15+ top banks</span>, compare
                rates, check eligibility, and apply instantly with intelligent
                recommendations powered by{" "}
                <span className="gradient-text">Google Gemini</span>.
              </p>

              <div className="space-y-6">
                {/* AI-Powered Matching & Chat */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">
                      AI-powered profile-based recommendations
                    </span>{" "}
                    with top 5 matched loans, intelligent product chat using{" "}
                    <span className="gradient-text">
                      RAG (Retrieval-Augmented Generation)
                    </span>
                    , and smart eligibility assessment grounded in actual
                    product data
                  </p>
                </div>

                {/* Advanced Filtering & Comparison */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Comprehensive{" "}
                    <span className="gradient-text">loan discovery</span> with
                    advanced filtering by APR, income, credit score, and loan
                    type, plus{" "}
                    <span className="gradient-text">
                      side-by-side comparison
                    </span>{" "}
                    of up to 4 loans with interactive charts
                  </p>
                </div>

                {/* Badge System & Visualization */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">
                      Multi-dimensional scoring system
                    </span>{" "}
                    displaying eligibility badges (Excellent/Good/Fair Match)
                    based on income, credit score, loan preferences, and{" "}
                    <span className="gradient-text">data visualization</span>{" "}
                    with Recharts
                  </p>
                </div>

                {/* Real-time & Security */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">
                      Real-time search and sorting
                    </span>{" "}
                    with persistent sessions via{" "}
                    <span className="gradient-text">Supabase Auth</span>,
                    protected routes with middleware, and secure data handling
                    with RLS policies
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
                  "TypeScript",
                  "Tailwind CSS",
                  "Supabase",
                  "Google Gemini",
                  "PostgreSQL",
                  "Framer Motion",
                  "Recharts",
                  "Radix UI",
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
