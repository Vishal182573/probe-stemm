import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaArrowUp, FaUser, FaClock, FaComment } from "react-icons/fa";

interface FeaturedQuestion {
  id: string;
  title: string;
  content: string;
  author: string;
  time: string;
  votes: number;
  commentCount: number;
}

const FeaturedQuestionsSection: React.FC = () => {
  const featuredQuestions: FeaturedQuestion[] = [
    {
      id: "1",
      title: "What are the latest advancements in quantum computing?",
      content:
        "I'm curious about the recent developments in quantum computing. Can someone provide an overview of the most significant breakthroughs?",
      author: "QuantumExplorer",
      time: "2 hours ago",
      votes: 25,
      commentCount: 8,
    },
    {
      id: "2",
      title: "How does machine learning impact modern robotics?",
      content:
        "I'm researching the intersection of ML and robotics. What are some key ways machine learning is enhancing robotic systems?",
      author: "RoboEnthusiast",
      time: "1 day ago",
      votes: 42,
      commentCount: 15,
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      className="py-20 bg-background/95"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-12 text-blue-400"
        >
          Featured Discussions
        </motion.h2>

        <div className="space-y-8">
          {featuredQuestions.map((question) => (
            <motion.div key={question.id} variants={itemVariants}>
              <Card className="bg-gray-900 border border-blue-800 hover:border-blue-600 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex flex-col items-center">
                      <Button
                        variant="outline"
                        className="px-2 py-1 mb-2 hover:bg-blue-700 transition-colors duration-300"
                      >
                        <FaArrowUp className="text-blue-600" />
                      </Button>
                      <span className="text-sm font-medium text-blue-400">
                        {question.votes}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-2 text-blue-300">
                        {question.title}
                      </h3>
                      <p className="text-gray-300 mb-4">{question.content}</p>
                      <div className="flex items-center text-sm text-gray-400">
                        <FaUser className="mr-1" />
                        <span>{question.author}</span>
                        <span className="mx-2">•</span>
                        <FaClock className="mr-1" />
                        <span>{question.time}</span>
                        <span className="mx-2">•</span>
                        <FaComment className="mr-1" />
                        <span>{question.commentCount} comments</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <Link to="/discussions">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 transition-colors duration-300">
                View All Discussions
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedQuestionsSection;
