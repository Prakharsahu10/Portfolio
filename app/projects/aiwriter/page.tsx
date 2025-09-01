"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export default function AIWriterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center text-white hover:text-purple-400 transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Project Thumbnail */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white/10 border-white/20 overflow-hidden">
              <CardContent className="p-8">
                <div className="aspect-square bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <div className="text-8xl text-white/40">✍️</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side - Project Details */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              AI Writer
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed">
              An intelligent writing assistant powered by advanced AI models
              that helps content creators, bloggers, and professionals generate
              high-quality written content. AI Writer offers multiple writing
              modes, real-time suggestions, and seamless integration with
              popular writing platforms.
            </p>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold gradient-text-simple">
                Key Features
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 gradient-bg rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <span className="gradient-text font-semibold">
                      Smart Content Generation:
                    </span>{" "}
                    Create articles, blogs, and marketing copy with AI-powered
                    assistance
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 gradient-bg rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <span className="gradient-text font-semibold">
                      Multiple Writing Modes:
                    </span>{" "}
                    Blog posts, social media, emails, technical documentation,
                    and creative writing
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 gradient-bg rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <span className="gradient-text font-semibold">
                      Real-time Editing:
                    </span>{" "}
                    Live grammar checking, style suggestions, and tone
                    adjustment
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 gradient-bg rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <span className="gradient-text font-semibold">
                      SEO Optimization:
                    </span>{" "}
                    Built-in SEO analyzer with keyword suggestions and content
                    optimization
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 gradient-bg rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <span className="gradient-text font-semibold">
                      Collaboration Tools:
                    </span>{" "}
                    Team workspaces, comments, and version control for
                    collaborative writing
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 gradient-bg rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <span className="gradient-text font-semibold">
                      Export Integration:
                    </span>{" "}
                    Direct publishing to WordPress, Medium, and other platforms
                  </span>
                </li>
              </ul>
            </div>

            {/* Technologies Used */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold gradient-text-simple">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "OpenAI API",
                  "Node.js",
                  "MongoDB",
                  "TailwindCSS",
                  "Python",
                  "FastAPI",
                  "Redis",
                  "Stripe",
                  "WebSocket",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white hover:bg-white/20 hover:border-pink-400/50 hover:text-pink-300 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-6">
              <motion.a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </motion.a>
              <motion.a
                href="#"
                className="inline-flex items-center px-6 py-3 gradient-bg text-white rounded-lg hover:opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
