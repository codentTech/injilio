"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Search,
  Plus,
  Edit3,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  X,
  Menu,
  Sparkles,
  CheckCircle,
  Clock,
  AlertCircle,
  Pause,
} from "lucide-react";

export default function Sidebar({
  chatbots,
  selectedChatbot,
  onSelectChatbot,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const filteredChatbots = chatbots.filter((chatbot) =>
    chatbot.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />;
      case "draft":
        return <Clock className="w-3.5 h-3.5 text-amber-600" />;
      case "paused":
        return <Pause className="w-3.5 h-3.5 text-gray-600" />;
      case "error":
        return <AlertCircle className="w-3.5 h-3.5 text-red-600" />;
      default:
        return <Clock className="w-3.5 h-3.5 text-gray-600" />;
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "active":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "draft":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "paused":
        return "bg-gray-100 text-gray-700 border-gray-200";
      case "error":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <>
      {/* Mobile Menu Button - Only show when a chatbot is selected */}
      {selectedChatbot && (
        <button
          onClick={() => setIsMobileOpen(true)}
          className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <motion.div
          animate={{ width: isCollapsed ? "5rem" : "20rem" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-white border-r border-gray-200 flex flex-col h-screen"
        >
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                {!isCollapsed && (
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                )}
                {!isCollapsed && (
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      Chatbots
                    </h2>
                    <p className="text-xs text-gray-600">
                      Manage your AI assistants
                    </p>
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="py-2 px-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md transform hover:scale-105 flex-shrink-0"
              >
                {isCollapsed ? (
                  <ChevronRight className="w-4 h-4" />
                ) : (
                  <ChevronLeft className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Search - only show when not collapsed */}
            {!isCollapsed && (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search chatbots..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-sm"
                />
              </div>
            )}
          </div>

          {/* Chatbot List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {filteredChatbots.length > 0 ? (
              filteredChatbots.map((chatbot) => (
                <div
                  key={chatbot.id}
                  onClick={() => onSelectChatbot(chatbot)}
                  className={`group p-3 rounded-lg cursor-pointer transition-all duration-200 border ${
                    selectedChatbot?.id === chatbot.id
                      ? "bg-indigo-50 border-indigo-200 shadow-sm ring-1 ring-indigo-200"
                      : "bg-white hover:bg-gray-50 border-gray-200 hover:border-indigo-200 hover:shadow-sm"
                  }`}
                >
                  {/* Top Row: Icon, Name, Actions */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      <div
                        className={`p-2 rounded-lg transition-colors flex-shrink-0 ${
                          selectedChatbot?.id === chatbot.id
                            ? "bg-indigo-100 text-indigo-600"
                            : "bg-gray-100 text-gray-600 group-hover:bg-indigo-50 group-hover:text-indigo-600"
                        }`}
                      >
                        <Bot className="w-4 h-4" />
                      </div>
                      {!isCollapsed && (
                        <div className="flex-1 min-w-0">
                          <h3
                            className={`font-semibold text-sm truncate ${
                              selectedChatbot?.id === chatbot.id
                                ? "text-indigo-900"
                                : "text-gray-900"
                            }`}
                          >
                            {chatbot.name}
                          </h3>
                        </div>
                      )}
                    </div>

                    {!isCollapsed && (
                      <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1 hover:bg-indigo-100 rounded transition-colors">
                          <Edit3 className="w-3.5 h-3.5 text-gray-500 hover:text-indigo-600" />
                        </button>
                        <button className="p-1 hover:bg-indigo-100 rounded transition-colors">
                          <MoreVertical className="w-3.5 h-3.5 text-gray-500 hover:text-indigo-600" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Bottom Row: Status, Modified Time, Live Indicator - only show when not collapsed */}
                  {!isCollapsed && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(chatbot.status)}
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${getStatusStyle(
                            chatbot.status
                          )}`}
                        >
                          {chatbot.status}
                        </span>
                        <span className="text-xs text-gray-500">
                          • {chatbot.lastModified}
                        </span>
                      </div>
                      {chatbot.status === "active" && (
                        <div className="flex items-center space-x-1 text-emerald-600">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-xs font-medium">Live</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Collapsed State - Show only icon with status indicator */}
                  {isCollapsed && (
                    <div className="flex flex-col items-center space-y-2">
                      {/* Status dot */}
                      <div
                        className={`w-2 h-2 rounded-full ${
                          chatbot.status === "active"
                            ? "bg-emerald-500"
                            : chatbot.status === "draft"
                            ? "bg-amber-500"
                            : chatbot.status === "paused"
                            ? "bg-gray-500"
                            : "bg-red-500"
                        }`}
                      />
                      {/* Live indicator for active chatbots */}
                      {chatbot.status === "active" && (
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6 text-indigo-600" />
                </div>
                {!isCollapsed && (
                  <>
                    <p className="text-gray-500 mb-3 text-sm">
                      {searchTerm ? "No chatbots found" : "No chatbots yet"}
                    </p>
                    {!searchTerm && (
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md transform hover:scale-105 text-sm">
                        <Plus className="w-3.5 h-3.5 mr-1.5 inline" />
                        Create First Chatbot
                      </button>
                    )}
                  </>
                )}
              </div>
            )}
          </div>

          {/* Footer - only show when not collapsed */}
          {!isCollapsed && (
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="text-center">
                <p className="text-xs text-gray-600 mb-2">
                  Need help building your chatbot?
                </p>
                <button className="text-xs text-indigo-600 hover:text-indigo-700 font-medium hover:underline transition-colors">
                  View Documentation
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            />

            {/* Mobile Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="lg:hidden fixed left-0 top-0 h-full w-80 bg-white border-r border-gray-200 z-50 flex flex-col"
            >
              {/* Mobile Header */}
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        Chatbots
                      </h2>
                      <p className="text-xs text-gray-600">
                        Manage your AI assistants
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search chatbots..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-sm"
                  />
                </div>
              </div>

              {/* Mobile Chatbot List */}
              <div className="flex-1 overflow-y-auto p-3 space-y-2">
                {filteredChatbots.length > 0 ? (
                  filteredChatbots.map((chatbot) => (
                    <div
                      key={chatbot.id}
                      onClick={() => {
                        onSelectChatbot(chatbot);
                        setIsMobileOpen(false);
                      }}
                      className={`group p-3 rounded-lg cursor-pointer transition-all duration-200 border ${
                        selectedChatbot?.id === chatbot.id
                          ? "bg-indigo-50 border-indigo-200 shadow-sm ring-1 ring-indigo-200"
                          : "bg-white hover:bg-gray-50 border-gray-200 hover:border-indigo-200 hover:shadow-sm"
                      }`}
                    >
                      {/* Top Row: Icon, Name, Actions */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                          <div
                            className={`p-2 rounded-lg transition-colors ${
                              selectedChatbot?.id === chatbot.id
                                ? "bg-indigo-100 text-indigo-600"
                                : "bg-gray-100 text-gray-600 group-hover:bg-indigo-50 group-hover:text-indigo-600"
                            }`}
                          >
                            <Bot className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3
                              className={`font-semibold text-sm truncate ${
                                selectedChatbot?.id === chatbot.id
                                  ? "text-indigo-900"
                                  : "text-gray-900"
                              }`}
                            >
                              {chatbot.name}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1 hover:bg-indigo-100 rounded transition-colors">
                            <Edit3 className="w-3.5 h-3.5 text-gray-500 hover:text-indigo-600" />
                          </button>
                          <button className="p-1 hover:bg-indigo-100 rounded transition-colors">
                            <MoreVertical className="w-3.5 h-3.5 text-gray-500 hover:text-indigo-600" />
                          </button>
                        </div>
                      </div>

                      {/* Bottom Row: Status, Modified Time, Live Indicator */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(chatbot.status)}
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-medium ${getStatusStyle(
                              chatbot.status
                            )}`}
                          >
                            {chatbot.status}
                          </span>
                          <span className="text-xs text-gray-500">
                            • {chatbot.lastModified}
                          </span>
                        </div>
                        {chatbot.status === "active" && (
                          <div className="flex items-center space-x-1 text-emerald-600">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-medium">Live</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Sparkles className="w-6 h-6 text-indigo-600" />
                    </div>
                    <p className="text-gray-500 mb-3 text-sm">
                      {searchTerm ? "No chatbots found" : "No chatbots yet"}
                    </p>
                    {!searchTerm && (
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md transform hover:scale-105 text-sm">
                        <Plus className="w-3.5 h-3.5 mr-1.5 inline" />
                        Create First Chatbot
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Mobile Footer */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="text-center">
                  <p className="text-xs text-gray-600 mb-2">
                    Need help building your chatbot?
                  </p>
                  <button className="text-xs text-indigo-600 hover:text-indigo-700 font-medium hover:underline transition-colors">
                    View Documentation
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
