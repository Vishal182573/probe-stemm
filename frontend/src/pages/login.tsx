import React from "react";
import { Navbar } from "@/components/Navbar";
import { NewsAlert } from "@/components/NewsAlert";
import { LoginForm } from "@/components/LoginForm";
import { Footer } from "@/components/Footer";

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <NewsAlert />
      <main className="flex-grow flex items-center justify-center bg-orange-50 p-4">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Image Container */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative w-full aspect-square max-w-md">
              <img
                src="/home.png"
                alt="Communication illustration"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
          {/* Login Form Container */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <LoginForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
