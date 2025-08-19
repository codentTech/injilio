"use client";

import { motion } from "framer-motion";
import { ChevronRight, Play, Sparkles, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 py-12 sm:py-16 overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-8 right-8 w-48 h-48 sm:w-64 sm:h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-gentle"></div>
      <div
        className="absolute bottom-8 left-8 w-48 h-48 sm:w-64 sm:h-64 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-gentle"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Additional floating elements */}
      <div
        className="absolute top-1/4 left-1/4 w-24 h-24 bg-primary-300 rounded-full mix-blend-multiply filter blur-lg opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-accent-300 rounded-full mix-blend-multiply filter blur-lg opacity-20 animate-pulse"
        style={{ animationDelay: "3s" }}
      ></div>

      {/* Animated grid lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent animate-pulse"></div>
        <div
          className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-primary-200 to-transparent animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-accent-200 to-transparent animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-transparent via-accent-200 to-transparent animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-3 py-1.5 bg-primary-100 text-primary-700 rounded-full text-xs font-medium mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            AI-powered conversations
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
          >
            Build Intelligent
            <span className="block bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Chatbots
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Create powerful conversational AI with our intuitive drag-and-drop
            builder. No coding required. Deploy in minutes. Scale globally.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8"
          >
            <Link
              href="/dashboard"
              className="group bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 text-base flex items-center shadow-md hover:shadow-lg"
            >
              Start Building Free
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="group flex items-center text-gray-600 hover:text-primary-600 transition-colors font-medium px-4 py-3">
              <div className="p-1.5 bg-white rounded-full shadow-sm mr-2 group-hover:shadow-md transition-shadow">
                <Play className="w-3.5 h-3.5 fill-current" />
              </div>
              Watch Demo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 max-w-xs sm:max-w-md mx-auto mb-8"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary-600">
                10K+
              </div>
              <div className="text-gray-600 text-xs sm:text-sm">
                Active Chatbots
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary-600">
                500M+
              </div>
              <div className="text-gray-600 text-xs sm:text-sm">Messages</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary-600">
                99.9%
              </div>
              <div className="text-gray-600 text-xs sm:text-sm">Uptime</div>
            </div>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              {/* Chatbot Interface Mockup */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-500">Chatbot Studio</div>
              </div>

              <div className="space-y-3">
                {/* Bot Message */}
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-primary-600" />
                  </div>
                  <div className="bg-primary-50 rounded-lg px-3 py-2 max-w-xs">
                    <p className="text-sm text-gray-700">
                      Hello! How can I help you today?
                    </p>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex items-start justify-end space-x-2">
                  <div className="bg-primary-600 rounded-lg px-3 py-2 max-w-xs">
                    <p className="text-sm text-white">
                      I need help with my order
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-primary-600" />
                  </div>
                  <div className="bg-primary-50 rounded-lg px-3 py-2 max-w-xs">
                    <p className="text-sm text-gray-700 text-left">
                      I'd be happy to help! What's your order number?
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 animate-bounce-gentle"></div>
              <div
                className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full opacity-20 animate-bounce-gentle"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
