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

export default function FoodBridgePage() {
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
                <div className="aspect-[4/3] bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/projects/foodbridge.png"
                    alt="FoodBridge Project Screenshot"
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
                    🍲
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
                href="https://github.com/Prakharsahu10/FoodBridge"
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
              FoodBridge
            </motion.h1>

            <motion.div className="space-y-4 text-gray-300" variants={fadeInUp}>
              <p className="leading-relaxed mb-6">
                A mobile application built with{" "}
                <span className="gradient-text">Expo + Firebase</span> that
                connects food donors (restaurants, individuals) with receivers
                (NGOs, individuals) to{" "}
                <span className="gradient-text">reduce food waste</span> and{" "}
                <span className="gradient-text">feed more people</span>.
              </p>

              <div className="space-y-6">
                {/* Role-based Authentication & Listings */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">
                      Role-based authentication
                    </span>{" "}
                    for donors and receivers with{" "}
                    <span className="gradient-text">nearby listings</span>{" "}
                    featuring distance and expiry indicators, helping users find
                    available food quickly
                  </p>
                </div>

                {/* Request Flow & Real-time Chat */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Complete{" "}
                    <span className="gradient-text">request workflow</span> with
                    accept/reject actions and{" "}
                    <span className="gradient-text">in-app chat</span> for each
                    listing, enabling seamless coordination between donors and
                    receivers for pickup
                  </p>
                </div>

                {/* GPS, Maps & Image Uploads */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Integrated{" "}
                    <span className="gradient-text">
                      GPS & Maps via Expo Location
                    </span>{" "}
                    with{" "}
                    <span className="gradient-text">
                      image upload to Firebase Storage
                    </span>
                    , allowing donors to share photos and precise pickup
                    locations
                  </p>
                </div>

                {/* Ratings & Trust */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    <span className="gradient-text">Rating system</span> for
                    trust and safety, with{" "}
                    <span className="gradient-text">real-time updates</span> via
                    Firestore onSnapshot for requests and messages, ensuring a
                    reliable community
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
                  "Expo",
                  "React Native",
                  "TypeScript",
                  "Firebase Auth",
                  "Firestore",
                  "Firebase Storage",
                  "Expo Location",
                  "Google Maps API",
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
