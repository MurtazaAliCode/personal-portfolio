"use client";

import { useState, useEffect } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

const commands = [
  "Initializing Agentic System...",
  "Loading OpenAI Agents SDK...",
  "Connecting to Neural Network...",
  "Analyzing market trends ($3k target)...",
  "Optimizing StreamVault engine...",
  "Deployment successful.",
  "System ready for collaboration.",
];

const Terminal = () => {
  const [currentText, setCurrentText] = useState("");
  const [commandIndex, setCommandIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (commandIndex < commands.length) {
      if (charIndex < commands[commandIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + commands[commandIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + "\n> ");
          setCharIndex(0);
          setCommandIndex(commandIndex + 1);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    }
  }, [commandIndex, charIndex]);

  return (
    <div className="glass-card bg-black/40 border-white/5 font-mono text-[10px] md:text-sm p-3 md:p-4 w-full max-w-md shadow-2xl overflow-hidden">
      <div className="flex items-center gap-2 mb-2 md:mb-4 border-b border-white/5 pb-2">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500/50" />
        </div>
        <div className="flex items-center gap-1.5 ml-2 text-slate-500 text-[8px] md:text-xs">
          <TerminalIcon className="w-3 h-3" />
          <span>ai_terminal</span>
        </div>
      </div>
      <div className="whitespace-pre-wrap text-cta/80 leading-relaxed min-h-[100px] md:min-h-[120px]">
        {"> "}
        {currentText}
        <span className="animate-pulse">_</span>
      </div>
    </div>
  );
};

export default Terminal;
