import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import {
  FaSearch,
  FaPlus,
  FaSort,
  FaFilter,
  FaArrowUp,
  FaClock,
  FaComment,
  FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface Question {
  id: string;
  title: string;
  author: string;
  time: string;
  votes: number;
  answered: boolean;
  commentCount: number;
}

const categories: { [key: string]: string[] } = {
  Science: [
    "Physics",
    "Chemistry",
    "Biology",
    "Earth Sciences",
    "Space Science",
  ],
  Technology: ["Computer Science", "Engineering"],
  Engineering: [
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
  ],
  Mathematics: ["Pure Mathematics", "Applied Mathematics"],
  "Engineering Technology": [
    "Data Engineering",
    "Robotics",
    "Biotechnology",
    "Environmental Technology",
    "Space Technology",
    "Pharmaceutical Engineering",
  ],
};

const DiscussionForum: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recently");
  const [status, setStatus] = useState("all");
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [subcategory, setSubcategory] = useState<string | undefined>(undefined);
  const [questions, setQuestions] = useState<Question[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
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
      {
        id: "1",
        title: "What are the fundamental principles of quantum mechanics?",
        author: "Dr. Smith",
        time: "7 hours ago",
        votes: 15,
        answered: true,
        commentCount: 5,
      },
      {
        id: "1",
        title: "What are the fundamental principles of quantum mechanics?",
        author: "Dr. Smith",
        time: "7 hours ago",
        votes: 15,
        answered: true,
        commentCount: 5,
      },
      {
        id: "1",
        title: "What are the fundamental principles of quantum mechanics?",
        author: "Dr. Smith",
        time: "7 hours ago",
        votes: 15,
        answered: true,
        commentCount: 5,
      },
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
    <div className="bg-[#82CAFF] min-h-screen">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto p-4 sm:p-6 md:p-8"
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-gray-800"
        >
          Discussion Forum
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row items-center sm:space-x-4 mb-6 md:mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative flex-grow mb-4 sm:mb-0">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <Input
              type="text"
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full bg-white text-gray-800"
            />
          </div>
          <Button
            onClick={() => navigate("/ask-question")}
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center mb-4 sm:mb-0"
          >
            <FaPlus className="mr-2" /> Ask Question
          </Button>
          <div className="flex space-x-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[180px] bg-white text-gray-800">
                <FaSort className="mr-2" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recently">Recently added</SelectItem>
                <SelectItem value="votes">Most votes</SelectItem>
              </SelectContent>
            </Select>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-full sm:w-[150px] bg-white text-gray-800">
                <FaFilter className="mr-2" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="answered">Answered</SelectItem>
                <SelectItem value="unanswered">Unanswered</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex-1">
            <Select
              value={category}
              onValueChange={(value) => {
                setCategory(value);
                setSubcategory("");
              }}
            >
              <SelectTrigger className="w-full bg-white text-gray-800">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(categories).map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <Select
              value={subcategory}
              onValueChange={setSubcategory}
              disabled={!category}
            >
              <SelectTrigger className="w-full bg-white text-gray-800">
                <SelectValue placeholder="Select a subcategory" />
              </SelectTrigger>
              <SelectContent>
                {category &&
                  categories[category].map((subcat) => (
                    <SelectItem key={subcat} value={subcat}>
                      {subcat}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
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
                className="mb-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white"
                onClick={() => handleQuestionClick(question.id)}
              >
                <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-start space-x-4">
                  <div className="flex flex-col items-center mb-4 sm:mb-0">
                    <Button variant="outline" className="px-2 py-1 mb-2">
                      <FaArrowUp className="text-blue-600" />
                    </Button>
                    <span className="text-sm font-medium text-gray-800">
                      {question.votes}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                      {question.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row items-start text-sm text-gray-600 space-y-1 sm:space-y-0 sm:space-x-2">
                      <div className="flex items-center">
                        <FaUser className="mr-1" />
                        <span>{question.author}</span>
                      </div>
                      <div className="flex items-center">
                        <FaClock className="mr-1" />
                        <span>{question.time}</span>
                      </div>
                      <div
                        className={`flex items-center ${
                          question.answered ? "text-green-600" : "text-blue-600"
                        }`}
                      >
                        <span>
                          {question.answered ? "Answered" : "Unanswered"}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FaComment className="mr-1" />
                        <span>{question.commentCount} comments</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <Footer />
    </div>
  );
};

export default DiscussionForum;