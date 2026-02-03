"use client";

export default function Portfolio() {
  const skills = [
    { title: "Development", desc: "HTML, CSS, JavaScript, Basics of Next.js", icon: "💻" },
    { title: "Design Tools", desc: "Figma, UI Design, Layout Structuring", icon: "🎨" },
    { title: "Soft Skills", desc: "Communication, Problem Solving, Teamwork", icon: "🤝" },
    { title: "Languages", desc: "English · Hindi · Marathi", icon: "🌐" },
  ];

  const qualifications = [
    { icon: "🎓", title: "Class 12th", subtitle: "2024–25", year: "2025" },
    { icon: "📘", title: "Class 10th", subtitle: "2022–23", year: "2023" },
    { icon: "🤖", title: "B.Voc in AI & ML", subtitle: "Nexcore Institute", year: "Current" },
  ];

  const projects = [
    {
      title: "Go-Zoop Website Clone",
      desc: "Agency-style UI recreation to master layout, spacing and typography.",
      link: "https://www.figma.com/proto/GH5u36u3iZCvyr3dO8MxMD/Marklyne?page-id=&node-id=958-525&viewport=-9030%2C-5504%2C0.13&t=Kdupus2Ot5K26Pkf-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=262%3A380&show-proto-sidebar=1",
      tag: "UI Design"
    },
    {
      title: "OLX UI Clone",
      desc: "Marketplace interface design focusing on usability and structure.",
      link: "https://www.figma.com/proto/GH5u36u3iZCvyr3dO8MxMD/Marklyne?page-id=262%3A379&node-id=470-410&viewport=-7753%2C-4289%2C0.15&t=FmSvor9k3Fun4uHj-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=510%3A257&show-proto-sidebar=1",
      tag: "Interface"
    },
  ];

  const hobbies = [
    { name: "Reading", icon: "📘" },
    { name: "Coding", icon: "💻" },
    { name: "Cricket", icon: "🏏" },
    { name: "Movies", icon: "🎬" },
    { name: "Travel", icon: "✈️" }
  ];

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        @keyframes scroll {
          0% { top: 8px; opacity: 1; }
          100% { top: 28px; opacity: 0; }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-custom {
          animation: pulse 2s ease-in-out infinite;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-text-blue {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-text-pink {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-bg {
          background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #4facfe);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .glass-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .section-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 3rem;
          margin-bottom: 3rem;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
        }

        .dot-pattern {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        .tag {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .tag:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .scroll-indicator {
          width: 30px;
          height: 50px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          position: relative;
        }

        .scroll-indicator::before {
          content: '';
          width: 6px;
          height: 10px;
          background: white;
          border-radius: 50px;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white overflow-hidden">
        
        {/* Background Pattern */}
        <div className="fixed inset-0 dot-pattern opacity-50 pointer-events-none"></div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 mt-4 rounded-2xl animate-fadeIn">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="font-bold text-xl">
              <span className="gradient-text">PP</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Available for work</span>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
          
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col justify-center items-start mb-20">
            <div className="animate-fadeInUp delay-100">
              <p className="text-lg text-purple-300 mb-4">Hi there! I'm</p>
            </div>
            
            <h1 className="font-bold mb-6 animate-fadeInUp delay-200" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(3rem, 10vw, 7rem)', lineHeight: '1.1' }}>
              <span className="gradient-text block">Piyush Patwa</span>
            </h1>

            <div className="animate-fadeInUp delay-300 mb-8">
              <h2 className="text-2xl md:text-4xl font-light text-gray-300 mb-4">
                Student · <span className="gradient-text-blue font-semibold">Developer</span>
              </h2>
              <p className="text-xl text-gray-400">AI & Design Explorer</p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fadeInUp delay-400 mb-12">
              <span className="tag">Web Development</span>
              <span className="tag">UI/UX Design</span>
              <span className="tag">AI Enthusiast</span>
            </div>

            <div className="animate-fadeInUp delay-500">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Let's Connect
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fadeIn delay-700">
              <div className="scroll-indicator"></div>
            </div>
          </section>

          {/* About Section */}
          <section className="mb-32">
            <h2 className="section-title gradient-text-blue animate-fadeInUp">About Me</h2>
            <div className="glass-card p-8 md:p-12 hover-lift animate-fadeInUp delay-200">
              <p className="text-xl leading-relaxed text-gray-300">
                I'm a <span className="text-purple-400 font-semibold">curious student</span> driven by technology, 
                design, and systems thinking. I enjoy understanding how interfaces work and rebuilding 
                them to be <span className="text-blue-400 font-semibold">cleaner</span>, 
                <span className="text-pink-400 font-semibold"> smarter</span>, and more 
                <span className="text-purple-400 font-semibold"> human</span>.
              </p>
            </div>
          </section>

          {/* Qualifications */}
          <section className="mb-32">
            <h2 className="section-title gradient-text animate-fadeInUp">Qualifications</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {qualifications.map((qual, i) => (
                <div key={i} className={`glass-card p-8 hover-lift animate-fadeInUp delay-${(i + 2) * 100}`}>
                  <div className="text-5xl mb-4 animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
                    {qual.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 gradient-text">{qual.title}</h3>
                  <p className="text-gray-400">{qual.subtitle}</p>
                  <div className="mt-4 inline-block px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300">
                    {qual.year}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-32">
            <h2 className="section-title gradient-text-pink animate-fadeInUp">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, i) => (
                <div key={i} className={`glass-card p-8 hover-lift animate-fadeInUp delay-${(i + 2) * 100}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{skill.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">{skill.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{skill.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interests */}
          <section className="mb-32">
            <h2 className="section-title gradient-text-blue animate-fadeInUp">Interests & Hobbies</h2>
            <div className="flex flex-wrap gap-4">
              {hobbies.map((hobby, i) => (
                <div
                  key={i}
                  className={`glass-card px-6 py-4 hover-lift animate-fadeInUp delay-${(i + 2) * 100}`}
                >
                  <span className="text-2xl mr-3">{hobby.icon}</span>
                  <span className="text-lg font-medium">{hobby.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mb-32">
            <h2 className="section-title gradient-text animate-fadeInUp">Featured Projects</h2>
            <div className="space-y-6">
              {projects.map((project, i) => (
                <div key={i} className={`glass-card p-8 md:p-10 hover-lift animate-fadeInUp delay-${(i + 2) * 100}`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300 mb-3">
                        {project.tag}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">{project.title}</h3>
                      <p className="text-lg text-gray-400 leading-relaxed mb-6">{project.desc}</p>
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        View Project
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-32">
            <h2 className="section-title gradient-text animate-fadeInUp">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="glass-card p-8 hover-lift animate-fadeInUp delay-200">
                <h3 className="text-2xl font-bold mb-6 gradient-text-blue">Let's Connect</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:patwapiyush940@gmail.com" 
                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-all duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-medium">patwapiyush940@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+919619825701" 
                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-all duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="font-medium">+91 9619825701</p>
                    </div>
                  </a>

                  <a 
                    href="https://maps.google.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-all duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-medium">Maharashtra, India</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-8 hover-lift animate-fadeInUp delay-300">
                <h3 className="text-2xl font-bold mb-6 gradient-text-pink">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-all duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <span className="font-medium text-sm">GitHub</span>
                  </a>

                  <a 
                    href="https://linkedin.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-all duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <span className="font-medium text-sm">LinkedIn</span>
                  </a>

                  <a 
                    href="https://twitter.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-sky-500 transition-all duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </div>
                    <span className="font-medium text-sm">Twitter</span>
                  </a>

                  <a 
                    href="https://instagram.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-pink-500 transition-all duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <span className="font-medium text-sm">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-20">
            <div className="gradient-bg p-12 md:p-16 rounded-3xl text-center hover-lift animate-fadeInUp">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Let's Build Something Amazing
              </h2>
              <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <a 
                href="mailto:piyushpatwa@example.com"
                className="inline-block px-10 py-5 bg-white text-purple-900 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
              <p>© 2026 Piyush Patwa. All rights reserved.</p>
              <p className="text-sm">Designed & Developed with ❤️</p>
            </div>
          </footer>

        </div>
      </div>
    </>
  );
}