import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-orange-500">Probe Stemm</h1>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">About</Button>
            <Button
              variant="default"
              className="bg-orange-500 hover:bg-orange-600"
            >
              Login
            </Button>
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
                className="w-full bg-orange-500 hover:bg-orange-600"
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
