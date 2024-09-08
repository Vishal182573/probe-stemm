import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const StudentProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-100">
        <div className="bg-gray-800 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16 bg-white">
              <AvatarImage
                src="/placeholder-avatar.png"
                alt="Mr. Lorem Ipsum"
              />
              <AvatarFallback>LI</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">Hello, Mr. Lorem Ipsum</h1>
              <p className="text-gray-300">
                Current Position | Current Institution
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            className="text-black bg-white hover:bg-gray-200"
          >
            Student
          </Button>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4 bg-white rounded-lg shadow">
              <ul className="space-y-2 p-4">
                <li className="bg-orange-500 text-white p-2 rounded">Home</li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                  Profile
                </li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                  Qualifications
                </li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                  Area of Interest
                </li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                  My Questions
                </li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                  Presentations
                </li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                  Media(Audio/Video)
                </li>
              </ul>
            </div>

            <div className="w-full md:w-3/4 bg-white rounded-lg shadow p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Hey,</h2>
                <p className="text-gray-600">Your profile is incomplete!</p>
                <p className="text-gray-600 mb-4">
                  Complete your profile and we will help you to connect with
                  students and teachers.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Complete my profile
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Degree</h3>
                  <Input placeholder="Current Designation" className="mb-2" />
                  <Button variant="link" className="text-orange-500 p-0">
                    Update
                  </Button>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">College</h3>
                  <Input placeholder="Current Institution" className="mb-2" />
                  <Button variant="link" className="text-orange-500 p-0">
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StudentProfilePage;
