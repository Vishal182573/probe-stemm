import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-background/95 backdrop-blur-sm shadow-md top-0 sticky z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <h1 className="text-2xl font-bold text-primary">Probe Stemm</h1>
          </Link>
          {/* Mobile menu button */}
          <button className="md:hidden text-foreground" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Home</Button>
            <Link to={"/discussions"}>
            <Button variant="ghost">Questioniore</Button>
            </Link>
            <Button variant="ghost">About</Button>
            <Link to="/login">
              <Button
                variant="default"
                className="bg-primary hover:bg-primary/80 text-primary-foreground"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="w-full text-left">
                Home
              </Button>
              <Button variant="ghost" className="w-full text-left">
                Features
              </Button>
              <Button variant="ghost" className="w-full text-left">
                About
              </Button>
              <Button
                variant="default"
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground"
              >
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
