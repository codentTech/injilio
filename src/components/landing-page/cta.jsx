"use client";

import { motion } from "framer-motion";
import { ChevronRight, Sparkles, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-primary-900 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>

      {/* Additional floating elements */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-white/10 rounded-full mix-blend-multiply filter blur-lg opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full mix-blend-multiply filter blur-lg opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Animated lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-white/20 to-transparent animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs font-medium mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            Join 10,000+ businesses worldwide
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to Transform Your
            <span className="block">Customer Experience?</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-primary-100 mb-8 max-w-2xl mx-auto"
          >
            Start building intelligent chatbots today. No credit card required.
            Deploy in minutes and scale to millions of conversations.
          </motion.p>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Link
              href="/dashboard"
              className="group inline-flex items-center bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden"
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Button content */}
              <span className="relative z-10">Start Building Today</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />

              {/* Shine effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 text-primary-100">
              <div className="p-2 bg-white/10 rounded-lg">
                <Zap className="w-5 h-5" />
              </div>
              <span className="font-medium">Setup in 5 minutes</span>
            </div>

            <div className="flex items-center justify-center space-x-3 text-primary-100">
              <div className="p-2 bg-white/10 rounded-lg">
                <Users className="w-5 h-5" />
              </div>
              <span className="font-medium">No coding required</span>
            </div>

            <div className="flex items-center justify-center space-x-3 text-primary-100">
              <div className="p-2 bg-white/10 rounded-lg">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-medium">Free forever plan</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
