// components/Footer.tsx
import { Button } from "@/components/ui/button";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="font-semibold">Follow us</p>
          <p>&copy; 2024 Probe Stemm. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end space-x-4">
          <Button variant="ghost" className="text-white hover:text-black">
            Privacy Policy
          </Button>
          <Button variant="ghost" className="text-white hover:text-black">
            Terms of Use
          </Button>
          <Button variant="ghost" className="text-white hover:text-black">
            Legal
          </Button>
          <Button variant="ghost" className="text-white hover:text-black">
            Site Map
          </Button>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaTwitter
            className="text-white hover:text-orange-200 cursor-pointer"
            size={24}
          />
          <FaInstagram
            className="text-white hover:text-orange-200 cursor-pointer"
            size={24}
          />
          <FaFacebook
            className="text-white hover:text-orange-200 cursor-pointer"
            size={24}
          />
          <FaLinkedin
            className="text-white hover:text-orange-200 cursor-pointer"
            size={24}
          />
        </div>
      </div>
    </footer>
  );
};
