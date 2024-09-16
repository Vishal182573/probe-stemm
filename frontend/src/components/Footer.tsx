import React from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="font-semibold mb-2">Follow us</p>
            <p>Copyright © 2024 Probe STEM. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 mb-4 md:mb-0">
            {["Privacy Policy", "Terms of Use", "Legal", "Site Map"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  {item}
                </a>
              )
            )}
          </div>
          <div className="flex space-x-4">
            {[FaTwitter, FaInstagram, FaFacebook, FaLinkedin].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-secondary-foreground hover:text-primary transition-colors duration-200"
                >
                  <Icon size={24} />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
