import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Rocket, Brain, Zap, GraduationCap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Revolutionize Your STEM Learning
        </h1>
        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
          Probe Stemm: Where innovation meets education. Dive into a world of
          interactive learning, cutting-edge technology, and global
          collaboration.
        </p>
        <Link to="/get-started">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Get Started
            <Rocket className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="h-12 w-12 text-purple-500" />,
      title: "AI-Powered Learning",
      description:
        "Personalized learning paths adapted to your unique needs and pace.",
    },
    {
      icon: <Zap className="h-12 w-12 text-pink-500" />,
      title: "Real-time Collaboration",
      description:
        "Connect with peers and mentors globally for dynamic project work.",
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-indigo-500" />,
      title: "Industry-Aligned Curriculum",
      description:
        "Stay ahead with courses designed in partnership with leading tech companies.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Why Choose Probe Stemm?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Probe Stemm transformed my learning experience. The interactive projects and global network are unparalleled.",
      author: "Sarah K., Computer Science Student",
    },
    {
      quote:
        "As an educator, Probe Stemm provides me with cutting-edge tools to engage my students like never before.",
      author: "Dr. James L., University Professor",
    },
    {
      quote:
        "The talent we've recruited through Probe Stemm has been exceptional. It's our go-to platform for finding innovators.",
      author: "Emily R., Tech Startup Founder",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        What Our Community Says
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
            <p className="text-gray-800 font-semibold">{testimonial.author}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqItems = [
    {
      question: "What is Probe Stemm?",
      answer:
        "Probe Stemm is an innovative online platform that revolutionizes STEM education through interactive learning, cutting-edge technology, and global collaboration.",
    },
    {
      question: "How does AI-powered learning work?",
      answer:
        "Our AI algorithms analyze your learning style, pace, and goals to create a personalized learning path. This ensures that you're always challenged at the right level and making optimal progress.",
    },
    {
      question: "Can I collaborate with other students globally?",
      answer:
        "Absolutely! Probe Stemm offers real-time collaboration features that allow you to work on projects with peers from around the world, fostering a truly global learning community.",
    },
    {
      question: "Are the courses recognized by the industry?",
      answer:
        "Yes, our curriculum is designed in partnership with leading tech companies to ensure that you're learning the most relevant and in-demand skills in the STEM field.",
    },
    {
      question: "How do I get started with Probe Stemm?",
      answer:
        "Getting started is easy! Simply click the 'Get Started' button on our homepage, create an account, and you'll be guided through the process of selecting your first courses and projects.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary animate-fade-in-up">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`animate-fade-in-up animation-delay-${
                  (index + 1) * 200
                }`}
              >
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
