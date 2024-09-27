import React, { useState, useEffect, ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Brain,
  Zap,
  GraduationCap,
  ChevronDown,
  Star,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import NotificationsComponent from "@/components/Notifications";
import ContactForm from "@/components/Feedback";

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: "left" | "right";
}

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <NotificationsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

const images = ["/c1.png", "/c2.png", "/c3.png"];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-extrabold mb-6 text-white"
        >
          Revolutionize Your <span className="text-blue-400">STEM</span>{" "}
          Learning
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-10 text-blue-200 max-w-3xl mx-auto"
        >
          Probe STEM: Where innovation meets education. Dive into a world of
          interactive learning, cutting-edge technology, and global
          collaboration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-4"
        >
          <Link to="/discussions">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-md transition-all duration-300 text-lg"
            >
              Get Started
              <Rocket className="ml-2 h-6 w-6" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-blue-400 text-blue-400 font-bold py-4 px-8 rounded-md transition-all duration-300 hover:bg-blue-400 hover:text-black text-lg"
          >
            Learn More
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="text-blue-400 h-10 w-10" />
      </motion.div>
    </section>
  );
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, direction = "left" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="h-16 w-16 text-blue-400" />,
      title: "AI-Powered Learning",
      description:
        "Personalized learning paths adapted to your unique needs and pace.",
    },
    {
      icon: <Zap className="h-16 w-16 text-blue-400" />,
      title: "Real-time Collaboration",
      description:
        "Connect with peers and mentors globally for dynamic project work.",
    },
    {
      icon: <GraduationCap className="h-16 w-16 text-blue-400" />,
      title: "Industry-Aligned Curriculum",
      description:
        "Stay ahead with courses designed in partnership with leading tech companies.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gray-900">
      <AnimatedSection>
        <h2 className="text-5xl font-bold text-center mb-16 text-blue-400">
          Why Choose Probe STEM?
        </h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <AnimatedSection key={index} direction={index % 2 === 0 ? "left" : "right"}>
            <motion.div
              className="bg-black p-8 rounded-xl shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  // initial={{ rotate: 0 }}
                  // animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mt-6 mb-4 text-blue-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-lg">{feature.description}</p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

const NotificationsSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
            Stay Updated
          </h2>
        </AnimatedSection>
        <AnimatedSection>
          <NotificationsComponent />
        </AnimatedSection>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Probe STEM transformed my learning experience. The interactive projects and global network are unparalleled.",
      author: "Sarah K., Computer Science Student",
      rating: 5,
    },
    {
      quote:
        "As an educator, Probe STEM provides me with cutting-edge tools to engage my students like never before.",
      author: "Dr. James L., University Professor",
      rating: 5,
    },
    {
      quote:
        "The talent we've recruited through Probe STEM has been exceptional. It's our go-to platform for finding innovators.",
      author: "Emily R., Tech Startup Founder",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-4 bg-gray-900">
      <AnimatedSection>
        <h2 className="text-5xl font-bold text-center mb-16 text-blue-400">
          What Our Community Says
        </h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <AnimatedSection key={index} direction={index % 2 === 0 ? "left" : "right"}>
            <motion.div
              className="bg-black p-8 rounded-xl shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="h-6 w-6 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 text-lg">
                "{testimonial.quote}"
              </p>
              <p className="text-blue-400 font-semibold text-right">
                - {testimonial.author}
              </p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqItems = [
    {
      question: "What is Probe STEM?",
      answer:
        "Probe STEM is an innovative online platform that revolutionizes STEM education through interactive learning, cutting-edge technology, and global collaboration.",
    },
    {
      question: "How does AI-powered learning work?",
      answer:
        "Our AI algorithms analyze your learning style, pace, and goals to create a personalized learning path. This ensures that you're always challenged at the right level and making optimal progress.",
    },
    {
      question: "Can I collaborate with other students globally?",
      answer:
        "Absolutely! Probe STEM offers real-time collaboration features that allow you to work on projects with peers from around the world, fostering a truly global learning community.",
    },
    {
      question: "Are the courses recognized by the industry?",
      answer:
        "Yes, our curriculum is designed in partnership with leading tech companies to ensure that you're learning the most relevant and in-demand skills in the STEM field.",
    },
    {
      question: "How do I get started with Probe STEM?",
      answer:
        "Getting started is easy! Simply click the 'Get Started' button on our homepage, create an account, and you'll be guided through the process of selecting your first courses and projects.",
    },
  ];

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">
            Frequently Asked Questions
          </h2>
        </AnimatedSection>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AnimatedSection key={index} direction={index % 2 === 0 ? "left" : "right"}>
                <AccordionItem
                  value={`item-${index}`}
                  className="mb-4 border border-blue-800 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold p-4 bg-gray-900 hover:bg-gray-800 transition-all duration-300 text-blue-300">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 p-4 bg-black">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HomePage;