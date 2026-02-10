"use client";

import React from "react";

export default function DigitalClock() {
  const [time, setTime] = React.useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
    milliseconds: "000"
  });
  const [date, setDate] = React.useState({
    day: "",
    month: ""
  });

  React.useEffect(() => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const updateClock = () => {
      const now = new Date();
      setTime({
        hours: String(now.getHours()).padStart(2, '0'),
        minutes: String(now.getMinutes()).padStart(2, '0'),
        seconds: String(now.getSeconds()).padStart(2, '0'),
        milliseconds: String(now.getMilliseconds()).padStart(3, '0')
      });
      setDate({
        day: weekdays[now.getDay()],
        month: monthNames[now.getMonth()]
      });
    };

    updateClock();
    const interval = setInterval(updateClock, 1);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center p-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 dot-pattern opacity-50 pointer-events-none"></div>
      
      {/* Gradient Orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-custom"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-custom" style={{ animationDelay: "1s" }}></div>

      <div className="relative z-10 w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            <span className="gradient-text">Hey Piyush!</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            {date.day}
          </h2>
          <h3 className="text-xl sm:text-2xl text-yellow-400 font-semibold">
            {date.month}
          </h3>
        </div>

        {/* Clock Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 animate-fadeInUp delay-200">
          {/* Hours */}
          <div className="glass-card p-6 sm:p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold gradient-text mb-2 font-mono">
                  {time.hours}
                </div>
                <div className="text-sm sm:text-base text-slate-400 uppercase tracking-wider">
                  Hours
                </div>
              </div>
            </div>
          </div>

          {/* Minutes */}
          <div className="glass-card p-6 sm:p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold gradient-text-pink mb-2 font-mono">
                  {time.minutes}
                </div>
                <div className="text-sm sm:text-base text-slate-400 uppercase tracking-wider">
                  Minutes
                </div>
              </div>
            </div>
          </div>

          {/* Seconds */}
          <div className="glass-card p-6 sm:p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold gradient-text-blue mb-2 font-mono">
                  {time.seconds}
                </div>
                <div className="text-sm sm:text-base text-slate-400 uppercase tracking-wider">
                  Seconds
                </div>
              </div>
            </div>
          </div>

          {/* Milliseconds */}
          <div className="glass-card p-6 sm:p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-2 font-mono">
                  {time.milliseconds}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider">
                  Milliseconds
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-12 animate-fadeInUp delay-400">
          <p className="text-slate-400 text-sm sm:text-base">
            Real-time digital clock with millisecond precision
          </p>
        </div>
      </div>
    </div>
  );
}
