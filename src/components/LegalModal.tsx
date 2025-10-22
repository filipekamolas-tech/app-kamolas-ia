"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 🔹 Scroll suave com offset (compensa a altura da navbar)
  const scrollToSection = (sectionId) => {
    if (typeof window === "undefined") return;
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // ajusta se a navbar for mais alta
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // 🔹 Fecha o menu ao clicar fora (versões mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("nav")) setIsMenuOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // 🔹 Lista de secções (menu)
  const sections = [
    { id: "features", label: "Recursos" },
    { id: "pricing", label: "Preços" },
    { id: "legal", label: "Legal" },
    { id: "contact", label: "Contactos" },
  ];

  return (
    <nav className="fixed w-full bg-black bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          onClick={() => scrollToSection("home")}
          className="text-white text-2xl font-bold"
        >
          Kamolas.AI
        </a>

        {/* Botão Mobile */}
        <button
          className="text-white lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Menu Desktop */}
        <div className="hidden lg:flex space-x-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black bg-opacity-90 flex flex-col items-center py-4 space-y-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-gray-300 hover:text-white text-lg"
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
