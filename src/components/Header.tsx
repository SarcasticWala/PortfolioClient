import React, { useState, useEffect } from "react";
import { Camera, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/5 backdrop-blur-sm py-3" : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 flex items-center justify-between max-w-7xl">
        <div
          onClick={() => scrollToSection("hero")}
          className="flex items-center space-x-2 text-amber-500 font-bold text-lg sm:text-xl cursor-pointer"
        >
          <Camera size={20} className="sm:w-6 sm:h-6" />
          <span className="hidden sm:inline">PORTFOLIO</span>
          <span className="sm:hidden">AYAN</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex space-x-4 sm:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-sm sm:text-base text-white hover:text-amber-500 transition-colors duration-200 relative"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white/5 backdrop-blur-md px-6 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-white text-base hover:text-amber-500 transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
