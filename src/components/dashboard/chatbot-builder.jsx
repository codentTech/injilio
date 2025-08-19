"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Grid3X3, Settings, Minus, Maximize2, Copy } from "lucide-react";
import FlowBuilder from "./flow-builder";
import ChatPreview from "./chat-preview";
import NodePanel from "./node-panel";

export default function ChatbotBuilder({ chatbot, isPreviewMode }) {
  const [showNodePanel, setShowNodePanel] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [zoom, setZoom] = useState(100);

  const handleNodeSelect = (node) => {
    setSelectedNode(node);
    setShowNodePanel(true);
  };

  const handleNodeDeselect = () => {
    setSelectedNode(null);
    setShowNodePanel(false);
  };

  if (isPreviewMode) {
    return <ChatPreview chatbot={chatbot} />;
  }

  return (
    <div className="flex h-full bg-gray-50">
      {/* Main Builder Area */}
      <div className="flex-1 relative overflow-hidden min-w-0">
        {/* Top Controls Bar */}
        <div className="absolute top-0 left-0 right-0 z-20 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center justify-between px-3 sm:px-4 lg:px-6 py-2 sm:py-3">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button className="p-1.5 sm:p-2 hover:bg-indigo-50 rounded-lg transition-colors group">
                <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600 group-hover:text-indigo-700" />
              </button>
              <button className="p-1.5 sm:p-2 hover:bg-indigo-50 rounded-lg transition-colors group">
                <Grid3X3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600 group-hover:text-indigo-600" />
              </button>
              <button className="p-1.5 sm:p-2 hover:bg-indigo-50 rounded-lg transition-colors group">
                <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600 group-hover:text-indigo-600" />
              </button>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={() => setZoom(Math.max(50, zoom - 10))}
                className="p-1 sm:p-1.5 hover:bg-indigo-50 rounded-md transition-colors"
              >
                <Minus className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-600" />
              </button>
              <span className="text-xs text-gray-600 px-2 font-mono bg-gray-100 rounded py-1">
                {zoom}%
              </span>
              <button
                onClick={() => setZoom(Math.min(200, zoom + 10))}
                className="p-1 sm:p-1.5 hover:bg-indigo-50 rounded-md transition-colors"
              >
                <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Flow Builder */}
        <div className="pt-10 sm:pt-12 lg:pt-14 h-full overflow-auto">
          <FlowBuilder
            onNodeSelect={handleNodeSelect}
            onNodeDeselect={handleNodeDeselect}
            zoom={zoom}
          />
        </div>
      </div>

      {/* Right Sidebar - Node Panel */}
      {showNodePanel && selectedNode && (
        <div className="w-full sm:w-80 lg:w-96 bg-white border-l border-gray-200 shadow-xl flex flex-col max-h-screen overflow-hidden">
          <NodePanel node={selectedNode} onClose={handleNodeDeselect} />
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2 z-30">
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-200 flex items-center justify-center group"
        >
          <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-300" />
        </motion.button>

        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-indigo-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center border border-indigo-200"
        >
          <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      </div>
    </div>
  );
}
