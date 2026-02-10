"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-0 mt-0 rounded-none animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-lg sm:text-xl">
            <span className="gradient-text">PP</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/" 
              className={`text-sm transition-colors ${isActive('/') ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`text-sm transition-colors ${isActive('/about') ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
            >
              About
            </Link>
            <Link 
              href="/skills" 
              className={`text-sm transition-colors ${isActive('/skills') ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
            >
              Skills
            </Link>
            <Link 
              href="/projects" 
              className={`text-sm transition-colors ${isActive('/projects') ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm transition-colors ${isActive('/contact') ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
            >
              Contact
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-400">Open to Work</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-slate-400">Open</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fadeIn">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`block text-sm transition-colors py-2 ${isActive('/') ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`block text-sm transition-colors py-2 ${isActive('/about') ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
            >
              About
            </Link>
            <Link 
              href="/skills" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`block text-sm transition-colors py-2 ${isActive('/skills') ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
            >
              Skills
            </Link>
            <Link 
              href="/projects" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`block text-sm transition-colors py-2 ${isActive('/projects') ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`block text-sm transition-colors py-2 ${isActive('/contact') ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
