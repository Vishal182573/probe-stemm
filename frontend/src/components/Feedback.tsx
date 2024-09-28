import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 shadow-xl rounded-lg overflow-hidden border border-blue-800"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-gray-800 p-8 text-blue-300 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-blue-400">
                Contact Us
              </h2>
              <h3 className="text-4xl font-extrabold mb-6 text-blue-300">
                Want to give feedback/
                <br />
                Suggestions?
              </h3>
              <p className="text-lg mb-8 text-gray-300">
                Send a mail directly to Us!
              </p>
              <div className="relative w-64 h-64 mx-auto">
                <motion.img
                  src="/api/placeholder/256/256"
                  alt="Contact illustration"
                  className="rounded-full border-4 "
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 0.6,
                  }}
                />
              </div>
            </div>
            <div className="md:w-1/2 p-8 bg-black">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    className="w-full bg-gray-800 border-blue-800 text-blue-300 placeholder-gray-500"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-gray-800 border-blue-800 text-blue-300 placeholder-gray-500"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-gray-800 border-blue-800 text-blue-300 placeholder-gray-500"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-gray-800 border-blue-800 text-blue-300 placeholder-gray-500"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message Here"
                    className="w-full h-32 bg-gray-800 border-blue-800 text-blue-300 placeholder-gray-500"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
