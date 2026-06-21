import React, { useState } from "react";
import profile from "./assets/profile.png";
import dsweb from "./assets/dsjs.png";
import dsjs from "./assets/dsai.png";
import dsai from "./assets/dsweb.png";
import png1 from "./assets/1.png";
import png2 from "./assets/2.png";
import png3 from "./assets/3.png";
import cv from "./assets/sidowwwscv.png";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("project");

  const skills = [
    "React.js",
    "Laravel",
    "Flutter",
    "Expressjs",
    "Php",
    "Javascript",
    "Html",
    "Css",
    "Mysql",
    "Tailwindcss",
    "Boostrap",
    "Git & Github",
  ];

  const projectImages = [`${png1}`, `${png2}`, `${png3}`];

  const certificateImages = [`${dsweb}`, `${dsjs}`, `${dsai}`];

  return (
    <div className="min-h-screen bg-[#070707] text-white font-sans antialiased selection:bg-orange-500 selection:text-white">
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-xl border-b border-white/[0.06] py-4 md:py-5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter uppercase font-sans">
            Sidowwws
          </div>

          <div className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-wider uppercase text-gray-300">
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href={cv} className="flex items-center gap-2 bg-white text-black px-5 py-2.5 font-bold text-xs hover:bg-gray-100 transition shadow-lg tracking-wider uppercase">
              View CV
              <span className="bg-orange-600 text-white rounded-full p-1 flex items-center justify-center text-[10px]">
                ➔
              </span>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50 relative"
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        <div
          className={`md:hidden fixed inset-0 w-full h-screen bg-[#070707]/98 backdrop-blur-xl transition-all duration-300 ease-in-out z-40 flex flex-col justify-center items-center px-6 ${
            isMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-8 text-right text-3xl font-bold tracking-tight uppercase">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-400 hover:text-white transition duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-400 hover:text-white transition duration-200"
            >
              About
            </a>

            <div className="border-b border-white/10 w-full max-w-xs mx-auto"></div>

            <a href={cv} className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 font-bold text-sm tracking-wider uppercase shadow-2xl mt-4 w-64 max-w-xs transition transform active:scale-95 mx-auto">
              view CV
              <span className="bg-orange-600 text-white rounded-full p-1.5 flex items-center justify-center text-xs">
                ➔
              </span>
            </a>
          </div>
        </div>
      </nav>

      <div id="home" className="relative w-full min-h-[80vh] lg:min-h-[90vh] lg:h-[90vh] rounded-b-[40px] md:rounded-b-[60px] overflow-hidden bg-gradient-to-b from-[#e63e13] via-[#a32a0d] to-[#120402] pt-32 pb-16 lg:py-0 flex flex-col justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-top opacity-50 mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url(${profile})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e63e13]/10 to-black/80 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-center h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-7 space-y-3 md:space-y-4">
              <span className="uppercase italic text-base sm:text-lg md:text-xl font-black tracking-widest text-white block">
                HI, I AM SIDOWWWS
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-extrabold tracking-tighter leading-[0.9] text-white uppercase">
                Fullstack
                <br />
                Developer
              </h1>
            </div>

            <div className="lg:col-span-5 lg:pl-12 space-y-4 lg:mb-2">
              <h3 className="text-xl sm:text-2xl font-bold leading-snug max-w-md italic tracking-tight text-white/90">
                " Where logic becomes art "
              </h3>
              <p className="text-gray-200/90 text-sm sm:text-base leading-relaxed max-w-md font-normal tracking-wide">
                Hello, I'm a design enthusiast and a user-friendly website
                builder. I'm a team player, disciplined, and constantly striving
                to develop my programming and website design skills.
              </p>
            </div>
          </div>

          <div className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 border-t border-white/10 pt-6 md:pt-8">
            <div className="space-y-1">
              <span className="text-orange-400 text-xs font-bold font-mono">
                01
              </span>
              <p className="text-sm md:text-base font-bold tracking-tight uppercase text-gray-200">
                Development
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-orange-400 text-xs font-bold font-mono">
                02
              </span>
              <p className="text-sm md:text-base font-bold tracking-tight uppercase text-gray-200">
                UI/UX Designer
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-orange-400 text-xs font-bold font-mono">
                03
              </span>
              <p className="text-sm md:text-base font-bold tracking-tight uppercase text-gray-200">
                Problem Solving
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-orange-400 text-xs font-bold font-mono">
                04
              </span>
              <p className="text-sm md:text-base font-bold tracking-tight uppercase text-gray-200">
                Team Work
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#070707] py-6 border-b border-white/5 overflow-hidden relative w-full select-none">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.3333%); }
          }
          .animate-marquee-3x {
            display: flex;
            width: max-content;
            animation: marquee 28s linear infinite;
          }
          @media (max-width: 768px) {
            .animate-marquee-3x {
              animation-duration: 20s;
            }
          }
          .animate-marquee-3x:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#070707] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#070707] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee-3x gap-8 md:gap-16">
          <div className="flex items-center gap-8 md:gap-16">
            {skills.map((skill, index) => (
              <div
                key={`skill-1-${index}`}
                className="flex items-center gap-3 text-sm font-extrabold tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 hover:from-orange-400 hover:to-red-500 transition duration-300"
              >
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#e63e13] shadow-[0_0_8px_#e63e13]"></span>
                {skill}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-8 md:gap-16" aria-hidden="true">
            {skills.map((skill, index) => (
              <div
                key={`skill-2-${index}`}
                className="flex items-center gap-3 text-sm font-extrabold tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 hover:from-orange-400 hover:to-red-500 transition duration-300"
              >
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#e63e13] shadow-[0_0_8px_#e63e13]"></span>
                {skill}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-8 md:gap-16" aria-hidden="true">
            {skills.map((skill, index) => (
              <div
                key={`skill-3-${index}`}
                className="flex items-center gap-3 text-sm font-extrabold tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 hover:from-orange-400 hover:to-red-500 transition duration-300"
              >
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#e63e13] shadow-[0_0_8px_#e63e13]"></span>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="about" className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 md:mb-24">
          <div className="lg:col-span-6 space-y-3">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest block font-mono">
              Behind the Code
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] max-w-md uppercase">
              Where Logic Meets{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Aesthetics
              </span>
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pl-12 space-y-6 lg:mt-6">
            <p className="text-gray-300 text-base md:text-lg font-normal leading-relaxed tracking-wide">
              With a disciplined mindset and a love for building user-friendly
              websites, I bridge the gap between complex backend architecture
              and pixel-perfect interfaces.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
              <span className="text-xs text-gray-500 font-mono block">
                Let's Architect
                <br />
                The Future Together
              </span>
              <a href="https://wa.me/628989209979" target="_blank" className="flex items-center gap-2 bg-[#e63e13] text-white px-5 py-2.5 font-bold text-xs hover:bg-orange-700 transition shadow-lg uppercase tracking-wider">
                Hire me
                <span className="bg-white text-orange-600 rounded-full p-1 flex items-center justify-center text-[10px]">
                  ➔
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full border-b border-white/10 mb-10 flex gap-8 text-base md:text-2xl font-black relative">
          <button
            onClick={() => setActiveTab("project")}
            className={`italic pb-4 transition-all duration-300 relative tracking-tight ${
              activeTab === "project"
                ? "text-white"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            PROJECT
            {activeTab === "project" && (
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#e63e13] shadow-[0_0_8px_#e63e13]"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("certificate")}
            className={`italic pb-4 transition-all duration-300 relative tracking-tight ${
              activeTab === "certificate"
                ? "text-white"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            CERTIFICATE
            {activeTab === "certificate" && (
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#e63e13] shadow-[0_0_8px_#e63e13]"></span>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {activeTab === "project"
            ? projectImages.map((src, index) => (
                <div
                  key={`project-${index}`}
                  className="aspect-[4/3] bg-[#161616] overflow-hidden group border border-white/5"
                >
                  <img
                    src={src}
                    alt={`Project Showcase ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              ))
            : certificateImages.map((src, index) => (
                <div
                  key={`cert-${index}`}
                  className="aspect-[4/3] bg-[#161616] overflow-hidden group border border-white/5 relative"
                >
                  <img
                    src={src}
                    alt={`Certificate Showcase ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={src}
                      rel="noreferrer"
                      className="bg-white/[0.08] backdrop-blur-md border border-white/20 text-white font-bold text-xs px-5 py-2.5 rounded-full uppercase tracking-wider transform translate-y-2 group-hover:translate-y-0 transition duration-300 hover:bg-white hover:text-black shadow-xl"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
