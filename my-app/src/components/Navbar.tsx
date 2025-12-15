import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const logoSrc =
    theme === "dark"
      ? "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765782592/N-WEST_2_shprqh.png"
      : "https://res.cloudinary.com/dbmscl9hm/image/upload/v1765782593/N-WEST_1_glvstc.png";

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/products", label: t("nav.products") },
    { path: "/about", label: t("nav.about") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 glass-effect bg-background drop-shadow-lg"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" aria-label="N-WEST กระจกรถยนต์สีฟ้า">
            <img
              src={logoSrc}
              alt="N-WEST กระจกรถยนต์สีฟ้า กระจกมองข้างเคลือบสีฟ้า"
              className="h-10 w-auto transition-all duration-300"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isActive(link.path) ? "page" : undefined}
                className={`font-medium transition-all duration-300 relative ${
                  isActive(link.path)
                    ? "text-foreground font-semibold"
                    : "text-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 to-gray-400 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 text-foreground">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === "th" ? "en" : "th")}
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon /> : <Sun />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 font-medium ${
                  isActive(link.path)
                    ? "text-black bg-primary/5"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
