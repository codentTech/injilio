"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="p-1.5 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors duration-300">
              <MessageCircle className="w-5 h-5 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="ml-2.5 text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
              Injilio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-gray-600 hover:text-primary-600 transition-all duration-300 font-medium relative group"
            >
              Features
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-primary-600 transition-all duration-300 font-medium relative group"
            >
              Pricing
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-primary-600 transition-all duration-300 font-medium relative group"
            >
              About
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <Link
              href="/dashboard"
              className="bg-primary-600 text-white px-3 py-1.5 rounded-lg font-semibold hover:bg-primary-700 hover:scale-105 transition-all duration-300 text-sm shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-4 h-4 text-gray-600" />
            ) : (
              <Menu className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-3 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-2">
              <a
                href="#features"
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <Link
                href="/dashboard"
                className="bg-primary-600 text-white px-3 py-1.5 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center mt-2 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
