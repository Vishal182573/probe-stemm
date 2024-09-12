import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const TeacherProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const tabItems = [
    "Home",
    "Profile",
    "Qualifications",
    "Expertise",
    "Webinar Details",
    "Presentations",
    "Media",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-700 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="w-24 h-24 bg-white">
                  <AvatarImage
                    src="/placeholder-avatar.png"
                    alt="Dr. Lorem Ipsum"
                  />
                  <AvatarFallback>LI</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-3xl font-bold">Dr. Lorem Ipsum</h1>
                  <p className="text-blue-200">
                    Current Position | Current Institution
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                className="bg-white text-blue-700 hover:bg-blue-100"
              >
                Teacher
              </Button>
            </div>
          </div>
        </section>

        {/* Profile Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar */}
              <div className="w-full md:w-1/4">
                <Card>
                  <CardContent className="p-4">
                    <nav>
                      <ul className="space-y-2">
                        {tabItems.map((item) => (
                          <li key={item}>
                            <Button
                              variant={activeTab === item ? "default" : "ghost"}
                              className={`w-full justify-start text-left ${
                                activeTab === item
                                  ? "bg-blue-700 text-white"
                                  : "hover:bg-blue-100"
                              }`}
                              onClick={() => setActiveTab(item)}
                            >
                              {item}
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="w-full md:w-3/4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-blue-700">
                      Profile Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="mb-8">
                      <h2 className="text-xl font-semibold mb-2">
                        Hey Dr. Lorem Ipsum,
                      </h2>
                      <p className="text-gray-600 mb-4">
                        Your profile is incomplete! Complete your profile to
                        connect with students and fellow educators.
                      </p>
                      <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                        Complete my profile
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Designation
                        </h3>
                        <Input
                          placeholder="Current Designation"
                          className="mb-2"
                        />
                        <Button variant="link" className="text-blue-700 p-0">
                          Update
                        </Button>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Institution
                        </h3>
                        <Input
                          placeholder="Current Institution"
                          className="mb-2"
                        />
                        <Button variant="link" className="text-blue-700 p-0">
                          Update
                        </Button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-lg font-semibold mb-2">
                        Expertise / Area of Interest
                      </h3>
                      <Textarea
                        placeholder="Enter your areas of expertise or interest"
                        className="mb-2"
                        rows={4}
                      />
                      <Button variant="link" className="text-blue-700 p-0">
                        Update
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeacherProfilePage;
