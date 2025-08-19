"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Plus,
  Settings,
  Play,
  Save,
  Download,
  Share2,
  Trash2,
  Eye,
  Code,
} from "lucide-react";
import ChatbotBuilder from "@/components/ChatbotBuilder";
import Sidebar from "@/components/Sidebar";
import Toolbar from "@/components/Toolbar";

export default function Dashboard() {
  const [selectedChatbot, setSelectedChatbot] = useState(null);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const chatbots = [
    {
      id: 1,
      name: "Customer Support Bot",
      status: "active",
      lastModified: "2 hours ago",
    },
    {
      id: 2,
      name: "Sales Assistant",
      status: "draft",
      lastModified: "1 day ago",
    },
    { id: 3, name: "FAQ Bot", status: "active", lastModified: "3 days ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <MessageCircle className="w-8 h-8 text-primary-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-600">
                  Build and manage your chatbots
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="btn-secondary">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </button>
              <button className="btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                New Chatbot
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-88px)]">
        {/* Sidebar */}
        <Sidebar
          chatbots={chatbots}
          selectedChatbot={selectedChatbot}
          onSelectChatbot={setSelectedChatbot}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {selectedChatbot ? (
            <>
              {/* Toolbar */}
              <Toolbar
                chatbot={selectedChatbot}
                isPreviewMode={isPreviewMode}
                onTogglePreview={() => setIsPreviewMode(!isPreviewMode)}
              />

              {/* Builder Area */}
              <div className="flex-1 overflow-hidden">
                <ChatbotBuilder
                  chatbot={selectedChatbot}
                  isPreviewMode={isPreviewMode}
                />
              </div>
            </>
          ) : (
            /* Welcome State */
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageCircle className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Welcome to Your Dashboard
                </h2>
                <p className="text-gray-600 mb-6 max-w-md">
                  Select a chatbot from the sidebar to start building, or create
                  a new one to get started.
                </p>
                <button className="btn-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Your First Chatbot
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
