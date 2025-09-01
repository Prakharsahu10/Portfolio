"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import ContactForm from "@/components/ContactForm";
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
    viewport={{ once: false, amount: 0.3 }}
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
              <Link href="/projects/streamtalk">
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
              <Link href="/projects/splitnow">
                <Card className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group w-full h-72 hover:shadow-2xl hover:shadow-cyan-500/25 hover:border-cyan-500/30">
                  <CardContent className="p-6 flex flex-col justify-center items-center h-full w-full">
                    {/* Project Thumbnail */}
                    <div className="h-40 w-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <div className="text-6xl text-white/40 group-hover:text-white/60 transition-all duration-300">
                        💰
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white text-center group-hover:gradient-text transition-all duration-300">
                      SplitNow
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Project 6 */}
            <motion.div variants={fadeInUp} className="w-full">
              <Link href="/projects/lumix">
                <Card className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group w-full h-72 hover:shadow-2xl hover:shadow-pink-500/25 hover:border-pink-500/30">
                  <CardContent className="p-6 flex flex-col justify-center items-center h-full w-full">
                    {/* Project Thumbnail */}
                    <div className="h-40 w-40 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-pink-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <div className="text-6xl text-white/40 group-hover:text-white/60 transition-all duration-300">
                        🎬
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white text-center group-hover:gradient-text transition-all duration-300">
                      Lumix
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Project 7 */}
            <motion.div variants={fadeInUp} className="w-full">
              <Link href="/projects/feastfly">
                <Card className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group w-full h-72 hover:shadow-2xl hover:shadow-orange-500/25 hover:border-orange-500/30">
                  <CardContent className="p-6 flex flex-col justify-center items-center h-full w-full">
                    {/* Project Thumbnail */}
                    <div className="h-40 w-40 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300">
                      <div className="text-6xl text-white/40 group-hover:text-white/60 transition-all duration-300">
                        �
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white text-center group-hover:gradient-text transition-all duration-300">
                      FeastFly
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Project 8 */}
            <motion.div variants={fadeInUp} className="w-full">
              <Link href="/projects/subscription-tracker">
                <Card className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group w-full h-72 hover:shadow-2xl hover:shadow-emerald-500/25 hover:border-emerald-500/30">
                  <CardContent className="p-6 flex flex-col justify-center items-center h-full w-full">
                    {/* Project Thumbnail */}
                    <div className="h-40 w-40 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-300">
                      <div className="text-6xl text-white/40 group-hover:text-white/60 transition-all duration-300">
                        �
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white text-center group-hover:gradient-text transition-all duration-300">
                      Subscription Tracker System
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Project 9 */}
            <motion.div variants={fadeInUp} className="w-full">
              <Link href="/projects/brainblitz">
                <Card className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group w-full h-72 hover:shadow-2xl hover:shadow-violet-500/25 hover:border-violet-500/30">
                  <CardContent className="p-6 flex flex-col justify-center items-center h-full w-full">
                    {/* Project Thumbnail */}
                    <div className="h-40 w-40 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-violet-500/30 group-hover:to-fuchsia-500/30 transition-all duration-300">
                      <div className="text-6xl text-white/40 group-hover:text-white/60 transition-all duration-300">
                        �
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white text-center group-hover:gradient-text transition-all duration-300">
                      BrainBlitz
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Resume & Experience Section */}
      <AnimatedSection
        id="resume-experience"
        className="min-h-screen flex items-center justify-center px-4 py-32"
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-24 relative">
            {/* Stylish Divider Line */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 hidden md:flex flex-col items-center justify-center origin-center"
            >
              {/* Top gradient orb */}
              <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-4 animate-pulse shadow-lg shadow-blue-500/50"></div>

              {/* Main gradient line */}
              <div className="w-px bg-gradient-to-b from-blue-400 via-purple-500 to-pink-400 flex-1 relative overflow-hidden">
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"></div>
              </div>

              {/* Middle decorative element */}
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent my-4"></div>
              <div className="w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg shadow-purple-500/50"></div>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent my-4"></div>

              {/* Continue gradient line */}
              <div className="w-px bg-gradient-to-b from-purple-400 via-pink-500 to-blue-400 flex-1 relative overflow-hidden">
                {/* Animated glow effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>

              {/* Bottom gradient orb */}
              <div
                className="w-3 h-3 bg-gradient-to-br from-pink-400 to-blue-500 rounded-full mt-4 animate-pulse shadow-lg shadow-pink-500/50"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </motion.div>

            {/* Left Side - Resume */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.3 }}
              variants={slideInLeft}
              className="space-y-8"
            >
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                  Resume
                </h3>

                {/* Mock Window Container */}
                <div
                  className="bg-gray-800/50 border border-gray-600/50 rounded-t-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1cxFByeVqLzkESNhZhsZjaziQ-luuSasC/view?usp=sharing",
                      "_blank"
                    )
                  }
                >
                  {/* Window Header */}
                  <div className="bg-gray-700/70 border-b border-gray-600/50 rounded-t-xl px-4 py-3 flex items-center justify-between">
                    {/* Window Control Buttons */}
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors"></div>
                    </div>

                    {/* Window Title */}
                    <div className="flex-1 text-center">
                      <span className="text-gray-300 text-sm font-medium">
                        Resume - Prakhar Sahu.pdf
                      </span>
                    </div>

                    {/* Window Actions */}
                    <div className="flex space-x-1">
                      <button className="w-6 h-6 bg-gray-600/50 hover:bg-gray-500/50 rounded text-gray-300 text-xs flex items-center justify-center transition-colors">
                        −
                      </button>
                      <button className="w-6 h-6 bg-gray-600/50 hover:bg-gray-500/50 rounded text-gray-300 text-xs flex items-center justify-center transition-colors">
                        □
                      </button>
                      <button className="w-6 h-6 bg-red-500/70 hover:bg-red-500 rounded text-white text-xs flex items-center justify-center transition-colors">
                        ×
                      </button>
                    </div>
                  </div>

                  {/* Window Content - Resume Preview */}
                  <div className="p-4 bg-white/5 rounded-b-xl group-hover:bg-white/10 transition-all duration-300">
                    {/* PDF Preview Container */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300">
                      {/* PDF Viewer */}
                      <div className="w-full h-[600px] bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-300">
                        <iframe
                          src="/resume/Prakhar_Sahu_Resume.pdf"
                          className="w-full h-full border-0"
                          title="Prakhar Sahu Resume Preview"
                        />
                        {/* Fallback for browsers that don&apos;t support iframe PDF viewing */}
                        <div
                          className="w-full h-full hidden flex-col items-center justify-center text-center p-8 bg-gray-50"
                          id="pdf-fallback"
                        >
                          <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                            <svg
                              className="w-12 h-12 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.018.277.018.619 0 1.004-.308 1.004-.834 0-.513-.342-.398-.909-.398zm3.453 2.361c-.13-.018-.277-.018-.408-.018v-1.705c.131-.018.278-.018.408-.018.681 0 1.024.246 1.024.872 0 .658-.396.869-1.024.869z" />
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                              <path d="M14 2l6 6h-6V2z" />
                              <path d="M6.5 15.5v-3h.893c.464 0 .766.127.766.627 0 .272-.108.469-.3.555.234.081.381.295.381.627 0 .627-.396.764-.893.764H6.5v-.573z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            PDF Preview
                          </h3>
                          <p className="text-gray-600 mb-4">
                            Your browser doesn&apos;t support PDF preview. Click
                            below to view the full resume.
                          </p>
                          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium">
                            Open Resume PDF
                          </button>
                        </div>
                      </div>

                      {/* Click Overlay for Opening Full Resume */}
                      <div className="absolute inset-0 bg-transparent cursor-pointer group-hover:bg-blue-500/5 transition-colors duration-300 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200">
                          <div className="flex items-center space-x-2 text-gray-800">
                            <span className="text-sm font-medium">
                              Click to view full resume
                            </span>
                            <svg
                              className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Subtle Animation Elements */}
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <div
                        className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Work Experience */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.3 }}
              variants={slideInRight}
              className="space-y-8"
            >
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                  Work Experience
                </h3>

                {/* Mock Window Container */}
                <div
                  className="bg-gray-800/50 border border-gray-600/50 rounded-t-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://linkedin.com/in/prakhar-sahu/",
                      "_blank"
                    )
                  }
                >
                  {/* Window Header */}
                  <div className="bg-gray-700/70 border-b border-gray-600/50 rounded-t-xl px-4 py-3 flex items-center justify-between">
                    {/* Window Control Buttons */}
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors"></div>
                    </div>

                    {/* Window Title */}
                    <div className="flex-1 text-center">
                      <span className="text-gray-300 text-sm font-medium">
                        Experience Timeline - Prakhar Sahu
                      </span>
                    </div>

                    {/* Window Actions */}
                    <div className="flex space-x-1">
                      <button className="w-6 h-6 bg-gray-600/50 hover:bg-gray-500/50 rounded text-gray-300 text-xs flex items-center justify-center transition-colors">
                        −
                      </button>
                      <button className="w-6 h-6 bg-gray-600/50 hover:bg-gray-500/50 rounded text-gray-300 text-xs flex items-center justify-center transition-colors">
                        □
                      </button>
                      <button className="w-6 h-6 bg-red-500/70 hover:bg-red-500 rounded text-white text-xs flex items-center justify-center transition-colors">
                        ×
                      </button>
                    </div>
                  </div>

                  {/* Window Content - Experience Image Preview */}
                  <div className="p-4 bg-white/5 rounded-b-xl group-hover:bg-white/10 transition-all duration-300 overflow-hidden">
                    {/* Image Preview Container */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300">
                      {/* Experience Image Display */}
                      <div className="w-full h-[280px] bg-gray-50 rounded-lg overflow-hidden border-2 border-gray-300 relative">
                        <Image
                          src="/experience/ea_internship.png"
                          alt="Prakhar Sahu EA Internship Certificate"
                          fill
                          className="object-contain bg-white"
                          style={{ objectFit: "contain" }}
                        />
                        {/* Fallback when image fails to load */}
                        <div
                          className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gray-50"
                          style={{ display: "none" }}
                          onError={() => {
                            // Show fallback content
                          }}
                        >
                          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                            <svg
                              className="w-12 h-12 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2M8 21l4-4 4 4M8 3l4 4 4-4"
                              />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            Experience Timeline
                          </h3>
                          <p className="text-gray-600 mb-4">
                            Add your experience timeline image to preview here.
                          </p>
                          <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 font-medium">
                            View Experience Details
                          </button>
                        </div>
                      </div>

                      {/* Image Controls Overlay */}
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-full px-6 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center space-x-4 text-white text-sm">
                          <button className="hover:text-blue-400 transition-colors">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Subtle Animation Elements */}
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <div
                        className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Achievement Section */}
      <AnimatedSection
        id="achievement"
        className="min-h-screen flex items-center justify-center px-4 py-16"
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-16 text-center"
            variants={fadeInUp}
          >
            Achievements
          </motion.h2>

          {/* First Achievement - Image Left, Content Right */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center"
            variants={fadeInUp}
          >
            {/* Left Side - Image */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.3 }}
              variants={slideInLeft}
              className="order-2 lg:order-1"
            >
              <div className="relative group">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/25">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10">
                    <Image
                      src="/achievements/ieee-finalist.jpg"
                      alt="IEEE YESIST12 International Finalist Achievement"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ objectFit: "cover" }}
                    />
                    {/* Fallback when image fails to load */}
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/30 to-purple-500/30"
                      style={{ display: "none" }}
                    >
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-2xl">🏆</span>
                        </div>
                        <p className="text-white text-sm">
                          Add IEEE Achievement Image
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.3 }}
              variants={slideInRight}
              className="order-1 lg:order-2"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      IEEE YESIST12 International Finalist
                    </h3>
                    <span className="text-blue-400 font-medium">2025</span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Selected to represent{" "}
                  <span className="gradient-text font-medium">India</span> at{" "}
                  <span className="gradient-text font-medium">
                    Universiti Kebangsaan Malaysia
                  </span>{" "}
                  for innovation in{" "}
                  <span className="gradient-text font-medium">
                    sustainable technology
                  </span>
                  . This prestigious international recognition highlights
                  exceptional research capabilities and technological innovation
                  that addresses global sustainability challenges.
                </p>
                <div className="mt-4 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                  <p className="text-blue-200 text-sm leading-relaxed">
                    <strong>Significance:</strong> Among the select few chosen
                    to represent the entire nation on an international platform,
                    demonstrating excellence in engineering research and
                    sustainable technology development.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    🇮🇳 India Representative
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    🌱 Sustainable Tech
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    🇲🇾 Malaysia 2025
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Second Achievement - Image Right, Content Left */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            {/* Left Side - Content */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.3 }}
              variants={slideInLeft}
              className="order-1"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-2xl">🥇</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      Best Project Award
                    </h3>
                    <span className="text-green-400 font-medium">
                      IEEE YESIST12 Prelims 2025
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Won the{" "}
                  <span className="gradient-text font-medium">
                    Best Project Award
                  </span>{" "}
                  at{" "}
                  <span className="gradient-text font-medium">
                    IEEE YESIST12 Prelims
                  </span>{" "}
                  during the{" "}
                  <span className="gradient-text font-medium">
                    &apos;Kaushalya&apos; Open House Expo 2025
                  </span>{" "}
                  for leading the groundbreaking project{" "}
                  <span className="gradient-text font-medium">
                    &quot;Benchmarking YOLO version for Automatic Retail
                    Checkout&quot;
                  </span>{" "}
                  at{" "}
                  <span className="gradient-text font-medium">
                    Nitte Meenakshi Institute of Technology
                  </span>
                  .
                </p>
                <div className="mt-4 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-500/20">
                  <p className="text-green-200 text-sm leading-relaxed">
                    <strong>Project Impact:</strong> Developed an innovative
                    AI-powered retail automation system using YOLO object
                    detection algorithms, revolutionizing checkout processes
                    through computer vision and machine learning technologies.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    🏆 Best Project Award
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    🤖 YOLO AI/ML
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    🛒 Retail Innovation
                  </div>
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    📍 NMIT
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.3 }}
              variants={slideInRight}
              className="order-2"
            >
              <div className="relative group">
                <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-green-500/25">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10">
                    <Image
                      src="/achievements/best-project-award.jpg"
                      alt="Best Project Award IEEE YESIST12 Prelims"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ objectFit: "cover" }}
                    />
                    {/* Fallback when image fails to load */}
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-500/30 to-blue-500/30"
                      style={{ display: "none" }}
                    >
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-2xl">🥇</span>
                        </div>
                        <p className="text-white text-sm">
                          Add Best Project Award Image
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection
        id="contact"
        className="min-h-screen flex items-center justify-center px-4 py-16"
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Amazing Together</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Whether it&apos;s a
              groundbreaking project, an innovative startup, or just a coffee
              chat about tech - I&apos;m here to connect!
            </p>
          </motion.div>

          {/* Main Contact Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            {/* Left Side - Interactive Map & Location Info */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.3 }}
              variants={slideInLeft}
              className="flex flex-col space-y-8"
            >
              {/* Interactive Map Container - Expanded */}
              <div className="relative group flex-1">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                  <div className="flex-1 min-h-[400px] rounded-xl overflow-hidden border border-white/10 group-hover:shadow-xl group-hover:shadow-blue-500/25 transition-all duration-300">
                    {/* Google Maps Embed with Fallback */}
                    <iframe
                      src="https://maps.google.com/maps?q=Dayananda%20Sagar%20College%20of%20Engineering,%20Bengaluru&t=k&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "400px" }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-xl"
                      title="Dayananda Sagar College of Engineering Location"
                    ></iframe>
                  </div>

                  {/* Location Info Overlay */}
                  <div className="mt-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">
                          📍 Dayananda Sagar College of Engineering
                        </h4>
                        <p className="text-gray-300 text-sm">
                          Bengaluru, Karnataka, India
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          window.open(
                            "https://maps.google.com/?q=Dayananda+Sagar+College+of+Engineering,+Bengaluru,+Karnataka",
                            "_blank"
                          )
                        }
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-sm flex items-center space-x-2 group"
                      >
                        <span>Open in Maps</span>
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form & Social Links */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.3 }}
              variants={slideInRight}
              className="flex flex-col space-y-8"
            >
              {/* Contact Form */}
              <ContactForm />

              {/* Social Media Links */}
              <div className="text-center">
                <h4 className="text-white font-medium mb-4">
                  Connect on Social
                </h4>
                <div className="flex justify-center space-x-4">
                  <motion.a
                    href="https://linkedin.com/in/prakhar-sahu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-6 h-6 group-hover:animate-pulse"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://x.com/Prakhar_018"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-sky-500 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-5 h-5 group-hover:animate-pulse"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/ig.prakharsahu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-6 h-6 group-hover:animate-pulse"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Copyright Footer */}
      <footer className="bg-black/50 border-t border-white/10 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* Copyright Text */}
            <div>
              <p className="text-gray-300 text-sm">
                © {new Date().getFullYear()}{" "}
                <span className="text-white font-medium">Prakhar Sahu</span>.
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
