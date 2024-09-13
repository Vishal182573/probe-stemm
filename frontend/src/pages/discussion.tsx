import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { FaSearch, FaPlus, FaSort, FaFilter, FaArrowUp, FaClock, FaComment, FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface Question {
  id: string;
  title: string;
  author: string;
  time: string;
  votes: number;
  answered: boolean;
  commentCount: number;
}

const DiscussionForum: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recently");
  const [status, setStatus] = useState("all");
  const [questions, setQuestions] = useState<Question[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch questions from API
    // For now, we'll use mock data
    setQuestions([
      {
        id: "1",
        title: "What are the fundamental principles of quantum mechanics?",
        author: "Dr. Smith",
        time: "7 hours ago",
        votes: 15,
        answered: true,
        commentCount: 5,
      },
      // ... more questions
    ]);
  }, []);

  const handleQuestionClick = (questionId: string) => {
    navigate(`/question/${questionId}`);
  };

  return (
    <>
    <Navbar/>
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="container mx-auto p-8 min-h-screen"
    >
      <motion.h1 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Discussion Forum
      </motion.h1>

      <motion.div 
        className="flex items-center space-x-4 mb-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative flex-grow">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search discussions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full"
          />
        </div>
        <Button 
          onClick={() => navigate('/ask-question')}
          className="bg-blue-600 hover:bg-blue-700 text-white flex items-center"
        >
          <FaPlus className="mr-2" /> Ask Question
        </Button>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <FaSort className="mr-2" />
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recently">Recently added</SelectItem>
            <SelectItem value="votes">Most votes</SelectItem>
          </SelectContent>
        </Select>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-[150px]">
            <FaFilter className="mr-2" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="answered">Answered</SelectItem>
            <SelectItem value="unanswered">Unanswered</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>

      <AnimatePresence>
        {questions.map((question, index) => (
          <motion.div
            key={question.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card 
              className="mb-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => handleQuestionClick(question.id)}
            >
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="flex flex-col items-center">
                  <Button variant="outline" className="px-2 py-1 mb-2">
                    <FaArrowUp className="text-blue-600" />
                  </Button>
                  <span className="text-sm font-medium">{question.votes}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{question.title}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <FaUser className="mr-1" />
                    <span>{question.author}</span>
                    <span className="mx-2">•</span>
                    <FaClock className="mr-1" />
                    <span>{question.time}</span>
                    <span className="mx-2">•</span>
                    <span className={question.answered ? "text-green-500" : "text-blue-600"}>
                      {question.answered ? "Answered" : "Unanswered"}
                    </span>
                    <span className="mx-2">•</span>
                    <FaComment className="mr-1" />
                    <span>{question.commentCount} comments</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
    <Footer/>
    </>
  );
};

export default DiscussionForum;