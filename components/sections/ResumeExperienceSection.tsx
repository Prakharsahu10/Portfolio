"use client";

import { motion, Variants } from "framer-motion";
import { FileText, Briefcase, ExternalLink } from "lucide-react";
import { ReactNode } from "react";

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

export default function ResumeExperienceSection() {
  return (
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
            <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-4 animate-pulse shadow-lg shadow-blue-500/50"></div>
            <div className="w-px bg-gradient-to-b from-blue-400 via-purple-500 to-pink-400 flex-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent my-4"></div>
            <div className="w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg shadow-purple-500/50"></div>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent my-4"></div>
            <div className="w-px bg-gradient-to-b from-purple-400 via-pink-500 to-blue-400 flex-1 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
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

              <div
                className="bg-gray-800/50 border border-gray-600/50 rounded-t-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1cxFByeVqLzkESNhZhsZjaziQ-luuSasC/view?usp=drive_link",
                    "_blank"
                  )
                }
              >
                <div className="bg-gray-700/70 border-b border-gray-600/50 rounded-t-xl px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <FileText size={16} />
                    <span>Resume.pdf</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
                    <ExternalLink size={16} />
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-b-xl group-hover:bg-white/10 transition-all duration-300">
                  <div className="aspect-[8.5/11] bg-white rounded-lg shadow-2xl overflow-hidden relative">
                    {/* Resume icon fallback - no preview image needed */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex-col space-y-4">
                      <FileText size={64} className="text-white/80" />
                      <p className="text-white/80 text-lg font-medium">
                        Resume PDF
                      </p>
                      <p className="text-white/60 text-sm">Click to view</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-center space-x-2 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">
                      Click to view full resume
                    </span>
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

              <div
                className="bg-gray-800/50 border border-gray-600/50 rounded-t-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group cursor-pointer"
                onClick={() =>
                  window.open("https://linkedin.com/in/prakhar-sahu/", "_blank")
                }
              >
                <div className="bg-gray-700/70 border-b border-gray-600/50 rounded-t-xl px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Briefcase size={16} />
                    <span>Experience</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
                    <ExternalLink size={16} />
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-b-xl group-hover:bg-white/10 transition-all duration-300 overflow-hidden">
                  <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-white font-semibold text-lg">
                            Technical Team Member
                          </h4>
                          <p className="text-purple-400 font-medium">
                            Google Developer Student Clubs (GDSC) - NMIT
                          </p>
                        </div>
                        <span className="text-gray-400 text-sm whitespace-nowrap">
                          Sep 2024 - Present
                        </span>
                      </div>
                      <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
                        <li>
                          Contributing to collaborative projects and technical
                          workshops
                        </li>
                        <li>
                          Organizing and participating in coding events and
                          hackathons
                        </li>
                        <li>
                          Learning and sharing knowledge about Google
                          technologies
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-white font-semibold text-lg">
                            Core Team Member
                          </h4>
                          <p className="text-purple-400 font-medium">
                            Coding Club - NMIT
                          </p>
                        </div>
                        <span className="text-gray-400 text-sm whitespace-nowrap">
                          Sep 2024 - Present
                        </span>
                      </div>
                      <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
                        <li>
                          Organizing coding competitions and technical events
                        </li>
                        <li>
                          Mentoring junior students in programming and
                          problem-solving
                        </li>
                        <li>Contributing to club projects and initiatives</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-center space-x-2 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">
                      View full experience on LinkedIn
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
