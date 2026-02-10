export default function Projects() {
  const projects = [
    {
      title: "Go-Zoop Website Clone",
      desc: "Agency-style UI recreation to master layout, spacing and typography.",
      link: "https://www.figma.com/proto/GH5u36u3iZCvyr3dO8MxMD/Marklyne?page-id=&node-id=958-525&viewport=-9030%2C-5504%2C0.13&t=Kdupus2Ot5K26Pkf-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=262%3A380&show-proto-sidebar=1",
      tag: "UI Design",
    },
    {
      title: "OLX UI Clone",
      desc: "Marketplace interface design focusing on usability and structure.",
      link: "https://www.figma.com/proto/GH5u36u3iZCvyr3dO8MxMD/Marklyne?page-id=262%3A379&node-id=470-410&viewport=-7753%2C-4289%2C0.15&t=FmSvor9k3Fun4uHj-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=510%3A257&show-proto-sidebar=1",
      tag: "Interface",
    },
  ];

  return (
    <section id="projects" className="mb-20 sm:mb-32 scroll-mt-20">
      <h2 className="section-title gradient-text animate-fadeInUp">
        Featured Projects
      </h2>
      <div className="space-y-4 sm:space-y-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`glass-card p-6 sm:p-8 md:p-10 hover-lift animate-fadeInUp delay-${(i + 2) * 100}`}
          >
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-purple-500/20 rounded-full text-xs sm:text-sm text-purple-300 mb-3">
                  {project.tag}
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 gradient-text">
                  {project.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-4 sm:mb-6">
                  {project.desc}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm sm:text-base font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  View Project
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="sm:w-5 sm:h-5"
                  >
                    <path
                      d="M4 10H16M16 10L11 5M16 10L11 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
