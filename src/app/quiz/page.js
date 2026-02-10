"use client";

import React from "react";

export default function Quiz() {
  const [current, setCurrent] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState("");
  const [quizFinished, setQuizFinished] = React.useState(false);

  const quizData = [
    {
      question: "What is the full form of HTML?",
      a: "Hyper Text Markup Language",
      b: "High Text Machine Language",
      c: "Hyperlinks Text Markup Language",
      d: "None",
      correct: "a"
    },
    {
      question: "What is JavaScript used for?",
      a: "Styling",
      b: "Database",
      c: "Logic & Interaction",
      d: "Server Only",
      correct: "c"
    },
    {
      question: "What is CSS used for?",
      a: "Logic",
      b: "Structure",
      c: "Styling",
      d: "Database",
      correct: "c"
    },
  ];

  const handleNext = () => {
    if (!selectedAnswer) {
      alert("Please select an answer");
      return;
    }

    if (selectedAnswer === quizData[current].correct) {
      setScore(score + 1);
    }

    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
      setSelectedAnswer("");
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelectedAnswer("");
    setQuizFinished(false);
  };

  if (quizFinished) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center p-4">
        <div className="glass-card p-8 sm:p-12 max-w-md w-full text-center animate-fadeInUp">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Quiz Finished!
          </h2>
          <p className="text-2xl text-slate-300 mb-8">
            Your Score: <span className="gradient-text-blue font-bold">{score}</span> / {quizData.length}
          </p>
          <button
            onClick={restartQuiz}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = quizData[current];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="fixed inset-0 dot-pattern opacity-50 pointer-events-none"></div>
      
      {/* Gradient Orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="glass-card p-6 sm:p-8 max-w-lg w-full relative z-10 animate-fadeInUp">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>Question {current + 1} of {quizData.length}</span>
            <span>Score: {score}</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
              style={{ width: `${((current + 1) / quizData.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-white">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {["a", "b", "c", "d"].map((option) => (
            <label
              key={option}
              className={`flex items-center p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                selectedAnswer === option
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 border-2 border-blue-500"
                  : "bg-slate-800/50 border-2 border-slate-700 hover:border-slate-600"
              }`}
            >
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedAnswer === option}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                className="mr-3 w-4 h-4"
              />
              <span className="text-sm sm:text-base text-slate-200">
                {currentQuestion[option]}
              </span>
            </label>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
        >
          {current + 1 === quizData.length ? "Finish" : "Next Question"}
        </button>
      </div>
    </div>
  );
}
