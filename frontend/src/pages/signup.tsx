// SignupPage.tsx
import React from "react";
import { Navbar } from "@/components/Navbar";
import { NewsAlert } from "@/components/NewsAlert";
import { SignupForm } from "@/components/SignupForm";
import { Footer } from "@/components/Footer";

const SignupPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#82CAFF]">
      <Navbar />
      <NewsAlert />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center md:text-left">
              Join the Future of STEM Learning
            </h1>
            <p className="text-xl text-white/80 text-center md:text-left">
              Connect with mentors, collaborate on projects, and accelerate your
              STEM career.
            </p>
            <img
              src="https://raw.githubusercontent.com/alexperronnet/openai-svgs/main/svgs/04-artificial-intelligence.svg"
              alt="Signup illustration"
              className="w-full max-w-md"
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <SignupForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignupPage;