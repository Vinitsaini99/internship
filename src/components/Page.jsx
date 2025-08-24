import React from "react";
import NavLinks from "./NavLinks";

export default function Page({ title, children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <NavLinks />
        </nav>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">{title}</h1>
        <div className="bg-white rounded-2xl shadow p-5 sm:p-7">{children}</div>
      </main>
      {/* <footer className="pb-10 text-center text-sm text-gray-500">
        Built with React, Tailwind, and react-router-dom
      </footer> */}
    </div>
  );
}