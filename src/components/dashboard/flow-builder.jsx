"use client";

import React, { useState, useCallback } from "react";
import {
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

export default function SimpleFlowBuilder() {
  // Step 1: Define initial nodes with positions
  const [nodes, setNodes] = useState([
    {
      id: "node-1",
      type: "trigger",
      position: { x: 100, y: 100 },
      data: { label: "Start", description: "Conversation begins here" },
    },
    {
      id: "node-2",
      type: "message",
      position: { x: 400, y: 100 },
      data: { label: "Welcome Message", description: "Send greeting to user" },
    },
    {
      id: "node-3",
      type: "options",
      position: { x: 700, y: 100 },
      data: { label: "User Choice", description: "Present available options" },
    },
    {
      id: "node-4",
      type: "action",
      position: { x: 1000, y: 50 },
      data: { label: "Support Action", description: "Handle support request" },
    },
    {
      id: "node-5",
      type: "database",
      position: { x: 1000, y: 150 },
      data: { label: "User Data", description: "Store user information" },
    },
    {
      id: "node-6",
      type: "code",
      position: { x: 1300, y: 100 },
      data: { label: "Custom Logic", description: "Execute custom code" },
    },
    {
      id: "node-7",
      type: "notification",
      position: { x: 700, y: 250 },
      data: { label: "Send Alert", description: "Notify team members" },
    },
    {
      id: "node-8",
      type: "file",
      position: { x: 400, y: 250 },
      data: { label: "Document", description: "Process uploaded files" },
    },
  ]);

  // Step 2: Define connections between nodes
  const [connections, setConnections] = useState([
    { id: "conn-1", source: "node-1", target: "node-2" },
    { id: "conn-2", source: "node-2", target: "node-3" },
    { id: "conn-3", source: "node-3", target: "node-4" },
    { id: "conn-4", source: "node-3", target: "node-5" },
    { id: "conn-5", source: "node-4", target: "node-6" },
    { id: "conn-6", source: "node-5", target: "node-6" },
  ]);

  // Step 3: State for drag functionality
  const [isDragging, setIsDragging] = useState(false);
  const [draggedNode, setDraggedNode] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Step 4: State for connection functionality
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStart, setConnectionStart] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Step 5: State for node selection and editing
  const [selectedNode, setSelectedNode] = useState(null);

  // Step 6: Handle mouse down on node (start dragging)
  const handleMouseDown = useCallback(
    (e, nodeId) => {
      e.preventDefault();
      const node = nodes.find((n) => n.id === nodeId);
      if (!node) return;

      setIsDragging(true);
      setDraggedNode(nodeId);

      // Calculate offset from mouse to node position
      const rect = e.currentTarget.getBoundingClientRect();
      const containerRect = e.currentTarget
        .closest(".flow-container")
        .getBoundingClientRect();

      setDragOffset({
        x: e.clientX - containerRect.left - node.position.x,
        y: e.clientY - containerRect.top - node.position.y,
      });
    },
    [nodes]
  );

  // Step 7: Handle mouse move (dragging)
  const handleMouseMove = useCallback(
    (e) => {
      if (isDragging && draggedNode) {
        const rect = e.currentTarget.getBoundingClientRect();
        const newPosition = {
          x: e.clientX - rect.left - dragOffset.x,
          y: e.clientY - rect.top - dragOffset.y,
        };

        setNodes((prevNodes) =>
          prevNodes.map((node) =>
            node.id === draggedNode ? { ...node, position: newPosition } : node
          )
        );
      }

      // Update mouse position for connection preview
      if (isConnecting) {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    },
    [isDragging, draggedNode, dragOffset, isConnecting]
  );

  // Step 8: Handle mouse up (stop dragging)
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setDraggedNode(null);
    setDragOffset({ x: 0, y: 0 });
  }, []);

  // Step 9: Handle connection dot click (start connection)
  const handleConnectionDotClick = useCallback(
    (e, nodeId, side) => {
      e.stopPropagation();

      if (isConnecting && connectionStart) {
        // Complete connection
        if (connectionStart.nodeId !== nodeId) {
          const newConnection = {
            id: `conn-${Date.now()}`,
            source:
              connectionStart.side === "right"
                ? connectionStart.nodeId
                : nodeId,
            target:
              connectionStart.side === "right"
                ? nodeId
                : connectionStart.nodeId,
          };

          setConnections((prev) => [...prev, newConnection]);
        }

        // Reset connection state
        setIsConnecting(false);
        setConnectionStart(null);
      } else {
        // Start new connection
        setIsConnecting(true);
        setConnectionStart({ nodeId, side });
      }
    },
    [isConnecting, connectionStart]
  );

  // Step 10: Handle canvas click (cancel connection and deselect node)
  const handleCanvasClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      setIsConnecting(false);
      setConnectionStart(null);
      setSelectedNode(null);
    }
  }, []);

  // Step 11: Handle node click (select for editing)
  const handleNodeClick = useCallback(
    (nodeId) => {
      const node = nodes.find((n) => n.id === nodeId);
      if (node) {
        setSelectedNode(node);
      }
    },
    [nodes]
  );

  // Step 12: Update node data
  const updateNodeData = useCallback(
    (nodeId, newData) => {
      setNodes((prev) =>
        prev.map((node) =>
          node.id === nodeId
            ? { ...node, data: { ...node.data, ...newData } }
            : node
        )
      );

      // Update selected node if it's the one being edited
      if (selectedNode && selectedNode.id === nodeId) {
        setSelectedNode({
          ...selectedNode,
          data: { ...selectedNode.data, ...newData },
        });
      }
    },
    [selectedNode]
  );

  // Step 13: Get node icon based on type
  const getNodeIcon = (type) => {
    switch (type) {
      case "trigger":
        return <Play className="w-4 h-4" />;
      case "message":
        return <MessageCircle className="w-4 h-4" />;
      case "options":
        return <Square className="w-4 h-4" />;
      case "action":
        return <Zap className="w-4 h-4" />;
      case "database":
        return <Database className="w-4 h-4" />;
      case "code":
        return <Code className="w-4 h-4" />;
      case "notification":
        return <Bell className="w-4 h-4" />;
      case "file":
        return <FileText className="w-4 h-4" />;
      case "users":
        return <Users className="w-4 h-4" />;
      case "settings":
        return <Settings className="w-4 h-4" />;
      default:
        return <MessageCircle className="w-4 h-4" />;
    }
  };

  // Step 14: Get node style based on type - with subtle colors while keeping white and indigo theme
  const getNodeStyle = (type) => {
    const baseStyle =
      "border-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200";

    switch (type) {
      case "trigger":
        return `${baseStyle} bg-emerald-50 border-emerald-200 text-emerald-800 hover:border-emerald-300`;
      case "message":
        return `${baseStyle} bg-blue-50 border-blue-200 text-blue-800 hover:border-blue-300`;
      case "options":
        return `${baseStyle} bg-purple-50 border-purple-200 text-purple-800 hover:border-purple-300`;
      case "action":
        return `${baseStyle} bg-orange-50 border-orange-200 text-orange-800 hover:border-orange-300`;
      case "database":
        return `${baseStyle} bg-red-50 border-red-200 text-red-800 hover:border-red-300`;
      case "code":
        return `${baseStyle} bg-indigo-50 border-indigo-200 text-indigo-800 hover:border-indigo-300`;
      case "notification":
        return `${baseStyle} bg-yellow-50 border-yellow-200 text-yellow-800 hover:border-yellow-300`;
      case "file":
        return `${baseStyle} bg-teal-50 border-teal-200 text-teal-800 hover:border-teal-300`;
      case "users":
        return `${baseStyle} bg-pink-50 border-pink-200 text-pink-800 hover:border-pink-300`;
      case "settings":
        return `${baseStyle} bg-gray-50 border-gray-200 text-gray-800 hover:border-gray-300`;
      default:
        return `${baseStyle} bg-white border-indigo-200 text-indigo-900 hover:border-indigo-300`;
    }
  };

  // Step 15: Add new node functionality
  const addNode = useCallback((type, position) => {
    const newNode = {
      id: `node-${Date.now()}`,
      type,
      position,
      data: getDefaultNodeData(type),
    };
    setNodes((prev) => [...prev, newNode]);
  }, []);

  // Step 16: Get default data for new nodes
  const getDefaultNodeData = (type) => {
    switch (type) {
      case "message":
        return { label: "New Message", description: "Send message to user" };
      case "options":
        return { label: "User Choice", description: "Present options to user" };
      case "action":
        return { label: "Action", description: "Perform an action" };
      case "database":
        return { label: "Database", description: "Query or update data" };
      case "code":
        return { label: "Custom Code", description: "Execute custom logic" };
      case "notification":
        return {
          label: "Notification",
          description: "Send alert or notification",
        };
      case "file":
        return { label: "File Handler", description: "Process files" };
      case "users":
        return {
          label: "User Management",
          description: "Handle user operations",
        };
      case "settings":
        return { label: "Configuration", description: "Manage settings" };
      default:
        return { label: "New Node", description: "Configure this node" };
    }
  };

  // Step 17: Delete node functionality
  const deleteNode = useCallback(
    (nodeId) => {
      setNodes((prev) => prev.filter((node) => node.id !== nodeId));
      setConnections((prev) =>
        prev.filter((conn) => conn.source !== nodeId && conn.target !== nodeId)
      );
      if (selectedNode && selectedNode.id === nodeId) {
        setSelectedNode(null);
      }
    },
    [selectedNode]
  );

  // Step 18: Delete connection functionality
  const deleteConnection = useCallback((connectionId) => {
    setConnections((prev) => prev.filter((conn) => conn.id !== connectionId));
  }, []);

  return (
    <div className="w-full h-screen bg-white overflow-hidden">
      {/* Step 19: Enhanced instructions and controls - compact design */}
      <div className="absolute bottom-4 left-4 z-10 bg-white rounded-lg p-4 shadow-lg border border-indigo-200 max-w-sm">
        <h3 className="font-semibold text-indigo-900 mb-3 text-base">
          Flow Builder
        </h3>
        <div className="space-y-2 mb-3 text-xs text-indigo-700">
          <div>
            <strong>Drag & Drop:</strong> Move nodes around
          </div>
          <div>
            <strong>Connect:</strong> Click dots to link nodes
          </div>
          <div>
            <strong>Edit:</strong> Click nodes to edit content
          </div>
          <div>
            <strong>Delete:</strong> Right-click nodes
          </div>
        </div>

        {/* Node type buttons - compact grid */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <button
            onClick={() => addNode("message", { x: 200, y: 200 })}
            className="px-2 py-1.5 bg-indigo-600 text-white rounded text-xs font-medium hover:bg-indigo-700 transition-colors"
          >
            + Message
          </button>
          <button
            onClick={() => addNode("options", { x: 200, y: 300 })}
            className="px-2 py-1.5 bg-indigo-600 text-white rounded text-xs font-medium hover:bg-indigo-700 transition-colors"
          >
            + Options
          </button>
          <button
            onClick={() => addNode("action", { x: 200, y: 400 })}
            className="px-2 py-1.5 bg-indigo-600 text-white rounded text-xs font-medium hover:bg-indigo-700 transition-colors"
          >
            + Action
          </button>
          <button
            onClick={() => addNode("database", { x: 200, y: 500 })}
            className="px-2 py-1.5 bg-indigo-600 text-white rounded text-xs font-medium hover:bg-indigo-700 transition-colors"
          >
            + Database
          </button>
        </div>

        {/* Connection status - compact */}
        {isConnecting && (
          <div className="p-2 bg-orange-50 border border-orange-200 rounded text-orange-700 text-xs">
            <div className="font-medium">🔗 Connection Mode</div>
            <div>Click another node to complete</div>
          </div>
        )}

        {/* Stats - compact */}
        <div className="flex justify-between text-xs text-indigo-600 pt-2 border-t border-indigo-100">
          <span>Nodes: {nodes.length}</span>
          <span>Connections: {connections.length}</span>
        </div>
      </div>

      {/* Step 20: Right Sidebar for editing selected node */}
      {selectedNode && (
        <div className="absolute bottom-3 right-4 z-20 bg-white rounded-lg p-4 shadow-lg border border-indigo-200 w-80">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-indigo-900 text-base">
              Edit Node
            </h3>
            <button
              onClick={() => setSelectedNode(null)}
              className="text-indigo-500 hover:text-indigo-700 text-lg font-bold"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            {/* Node Type Display */}
            <div className="flex items-center gap-2 p-2 bg-indigo-50 rounded border border-indigo-200">
              <div className="p-1.5 bg-white rounded text-indigo-600">
                {getNodeIcon(selectedNode.type)}
              </div>
              <span className="text-sm font-medium text-indigo-700 capitalize">
                {selectedNode.type} Node
              </span>
            </div>

            {/* Label Input */}
            <div>
              <label className="block text-xs font-medium text-indigo-700 mb-1">
                Label
              </label>
              <input
                type="text"
                value={selectedNode.data.label}
                onChange={(e) =>
                  updateNodeData(selectedNode.id, { label: e.target.value })
                }
                className="w-full px-3 py-2 border border-indigo-200 rounded text-sm text-indigo-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter node label"
              />
            </div>

            {/* Description Input */}
            <div>
              <label className="block text-xs font-medium text-indigo-700 mb-1">
                Description
              </label>
              <textarea
                value={selectedNode.data.description}
                onChange={(e) =>
                  updateNodeData(selectedNode.id, {
                    description: e.target.value,
                  })
                }
                rows={3}
                className="w-full px-3 py-2 border border-indigo-200 rounded text-sm text-indigo-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                placeholder="Enter node description"
              />
            </div>

            {/* Type-specific fields */}
            {selectedNode.type === "message" && (
              <div>
                <label className="block text-xs font-medium text-indigo-700 mb-1">
                  Message Content
                </label>
                <textarea
                  value={selectedNode.data.content || ""}
                  onChange={(e) =>
                    updateNodeData(selectedNode.id, { content: e.target.value })
                  }
                  rows={4}
                  className="w-full px-3 py-2 border border-indigo-200 rounded text-sm text-indigo-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  placeholder="Enter message content"
                />
              </div>
            )}

            {selectedNode.type === "options" && (
              <div>
                <label className="block text-xs font-medium text-indigo-700 mb-1">
                  Options (one per line)
                </label>
                <textarea
                  value={(selectedNode.data.options || []).join("\n")}
                  onChange={(e) =>
                    updateNodeData(selectedNode.id, {
                      options: e.target.value
                        .split("\n")
                        .filter((opt) => opt.trim()),
                    })
                  }
                  rows={4}
                  className="w-full px-3 py-2 border border-indigo-200 rounded text-sm text-indigo-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  placeholder="Option 1&#10;Option 2&#10;Option 3"
                />
              </div>
            )}

            {/* Delete Button */}
            <button
              onClick={() => deleteNode(selectedNode.id)}
              className="w-full px-3 py-2 bg-red-500 text-white rounded text-sm font-medium hover:bg-red-600 transition-colors"
            >
              Delete Node
            </button>
          </div>
        </div>
      )}

      {/* Step 21: Main canvas - clean white background */}
      <div
        className="flow-container w-full h-full relative cursor-default bg-white overflow-x-auto"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onClick={handleCanvasClick}
        onContextMenu={(e) => e.preventDefault()}
      >
        {/* Step 22: Render connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {connections.map((connection) => {
            const sourceNode = nodes.find((n) => n.id === connection.source);
            const targetNode = nodes.find((n) => n.id === connection.target);

            if (!sourceNode || !targetNode) return null;

            // Calculate connection points
            const startX = sourceNode.position.x + 140; // Right side of source node
            const startY = sourceNode.position.y + 35; // Middle of source node
            const endX = targetNode.position.x; // Left side of target node
            const endY = targetNode.position.y + 35; // Middle of target node

            // Create curved path
            const midX = (startX + endX) / 2;
            const curveOffset = Math.abs(endX - startX) * 0.3;
            const controlX1 = startX + curveOffset;
            const controlX2 = endX - curveOffset;

            return (
              <g key={connection.id}>
                <path
                  d={`M ${startX} ${startY} C ${controlX1} ${startY}, ${controlX2} ${endY}, ${endX} ${endY}`}
                  stroke="#4f46e5"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  filter="drop-shadow(0 1px 2px rgba(79,70,229,0.2))"
                  className="cursor-pointer hover:stroke-indigo-600 transition-all duration-200"
                  style={{ pointerEvents: "stroke" }}
                  onClick={() => deleteConnection(connection.id)}
                />
              </g>
            );
          })}

          {/* Step 23: Connection preview line */}
          {isConnecting &&
            connectionStart &&
            (() => {
              const sourceNode = nodes.find(
                (n) => n.id === connectionStart.nodeId
              );
              if (!sourceNode) return null;

              const startX =
                connectionStart.side === "right"
                  ? sourceNode.position.x + 140
                  : sourceNode.position.x;
              const startY = sourceNode.position.y + 35;

              return (
                <g>
                  <path
                    d={`M ${startX} ${startY} Q ${
                      (startX + mousePosition.x) / 2
                    } ${startY} ${mousePosition.x} ${mousePosition.y}`}
                    stroke="#ef4444"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="6,4"
                    opacity="0.8"
                  />
                  <circle
                    cx={mousePosition.x}
                    cy={mousePosition.y}
                    r="4"
                    fill="#ef4444"
                    opacity="0.8"
                  />
                </g>
              );
            })()}

          {/* Step 24: Enhanced arrow marker definition */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="6"
              refX="8"
              refY="3"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3, 0 6"
                fill="#4f46e5"
                filter="drop-shadow(0 1px 1px rgba(0,0,0,0.2))"
              />
            </marker>
          </defs>
        </svg>

        {/* Step 25: Render nodes - with colors and click handling */}
        {nodes.map((node) => (
          <div
            key={node.id}
            className={`absolute select-none cursor-move ${getNodeStyle(
              node.type
            )} rounded-lg p-3 w-36 shadow-sm hover:shadow-md transition-all duration-200 ${
              selectedNode && selectedNode.id === node.id
                ? "ring-2 ring-indigo-500 ring-offset-2"
                : ""
            }`}
            style={{
              left: node.position.x,
              top: node.position.y,
              transform: draggedNode === node.id ? "scale(1.02)" : "scale(1)",
              zIndex: draggedNode === node.id ? 20 : 10,
            }}
            onMouseDown={(e) => handleMouseDown(e, node.id)}
            onClick={(e) => {
              e.stopPropagation();
              handleNodeClick(node.id);
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              deleteNode(node.id);
            }}
          >
            {/* Step 26: Enhanced node content - compact */}
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-white/80 rounded-md text-current">
                {getNodeIcon(node.type)}
              </div>
              <span className="font-medium text-sm truncate">
                {node.data.label}
              </span>
            </div>
            <p className="text-xs opacity-80 leading-relaxed">
              {node.data.description}
            </p>

            {/* Step 27: Enhanced connection dots - dark indigo */}
            <div
              className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-indigo-600 rounded-full border-2 border-white shadow-md cursor-pointer hover:bg-indigo-700 hover:scale-110 transition-all duration-200 z-20"
              onClick={(e) => handleConnectionDotClick(e, node.id, "left")}
              title="Input connection"
            />

            <div
              className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-indigo-600 rounded-full border-2 border-white shadow-md cursor-pointer hover:bg-indigo-700 hover:scale-110 transition-all duration-200 z-20"
              onClick={(e) => handleConnectionDotClick(e, node.id, "right")}
              title="Output connection"
            />

            {/* Step 28: Node type indicator - subtle */}
            <div className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-white/90 text-current text-xs rounded-full opacity-90 border border-current/20">
              {node.type}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
