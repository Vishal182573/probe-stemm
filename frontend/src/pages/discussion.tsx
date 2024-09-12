import React, { useState } from "react";
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
  FaHashtag,
  FaArrowUp,
  FaClock,
  FaComment,
} from "react-icons/fa";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Textarea } from "@/components/ui/textarea";

interface Question {
  id: string;
  title: string;
  author: string;
  time: string;
  votes: number;
  answered: boolean;
  comments: Comment[];
}

interface Comment {
  id: string;
  author: string;
  content: string;
  time: string;
}

const DiscussionForum: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recently");
  const [status, setStatus] = useState("all");
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );
  const [newComment, setNewComment] = useState("");

  // Mock data - replace with actual data fetching in the future
  const questions: Question[] = [
    {
      id: "1",
      title: "What are the fundamental principles of quantum mechanics?",
      author: "Dr. Smith",
      time: "7 hours ago",
      votes: 15,
      answered: true,
      comments: [
        {
          id: "c1",
          author: "Student A",
          content: "Great question! I'm also curious about this.",
          time: "6 hours ago",
        },
        {
          id: "c2",
          author: "Prof. Johnson",
          content:
            "The fundamental principles include superposition, uncertainty, and entanglement.",
          time: "5 hours ago",
        },
      ],
    },
    {
      id: "2",
      title: "How does machine learning differ from traditional programming?",
      author: "Tech Enthusiast",
      time: "1 day ago",
      votes: 22,
      answered: true,
      comments: [
        {
          id: "c3",
          author: "AI Researcher",
          content:
            "Machine learning allows systems to learn from data, while traditional programming relies on explicit instructions.",
          time: "23 hours ago",
        },
      ],
    },
    {
      id: "3",
      title: "What are the latest advancements in renewable energy technology?",
      author: "Green Energy Student",
      time: "2 days ago",
      votes: 18,
      answered: false,
      comments: [],
    },
    {
      id: "4",
      title: "How does CRISPR gene editing work?",
      author: "Biology Novice",
      time: "3 days ago",
      votes: 25,
      answered: true,
      comments: [
        {
          id: "c4",
          author: "Geneticist",
          content:
            "CRISPR uses a guide RNA to target specific DNA sequences and a Cas9 enzyme to cut the DNA at that location.",
          time: "2 days ago",
        },
      ],
    },
    {
      id: "5",
      title:
        "What are the potential applications of nanotechnology in medicine?",
      author: "Med Student",
      time: "4 days ago",
      votes: 20,
      answered: true,
      comments: [
        {
          id: "c5",
          author: "Nanotech Expert",
          content:
            "Nanotechnology could revolutionize drug delivery, diagnostic imaging, and tissue engineering.",
          time: "3 days ago",
        },
      ],
    },
  ];

  const handleQuestionClick = (question: Question) => {
    setSelectedQuestion(question);
  };

  const handleAddComment = () => {
    if (selectedQuestion && newComment.trim() !== "") {
      const updatedQuestion = {
        ...selectedQuestion,
        comments: [
          ...selectedQuestion.comments,
          {
            id: `c${Date.now()}`,
            author: "Current User",
            content: newComment,
            time: "Just now",
          },
        ],
      };
      setSelectedQuestion(updatedQuestion);
      setNewComment("");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="flex items-center space-x-4 mb-6">
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
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Ask a Question
          </Button>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Sort by</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recently">Recently added</SelectItem>
                <SelectItem value="votes">Most votes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="answered">Answered</SelectItem>
              <SelectItem value="unanswered">Unanswered</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li className="flex items-center text-blue-600">
                <FaHashtag className="mr-2" />
                View all questions
              </li>
              <li className="flex items-center text-gray-600">
                <FaHashtag className="mr-2" />
                My Questions
              </li>
            </ul>
            <h2 className="text-xl font-semibold mt-8 mb-4">Recently Asked</h2>
            <div className="space-y-4">
              {questions.slice(0, 3).map((question) => (
                <Card
                  key={question.id}
                  className="hover:shadow-md transition-shadow duration-200"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-2">
                      <div className="bg-blue-100 p-2 rounded">
                        <FaHashtag className="text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{question.title}</p>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <FaArrowUp className="mr-1" />
                          <span>{question.votes}</span>
                          <FaClock className="ml-2 mr-1" />
                          <span>{question.time}</span>
                          <span
                            className={`ml-2 ${
                              question.answered
                                ? "text-green-500"
                                : "text-blue-600"
                            }`}
                          >
                            {question.answered ? "Answered" : "Unanswered"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="col-span-3">
            <h2 className="text-xl font-semibold mb-4">Discussions</h2>
            <div className="space-y-4">
              {questions.map((question) => (
                <Card
                  key={question.id}
                  className="hover:shadow-md transition-shadow duration-200"
                  onClick={() => handleQuestionClick(question)}
                >
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="flex flex-col items-center">
                      <Button variant="outline" className="px-2 py-1">
                        <FaArrowUp className="text-blue-600" />
                      </Button>
                      <span className="text-sm font-medium">
                        {question.votes}
                      </span>
                    </div>
                    <div className="bg-blue-100 p-2 rounded">
                      <FaHashtag className="text-blue-600" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium">{question.title}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <span>{question.author}</span>
                        <span className="mx-2">•</span>
                        <span>{question.time}</span>
                        <span className="mx-2">•</span>
                        <span
                          className={
                            question.answered
                              ? "text-green-500"
                              : "text-blue-600"
                          }
                        >
                          {question.answered ? "Answered" : "Unanswered"}
                        </span>
                        <span className="mx-2">•</span>
                        <FaComment className="mr-1" />
                        <span>{question.comments.length} comments</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {selectedQuestion && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
            <div className="space-y-4">
              {selectedQuestion.comments.map((comment) => (
                <Card key={comment.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{comment.author}</p>
                        <p className="text-gray-600">{comment.content}</p>
                      </div>
                      <span className="text-sm text-gray-500">
                        {comment.time}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-4">
              <Textarea
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full mb-2"
              />
              <Button
                onClick={handleAddComment}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Add Comment
              </Button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default DiscussionForum;
