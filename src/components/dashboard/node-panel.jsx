"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  X,
  Save,
  Trash2,
  Copy,
  MessageCircle,
  Play,
  Square,
  Zap,
  Database,
  Code,
  Settings,
  Users,
  FileText,
  Bell,
} from "lucide-react";

export default function NodePanel({ node, onClose }) {
  const [activeTab, setActiveTab] = useState("properties");
  const [nodeData, setNodeData] = useState(node.data);

  const getNodeIcon = (type) => {
    switch (type) {
      case "trigger":
        return <Play className="w-5 h-5" />;
      case "message":
        return <MessageCircle className="w-5 h-5" />;
      case "options":
        return <Square className="w-5 h-5" />;
      case "action":
        return <Zap className="w-5 h-5" />;
      case "database":
        return <Database className="w-5 h-5" />;
      case "code":
        return <Code className="w-5 h-5" />;
      case "notification":
        return <Bell className="w-5 h-5" />;
      case "file":
        return <FileText className="w-5 h-5" />;
      case "users":
        return <Users className="w-5 h-5" />;
      case "settings":
        return <Settings className="w-5 h-5" />;
      default:
        return <MessageCircle className="w-5 h-5" />;
    }
  };

  const getNodeTypeLabel = (type) => {
    switch (type) {
      case "trigger":
        return "Trigger Node";
      case "message":
        return "Message Node";
      case "options":
        return "Options Node";
      case "action":
        return "Action Node";
      case "database":
        return "Database Node";
      case "code":
        return "Code Node";
      case "notification":
        return "Notification Node";
      case "file":
        return "File Node";
      case "users":
        return "Users Node";
      case "settings":
        return "Settings Node";
      default:
        return "Node";
    }
  };

  const handleSave = () => {
    // Update node data
    node.data = { ...nodeData };
    onClose();
  };

  const handleDelete = () => {
    // Handle node deletion
    onClose();
  };

  const renderPropertiesTab = () => (
    <div className="space-y-4 min-w-full">
      {/* Node Type Display */}
      <div className="flex items-center gap-2 p-3 bg-indigo-50 rounded-lg border border-indigo-200 min-w-fit">
        <div className="p-2 bg-white rounded-lg text-indigo-600">
          {getNodeIcon(node.type)}
        </div>
        <span className="text-sm font-medium text-indigo-700 capitalize whitespace-nowrap">
          {node.type} Node
        </span>
      </div>

      {/* Properties Table */}
      <div className="overflow-x-auto">
        <div className="min-w-[600px] space-y-4">
          {/* Label Input */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
            <label className="block text-sm font-medium text-indigo-700 mb-2 lg:mb-0 lg:pt-2 whitespace-nowrap">
              Label
            </label>
            <div className="lg:col-span-2">
              <input
                type="text"
                value={nodeData.label}
                onChange={(e) =>
                  setNodeData({ ...nodeData, label: e.target.value })
                }
                className="w-full px-3 py-2 border border-indigo-200 rounded-lg text-sm text-indigo-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter node label"
              />
            </div>
          </div>

          {/* Description Input */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
            <label className="block text-sm font-medium text-indigo-700 mb-2 lg:mb-0 lg:pt-2 whitespace-nowrap">
              Description
            </label>
            <div className="lg:col-span-2">
              <textarea
                value={nodeData.description}
                onChange={(e) =>
                  setNodeData({ ...nodeData, description: e.target.value })
                }
                rows={3}
                className="w-full px-3 py-2 border border-indigo-200 rounded-lg text-sm text-indigo-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                placeholder="Enter node description"
              />
            </div>
          </div>

          {/* Type-specific fields */}
          {node.type === "message" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
              <label className="block text-sm font-medium text-indigo-700 mb-2 lg:mb-0 lg:pt-2 whitespace-nowrap">
                Message Content
              </label>
              <div className="lg:col-span-2">
                <textarea
                  value={nodeData.content || ""}
                  onChange={(e) =>
                    setNodeData({ ...nodeData, content: e.target.value })
                  }
                  rows={4}
                  className="w-full px-3 py-2 border border-indigo-200 rounded-lg text-sm text-indigo-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  placeholder="Enter message content"
                />
              </div>
            </div>
          )}

          {node.type === "options" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
              <label className="block text-sm font-medium text-indigo-700 mb-2 lg:mb-0 lg:pt-2 whitespace-nowrap">
                Options (one per line)
              </label>
              <div className="lg:col-span-2">
                <textarea
                  value={(nodeData.options || []).join("\n")}
                  onChange={(e) =>
                    setNodeData({
                      ...nodeData,
                      options: e.target.value
                        .split("\n")
                        .filter((opt) => opt.trim()),
                    })
                  }
                  rows={4}
                  className="w-full px-3 py-2 border border-indigo-200 rounded-lg text-sm text-indigo-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  placeholder="Option 1&#10;Option 2&#10;Option 3"
                />
              </div>
            </div>
          )}

          {/* Additional Properties Table */}
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-3 text-xs font-medium text-gray-600 uppercase tracking-wider whitespace-nowrap">
                      Property
                    </th>
                    <th className="text-left py-2 px-3 text-xs font-medium text-gray-600 uppercase tracking-wider whitespace-nowrap">
                      Value
                    </th>
                    <th className="text-left py-2 px-3 text-xs font-medium text-gray-600 uppercase tracking-wider whitespace-nowrap">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-3 text-sm font-medium text-gray-900 whitespace-nowrap">
                      Node ID
                    </td>
                    <td className="py-2 px-3 text-sm text-gray-600 font-mono text-xs">
                      {node.id}
                    </td>
                    <td className="py-2 px-3 text-sm text-gray-500">String</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-3 text-sm font-medium text-gray-900 whitespace-nowrap">
                      Position X
                    </td>
                    <td className="py-2 px-3 text-sm text-gray-600">
                      {Math.round(node.position.x)}
                    </td>
                    <td className="py-2 px-3 text-sm text-gray-500">Number</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-3 text-sm font-medium text-gray-900 whitespace-nowrap">
                      Position Y
                    </td>
                    <td className="py-2 px-3 text-sm text-gray-600">
                      {Math.round(node.position.y)}
                    </td>
                    <td className="py-2 px-3 text-sm text-gray-500">Number</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-3 text-sm font-medium text-gray-900 whitespace-nowrap">
                      Created
                    </td>
                    <td className="py-2 px-3 text-sm text-gray-600">
                      {new Date().toLocaleDateString()}
                    </td>
                    <td className="py-2 px-3 text-sm text-gray-500">Date</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettingsTab = () => (
    <div className="space-y-4 min-w-full">
      <div className="overflow-x-auto">
        <div className="min-w-[600px] space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
            <div className="lg:col-span-3">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">
                  Node Settings
                </h4>
                <p className="text-sm text-gray-600">
                  Advanced configuration options for this node will be available
                  here.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
            <div className="lg:col-span-3">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Performance</h4>
                <p className="text-sm text-gray-600">
                  Configure execution timeouts and resource limits.
                </p>
              </div>
            </div>
          </div>

          {/* Settings Table */}
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-3 text-xs font-medium text-gray-600 uppercase tracking-wider whitespace-nowrap">
                      Setting
                    </th>
                    <th className="text-left py-2 px-3 text-xs font-medium text-gray-600 uppercase tracking-wider whitespace-nowrap">
                      Current Value
                    </th>
                    <th className="text-left py-2 px-3 text-xs font-medium text-gray-600 uppercase tracking-wider whitespace-nowrap">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-3 text-sm font-medium text-gray-900 whitespace-nowrap">
                      Execution Timeout
                    </td>
                    <td className="py-2 px-3 text-sm text-gray-600">
                      30 seconds
                    </td>
                    <td className="py-2 px-3 text-sm text-gray-500">
                      <button className="text-indigo-600 hover:text-indigo-700 text-xs">
                        Configure
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-3 text-sm font-medium text-gray-900 whitespace-nowrap">
                      Memory Limit
                    </td>
                    <td className="py-2 px-3 text-sm text-gray-600">128 MB</td>
                    <td className="py-2 px-3 text-sm text-gray-500">
                      <button className="text-indigo-600 hover:text-indigo-700 text-xs">
                        Configure
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-3 text-sm font-medium text-gray-900 whitespace-nowrap">
                      Retry Attempts
                    </td>
                    <td className="py-2 px-3 text-sm text-gray-600">3</td>
                    <td className="py-2 px-3 text-sm text-gray-500">
                      <button className="text-indigo-600 hover:text-indigo-700 text-xs">
                        Configure
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-gray-200 bg-gray-50 flex-shrink-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="p-2 sm:p-3 bg-indigo-100 rounded-xl">
              {getNodeIcon(node.type)}
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                {nodeData.label}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {getNodeTypeLabel(node.type)}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-110"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab("properties")}
            className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeTab === "properties"
                ? "bg-indigo-100 text-indigo-700 shadow-sm"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            Properties
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeTab === "settings"
                ? "bg-indigo-100 text-indigo-700 shadow-sm"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            Settings
          </button>
        </div>
      </div>

      {/* Content - Scrollable with horizontal scroll */}
      <div className="flex-1 overflow-y-auto overflow-x-auto p-4 sm:p-6 min-h-0">
        {activeTab === "properties"
          ? renderPropertiesTab()
          : renderSettingsTab()}
      </div>

      {/* Footer */}
      <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50 flex-shrink-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
          <div className="flex space-x-2 sm:space-x-3">
            <button
              onClick={handleDelete}
              className="p-2 sm:p-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 hover:scale-110"
              title="Delete node"
            >
              <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => {
                console.log("Copying node:", node);
              }}
              className="p-2 sm:p-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-110"
              title="Copy node"
            >
              <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <button
              onClick={onClose}
              className="px-4 sm:px-6 py-2 sm:py-3 text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium text-sm sm:text-base"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center font-medium text-sm sm:text-base"
            >
              <Save className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
