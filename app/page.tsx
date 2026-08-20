"use client";

export default function Home() {
  return (
    <div className="h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-white mb-4">🎮 My Game</h1>
      <p className="text-gray-400 text-center max-w-sm">
        Replace this with your game. This template includes mobile viewport
        lock, GitHub Pages deployment, PWA support, and utility helpers.
      </p>

      {/* Build tag + Report Bug */}
      <div className="absolute bottom-4 flex items-center gap-3">
        <a
          href="https://github.com/OWNER/REPO/issues/new?template=bug_report.yml"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-300 text-xs underline"
        >
          Report Bug
        </a>
        <span className="text-gray-700 text-[10px]">
          build {process.env.NEXT_PUBLIC_BUILD_ID?.slice(0, 7) || "local"} 🎯
        </span>
      </div>
    </div>
  );
}
