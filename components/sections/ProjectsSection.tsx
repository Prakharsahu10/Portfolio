"use client";

import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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

const projects = [
  {
    href: "/projects/fintrack",
    title: "FinTrack",
    image: "/projects/fintrack.png",
    shadowColor: "blue",
  },
  {
    href: "/projects/streamtalk",
    title: "StreamTalk",
    image: "/projects/streamtalk.png",
    shadowColor: "green",
  },
  {
    href: "/projects/viducate",
    title: "Viducate",
    image: "/projects/viducate.png",
    shadowColor: "purple",
  },
  {
    href: "/projects/snapsummary",
    title: "SnapSummary",
    image: "/projects/viducate.png", // Using placeholder until image is added
    shadowColor: "orange",
  },
  {
    href: "/projects/splitnow",
    title: "SplitNow",
    image: "/projects/splitnow.png",
    shadowColor: "cyan",
  },
  {
    href: "/projects/lumix",
    title: "Lumix",
    image: "/projects/lumix.jpg",
    shadowColor: "pink",
  },
  {
    href: "/projects/feastfly",
    title: "FeastFly",
    image: "/projects/feastfly.jpg",
    shadowColor: "orange",
  },
  {
    href: "/projects/subscription-tracker",
    title: "Subscription Tracker",
    image: "/projects/fintrack.png", // Using placeholder until image is added
    shadowColor: "emerald",
  },
  {
    href: "/projects/brainblitz",
    title: "BrainBlitz",
    image: "/projects/brainblitz.png",
    shadowColor: "violet",
  },
];

export default function ProjectsSection() {
  return (
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
          {projects.map((project) => (
            <motion.div
              key={project.href}
              variants={fadeInUp}
              className="w-full"
            >
              <Link href={project.href}>
                <Card
                  className={`bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group w-full h-72 hover:shadow-2xl hover:shadow-${project.shadowColor}-500/25 hover:border-${project.shadowColor}-500/30`}
                >
                  <CardContent className="p-0 flex flex-col h-full w-full">
                    {/* Project Thumbnail */}
                    <div className="flex-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300 overflow-hidden relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const nextElement = e.currentTarget
                            .nextElementSibling as HTMLElement;
                          if (nextElement) nextElement.style.display = "flex";
                        }}
                      />
                      <div className="absolute inset-0 hidden items-center justify-center text-6xl text-white/40 group-hover:text-white/60 transition-all duration-300">
                        🚀
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="text-3xl font-bold text-white text-center group-hover:gradient-text transition-all duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
