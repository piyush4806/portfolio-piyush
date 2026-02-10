"use client";

import React from "react";
import Link from "next/link";

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [roleIndex, setRoleIndex] = React.useState(0);
  
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "WordPress Developer"
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="fixed inset-0 dot-pattern opacity-50 pointer-events-none"></div>
        
        {/* Gradient Orbs */}
        <div className="fixed top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-0 mt-0 rounded-none animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="font-bold text-lg sm:text-xl">
                <span className="gradient-text">PP</span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-sm text-white font-semibold transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/skills" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Skills
                </Link>
                <Link href="/projects" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Projects
                </Link>
                <Link href="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-slate-400">Available</span>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-slate-400">Available</span>
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
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-400 hover:text-white transition-colors py-2">
                  Home
                </Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-400 hover:text-white transition-colors py-2">
                  About
                </Link>
                <Link href="/skills" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-400 hover:text-white transition-colors py-2">
                  Skills
                </Link>
                <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-400 hover:text-white transition-colors py-2">
                  Projects
                </Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-slate-400 hover:text-white transition-colors py-2">
                  Contact
                </Link>
              </div>
            )}
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-8 sm:pb-12">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col justify-center items-start -mt-16">
            <div className="animate-fadeInUp delay-100">
              <p className="text-sm sm:text-base text-slate-400 mb-2 sm:mb-3 font-medium">
                Hi there! I'm
              </p>
            </div>

            <h1
              className="font-extrabold mb-3 sm:mb-4 animate-fadeInUp delay-200 relative"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "clamp(3rem, 12vw, 8rem)",
                lineHeight: "0.95",
                letterSpacing: "-0.02em",
              }}
            >
              <span className="gradient-text block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Piyush Patwa
              </span>
            </h1>

            <div className="animate-fadeInUp delay-300 mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-3xl font-light text-slate-300 mb-2 sm:mb-3">
                Student ·{" "}
                <span 
                  className="gradient-text-blue font-semibold inline-block transition-all duration-500"
                  style={{ minWidth: "280px" }}
                >
                  {roles[roleIndex]}
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-400">
                AI & Design Explorer
              </p>
            </div>

            <div className="animate-fadeInUp delay-500">
              <Link
                href="/contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
              >
                Let's Connect
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
