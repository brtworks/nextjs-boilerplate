"use client";

import React, { useEffect, useState } from "react";
import 'animate.css';

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hello, World";

  useEffect(() => {
    // Typing effect
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText((prev) => prev + fullText[index]);
      index += 1;
      if (index === fullText.length) {
        clearInterval(typingInterval); // Stop typing when done
      }
    }, 100);

    return () => clearInterval(typingInterval); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <p className="text-white text-2xl font-mono">
        <span className="relative">
          {typedText}
          <span className="after:content-['_'] after:ml-1 blink"></span>
        </span>
      </p>
      <style>
        {`
          @keyframes blink {
            50% { opacity: 0; }
          }
          .blink::after {
            animation: blink 1s step-end infinite;
          }
        `}
      </style>
    </div>
  );
}

