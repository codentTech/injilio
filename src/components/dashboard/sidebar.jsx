"use client";

import { useState } from "react";
import {
  MessageCircle,
  Plus,
  Search,
  MoreVertical,
  CheckCircle,
  Clock,
  Edit3,
  Sparkles,
  TrendingUp,
  Bot,
} from "lucide-react";

export default function Sidebar({
  chatbots,
  selectedChatbot,
  onSelectChatbot,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredChatbots = chatbots.filter((chatbot) =>
    chatbot.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <CheckCircle className="w-4 h-4 text-emerald-500" />;
      case "draft":
        return <Clock className="w-4 h-4 text-amber-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "active":
        return "text-emerald-700 bg-emerald-50 border-emerald-200";
      case "draft":
        return "text-amber-700 bg-amber-50 border-amber-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Chatbots</h2>
              <p className="text-xs text-gray-600">Manage your AI assistants</p>
            </div>
          </div>
          <button className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md transform hover:scale-105">
            <Plus className="w-4 h-4" />
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
                    className={`p-2 rounded-lg transition-colors ${
                      selectedChatbot?.id === chatbot.id
                        ? "bg-indigo-100 text-indigo-600"
                        : "bg-gray-100 text-gray-600 group-hover:bg-indigo-50 group-hover:text-indigo-600"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
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

      {/* Footer */}
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
    </div>
  );
}
