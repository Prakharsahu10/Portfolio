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

export default function StreamTalkPage() {
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
                <div className="aspect-[4/3] bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/projects/streamtalk.png"
                    alt="StreamTalk Project Screenshot"
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
                    📱
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
                href="https://github.com/Prakharsahu10/StreamTalk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={36} className="group-hover:animate-pulse" />
              </motion.a>

              <motion.a
                href="https://streamtalk-d0cn.onrender.com/login"
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
              StreamTalk
            </motion.h1>

            <motion.div className="space-y-4 text-gray-300" variants={fadeInUp}>
              <p className="leading-relaxed mb-6">
                A comprehensive{" "}
                <span className="gradient-text">task management platform</span>{" "}
                with{" "}
                <span className="gradient-text">real-time collaboration</span>{" "}
                features designed for modern teams.
              </p>

              <div className="space-y-6">
                {/* Cross-Platform Development */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Built with{" "}
                    <span className="gradient-text">React Native</span> for
                    mobile and <span className="gradient-text">React</span> for
                    web, delivering a{" "}
                    <span className="gradient-text">
                      seamless cross-platform experience
                    </span>{" "}
                    that works perfectly on both iOS and Android devices
                  </p>
                </div>

                {/* Real-Time Features */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Powered by <span className="gradient-text">Socket.io</span>{" "}
                    for <span className="gradient-text">real-time updates</span>
                    , enabling instant task synchronization, live notifications,
                    and{" "}
                    <span className="gradient-text">
                      collaborative team workflows
                    </span>{" "}
                    across all devices
                  </p>
                </div>

                {/* Core Features */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Comprehensive project management with{" "}
                    <span className="gradient-text">task creation</span>,{" "}
                    <span className="gradient-text">team assignment</span>,{" "}
                    <span className="gradient-text">deadline tracking</span>,
                    and{" "}
                    <span className="gradient-text">
                      interactive dashboards
                    </span>{" "}
                    for complete project visibility
                  </p>
                </div>

                {/* Advanced Capabilities */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Enterprise features including{" "}
                    <span className="gradient-text">user role management</span>,{" "}
                    <span className="gradient-text">file attachments</span>,{" "}
                    <span className="gradient-text">push notifications</span>,
                    and{" "}
                    <span className="gradient-text">detailed analytics</span>{" "}
                    for performance insights
                  </p>
                </div>

                {/* Offline Capabilities */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">Offline-first design</span>{" "}
                    with{" "}
                    <span className="gradient-text">
                      automatic data synchronization
                    </span>
                    , ensuring productivity even without internet connectivity,
                    powered by <span className="gradient-text">MongoDB</span>{" "}
                    for reliable data persistence
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
                  "React.js",
                  "Node.js",
                  "Socket.io",
                  "MongoDB",
                  "Express.js",
                  "Redux Toolkit",
                  "TypeScript",
                  "JWT Auth",
                  "Expo",
                  "Push Notifications",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300 hover:gradient-text hover:bg-white/20 hover:border-green-400/50 transition-all duration-300 cursor-default"
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
