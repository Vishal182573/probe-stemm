// LoginPage.tsx
import React from "react";
import { Navbar } from "@/components/Navbar";
import { NewsAlert } from "@/components/NewsAlert";
import { LoginForm } from "@/components/LoginForm";
import { Footer } from "@/components/Footer";

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar />
      <NewsAlert />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 text-center md:text-left">
              Welcome Back to Probe Stemm
            </h1>
            <p className="text-xl text-gray-600 text-center md:text-left">
              Continue your journey in STEM education and innovation.
            </p>
            <img
              src="/home.png"
              alt="Login illustration"
              className="w-full max-w-md"
            />
          </div>
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
