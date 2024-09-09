import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import {FaChevronDown } from 'react-icons/fa';
import HeroSection from "@/components/Hero";
import { Link } from 'react-router-dom';

interface FeatureImageProps {
  src: string;
  alt: string;
  to: string;
  title:string;
}
interface FAQItem {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItem & { isOpen: boolean; toggle: () => void }> = ({ question, answer, isOpen, toggle }) => (
  <div className="border border-orange-200 rounded-lg mb-2 overflow-hidden">
    <button
      className="w-full text-left p-4 flex justify-between items-center bg-white"
      onClick={toggle}
    >
      <span className="font-semibold text-gray-700 flex items-center">
        <span className="text-orange-500 mr-2">✓</span>
        {question}
      </span>
      <FaChevronDown className={`text-orange-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
    </button>
    {isOpen && <div className="p-4 bg-gray-50">{answer}</div>}
  </div>
);

const HomePage = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    { question: "What is Probe Stemm?", answer: "Probe Stemm is an innovative educational platform..." },
    { question: "Who can join Probe Stemm?", answer: "Probe Stemm is open to students, teachers, and industry professionals..." },
    { question: "Is there a cost to use PROBE STEMM?", answer: "Probe Stemm offers both free and premium features..." },
    { question: "How can I search for specific topics or experts?", answer: "Probe Stemm has a powerful search function..." },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <HeroSection/>

      <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Features of Probe Stemm
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          <FeatureImage 
            src="/expand_img.png"
            alt="Expand Your Knowledge"
            to="/questions"
            title="Expand Your Knowledge"
          />
          <FeatureImage 
            src="/connect_mentor.png"
            alt="Connect with Mentors"
            to="/mentors"
            title="Connect with Mentors"
          />
          <FeatureImage 
            src="/share_idea.png"
            alt="Share Your Ideas"
            to="/projects"
            title="Share your Ideas"
          />
        </div>
      </div>
    </section>

      {/* Why Probe Stemm Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Probe Stemm?
          </h2>
          <p className="text-xl text-center mb-12">
            PROBE STEMM allows you to extend the interactions among students and
            faculty beyond the bounds of classroom walls and scheduled times
          </p>
          <div className="text-center">
            <Link to={"/signup"}>
            <Button
              variant="default"
              size="lg"
              className="bg-orange-500 text-white hover:bg-orange-600"
              >
              Register Now
            </Button>
              </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-700 mb-8">FAQs</h2>
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                {...item}
                isOpen={openItem === index}
                toggle={() => setOpenItem(openItem === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const FeatureImage: React.FC<FeatureImageProps> = ({ src, alt, to,title }) => (
  <div className="flex space-y-7 flex-col justify-center items-center">
  <Link to={to} className="block overflow-hidden rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105">
    <img src={src} alt={alt} className="w-full h-[65vh] object-cover" />
  </Link>
  <h3 className="font-semibold lg:text-2xl text-sm ">{title}</h3>
  </div>
);

export default HomePage;
