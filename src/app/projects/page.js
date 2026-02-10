"use client";

import React from "react";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function Projects() {
  const featuredProjects = [
    {
      title: "Digital Clock",
      desc: "A beautiful real-time digital clock with millisecond precision, featuring modern glassmorphism design, smooth animations, and gradient effects. Perfect showcase of time manipulation in JavaScript.",
      link: "/clock",
      tag: "Web App",
      gradient: "from-cyan-500 via-blue-500 to-purple-500",
      tech: ["React", "Next.js", "JavaScript", "Real-time"],
      features: ["Millisecond Precision", "Glassmorphism UI", "Smooth Animations", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&h=400&fit=crop&q=80",
      icon: "⏰"
    },
    {
      title: "Hotstar Clone",
      desc: "A pixel-perfect clone of Disney+ Hotstar streaming platform featuring responsive design, movie grid layout, and smooth hover animations. Built with modern web technologies.",
      link: "/hotstar",
      tag: "UI Clone",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      features: ["Responsive Layout", "Movie Grid", "Hover Effects", "Sticky Navigation"],
      image: "https://user-images.githubusercontent.com/95010701/177200645-e7c30148-0293-4e88-9c82-4bbee66f1182.png",
      icon: "🎬"
    },
    {
      title: "Interactive Quiz",
      desc: "A modern, full-featured quiz platform with real-time scoring, progress tracking, and smooth animations. Built with React hooks for state management and optimized for performance.",
      link: "/quiz",
      tag: "Web App",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      tech: ["React", "Next.js", "JavaScript", "CSS3"],
      features: ["Real-time Scoring", "Progress Tracking", "Responsive Design", "Smooth Animations"],
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=400&fit=crop&q=80",
      icon: "🎯"
    },
    {
      title: "Marklyne Store",
      desc: "A modern e-commerce platform for premium t-shirts featuring product showcase, size selection, and shopping cart functionality. Built with clean UI/UX principles and responsive design.",
      link: "/marklyne",
      tag: "E-commerce",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      tech: ["React", "Next.js", "Tailwind CSS", "E-commerce"],
      features: ["Product Grid", "Size Selection", "Responsive Design", "Modern UI"],
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=400&fit=crop&q=80",
      icon: "🛍️"
    }
  ];

  const projects = [
    {
      title: "Go-Zoop Website Clone",
      desc: "Agency-style UI recreation to master layout, spacing and typography.",
      link: "https://www.figma.com/proto/GH5u36u3iZCvyr3dO8MxMD/Marklyne?page-id=&node-id=958-525&viewport=-9030%2C-5504%2C0.13&t=Kdupus2Ot5K26Pkf-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=262%3A380&show-proto-sidebar=1",
      tag: "UI Design",
      tech: ["Figma", "UI/UX"],
      icon: "🎨",
      color: "blue"
    },
    {
      title: "OLX UI Clone",
      desc: "Marketplace interface design focusing on usability and structure.",
      link: "https://www.figma.com/proto/GH5u36u3iZCvyr3dO8MxMD/Marklyne?page-id=262%3A379&node-id=470-410&viewport=-7753%2C-4289%2C0.15&t=FmSvor9k3Fun4uHj-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=510%3A257&show-proto-sidebar=1",
      tag: "Interface",
      tech: ["Figma", "Prototyping"],
      icon: "🛒",
      color: "purple"
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
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full">
              <span className="text-3xl">💼</span>
              <span className="text-sm font-semibold text-blue-300">Portfolio Showcase</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            <span className="gradient-text">Featured Projects</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A curated collection of my best work, showcasing expertise in web development, UI/UX design, and modern technologies
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-10">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-1">15+</div>
              <div className="text-sm text-slate-500">Projects</div>
            </div>
            <div className="w-px bg-slate-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-1">10+</div>
              <div className="text-sm text-slate-500">Technologies</div>
            </div>
            <div className="w-px bg-slate-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-1">100%</div>
              <div className="text-sm text-slate-500">Dedication</div>
            </div>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="mb-20 space-y-12 animate-fadeInUp delay-200">
          {featuredProjects.map((project, idx) => (
            <div 
              key={idx} 
              className={`relative glass-card p-0 group overflow-hidden hover:scale-[1.02] transition-all duration-500 ${
                idx % 2 === 0 ? 'animate-slideInLeft' : 'animate-slideInRight'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
              
              <div className="relative grid md:grid-cols-5 gap-0">
                {/* Image Section - 2 columns */}
                <div className="md:col-span-2 relative overflow-hidden">
                  <div className="absolute top-4 left-4 z-20">
                    <div className={`px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-full text-xs font-bold flex items-center gap-2 shadow-lg`}>
                      <span className="text-xl">{project.icon}</span>
                      {project.tag}
                    </div>
                  </div>
                  
                  <div className="relative h-full min-h-[300px] md:min-h-[400px]">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  </div>
                </div>

                {/* Content Section - 3 columns */}
                <div className="md:col-span-3 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                  {/* Title */}
                  <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider font-semibold">Technologies Used</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className={`px-4 py-2 bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-slate-700 rounded-lg text-sm font-medium text-white hover:scale-105 transition-transform duration-300`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={project.link}
                    className={`inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r ${project.gradient} hover:shadow-2xl rounded-xl text-base font-bold shadow-lg hover:scale-105 transition-all duration-300 group/btn`}
                  >
                    <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    View Live Demo
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="animate-fadeInUp delay-400">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text-blue">Design Projects</span>
            </h2>
            <p className="text-slate-400">UI/UX designs and prototypes created in Figma</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-8 group hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {/* Icon & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className={`px-3 py-1 bg-${project.color}-500/20 border border-${project.color}-500/30 rounded-full text-xs font-semibold text-${project.color}-300`}>
                    {project.tag}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>View in Figma</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center glass-card p-12 animate-fadeInUp delay-500">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Want to see more?</span>
          </h3>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            These are just a few highlights. I'm constantly working on new projects and exploring emerging technologies.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full text-lg font-bold shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
          >
            Let's Work Together
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
