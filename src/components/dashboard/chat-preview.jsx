"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  RotateCcw,
  Bot,
  User,
  Sparkles,
  MessageCircle,
  Settings,
  MoreHorizontal,
} from "lucide-react";

export default function ChatPreview({ chatbot }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: "Hello! How can I help you today?",
      timestamp: new Date(),
      avatar: <Bot className="w-6 h-6 text-green-600" />,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateBotResponse = (userMessage) => {
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      let botResponse = "";

      if (userMessage.toLowerCase().includes("support")) {
        botResponse =
          "Our support team is available 24/7. How can we assist you?";
      } else if (userMessage.toLowerCase().includes("sales")) {
        botResponse =
          "Interested in our products? Let me connect you with our sales team.";
      } else if (
        userMessage.toLowerCase().includes("hello") ||
        userMessage.toLowerCase().includes("hi")
      ) {
        botResponse =
          "Hi there! I'm your AI assistant. How can I help you today?";
      } else {
        botResponse =
          "Thank you for your message. I'm here to help you with any questions or concerns.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          type: "bot",
          content: botResponse,
          timestamp: new Date(),
          avatar: <Bot className="w-6 h-6 text-green-600" />,
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
      avatar: <User className="w-6 h-6 text-blue-600" />,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    simulateBotResponse(inputValue);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 1,
        type: "bot",
        content: "Hello! How can I help you today?",
        timestamp: new Date(),
        avatar: <Bot className="w-6 h-6 text-green-600" />,
      },
    ]);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-gray-200/50 px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Chat Preview</h3>
              <p className="text-sm text-gray-600">Testing: {chatbot.name}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleReset}
              className="p-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-110"
              title="Reset chat"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button
              className="p-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-110"
              title="Settings"
            >
              <Settings className="w-5 h-5" />
            </button>
            <button
              className="p-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-110"
              title="More"
            >
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
                  message.type === "user"
                    ? "flex-row-reverse space-x-reverse"
                    : ""
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === "user" ? "bg-blue-100" : "bg-green-100"
                  }`}
                >
                  {message.avatar}
                </div>

                <div
                  className={`flex flex-col ${
                    message.type === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`px-4 py-3 rounded-2xl shadow-sm ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                        : "bg-white text-gray-900 border border-gray-200/50"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                  <span className="text-xs text-gray-500 mt-2 px-1">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="flex justify-start"
          >
            <div className="flex items-start space-x-3 max-w-xs lg:max-w-md">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <Bot className="w-6 h-6 text-green-600" />
              </div>
              <div className="px-4 py-3 bg-white rounded-2xl shadow-sm border border-gray-200/50">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-white/90 backdrop-blur-sm border-t border-gray-200/50 p-6">
        <form
          onSubmit={handleSendMessage}
          className="flex items-center space-x-4"
        >
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="w-full px-4 py-3 pr-12 bg-white border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 shadow-sm"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            This is a preview. Messages are simulated for demonstration
            purposes.
          </p>
        </div>
      </div>
    </div>
  );
}
