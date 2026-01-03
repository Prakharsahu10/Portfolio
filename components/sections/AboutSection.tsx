"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

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

export default function AboutSection() {
  return (
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
              <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-400/20 to-amber-500/20 border border-white/10 shadow-2xl">
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
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <div className="text-white text-xl font-semibold">
                    Prakhar Sahu
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-500 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-amber-500 rounded-full opacity-40"></div>
            </div>
          </motion.div>

          {/* Right Side - All Content */}
          <motion.div
            className="flex-1 space-y-6 text-left"
            variants={slideInRight}
          >
            {/* Quote */}
            <motion.blockquote
              className="text-xl italic text-gray-300 border-l-4 border-yellow-500 pl-6 mb-8"
              variants={fadeInUp}
            >
              &ldquo;The best way to predict the future is to invent it.&rdquo;
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
              <span className="font-semibold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                frontend architectures
              </span>{" "}
              using{" "}
              <span className="font-semibold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                React, Next.js, and TypeScript
              </span>{" "}
              to backend systems with{" "}
              <span className="font-semibold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Node.js, Express, and Python
              </span>
              . I focus on building{" "}
              <span className="font-semibold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                RESTful APIs
              </span>{" "}
              and implementing{" "}
              <span className="font-semibold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                microservices architecture
              </span>{" "}
              for scalable applications.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              variants={fadeInUp}
            >
              In the DevOps realm, I work extensively with{" "}
              <span className="font-semibold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                containerization using Docker
              </span>
              , orchestration with{" "}
              <span className="font-semibold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Kubernetes
              </span>
              , and{" "}
              <span className="font-semibold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                infrastructure as code
              </span>{" "}
              using tools like{" "}
              <span className="font-semibold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Terraform
              </span>
              . I&apos;m experienced in setting up{" "}
              <span className="font-semibold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                CI/CD pipelines
              </span>{" "}
              with GitHub Actions and Jenkins for automated testing and
              deployment.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              variants={fadeInUp}
            >
              My work has also been recognized internationally — I was selected
              as an{" "}
              <span className="font-semibold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                International Finalist at IEEE YESIST12 (2025){" "}
                <span className="font-semibold text-sm bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                  MY
                </span>
              </span>
              , representing India at{" "}
              <span className="font-semibold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Universiti Kebangsaan Malaysia
              </span>{" "}
              for sustainable tech innovation. I also won the{" "}
              <span className="font-semibold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Best Project Award
              </span>{" "}
              at IEEE YESIST12 Prelims 2025.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              variants={fadeInUp}
            >
              I&apos;m open to{" "}
              <span className="font-semibold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                internship opportunities
              </span>{" "}
              where I can collaborate, contribute, and continue learning in both
              development and DevOps.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
