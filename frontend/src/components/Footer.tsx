import React from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background/95 text-secondary-foreground py-4 shadow-md sticky text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div>
            <h3 className="font-semibold mb-1">Contact Us</h3>
            <ul className="space-y-1">
              <li className="flex items-center">
                <MdEmail className="mr-1" size={14} />
                info@probestem.com
              </li>
              <li className="flex items-center">
                <MdPhone className="mr-1" size={14} />
                +1 123-456-7890
              </li>
              <li className="flex items-start">
                <MdLocationOn className="mr-1 mt-1" size={14} />
                <span>123 Education St., Science City, 12345</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Quick Links</h3>
            <ul className="space-y-1">
              {[
                "About Us",
                "Webinars",
                "Blogs",
                "Questionnaire",
                "Projects",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Connect With Us</h3>
            <div className="flex space-x-2">
              {[FaTwitter, FaInstagram, FaFacebook, FaLinkedin].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-secondary-foreground hover:text-primary transition-colors duration-200"
                  >
                    <Icon size={20} />
                  </a>
                )
              )}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Our Logo</h3>
            <div>logo here</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="mb-2 md:mb-0 text-center md:text-left">
            <p>Copyright © 2024 Probe STEM. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-2">
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
        </div>
      </div>
    </footer>
  );
};
