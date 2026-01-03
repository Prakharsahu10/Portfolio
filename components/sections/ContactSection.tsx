"use client";

import { motion, Variants } from "framer-motion";
import { Linkedin, Twitter, Instagram, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { ReactNode, useState, useEffect } from "react";

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

export default function ContactSection() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
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
          {/* Availability Status Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-green-300 text-sm font-medium">
              Available for opportunities
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Whether it&apos;s a
            groundbreaking project, an innovative startup, or just a coffee chat
            about tech - I&apos;m here to connect!
          </p>

          {/* Quick Stats Row */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Response Time */}
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
              <div className="text-yellow-400">⚡</div>
              <div className="text-left">
                <div className="text-white text-sm font-medium">
                  Quick Response
                </div>
                <div className="text-gray-400 text-xs">Within 24 hours</div>
              </div>
            </div>

            {/* Timezone */}
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
              <Clock className="text-yellow-400" size={20} />
              <div className="text-left">
                <div className="text-white text-sm font-medium">
                  {currentTime} IST
                </div>
                <div className="text-gray-400 text-xs">Bengaluru, India</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Contact Content */}
        <div className="max-w-2xl mx-auto">
          {/* Contact Form & Social Links */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
            className="flex flex-col space-y-8"
          >
            {/* Contact Form */}
            <ContactForm />

            {/* Social Media Links */}
            <div className="text-center">
              <h4 className="text-white font-medium mb-4">Connect on Social</h4>
              <div className="flex justify-center space-x-4">
                <motion.a
                  href="https://linkedin.com/in/prakhar-sahu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin
                    size={20}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.a>
                <motion.a
                  href="https://x.com/Prakhar_018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-sky-500 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter
                    size={20}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/ig.prakharsahu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram
                    size={20}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
