"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Zap, TrendingUp, Plus } from "lucide-react";
import ChatbotBuilder from "@/components/dashboard/chatbot-builder";
import Sidebar from "@/components/dashboard/sidebar";
import Toolbar from "@/components/dashboard/toolbar";

export default function Dashboard() {
  const [selectedChatbot, setSelectedChatbot] = useState(null);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const chatbots = [
    {
      id: 1,
      name: "Customer Support Bot",
      status: "active",
      lastModified: "2 minutes ago",
      description: "Handles customer inquiries and support tickets",
    },
    {
      id: 2,
      name: "Lead Qualification Bot",
      status: "draft",
      lastModified: "1 hour ago",
      description: "Helps qualify leads and schedule demos",
    },
    {
      id: 3,
      name: "FAQ Bot",
      status: "active",
      lastModified: "3 hours ago",
      description: "Answers common questions automatically",
    },
  ];

  const handleSelectChatbot = (chatbot) => {
    setSelectedChatbot(chatbot);
  };

  const handleTogglePreview = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  const handleCreateFirstChatbot = () => {
    // Create a new chatbot and select it
    const newChatbot = {
      id: Date.now(),
      name: "New Chatbot",
      status: "draft",
      lastModified: "Just now",
      description: "Your new chatbot - start building!",
    };
    setSelectedChatbot(newChatbot);
  };

  // Show welcome state when no chatbot is selected
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
          <div className="flex-1 p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              {/* Hero Section */}
              <div className="mb-8 sm:mb-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", damping: 15 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg"
                >
                  <Bot className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 text-center"
                >
                  Welcome to Your Chatbot Studio
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 text-center"
                >
                  Build, test, and deploy intelligent chatbots with our powerful
                  drag-and-drop interface. Create engaging conversations that
                  delight your customers.
                </motion.p>
              </div>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10"
              >
                <div className="p-4 sm:p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                    Visual Flow Builder
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Drag and drop nodes to create complex conversation flows
                    with ease. No coding required.
                  </p>
                </div>

                <div className="p-4 sm:p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                    AI-Powered Responses
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Train your chatbot with natural language processing for
                    intelligent, contextual conversations.
                  </p>
                </div>

                <div className="p-4 sm:p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                    Analytics & Insights
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Track performance, understand user behavior, and optimize
                    your chatbot for better results.
                  </p>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-center"
              >
                <button
                  onClick={handleCreateFirstChatbot}
                  className="px-5 py-3 sm:px-6 sm:py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md transform hover:scale-105 font-semibold text-sm sm:text-base flex items-center mx-auto"
                >
                  <Plus className="w-4 h-5 sm:w-5 sm:h-5 mr-2" />
                  Start Building Your First Chatbot
                </button>

                <p className="text-gray-500 mt-3 text-sm">
                  Or select a chatbot from the sidebar to begin editing
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // Show chatbot builder when a chatbot is selected
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
        <div className="flex-1 flex flex-col min-w-0">
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
