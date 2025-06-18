'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

// Funzione di utilità per combinare classi CSS
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

const navLinks = [
  { name: "Chi Siamo", href: "#about" },
  { name: "Programma", href: "#schedule" },
  { name: "Presentatori", href: "#presenters" },
  { name: "Dove Siamo", href: "#location" },
  { name: "Contatti", href: "#contact" },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const currentPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = "";
      navLinks.forEach(({ href }) => {
        const sectionId = href.replace("#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (currentPosition >= offsetTop && currentPosition <= offsetTop + offsetHeight) {
            currentSection = sectionId;
          }
        }
      });
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <a href="/" className="block">
            <Image 
              src="/LogoSfincione.png"
              alt="Sfincione Fest Logo"
              width={120}
              height={120}
              className="h-12 md:h-16 w-auto transition-all duration-300"
              priority
            />
          </a>
        </MotionDiv>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((item, index) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
              <MotionDiv
                  key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                <a
                  href={item.href}
                  className={cn(
                    "relative font-medium transition-colors duration-300 group",
                    scrolled
                      ? isActive
                        ? "text-red-600"
                        : "text-gray-700 hover:text-red-600"
                      : isActive
                      ? "text-red-600"
                      : "text-white hover:text-red-600"
                  )}
                >
                  {item.name}
                  <span
                  className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
      )}
                  ></span>
                </a>
              </MotionDiv>
  );
          })}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={cn(
              "p-2 rounded-md",
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-black hover:bg-black/10"
            )}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <MotionDiv
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 w-screen h-screen bg-white z-[100] flex flex-col overflow-hidden"
        >
          <div className="p-6 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <Image 
                src="/LogoSfincione.png"
                alt="Sfincione Fest Logo"
                width={64}
                height={64}
                className="h-16 w-auto"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center flex-1 space-y-7 text-center p-8 overflow-y-auto">
            {navLinks.map((item, index) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <MotionDiv
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  className="w-full"
                >
                  <a
                    href={item.href}
                    className={cn(
                      "text-xl font-medium transition-colors duration-300 block py-3",
                      isActive ? "text-red-600" : "text-gray-700 hover:text-red-600"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </MotionDiv>
              );
            })}
          </div>
          
          <div className="p-4 text-center text-sm text-gray-500 border-t border-gray-100">
            <p>© {new Date().getFullYear()} Sfincione Fest</p>
          </div>
        </MotionDiv>
      )}
    </header>
  );
};

export default Header;