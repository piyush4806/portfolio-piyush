export default function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      desc: "HTML, CSS, JavaScript, Basics of Next.js",
      icon: "💻",
    },
    {
      title: "Design Tools",
      desc: "Figma, UI Design, Layout Structuring",
      icon: "🎨",
    },
    {
      title: "Soft Skills",
      desc: "Communication, Problem Solving, Teamwork",
      icon: "🤝",
    },
    { 
      title: "Languages", 
      desc: "English · Hindi · Marathi", 
      icon: "🌐" 
    },
  ];

  return (
    <section id="skills" className="mb-20 sm:mb-32 scroll-mt-20">
      <h2 className="section-title gradient-text-pink animate-fadeInUp">
        Skills & Expertise
      </h2>
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`glass-card p-6 sm:p-8 hover-lift animate-fadeInUp delay-${(i + 2) * 100}`}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="text-3xl sm:text-4xl flex-shrink-0">
                {skill.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">
                  {skill.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
