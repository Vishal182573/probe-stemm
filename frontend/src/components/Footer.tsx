// components/Footer.tsx
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-orange-400 text-white py-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="font-semibold mb-2">Follow us</p>
          <p>Copyright © 2024 Probe Stemm. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end space-x-4 mb-4 md:mb-0">
          {['Privacy Policy', 'Terms of Use', 'Legal', 'Site Map'].map((item) => (
            <a key={item} href="#" className="hover:underline">{item}</a>
          ))}
        </div>
        <div className="flex space-x-4">
          {[FaTwitter, FaInstagram, FaFacebook, FaLinkedin].map((Icon, index) => (
            <a key={index} href="#" className="hover:text-orange-200">
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
  );
};
