"use client";

import React from "react";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function About() {
  const [activeTab, setActiveTab] = React.useState("story");
  const [lightboxImg, setLightboxImg] = React.useState(null);
  const [lightboxIdx, setLightboxIdx] = React.useState(null);

  const certImages = [
    { img: "/Ai aware.png", title: "AI Aware — AI For All Program" },
    { img: "/ai appreciate.png", title: "AI Appreciate — AI For All Program" },
    { img: "/AI Fluency Framework & Foundations.png", title: "AI Fluency — Framework & Foundations" },
    { img: "/claude 101.png", title: "Claude 101 — AI Assistant Fundamentals" },
    { img: "/AI FLUENCY FOR STUDENTS.png", title: "AI Fluency for Students" },
    { img: "/AI fluency for educators.png", title: "AI Fluency for Educators" },
    { img: "/Teaching the AI fluency framework.png", title: "Teaching the AI Fluency Framework" },
    { img: "/AI fluency for nonprofits.png", title: "AI Fluency for Nonprofits" },
  ];

  const openLightbox = (img) => {
    const idx = certImages.findIndex(c => c.img === img);
    setLightboxIdx(idx);
    setLightboxImg(img);
  };

  const closeLightbox = () => {
    setLightboxImg(null);
    setLightboxIdx(null);
  };

  const prevCert = () => {
    const newIdx = (lightboxIdx - 1 + certImages.length) % certImages.length;
    setLightboxIdx(newIdx);
    setLightboxImg(certImages[newIdx].img);
  };

  const nextCert = () => {
    const newIdx = (lightboxIdx + 1) % certImages.length;
    setLightboxIdx(newIdx);
    setLightboxImg(certImages[newIdx].img);
  };

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
      {/* Lightbox Modal */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div className="w-full max-w-4xl flex items-center justify-between mb-4" onClick={e => e.stopPropagation()}>
            {/* Back Button */}
            <button
              onClick={closeLightbox}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:scale-105"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M5 12l7 7M5 12l7-7"/>
              </svg>
              Back
            </button>

            {/* Certificate Title */}
            <span className="text-white font-semibold text-sm sm:text-base text-center px-4">
              {lightboxIdx !== null ? certImages[lightboxIdx].title : ""}
            </span>

            {/* Counter */}
            <span className="text-slate-400 text-sm font-medium">
              {lightboxIdx + 1} / {certImages.length}
            </span>
          </div>

          {/* Image + Side Arrows */}
          <div className="relative w-full max-w-4xl flex items-center gap-3" onClick={e => e.stopPropagation()}>
            {/* Prev Arrow */}
            <button
              onClick={prevCert}
              className="flex-shrink-0 w-11 h-11 bg-white/10 hover:bg-white/25 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>

            {/* Image */}
            <div className="flex-1 rounded-2xl overflow-hidden shadow-2xl bg-white">
              <img
                src={lightboxImg}
                alt="Certificate"
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextCert}
              className="flex-shrink-0 w-11 h-11 bg-white/10 hover:bg-white/25 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex gap-2 mt-5" onClick={e => e.stopPropagation()}>
            {certImages.map((_, i) => (
              <button
                key={i}
                onClick={() => { setLightboxIdx(i); setLightboxImg(certImages[i].img); }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === lightboxIdx ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'}`}
              />
            ))}
          </div>
        </div>
      )}
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

              {/* Certificates Grid */}
              {(() => {
                const certs = [
                  {
                    img: "/Ai aware.png",
                    title: "AI Aware",
                    subtitle: "AI For All Program",
                    issuer: "Intel × Digital India",
                    desc: "Completed the AI Aware stage of Intel's national AI literacy initiative.",
                    gradient: "from-blue-500 to-cyan-500",
                    border: "border-blue-500/30",
                    glow: "shadow-blue-500/20",
                    icon: "🎓",
                    badge: "AI Literacy"
                  },
                  {
                    img: "/ai appreciate.png",
                    title: "AI Appreciate",
                    subtitle: "AI For All Program",
                    issuer: "Intel × Digital India × CBSE",
                    desc: "Certified for the AI Appreciate stage — issued to Piyush Patwa on 12/01/2026.",
                    gradient: "from-purple-500 to-pink-500",
                    border: "border-purple-500/30",
                    glow: "shadow-purple-500/20",
                    icon: "🏆",
                    badge: "AI Skills"
                  },
                  {
                    img: "/AI Fluency Framework & Foundations.png",
                    title: "AI Fluency",
                    subtitle: "Framework & Foundations",
                    issuer: "Intel × Digital India",
                    desc: "Mastered core AI frameworks and foundational principles of Artificial Intelligence.",
                    gradient: "from-emerald-500 to-teal-500",
                    border: "border-emerald-500/30",
                    glow: "shadow-emerald-500/20",
                    icon: "🧠",
                    badge: "AI Foundations"
                  },
                  {
                    img: "/claude 101.png",
                    title: "Claude 101",
                    subtitle: "AI Assistant Fundamentals",
                    issuer: "Anthropic",
                    desc: "Completed Claude 101 — understanding AI assistant capabilities, prompting, and responsible use.",
                    gradient: "from-orange-500 to-amber-500",
                    border: "border-orange-500/30",
                    glow: "shadow-orange-500/20",
                    icon: "⚡",
                    badge: "Generative AI"
                  },
                  {
                    img: "/AI FLUENCY FOR STUDENTS.png",
                    title: "AI Fluency for Students",
                    subtitle: "Student AI Program",
                    issuer: "Intel × Digital India",
                    desc: "Certified for completing the AI Fluency for Students program — building AI understanding and skills tailored for the next generation of learners.",
                    gradient: "from-rose-500 to-pink-500",
                    border: "border-rose-500/30",
                    glow: "shadow-rose-500/20",
                    icon: "🎒",
                    badge: "Student AI"
                  },
                  {
                    img: "/AI fluency for educators.png",
                    title: "AI Fluency for Educators",
                    subtitle: "Educator AI Program",
                    issuer: "Intel × Digital India",
                    desc: "Certified for completing AI Fluency for Educators — equipping teachers with AI knowledge to integrate intelligent tools into modern education.",
                    gradient: "from-sky-500 to-blue-500",
                    border: "border-sky-500/30",
                    glow: "shadow-sky-500/20",
                    icon: "👨‍🏫",
                    badge: "Education AI"
                  },
                  {
                    img: "/Teaching the AI fluency framework.png",
                    title: "Teaching the AI Fluency Framework",
                    subtitle: "AI Teaching Methodology",
                    issuer: "Intel × Digital India",
                    desc: "Certified for mastering the methodology of teaching AI Fluency — covering how to effectively deliver AI concepts to diverse learners.",
                    gradient: "from-violet-500 to-indigo-500",
                    border: "border-violet-500/30",
                    glow: "shadow-violet-500/20",
                    icon: "📖",
                    badge: "AI Teaching"
                  },
                  {
                    img: "/AI fluency for nonprofits.png",
                    title: "AI Fluency for Nonprofits",
                    subtitle: "Nonprofit AI Program",
                    issuer: "Intel × Digital India",
                    desc: "Certified for completing AI Fluency for Nonprofits — understanding how AI can drive social impact and empower nonprofit organizations.",
                    gradient: "from-lime-500 to-green-500",
                    border: "border-lime-500/30",
                    glow: "shadow-lime-500/20",
                    icon: "🌱",
                    badge: "Social AI"
                  }
                ];
                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {certs.map((cert, i) => (
                      <div
                        key={i}
                        onClick={() => openLightbox(cert.img)}
                        className={`group relative glass-card overflow-hidden cursor-pointer border ${cert.border} hover:shadow-2xl ${cert.glow} transition-all duration-500 hover:-translate-y-2`}
                      >
                        {/* Top gradient bar */}
                        <div className={`h-1 w-full bg-gradient-to-r ${cert.gradient}`}></div>

                        {/* Image preview */}
                        <div className="relative overflow-hidden bg-white">
                          <img
                            src={cert.img}
                            alt={cert.title}
                            className="w-full h-44 object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                          />
                          {/* Hover overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-black/60 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl">
                              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/>
                              </svg>
                              View Certificate
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center text-xl shadow-lg`}>
                                {cert.icon}
                              </div>
                              <div>
                                <h3 className={`font-bold text-white text-base bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent`}>
                                  {cert.title}
                                </h3>
                                <p className="text-xs text-slate-400">{cert.subtitle}</p>
                              </div>
                            </div>
                            <span className={`text-xs px-2.5 py-1 rounded-full bg-gradient-to-r ${cert.gradient} font-semibold text-white`}>
                              {cert.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mb-2 font-medium">{cert.issuer}</p>
                          <p className="text-xs text-slate-300 leading-relaxed">{cert.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })()}
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
