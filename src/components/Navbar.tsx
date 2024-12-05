import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative w-full z-50 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-20">
        <Link to="/" className="h-24">
          <img
            src="/lovable-uploads/71812f21-c8eb-4a27-8410-4f91eef90867.png"
            alt="Increment Capital"
            className="h-full object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection('features')}
            className="text-sm font-medium hover:text-primary"
          >
            Capabilities
          </button>
          <button
            onClick={() => scrollToSection('partners')}
            className="text-sm font-medium hover:text-primary"
          >
            Partners
          </button>
          <button
            onClick={() => scrollToSection('infrastructure')}
            className="text-sm font-medium hover:text-primary"
          >
            Infrastructure
          </button>
          <button
            onClick={() => scrollToSection('team')}
            className="text-sm font-medium hover:text-primary"
          >
            Team
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-sm font-medium hover:text-primary text-left"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('integrate')}
                className="text-sm font-medium hover:text-primary text-left"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection('community')}
                className="text-sm font-medium hover:text-primary text-left"
              >
                Resources
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-sm font-medium hover:text-primary text-left"
              >
                Team
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;