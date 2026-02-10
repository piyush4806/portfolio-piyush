"use client";

import React from "react";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML5", level: 85 },
        { name: "CSS3", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "Next.js", level: 60 },
        { name: "React", level: 65 },
        { name: "C Programming", level: 70 },
      ]
    },
    {
      category: "Design Tools",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Figma", level: 80 },
        { name: "Canva", level: 85 },
        { name: "WordPress", level: 75 },
        { name: "UI Design", level: 75 },
        { name: "Prototyping", level: 70 },
      ]
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 65 },
        { name: "MongoDB", level: 60 },
        { name: "REST APIs", level: 65 },
      ]
    },
    {
      category: "Soft Skills",
      icon: "🤝",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Communication", level: 90 },
        { name: "Problem Solving", level: 85 },
        { name: "Teamwork", level: 88 },
        { name: "Time Management", level: 80 },
      ]
    }
  ];

  const languages = [
    { name: "English", flag: "🇬🇧", level: "Fluent" },
    { name: "Hindi", flag: "🇮🇳", level: "Native" },
    { name: "Marathi", flag: "🇮🇳", level: "Native" },
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
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            <span className="gradient-text">Skills & Expertise</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
            A showcase of my technical abilities and professional competencies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`glass-card p-6 sm:p-8 group animate-fadeInUp delay-${(idx + 2) * 100}`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === idx ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`text-4xl sm:text-5xl transition-transform duration-300 ${hoveredIndex === idx ? 'scale-110 animate-float' : ''}`}>
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {category.category}
                  </h3>
                  <div className={`h-1 w-20 rounded-full bg-gradient-to-r ${category.color} transition-all duration-300 ${hoveredIndex === idx ? 'w-32' : ''}`}></div>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm sm:text-base text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-xs sm:text-sm text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: hoveredIndex === idx ? `${skill.level}%` : '0%',
                          boxShadow: hoveredIndex === idx ? '0 0 10px rgba(59, 130, 246, 0.5)' : 'none'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="animate-fadeInUp delay-600">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            <span className="gradient-text-blue">Languages</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {lang.flag}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{lang.name}</h3>
                <p className="text-sm text-slate-400">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 animate-fadeInUp delay-700">
          <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">10+</div>
            <p className="text-sm text-slate-400">Skills Learned</p>
          </div>
          <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold gradient-text-blue mb-2">15+</div>
            <p className="text-sm text-slate-400">Projects Done</p>
          </div>
          <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold gradient-text-pink mb-2">3</div>
            <p className="text-sm text-slate-400">Languages</p>
          </div>
          <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">100%</div>
            <p className="text-sm text-slate-400">Dedication</p>
          </div>
        </div>
      </div>
    </div>
  );
}
