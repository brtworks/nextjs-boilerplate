"use client";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <p className="text-white text-2xl font-mono">
        <span className="relative after:content-['_'] after:ml-1 after:animate-blink"></span>
      </p>
      <style>
        {`
          @keyframes blink {
            50% { opacity: 0; }
          }
          .after\\:animate-blink::after {
            animation: blink 1s step-end infinite;
          }
        `}
      </style>
    </div>
  );
}