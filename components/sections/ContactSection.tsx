"use client";

import { motion, Variants } from "framer-motion";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import ContactForm from "@/components/ContactForm";
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

export default function ContactSection() {
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Whether it&apos;s a
            groundbreaking project, an innovative startup, or just a coffee chat
            about tech - I&apos;m here to connect!
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
