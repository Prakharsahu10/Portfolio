"use client";

import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
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

const skills = [
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
  { name: "React Native", icon: "/assets/react-native.svg" },
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
  { name: "GitHub Actions", icon: "/assets/github-actions.svg" },
  { name: "Git", icon: "/assets/git.svg" },
  { name: "Bash", icon: "/assets/bash.svg" },
  { name: "AWS", icon: "/assets/aws.svg" },
  { name: "PostMan", icon: "/assets/postman.svg" },
];

export default function SkillsSection() {
  return (
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
          {skills.map((item) => (
            <motion.div key={item.name} variants={fadeInUp}>
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 group cursor-pointer h-40">
                <CardContent className="p-8 flex flex-col items-center justify-center space-y-6 h-full">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                  <p className="text-white text-center text-sm font-medium group-hover:text-yellow-300 transition-colors duration-300">
                    {item.name}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
