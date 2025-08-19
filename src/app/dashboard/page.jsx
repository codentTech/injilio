"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Plus,
  Sparkles,
  Zap,
  Bot,
  Users,
  TrendingUp,
} from "lucide-react";
import ChatbotBuilder from "@/components/dashboard/chatbot-builder";
import Sidebar from "@/components/dashboard/sidebar";
import Toolbar from "@/components/dashboard/toolbar";

export default function Dashboard() {
  const [selectedChatbot, setSelectedChatbot] = useState(null);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  // Sample chatbot data
  const chatbots = [
    {
      id: "1",
      name: "Customer Support Bot",
      status: "active",
      lastModified: "2 minutes ago",
      description: "Handles customer inquiries and support requests",
    },
    {
      id: "2",
      name: "Sales Assistant",
      status: "draft",
      lastModified: "1 hour ago",
      description: "Helps with product information and sales",
    },
    {
      id: "3",
      name: "FAQ Bot",
      status: "active",
      lastModified: "3 hours ago",
      description: "Answers frequently asked questions",
    },
  ];

  const handleSelectChatbot = (chatbot) => {
    setSelectedChatbot(chatbot);
    setIsPreviewMode(false);
  };

  const handleTogglePreview = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  // Welcome state when no chatbot is selected
  if (!selectedChatbot) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex">
          {/* Sidebar */}
          <Sidebar
            chatbots={chatbots}
            selectedChatbot={selectedChatbot}
            onSelectChatbot={handleSelectChatbot}
          />

          {/* Main content */}
          <div className="flex-1 p-8 min-h-screen">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Header */}
              <div className="mb-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", damping: 15 }}
                  className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <Bot className="w-10 h-10 text-white" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl font-bold text-gray-900 mb-4"
                >
                  Welcome to Your Chatbot Studio
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
                >
                  Build, test, and deploy intelligent chatbots with our powerful
                  drag-and-drop interface. Create engaging conversations that
                  delight your customers.
                </motion.p>
              </div>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
              >
                <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Visual Flow Builder
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Drag and drop nodes to create complex conversation flows
                    with ease. No coding required.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    AI-Powered Responses
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Train your chatbot with natural language processing for
                    intelligent, contextual conversations.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Analytics & Insights
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Track performance, understand user behavior, and optimize
                    your chatbot for better results.
                  </p>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-center"
              >
                <button
                  onClick={() => handleSelectChatbot(chatbots[0])}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md transform hover:scale-105 font-semibold text-base flex items-center mx-auto"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Start Building Your First Chatbot
                </button>

                <p className="text-gray-500 mt-3 text-sm">
                  Select a chatbot from the sidebar to begin editing
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // Main dashboard with selected chatbot
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar
          chatbots={chatbots}
          selectedChatbot={selectedChatbot}
          onSelectChatbot={handleSelectChatbot}
        />

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Toolbar */}
          <Toolbar
            chatbot={selectedChatbot}
            isPreviewMode={isPreviewMode}
            onTogglePreview={handleTogglePreview}
          />

          {/* Chatbot Builder */}
          <div className="flex-1 overflow-hidden">
            <ChatbotBuilder
              chatbot={selectedChatbot}
              isPreviewMode={isPreviewMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
