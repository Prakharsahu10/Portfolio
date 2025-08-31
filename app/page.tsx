"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image";
import TypingAnimation from "@/components/typing-animation";

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
  variants?: object;
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
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Prakhar!
            </span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-4xl text-gray-300"
            variants={fadeInUp}
          >
            <TypingAnimation />
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Passionate about crafting scalable web applications and exploring
            the world of DevOps engineering.
          </motion.p>

          <motion.div className="space-x-4" variants={fadeInUp}>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all">
              Resume
            </button>
            <button className="border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all">
              Get In Touch
            </button>
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
                "The best way to predict the future is to invent it."
                <span className="block mt-2 text-gray-400 text-sm not-italic">
                  – Alan Kay
                </span>
              </motion.blockquote>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                variants={fadeInUp}
              >
                I'm passionate about{" "}
                <span className="font-semibold text-white">
                  Computer Science
                </span>
                , with a strong interest in{" "}
                <span className="font-semibold text-white">
                  full-stack development
                </span>{" "}
                and a growing curiosity for{" "}
                <span className="font-semibold text-white">DevOps</span> and
                modern technologies.
              </motion.p>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                variants={fadeInUp}
              >
                I've built end-to-end projects like{" "}
                <span className="font-semibold text-white">FinTrack</span>, an
                AI-powered financial tracker,{" "}
                <span className="font-semibold text-white">StreamTalk</span>, a
                real-time messaging app, and{" "}
                <span className="font-semibold text-white">Viducate</span>, an
                AI-driven learning platform. These reflect my ability to create
                scalable, secure, and user-focused applications.
              </motion.p>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                variants={fadeInUp}
              >
                Currently, I'm diving deeper into DevOps tools such as{" "}
                <span className="font-semibold text-white">Docker</span>,{" "}
                <span className="font-semibold text-white">
                  CI/CD pipelines
                </span>
                , and{" "}
                <span className="font-semibold text-white">
                  cloud deployment
                </span>
                , aiming to bridge the gap between development and operations.
              </motion.p>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                variants={fadeInUp}
              >
                My work has also been recognized internationally — I was
                selected as an{" "}
                <span className="font-semibold text-white">
                  International Finalist at IEEE YESIST12 (2025)
                </span>
                , representing India at{" "}
                <span className="font-semibold text-white">
                  Universiti Kebangsaan Malaysia
                </span>{" "}
                for sustainable tech innovation. I also won the{" "}
                <span className="font-semibold text-white">
                  Best Project Award
                </span>{" "}
                at IEEE YESIST12 Prelims 2025.
              </motion.p>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                variants={fadeInUp}
              >
                🚀 I'm open to{" "}
                <span className="font-semibold text-white">
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
        className="min-h-screen flex items-center justify-center px-4"
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-8"
            variants={fadeInUp}
          >
            Skills
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={staggerContainer}
          >
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "Docker",
              "AWS",
            ].map((skill) => (
              <motion.div
                key={skill}
                className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all"
                variants={fadeInUp}
              >
                {skill}
              </motion.div>
            ))}
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
            I'm always open to discussing new opportunities and interesting
            projects. Let's connect!
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
