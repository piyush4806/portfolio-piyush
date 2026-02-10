export default function Hero() {
  return (
    <section className="min-h-[85vh] sm:min-h-screen flex flex-col justify-center items-start mb-12 sm:mb-20">
      <div className="animate-fadeInUp delay-100">
        <p className="text-base sm:text-lg text-purple-300 mb-3 sm:mb-4">
          Hi there! I'm
        </p>
      </div>

      <h1
        className="font-bold mb-4 sm:mb-6 animate-fadeInUp delay-200"
        style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: "clamp(2.5rem, 10vw, 7rem)",
          lineHeight: "1.1",
        }}
      >
        <span className="gradient-text block">Piyush Patwa</span>
      </h1>

      <div className="animate-fadeInUp delay-300 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-light text-gray-300 mb-3 sm:mb-4">
          Student ·{" "}
          <span className="gradient-text-blue font-semibold">
            Frontend Developer
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-400">
          AI & Design Explorer
        </p>
      </div>

      <div className="flex flex-wrap gap-3 sm:gap-4 animate-fadeInUp delay-400 mb-8 sm:mb-12">
        <span className="tag">Web Development</span>
        <span className="tag">UI/UX Design</span>
        <span className="tag">AI Enthusiast</span>
      </div>

      <div className="animate-fadeInUp delay-500">
        <a
          href="/contact"
          className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Let's Connect
        </a>
      </div>

      <div className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fadeIn delay-700">
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
}
