"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TypingAnimation from "@/components/typing-animation";
import DiscordIcon from "@/components/icons/discord-icon";
import LeetCodeIcon from "@/components/icons/leetcode-icon";
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

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variants?: Variants;
}

const AnimatedSection = ({
  children,
  className,
  id,
  variants,
}: AnimatedSectionProps) => (
  <motion.section
    id={id}
    className={className}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.3 }}
    variants={variants}
  >
    {children}
  </motion.section>
);

export default function Home() {
  return (
    <div className="pt-16">
      {/* Home Section */}
      <motion.section
        id="home"
        className="min-h-screen flex items-center justify-center px-4"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="text-center space-y-6">
          <motion.h1
            className="text-4xl md:text-7xl font-bold text-white"
            variants={fadeInUp}
          >
            Hi, I&apos;m <span className="gradient-text-simple">Prakhar!</span>
          </motion.h1>

          {/* "I'm" text before typing animation */}
          <motion.div
            className="text-xl md:text-5xl text-gray-300"
            variants={fadeInUp}
          >
            I&apos;m
          </motion.div>

          <motion.div
            className="text-2xl md:text-4xl text-gray-300"
            variants={fadeInUp}
          >
            <TypingAnimation />
          </motion.div>

          <motion.div className="space-x-4" variants={fadeInUp}>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all">
              Resume
            </button>
            <button className="border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all">
              Get In Touch
            </button>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            className="flex justify-center space-x-6 mt-8"
            variants={fadeInUp}
          >
            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/prakhar-sahu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} className="group-hover:animate-pulse" />
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/Prakharsahu10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-gray-800 hover:border-gray-700 hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} className="group-hover:animate-pulse" />
            </motion.a>

            {/* Twitter */}
            <motion.a
              href="https://x.com/Prakhar_018"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-sky-500 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter size={24} className="group-hover:animate-pulse" />
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/ig.prakharsahu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={24} className="group-hover:animate-pulse" />
            </motion.a>

            {/* Discord */}
            <motion.a
              href="https://discord.com/users/prakhar3866"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-indigo-600 hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <DiscordIcon size={24} className="group-hover:animate-pulse" />
            </motion.a>

            {/* LeetCode */}
            <motion.a
              href="https://leetcode.com/u/PRAKHAR_010/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-yellow-600 hover:border-yellow-600 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <LeetCodeIcon size={24} className="group-hover:animate-pulse" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <AnimatedSection
        id="about"
        className="min-h-screen flex flex-col justify-center px-4 py-16"
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* About Me Heading - Left aligned */}
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-12 text-left"
            variants={fadeInUp}
          >
            About Me
          </motion.h2>

          {/* Main Content Container - Split Layout */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
            {/* Left Side - Profile Photo */}
            <motion.div className="flex-shrink-0" variants={slideInLeft}>
              <div className="w-80 h-80 md:w-96 md:h-96 relative">
                {/* Profile Photo Container - Square shape */}
                <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 shadow-2xl">
                  {/* Replace this src with your actual profile photo */}
                  <Image
                    src="/images/profile-photo.jpg"
                    alt="Prakhar's Profile"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const nextElement = e.currentTarget
                        .nextElementSibling as HTMLElement;
                      if (nextElement) nextElement.style.display = "flex";
                    }}
                  />
                  {/* Fallback when image fails to load */}
                  <div className="w-full h-full hidden items-center justify-center flex-col">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center mb-4">
                      <span className="text-3xl font-bold text-white">P</span>
                    </div>
                    <div className="text-sm text-center px-4">
                      Add your profile photo here
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-40"></div>
              </div>
            </motion.div>

            {/* Right Side - All Content */}
            <motion.div
              className="flex-1 space-y-6 text-left"
              variants={slideInRight}
            >
              {/* Quote */}
              <motion.blockquote
                className="text-xl italic text-gray-300 border-l-4 border-blue-500 pl-6 mb-8"
                variants={fadeInUp}
              >
                &ldquo;The best way to predict the future is to invent
                it.&rdquo;
                <span className="block mt-2 text-gray-400 text-sm not-italic">
                  – Alan Kay
                </span>
              </motion.blockquote>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                variants={fadeInUp}
              >
                I&apos;m passionate about{" "}
                <span className="font-semibold gradient-text">
                  Computer Science
                </span>
                , with a strong interest in{" "}
                <span className="font-semibold gradient-text">
                  full-stack development
                </span>{" "}
                and a growing curiosity for{" "}
                <span className="font-semibold gradient-text">DevOps</span> and
                modern technologies.
              </motion.p>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                variants={fadeInUp}
              >
                My expertise spans across the entire development lifecycle, from{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  frontend architectures
                </span>{" "}
                using{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  React, Next.js, and TypeScript
                </span>{" "}
                to backend systems with{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Node.js, Express, and Python
                </span>
                . I focus on building{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  RESTful APIs
                </span>{" "}
                and implementing{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  microservices architecture
                </span>{" "}
                for scalable applications.
              </motion.p>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                variants={fadeInUp}
              >
                In the DevOps realm, I work extensively with{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  containerization using Docker
                </span>
                , orchestration with{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Kubernetes
                </span>
                , and{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  infrastructure as code
                </span>{" "}
                using tools like{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Terraform
                </span>
                . I&apos;m experienced in setting up{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  CI/CD pipelines
                </span>{" "}
                with GitHub Actions and Jenkins for automated testing and
                deployment.
              </motion.p>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                variants={fadeInUp}
              >
                My work has also been recognized internationally — I was
                selected as an{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  International Finalist at IEEE YESIST12 (2025){" "}
                  <span className="font-semibold text-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    MY
                  </span>
                </span>
                , representing India at{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Universiti Kebangsaan Malaysia
                </span>{" "}
                for sustainable tech innovation. I also won the{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Best Project Award
                </span>{" "}
                at IEEE YESIST12 Prelims 2025.
              </motion.p>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                variants={fadeInUp}
              >
                I&apos;m open to{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  internship opportunities
                </span>{" "}
                where I can collaborate, contribute, and continue learning in
                both development and DevOps.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection
        id="skills"
        className="min-h-screen flex items-center justify-center px-4 py-16"
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-16 text-center"
            variants={fadeInUp}
          >
            Skills & Technologies
          </motion.h2>

          <motion.div
            className="grid grid-cols-3 md:grid-cols-5 gap-8"
            variants={staggerContainer}
          >
            {[
              { name: "C", icon: "/assets/c.svg" },
              { name: "C++", icon: "/assets/cpp.svg" },
              { name: "HTML5", icon: "/assets/html.svg" },
              { name: "CSS3", icon: "/assets/css.svg" },
              { name: "Bootstrap", icon: "/assets/bootstrap.svg" },
              { name: "JavaScript", icon: "/assets/javascript.svg" },
              { name: "TypeScript", icon: "/assets/typescript.svg" },
              { name: "TailwindCSS", icon: "/assets/tailwind.svg" },
              { name: "Next.js", icon: "/assets/nextjs.svg" },
              { name: "React", icon: "/assets/react.svg" },
              { name: "Node.js", icon: "/assets/nodejs.svg" },
              { name: "Express.js", icon: "/assets/express.svg" },
              { name: "Socket.io", icon: "/assets/socketio.svg" },
              { name: "Python", icon: "/assets/python.svg" },
              {
                name: "React Native",
                icon: "/assets/react-native.svg",
              },
              { name: "Expo", icon: "/assets/expo.svg" },
              { name: "MongoDB", icon: "/assets/mongodb.svg" },
              { name: "MySQL", icon: "/assets/mysql.svg" },
              { name: "Prisma", icon: "/assets/prisma.svg" },
              { name: "Firebase", icon: "/assets/firebase.svg" },
              { name: "Docker", icon: "/assets/docker.svg" },
              { name: "Kubernetes", icon: "/assets/kubernetes.svg" },
              { name: "Jenkins", icon: "/assets/jenkins.svg" },
              { name: "Terraform", icon: "/assets/terraform.svg" },
              { name: "GitHub", icon: "/assets/github.svg" },
              {
                name: "GitHub Actions",
                icon: "/assets/github-actions.svg",
              },
              { name: "Git", icon: "/assets/git.svg" },
              { name: "Bash", icon: "/assets/bash.svg" },
              { name: "AWS", icon: "/assets/aws.svg" },
              { name: "PostMan", icon: "/assets/postman.svg" },
            ].map((item) => (
              <motion.div key={item.name} variants={fadeInUp}>
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 group cursor-pointer h-40">
                  <CardContent className="p-8 flex flex-col items-center justify-center space-y-6 h-full">
                    <div className="w-20 h-20 relative group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <h4 className="text-white font-medium text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 text-sm">
                      {item.name}
                    </h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection
        id="projects"
        className="min-h-screen flex items-center justify-center px-4"
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-16 text-center"
            variants={fadeInUp}
          >
            Projects
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto"
            variants={staggerContainer}
          >
            {/* Project 1 */}
            <motion.div variants={fadeInUp} className="w-full">
              <Link href="/projects/fintrack">
                <Card className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group w-full h-72 hover:shadow-2xl hover:shadow-blue-500/25 hover:border-blue-500/30">
                  <CardContent className="p-6 flex flex-col justify-center items-center h-full w-full">
                    {/* Project Thumbnail */}
                    <div className="h-40 w-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <div className="text-6xl text-white/40 group-hover:text-white/60 transition-all duration-300">
                        🚀
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white text-center group-hover:gradient-text transition-all duration-300">
                      FinTrack
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Project 2 */}
            <motion.div variants={fadeInUp} className="w-full">
              <Link href="/projects/task-manager">
                <Card className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group w-full h-72 hover:shadow-2xl hover:shadow-green-500/25 hover:border-green-500/30">
                  <CardContent className="p-6 flex flex-col justify-center items-center h-full w-full">
                    {/* Project Thumbnail */}
                    <div className="h-40 w-40 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-green-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <div className="text-6xl text-white/40 group-hover:text-white/60 transition-all duration-300">
                        📱
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white text-center group-hover:gradient-text transition-all duration-300">
                      StreamTalk
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Project 3 */}
            <motion.div variants={fadeInUp} className="w-full">
              <Link href="/projects/viducate">
                <Card className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group w-full h-72 hover:shadow-2xl hover:shadow-purple-500/25 hover:border-purple-500/30">
                  <CardContent className="p-6 flex flex-col justify-center items-center h-full w-full">
                    {/* Project Thumbnail */}
                    <div className="h-40 w-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                      <div className="text-6xl text-white/40 group-hover:text-white/60 transition-all duration-300">
                        ⚙️
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white text-center group-hover:gradient-text transition-all duration-300">
                      Viducate
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Project 4 */}
            <motion.div variants={fadeInUp} className="w-full">
              <Link href="/projects/snapsummary">
                <Card className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group w-full h-72 hover:shadow-2xl hover:shadow-orange-500/25 hover:border-orange-500/30">
                  <CardContent className="p-6 flex flex-col justify-center items-center h-full w-full">
                    {/* Project Thumbnail */}
                    <div className="h-40 w-40 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300">
                      <div className="text-6xl text-white/40 group-hover:text-white/60 transition-all duration-300">
                        🧩
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white text-center group-hover:gradient-text transition-all duration-300">
                      SnapSummary - Chrome Extension
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Project 5 */}
            <motion.div variants={fadeInUp} className="w-full">
              <Link href="/projects/cloudops">
                <Card className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group w-full h-72 hover:shadow-2xl hover:shadow-cyan-500/25 hover:border-cyan-500/30">
                  <CardContent className="p-6 flex flex-col justify-center items-center h-full w-full">
                    {/* Project Thumbnail */}
                    <div className="h-40 w-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <div className="text-6xl text-white/40 group-hover:text-white/60 transition-all duration-300">
                        ☁️
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white text-center group-hover:gradient-text transition-all duration-300">
                      CloudOps
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Project 6 */}
            <motion.div variants={fadeInUp} className="w-full">
              <Link href="/projects/aiwriter">
                <Card className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group w-full h-72 hover:shadow-2xl hover:shadow-pink-500/25 hover:border-pink-500/30">
                  <CardContent className="p-6 flex flex-col justify-center items-center h-full w-full">
                    {/* Project Thumbnail */}
                    <div className="h-40 w-40 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-pink-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <div className="text-6xl text-white/40 group-hover:text-white/60 transition-all duration-300">
                        ✍️
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white text-center group-hover:gradient-text transition-all duration-300">
                      AI Writer
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Achievement Section */}
      <AnimatedSection
        id="achievement"
        className="min-h-screen flex items-center justify-center px-4"
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-8"
            variants={fadeInUp}
          >
            Achievements
          </motion.h2>
          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.div
              className="bg-white/10 p-6 rounded-lg"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                IEEE YESIST12 International Finalist (2025)
              </h3>
              <p className="text-gray-300">
                Selected to represent India at Universiti Kebangsaan Malaysia
                for sustainable tech innovation.
              </p>
            </motion.div>
            <motion.div
              className="bg-white/10 p-6 rounded-lg"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                Best Project Award - IEEE YESIST12 Prelims (2025)
              </h3>
              <p className="text-gray-300">
                Recognized for outstanding project development and innovation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection
        id="experience"
        className="min-h-screen flex items-center justify-center px-4"
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-8"
            variants={fadeInUp}
          >
            Experience
          </motion.h2>
          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.div
              className="bg-white/10 p-6 rounded-lg text-left"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                Full Stack Developer
              </h3>
              <p className="text-gray-300 mb-2">Personal Projects • 2024</p>
              <p className="text-gray-300">
                Developed multiple end-to-end applications including FinTrack,
                StreamTalk, and Viducate using modern tech stacks.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection
        id="contact"
        className="min-h-screen flex items-center justify-center px-4"
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-8"
            variants={fadeInUp}
          >
            Get In Touch
          </motion.h2>
          <motion.p className="text-lg text-gray-300 mb-8" variants={fadeInUp}>
            I&apos;m always open to discussing new opportunities and interesting
            projects. Let&apos;s connect!
          </motion.p>
          <motion.div className="space-x-4" variants={fadeInUp}>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all">
              Email Me
            </button>
            <button className="border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all">
              LinkedIn
            </button>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
