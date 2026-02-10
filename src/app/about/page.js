"use client";

import React from "react";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function About() {
  const [activeTab, setActiveTab] = React.useState("story");

  const timeline = [
    { year: "2022", title: "Class 10th", desc: "Completed secondary education", icon: "📚" },
    { year: "2025", title: "Class 12th", desc: "Higher secondary education", icon: "🎓" },
    { year: "Current", title: "B.Voc AI & ML", desc: "Nexcore Institute", icon: "🤖" },
  ];

  const values = [
    { 
      icon: "⚡", 
      title: "Execution Over Theory", 
      desc: "I believe in learning by doing. Every project is an opportunity to turn concepts into reality."
    },
    { 
      icon: "🎯", 
      title: "Problem-First Mindset", 
      desc: "Technology is a tool. I focus on solving real problems, not just writing code."
    },
    { 
      icon: "🚀", 
      title: "Continuous Growth", 
      desc: "The tech world evolves fast. I stay curious, adaptable, and always learning."
    },
    { 
      icon: "💡", 
      title: "Thoughtful Innovation", 
      desc: "AI and ML should be applied thoughtfully to create systems that truly add value."
    },
  ];

  const interests = [
    { 
      name: "Reading", 
      icon: "📘", 
      color: "from-blue-500 to-cyan-500",
      desc: "Books expand my perspective and fuel creativity",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    { 
      name: "Coding", 
      icon: "💻", 
      color: "from-purple-500 to-pink-500",
      desc: "Building solutions and bringing ideas to life",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
    },
    { 
      name: "Cricket", 
      icon: "🏏", 
      color: "from-emerald-500 to-teal-500",
      desc: "Teamwork, strategy, and staying active",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30"
    },
    { 
      name: "Movies", 
      icon: "🎬", 
      color: "from-orange-500 to-red-500",
      desc: "Stories that inspire and entertain",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30"
    },
    { 
      name: "Travel", 
      icon: "✈️", 
      color: "from-indigo-500 to-purple-500",
      desc: "Exploring new places and cultures",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 dot-pattern opacity-50 pointer-events-none"></div>
      
      {/* Gradient Orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-custom"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-custom" style={{ animationDelay: "1s" }}></div>

      <MobileNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block mb-6 relative">
            {/* Outer Glow Rings */}
            <div className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-60 animate-pulse-custom"></div>
            <div className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 blur-xl opacity-40 animate-pulse-custom" style={{ animationDelay: "0.5s" }}></div>
            
            {/* Main Image Container */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[3px] animate-float shadow-2xl shadow-blue-500/50">
              {/* Inner Border */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 p-[2px]">
                {/* Image Wrapper with Enhanced Effects */}
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 relative group">
                  <img 
                    src="/piyush22.jpg" 
                    alt="Piyush Patwa"
                    className="w-full h-full object-cover brightness-110 contrast-110 saturate-110 group-hover:scale-110 group-hover:brightness-125 transition-all duration-500"
                  />
                  {/* Overlay Gradient for Extra Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
            
            {/* Animated Ring Effect */}
            <div className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full border-2 border-blue-500/30 animate-ping-slow"></div>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            <span className="gradient-text">About Me</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
            Student · Developer · AI Enthusiast · Problem Solver
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12 animate-fadeInUp delay-200">
          <button
            onClick={() => setActiveTab("story")}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "story"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                : "bg-slate-800/50 text-slate-400 hover:text-white"
            }`}
          >
            My Story
          </button>
          <button
            onClick={() => setActiveTab("values")}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "values"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                : "bg-slate-800/50 text-slate-400 hover:text-white"
            }`}
          >
            My Values
          </button>
        </div>

        {/* Content Sections */}
        {activeTab === "story" && (
          <div className="space-y-12 animate-fadeIn">
            {/* Main Story */}
            <div className="glass-card p-8 sm:p-12 animate-fadeInUp delay-300">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="gradient-text-blue">Who I Am</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-slate-300">
                <p>
                  I'm currently pursuing a{" "}
                  <span className="text-blue-400 font-semibold">
                    B.Voc in Artificial Intelligence and Machine Learning
                  </span>
                  , where I focus on building practical skills that solve real problems. My interest lies in applying AI and ML to create systems that are{" "}
                  <span className="text-cyan-400 font-semibold">functional</span>,{" "}
                  <span className="text-purple-400 font-semibold">efficient</span>, and{" "}
                  <span className="text-blue-400 font-semibold">impactful</span>
                  —whether that's automation tools, data-driven applications, or intelligent workflows.
                </p>
                <p>
                  I believe in learning through execution. Theory matters, but I prioritize hands-on projects that challenge me to think critically and deliver results. My goal is to contribute to meaningful tech products and systems where AI and ML drive real value.
                </p>
                <p>
                  I'm disciplined, curious, and always looking to improve—not just as a developer, but as someone who understands how technology can be applied thoughtfully in the real world.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="animate-fadeInUp delay-400">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
                <span className="gradient-text">My Qualifications</span>
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {timeline.map((item, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: `${idx * 0.2}s` }}>
                      {item.icon}
                    </div>
                    <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300 mb-3">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates Section */}
            <div className="animate-fadeInUp delay-500">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
                <span className="gradient-text-blue">Certifications & Achievements</span>
              </h2>
              <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                Professional certifications that validate my skills and commitment to continuous learning
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Certificate 1 */}
                <div className="glass-card p-6 group hover:scale-105 transition-all duration-300 overflow-hidden">
                  <div className="relative rounded-xl overflow-hidden mb-6 bg-slate-800">
                    <img 
                      src="/image.png" 
                      alt="Web Development Certificate"
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Web Development Certification</h3>
                      <p className="text-sm text-slate-400">Professional Training Program</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Completed comprehensive web development training covering modern technologies, best practices, and industry standards for building professional web applications.
                  </p>
                </div>

                {/* Certificate 2 */}
                <div className="glass-card p-6 group hover:scale-105 transition-all duration-300 overflow-hidden">
                  <div className="relative rounded-xl overflow-hidden mb-6 bg-slate-800">
                    <img 
                      src="/certificate.jpg" 
                      alt="Technical Skills Certificate"
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Technical Skills Certification</h3>
                      <p className="text-sm text-slate-400">Advanced Training Course</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Recognized for demonstrating proficiency in technical skills, problem-solving abilities, and practical application of programming concepts in real-world scenarios.
                  </p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="animate-fadeInUp delay-500">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
                <span className="gradient-text-pink">Beyond Code</span>
              </h2>
              <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                When I'm not coding, these are the things that keep me inspired and balanced
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {interests.map((interest, idx) => (
                  <div
                    key={idx}
                    className={`relative glass-card p-6 group hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden border ${interest.borderColor}`}
                  >
                    {/* Background Gradient on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-16 h-16 rounded-2xl ${interest.bgColor} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <span className="text-4xl">{interest.icon}</span>
                        </div>
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${interest.color} group-hover:scale-150 transition-transform duration-300`}></div>
                      </div>
                      
                      <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${interest.color} bg-clip-text text-transparent`}>
                        {interest.name}
                      </h3>
                      
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {interest.desc}
                      </p>
                    </div>

                    {/* Hover Border Effect */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${interest.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "values" && (
          <div className="animate-fadeIn">
            <div className="glass-card p-8 sm:p-12 mb-12 animate-fadeInUp delay-300">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
                <span className="gradient-text">What Drives Me</span>
              </h2>
              <p className="text-lg text-slate-300 text-center max-w-3xl mx-auto mb-12">
                These principles guide how I approach learning, building, and problem-solving in tech.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-6 sm:p-8 group hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                      {value.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center glass-card p-8 sm:p-12 animate-fadeInUp delay-400">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                <span className="gradient-text-blue">Let's Build Together</span>
              </h3>
              <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
                I'm always open to collaborating on projects, discussing ideas, or exploring opportunities in AI, ML, and web development.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
