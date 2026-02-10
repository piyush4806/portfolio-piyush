export default function About() {
  return (
    <section id="about" className="mb-20 sm:mb-32 scroll-mt-20">
      <h2 className="section-title gradient-text-blue animate-fadeInUp">
        About Me
      </h2>
      <div className="glass-card p-6 sm:p-8 md:p-12 hover-lift animate-fadeInUp delay-200">
        <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
          I'm currently pursuing a{" "}
          <span className="text-purple-400 font-semibold">
            B.Voc in Artificial Intelligence and Machine Learning
          </span>
          , where I focus on building practical skills that solve real problems. My interest lies in applying AI and ML to create systems that are{" "}
          <span className="text-blue-400 font-semibold">functional</span>,{" "}
          <span className="text-pink-400 font-semibold">efficient</span>, and{" "}
          <span className="text-purple-400 font-semibold">impactful</span>
          —whether that's automation tools, data-driven applications, or intelligent workflows.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed text-gray-300 mt-4">
          I believe in learning through execution. Theory matters, but I prioritize hands-on projects that challenge me to think critically and deliver results. My goal is to contribute to meaningful tech products and systems where AI and ML drive real value. I'm disciplined, curious, and always looking to improve—not just as a developer, but as someone who understands how technology can be applied thoughtfully in the real world.
        </p>
      </div>
    </section>
  );
}
