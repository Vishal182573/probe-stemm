// components/Navbar.tsx

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-background/95 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <h1 className="text-2xl font-bold text-primary">Probe STEM</h1>
          </Link>
          <button className="md:hidden text-foreground" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>

            <Link to="/discussions">
              <Button variant="ghost">Questionnaire</Button>
            </Link>

            <Link to="/webinars">
              <Button variant="ghost">Webinars</Button>
            </Link>
            <Link to="/blogs">
              <Button variant="ghost">Blogs</Button>
            </Link>
            <Link to="/projects">
              <Button variant="ghost">Projects</Button>
            </Link>

            <Link to="/about">
              <Button variant="ghost">About</Button>
            </Link>

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
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="w-full text-left">
                Home
              </Button>
              <Link to="/discussions">
                <Button variant="ghost" className="w-full text-left">
                  Questionnaire
                </Button>
              </Link>
              <Link to="/blogs">
                <Button variant="ghost" className="w-full text-left">
                  Blogs
                </Button>
              </Link>

              <Link to="/projects">
                <Button variant="ghost" className="w-full text-left">
                  Projects
                </Button>
              </Link>
              <Link to="/webinars">
                <Button variant="ghost" className="w-full text-left">
                  Webinars
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="ghost" className="w-full text-left">
                  About
                </Button>
              </Link>

              <Link to="/login">
                <Button
                  variant="default"
                  className="w-full bg-primary hover:bg-primary/80 text-primary-foreground"
                >
                  Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
