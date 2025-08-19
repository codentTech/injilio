"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Zap,
  Shield,
  BarChart3,
  Users,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Intelligent Conversations",
    description:
      "Build chatbots that understand context and provide meaningful responses with advanced AI.",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Drag & Drop Builder",
    description:
      "Visual chatbot builder with no coding required. Design flows intuitively with our studio.",
    color: "accent",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level security with end-to-end encryption and compliance standards.",
    color: "secondary",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Track performance, understand user behavior, and optimize conversations in real-time.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Multi-Channel Support",
    description:
      "Deploy across web, mobile, SMS, and messaging platforms seamlessly.",
    color: "accent",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Handle millions of conversations with 99.9% uptime guarantee worldwide.",
    color: "secondary",
  },
];

const getIconColor = (color) => {
  switch (color) {
    case "primary":
      return "text-primary-600";
    case "accent":
      return "text-accent-600";
    case "secondary":
      return "text-secondary-600";
    default:
      return "text-primary-600";
  }
};

const getBgColor = (color) => {
  switch (color) {
    case "primary":
      return "bg-primary-50 group-hover:bg-primary-100";
    case "accent":
      return "bg-accent-50 group-hover:bg-accent-100";
    case "secondary":
      return "bg-secondary-50 group-hover:bg-secondary-100";
    default:
      return "bg-primary-50 group-hover:bg-primary-100";
  }
};

export default function Features() {
  return (
    <section
      id="features"
      className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full text-xs font-medium mb-4"
          >
            Everything you need to succeed
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3"
          >
            Powerful Features for
            <span className="block text-primary-600">Modern Businesses</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive tools and features to create chatbots that engage,
            convert, and delight your customers at every touchpoint.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-gray-200 hover:border-primary-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-100/0 group-hover:from-primary-50/30 group-hover:to-primary-100/20 transition-all duration-300"></div>

                {/* Floating particles */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-primary-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                <div
                  className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-accent-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>

                <div className="relative">
                  <div
                    className={`mb-3 p-3 rounded-xl w-fit transition-all duration-300 ${getBgColor(
                      feature.color
                    )} group-hover:scale-110`}
                  >
                    <Icon
                      className={`w-6 h-6 ${getIconColor(feature.color)}`}
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
