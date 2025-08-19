"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Plus, Settings, Copy, Minus, Maximize2, Grid3X3 } from "lucide-react";
import FlowBuilder from "./flow-builder";
import ChatPreview from "./chat-preview";
import NodePanel from "./node-panel";

export default function ChatbotBuilder({ chatbot, isPreviewMode }) {
  const [selectedNode, setSelectedNode] = useState(null);
  const [showNodePanel, setShowNodePanel] = useState(false);
  const [zoom, setZoom] = useState(100);

  const handleNodeSelect = useCallback((node) => {
    setSelectedNode(node);
    setShowNodePanel(true);
  }, []);

  const handleNodeDeselect = useCallback(() => {
    setSelectedNode(null);
    setShowNodePanel(false);
  }, []);

  if (isPreviewMode) {
    return <ChatPreview chatbot={chatbot} />;
  }

  return (
    <div className="flex h-full bg-gray-50">
      {/* Main Builder Area */}
      <div className="flex-1 relative overflow-hidden">
        {/* Top Controls Bar */}
        <div className="absolute top-0 left-0 right-0 z-20 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-indigo-50 rounded-lg transition-colors group">
                <Plus className="w-4 h-4 text-indigo-600 group-hover:text-indigo-700" />
              </button>
              <button className="p-2 hover:bg-indigo-50 rounded-lg transition-colors group">
                <Grid3X3 className="w-4 h-4 text-gray-600 group-hover:text-indigo-600" />
              </button>
              <button className="p-2 hover:bg-indigo-50 rounded-lg transition-colors group">
                <Settings className="w-4 h-4 text-gray-600 group-hover:text-indigo-600" />
              </button>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={() => setZoom(Math.max(50, zoom - 10))}
                className="p-1.5 hover:bg-indigo-50 rounded-md transition-colors"
              >
                <Minus className="w-3.5 h-3.5 text-gray-600" />
              </button>
              <span className="text-xs text-gray-600 px-2 font-mono bg-gray-100 rounded py-1">
                {zoom}%
              </span>
              <button
                onClick={() => setZoom(Math.min(200, zoom + 10))}
                className="p-1.5 hover:bg-indigo-50 rounded-md transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Flow Builder */}
        <div className="pt-12 h-full">
          <FlowBuilder
            onNodeSelect={handleNodeSelect}
            onNodeDeselect={handleNodeDeselect}
            zoom={zoom}
          />
        </div>
      </div>

      {/* Right Sidebar - Node Panel */}
      {showNodePanel && selectedNode && (
        <NodePanel node={selectedNode} onClose={handleNodeDeselect} />
      )}

      {/* Floating Action Buttons */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-200 flex items-center justify-center group"
        >
          <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
        </motion.button>

        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 bg-white text-indigo-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center border border-indigo-200"
        >
          <Copy className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
}
