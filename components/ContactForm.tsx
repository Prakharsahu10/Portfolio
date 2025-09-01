"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

interface FormData {
  user_name: string;
  user_email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        "YOUR_SERVICE_ID", // You'll need to replace this
        "YOUR_TEMPLATE_ID", // You'll need to replace this
        form.current,
        "YOUR_PUBLIC_KEY" // You'll need to replace this
      );

      console.log("Email sent successfully:", result.text);
      setSubmitStatus("success");

      // Reset form
      setFormData({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
        <span className="mr-3 text-2xl">💬</span>
        Send Message
      </h3>

      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all duration-300"
            />
          </div>
          <div>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all duration-300"
            />
          </div>
        </div>

        <div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Subject"
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all duration-300"
          />
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell me about your project or just say hi!"
            rows={5}
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all duration-300 resize-none"
          />
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center"
          >
            🎉 Message sent successfully! I&apos;ll get back to you soon.
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center"
          >
            ❌ Failed to send message. Please try again or contact me directly.
          </motion.div>
        )}

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-600 hover:shadow-xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium text-lg flex items-center justify-center space-x-2 group relative overflow-hidden"
          whileHover={{
            scale: 1.02,
            boxShadow:
              "0 20px 25px -5px rgb(59 130 246 / 0.25), 0 10px 10px -5px rgb(59 130 246 / 0.1)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          {/* Animated Background Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          />

          {/* Shimmer Effect */}
          <div className="absolute inset-0 -top-[2px] -left-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <motion.span
            className="relative z-10"
            animate={isSubmitting ? { opacity: [1, 0.5, 1] } : {}}
            transition={{ duration: 1.5, repeat: isSubmitting ? Infinity : 0 }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.span>

          {!isSubmitting && (
            <motion.svg
              className="w-5 h-5 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0, rotate: 0 }}
              whileHover={{
                x: 4,
                rotate: 15,
                scale: 1.1,
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </motion.svg>
          )}

          {isSubmitting && (
            <motion.div
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full relative z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          )}
        </motion.button>
      </form>
    </div>
  );
}
