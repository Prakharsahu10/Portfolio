"use client";

import { motion } from "framer-motion";
import { Github, ArrowLeft } from "lucide-react";
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

export default function SubscriptionTrackerPage() {
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
                <div className="h-80 md:h-[500px] bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                  <div className="text-8xl text-white/40">📊</div>
                </div>
              </CardContent>
            </Card>

            {/* Links */}
            <motion.div
              className="flex justify-center space-x-6"
              variants={fadeInUp}
            >
              <motion.a
                href="https://github.com/Prakharsahu10/Subscription_Tracker"
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
              📊 Subscription Tracker
            </motion.h1>

            <motion.div className="space-y-4 text-gray-300" variants={fadeInUp}>
              <p className="leading-relaxed mb-6">
                A comprehensive{" "}
                <span className="gradient-text">
                  subscription management system
                </span>{" "}
                built with modern web technologies and advanced security
                features.
              </p>

              <div className="space-y-6">
                {/* Full-Stack Architecture */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">
                      Full-Stack Web Application
                    </span>{" "}
                    with <span className="gradient-text">Node.js</span>,{" "}
                    <span className="gradient-text">Express.js</span>, and{" "}
                    <span className="gradient-text">MongoDB</span> using{" "}
                    <span className="gradient-text">RESTful API</span>{" "}
                    architecture and{" "}
                    <span className="gradient-text">JWT authentication</span>
                  </p>
                </div>

                {/* Advanced Security */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">Advanced Security</span>{" "}
                    with{" "}
                    <span className="gradient-text">Arcjet middleware</span> for{" "}
                    <span className="gradient-text">bot detection</span>,{" "}
                    <span className="gradient-text">rate limiting</span>, and{" "}
                    <span className="gradient-text">DDoS protection</span>
                  </p>
                </div>

                {/* Automated Workflow */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">
                      Automated Workflow System
                    </span>{" "}
                    using <span className="gradient-text">Upstash QStash</span>{" "}
                    for{" "}
                    <span className="gradient-text">intelligent reminders</span>{" "}
                    and <span className="gradient-text">Nodemailer</span> for
                    email notifications
                  </p>
                </div>

                {/* Smart Data Management */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">Smart Data Management</span>{" "}
                    with <span className="gradient-text">MongoDB schemas</span>,{" "}
                    <span className="gradient-text">
                      multi-currency support
                    </span>
                    , and{" "}
                    <span className="gradient-text">
                      automatic status updates
                    </span>{" "}
                    based on renewal schedules
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
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "JWT",
                  "Arcjet",
                  "Upstash QStash",
                  "Nodemailer",
                  "bcrypt",
                  "ES6 Modules",
                  "RESTful API",
                  "Rate Limiting",
                  "Multi-Currency",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300 hover:gradient-text hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-300 cursor-default"
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
