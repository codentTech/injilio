"use client";

import {
  Clock,
  Eye,
  Play,
  Save,
  Download,
  Share2,
  Code,
  Settings,
  HelpCircle,
  Menu,
} from "lucide-react";

export default function Toolbar({ chatbot, isPreviewMode, onTogglePreview }) {
  return (
    <div className="bg-white border-b border-gray-200 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
        {/* Left side - Chatbot info */}
        <div className="flex items-center justify-between sm:justify-start space-x-3 sm:space-x-4 min-w-0">
          <div className="min-w-0 flex-1">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 truncate">
              {chatbot.name}
            </h2>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="hidden sm:inline">
                  Last saved 2 minutes ago
                </span>
                <span className="sm:hidden">2 min ago</span>
              </div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
              <span className="text-xs text-gray-600 flex-shrink-0">
                v1.2.3
              </span>
            </div>
          </div>
        </div>

        {/* Status and Action Buttons */}
        <div className="flex items-center justify-between sm:justify-end space-x-2 sm:space-x-3">
          {/* Status Indicator */}
          <span
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full border flex-shrink-0 ${
              chatbot.status === "active"
                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                : "bg-amber-50 text-amber-700 border-amber-200"
            }`}
          >
            {chatbot.status === "active" ? (
              <div className="flex items-center space-x-1.5">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                <span>Active</span>
              </div>
            ) : (
              <span>Draft</span>
            )}
          </span>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Preview toggle */}
            <button
              onClick={onTogglePreview}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border text-xs sm:text-sm font-medium transition-all duration-200 flex items-center ${
                isPreviewMode
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                  : "bg-white text-gray-700 border-gray-300 hover:border-indigo-400 hover:bg-indigo-50"
              }`}
            >
              <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" />
              <span className="hidden sm:inline">
                {isPreviewMode ? "Exit Preview" : "Preview"}
              </span>
              <span className="sm:hidden">
                {isPreviewMode ? "Exit" : "Preview"}
              </span>
            </button>

            {/* Test button */}
            <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm hover:shadow-md transform hover:scale-105 flex items-center text-xs sm:text-sm">
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" />
              <span>Test</span>
            </button>

            {/* Save button */}
            <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md transform hover:scale-105 flex items-center text-xs sm:text-sm">
              <Save className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" />
              <span>Save</span>
            </button>

            {/* More actions - hidden on very small screens */}
            <div className="hidden lg:flex items-center space-x-1 ml-3">
              <button
                className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors group"
                title="Download"
              >
                <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
              <button
                className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors group"
                title="Share"
              >
                <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
              <button
                className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors group"
                title="Code"
              >
                <Code className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
              <button
                className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors group"
                title="Settings"
              >
                <Settings className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
              <button
                className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors group"
                title="Help"
              >
                <HelpCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Mobile menu button for very small screens */}
            <div className="lg:hidden">
              <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
