"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "glass-card mx-2 sm:mx-4 mt-2 sm:mt-3 rounded-xl sm:rounded-2xl shadow-lg shadow-black/10" 
          : "glass-card mx-2 sm:mx-4 mt-2 sm:mt-4 rounded-xl sm:rounded-2xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-slate-900 px-3 py-2 rounded-lg border border-slate-700 group-hover:border-blue-500/50 transition-colors">
                <span className="font-bold text-lg sm:text-xl gradient-text">PP</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xs text-slate-400 leading-tight">Piyush</div>
              <div className="text-xs text-slate-500 leading-tight">Portfolio</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  isActive(link.path)
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {/* Active Background */}
                {isActive(link.path) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
                )}
                
                {/* Hover Background */}
                <div className="absolute inset-0 bg-slate-800/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Text */}
                <span className="relative z-10">{link.name}</span>
                
                {/* Active Indicator */}
                {isActive(link.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                )}
              </Link>
            ))}
            
            {/* Divider */}
            <div className="w-px h-6 bg-slate-700 mx-2"></div>
            
            {/* Status Badge */}
            <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
              <div className="relative">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-xs font-medium text-emerald-400">Open to Work</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Status */}
            <div className="flex items-center gap-2 px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50"
              aria-label="Toggle menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300"
                style={{ transform: mobileMenuOpen ? "rotate(90deg)" : "rotate(0)" }}
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fadeIn border-t border-slate-800 pt-4">
            {navLinks.map((link, idx) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isActive(link.path)
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span>{link.name}</span>
                  {isActive(link.path) && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
