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

export default function CloudOpsPage() {
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
                <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <div className="text-8xl text-white/40">☁️</div>
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
              CloudOps
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed">
              A comprehensive DevOps automation platform that streamlines cloud
              infrastructure management and deployment workflows. CloudOps
              integrates with major cloud providers to provide seamless CI/CD
              pipelines, infrastructure monitoring, and automated scaling
              solutions.
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
                      Multi-Cloud Support:
                    </span>{" "}
                    Deploy and manage resources across AWS, Azure, and Google
                    Cloud Platform
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 gradient-bg rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <span className="gradient-text font-semibold">
                      Infrastructure as Code:
                    </span>{" "}
                    Automated infrastructure provisioning using Terraform and
                    CloudFormation
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 gradient-bg rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <span className="gradient-text font-semibold">
                      CI/CD Pipelines:
                    </span>{" "}
                    Integrated GitLab CI/CD and GitHub Actions for seamless
                    deployments
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 gradient-bg rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <span className="gradient-text font-semibold">
                      Monitoring Dashboard:
                    </span>{" "}
                    Real-time metrics and alerting with Prometheus and Grafana
                    integration
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 gradient-bg rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <span className="gradient-text font-semibold">
                      Auto-Scaling:
                    </span>{" "}
                    Intelligent resource scaling based on demand and performance
                    metrics
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 gradient-bg rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <span className="gradient-text font-semibold">
                      Security Compliance:
                    </span>{" "}
                    Automated security scanning and compliance checks
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
                  "Docker",
                  "Kubernetes",
                  "Terraform",
                  "AWS",
                  "Azure",
                  "Jenkins",
                  "Prometheus",
                  "Grafana",
                  "GitLab CI/CD",
                  "Ansible",
                  "Helm",
                  "ArgoCD",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white hover:bg-white/20 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 cursor-default"
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
