"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  X,
  Save,
  Copy,
  Trash2,
  Settings,
  MessageCircle,
  Zap,
  Database,
  Code,
  User,
  Bot,
  Sparkles,
} from "lucide-react";

export default function NodePanel({ node, onClose }) {
  const [nodeData, setNodeData] = useState({ ...node.data });
  const [activeTab, setActiveTab] = useState("properties");

  const getNodeIcon = (type) => {
    switch (type) {
      case "trigger":
        return <User className="w-6 h-6 text-blue-600" />;
      case "message":
        return <Bot className="w-6 h-6 text-green-600" />;
      case "options":
        return <MessageCircle className="w-6 h-6 text-purple-600" />;
      case "action":
        return <Zap className="w-6 h-6 text-orange-600" />;
      case "database":
        return <Database className="w-6 h-6 text-red-600" />;
      case "code":
        return <Code className="w-6 h-6 text-indigo-600" />;
      default:
        return <MessageCircle className="w-6 h-6 text-gray-600" />;
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
      default:
        return "Node";
    }
  };

  const handleSave = () => {
    console.log("Saving node:", { ...node, data: nodeData });
    onClose();
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this node?")) {
      console.log("Deleting node:", node.id);
      onClose();
    }
  };

  const renderPropertiesTab = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Node Label
        </label>
        <input
          type="text"
          value={nodeData.label}
          onChange={(e) => setNodeData({ ...nodeData, label: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80"
          placeholder="Enter node label"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Description
        </label>
        <textarea
          value={nodeData.description}
          onChange={(e) =>
            setNodeData({ ...nodeData, description: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 resize-none"
          rows="3"
          placeholder="Enter node description"
        />
      </div>

      {node.type === "message" && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Message Content
          </label>
          <textarea
            value={nodeData.content || ""}
            onChange={(e) =>
              setNodeData({ ...nodeData, content: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 resize-none"
            rows="4"
            placeholder="Enter message content"
          />
        </div>
      )}

      {node.type === "options" && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Options
          </label>
          <div className="space-y-3">
            {(nodeData.options || []).map((option, index) => (
              <div key={index} className="flex items-center space-x-3">
                <input
                  type="text"
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...(nodeData.options || [])];
                    newOptions[index] = e.target.value;
                    setNodeData({ ...nodeData, options: newOptions });
                  }}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80"
                  placeholder={`Option ${index + 1}`}
                />
                <button
                  onClick={() => {
                    const newOptions = (nodeData.options || []).filter(
                      (_, i) => i !== index
                    );
                    setNodeData({ ...nodeData, options: newOptions });
                  }}
                  className="p-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 hover:scale-110"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
            <button
              onClick={() => {
                const newOptions = [...(nodeData.options || []), ""];
                setNodeData({ ...nodeData, options: newOptions });
              }}
              className="w-full p-4 border-2 border-dashed border-blue-300 rounded-xl text-blue-600 hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 font-medium"
            >
              + Add Option
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const renderSettingsTab = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Node ID
        </label>
        <input
          type="text"
          value={node.id}
          disabled
          className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 text-gray-600 cursor-not-allowed"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Node Type
        </label>
        <input
          type="text"
          value={getNodeTypeLabel(node.type)}
          disabled
          className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 text-gray-600 cursor-not-allowed"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            X Position
          </label>
          <input
            type="number"
            value={Math.round(node.position.x)}
            disabled
            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Y Position
          </label>
          <input
            type="number"
            value={Math.round(node.position.y)}
            disabled
            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="w-96 bg-white/95 backdrop-blur-sm border-l border-gray-200/50 shadow-2xl flex flex-col"
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-200/50 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl">
              {getNodeIcon(node.type)}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                {nodeData.label}
              </h3>
              <p className="text-sm text-gray-600">
                {getNodeTypeLabel(node.type)}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-110"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab("properties")}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeTab === "properties"
                ? "bg-blue-100 text-blue-700 shadow-sm"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            Properties
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeTab === "settings"
                ? "bg-blue-100 text-blue-700 shadow-sm"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            Settings
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {activeTab === "properties"
          ? renderPropertiesTab()
          : renderSettingsTab()}
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-gray-200/50 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            <button
              onClick={handleDelete}
              className="p-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 hover:scale-110"
              title="Delete node"
            >
              <Trash2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                console.log("Copying node:", node);
              }}
              className="p-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-110"
              title="Copy node"
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-3 text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center font-medium"
            >
              <Save className="w-5 h-5 mr-2" />
              Save
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
