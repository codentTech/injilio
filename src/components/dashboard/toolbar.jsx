"use client";

import {
  Play,
  Save,
  Download,
  Share2,
  Eye,
  Code,
  Settings,
  HelpCircle,
  Clock,
} from "lucide-react";

export default function Toolbar({ chatbot, isPreviewMode, onTogglePreview }) {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Left side - Chatbot info */}
        <div className="flex items-center space-x-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              {chatbot.name}
            </h2>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2 text-xs text-gray-600">
                <Clock className="w-3.5 h-3.5" />
                <span>Last saved 2 minutes ago</span>
              </div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              <span className="text-xs text-gray-600">Version 1.2.3</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span
              className={`px-3 py-1.5 text-xs font-medium rounded-full border ${
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
          </div>
        </div>

        {/* Right side - Action buttons */}
        <div className="flex items-center space-x-3">
          {/* Preview toggle */}
          <button
            onClick={onTogglePreview}
            className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
              isPreviewMode
                ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                : "bg-white text-gray-700 border-gray-300 hover:border-indigo-400 hover:bg-indigo-50"
            }`}
          >
            <Eye className="w-4 h-4 mr-1.5 inline" />
            {isPreviewMode ? "Exit Preview" : "Preview"}
          </button>

          {/* Test button */}
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm hover:shadow-md transform hover:scale-105 flex items-center text-sm">
            <Play className="w-4 h-4 mr-1.5" />
            Test
          </button>

          {/* Save button */}
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md transform hover:scale-105 flex items-center text-sm">
            <Save className="w-4 h-4 mr-1.5" />
            Save
          </button>

          {/* More actions */}
          <div className="flex items-center space-x-1 ml-3">
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
        </div>
      </div>
    </div>
  );
}
