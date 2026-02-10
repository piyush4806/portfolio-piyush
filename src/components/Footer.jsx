export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-gray-400 text-center md:text-left">
        <p className="text-sm sm:text-base">
          © 2025 Piyush Patwa. All rights reserved.
        </p>
        <p className="text-sm sm:text-base">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
