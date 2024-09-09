import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { FaSearch, FaHashtag, FaArrowUp, FaClock } from 'react-icons/fa';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface Question {
  id: string;
  title: string;
  author: string;
  time: string;
  votes: number;
  answered: boolean;
}

const DiscussionForum: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recently');
  const [status, setStatus] = useState('all');

  // Mock data - replace with actual data fetching in the future
  const questions: Question[] = [
    { id: '1', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli.', author: 'teacher-name', time: '7 hours ago', votes: 10, answered: true },
    { id: '2', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli.', author: 'teacher-name', time: '7 hours ago', votes: 10, answered: true },
    { id: '3', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli.', author: 'student-name', time: '7 hours ago', votes: 10, answered: false },
    { id: '4', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli.', author: 'student-name', time: '7 hours ago', votes: 10, answered: false },
    { id: '5', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli.', author: 'student-name', time: '7 hours ago', votes: 10, answered: true },
  ];

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-4">
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-grow">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Your search query.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full"
          />
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">New Question</Button>
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
            <li className="flex items-center text-orange-500">
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
              <Card key={question.id}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-2">
                    <div className="bg-orange-100 p-2 rounded">
                      <FaHashtag className="text-orange-500" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{question.title}</p>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <FaArrowUp className="mr-1" />
                        <span>{question.votes}</span>
                        <FaClock className="ml-2 mr-1" />
                        <span>{question.time}</span>
                        <span className="ml-2 text-orange-500">{question.answered ? 'Answered' : 'Unanswered'}</span>
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
              <Card key={question.id}>
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="flex flex-col items-center">
                    <Button variant="outline" className="px-2 py-1">
                      <FaArrowUp className="text-orange-500" />
                    </Button>
                    <span className="text-sm font-medium">{question.votes}</span>
                  </div>
                  <div className="bg-orange-100 p-2 rounded">
                    <FaHashtag className="text-orange-500" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium">{question.title}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <span>{question.author}</span>
                      <span className="mx-2">•</span>
                      <span>{question.time}</span>
                      <span className="mx-2">•</span>
                      <span className={question.answered ? 'text-green-500' : 'text-orange-500'}>
                        {question.answered ? 'Answered' : 'Unanswered'}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default DiscussionForum;