import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  // Book,
  Briefcase,
  GraduationCap,
  // User,
  Star,
  Edit3,
} from "lucide-react";

const StudentProfilePage: React.FC = () => {
  // const fadeInUp = {
  //   initial: { opacity: 0, y: 20 },
  //   animate: { opacity: 1, y: 0 },
  //   transition: { duration: 0.5 },
  // };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          className="relative bg-indigo-600 text-white py-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://c1.wallpaperflare.com/preview/294/960/948/university-student-graduation-photo-hats-thumbnail.jpg')",
              opacity: 0.2,
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-6 mb-6 md:mb-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Avatar className="w-32 h-32 border-4 border-white">
                    <AvatarImage
                      src="/student-banner.png"
                      alt="Mr. Lorem Ipsum"
                    />
                    <AvatarFallback>LI</AvatarFallback>
                  </Avatar>
                </motion.div>
                <div>
                  <h1 className="text-4xl font-bold mb-2">Mr. Lorem Ipsum</h1>
                  <p className="text-xl text-indigo-200">
                    Computer Science (B.Sc.)
                  </p>
                  <p className="text-lg text-indigo-200">
                    Innovative Tech University
                  </p>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="bg-white text-indigo-600 hover:bg-indigo-100"
                >
                  <Edit3 className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Profile Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >

              <motion.div 
              // variants={fadeInUp}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl font-bold text-indigo-700">
                      <Star className="mr-2" />
                      Research Highlights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Badge className="mr-2 bg-indigo-100 text-indigo-800">Ongoing</Badge>
                        Machine Learning in Healthcare
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2 bg-green-100 text-green-800">Completed</Badge>
                        Blockchain for Supply Chain Management
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
              // variants={fadeInUp}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl font-bold text-indigo-700">
                      <Briefcase className="mr-2" />
                      Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li>
                        <h3 className="font-semibold">Research Assistant</h3>
                        <p className="text-sm text-gray-600">AI Lab, Innovative Tech University</p>
                        <p className="text-sm text-gray-600">June 2023 - Present</p>
                      </li>
                      <li>
                        <h3 className="font-semibold">Summer Intern</h3>
                        <p className="text-sm text-gray-600">Tech Innovations Inc.</p>
                        <p className="text-sm text-gray-600">Summer 2022</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
              // variants={fadeInUp}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl font-bold text-indigo-700">
                      <GraduationCap className="mr-2" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li>
                        <h3 className="font-semibold">B.Sc. in Computer Science</h3>
                        <p className="text-sm text-gray-600">Innovative Tech University</p>
                        <p className="text-sm text-gray-600">2021 - Present</p>
                      </li>
                      <li>
                        <h3 className="font-semibold">High School Diploma</h3>
                        <p className="text-sm text-gray-600">Tech Preparatory School</p>
                        <p className="text-sm text-gray-600">Graduated 2021</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
              // variants={fadeInUp}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl font-bold text-indigo-700">
                      <Award className="mr-2" />
                      Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Badge className="mr-2 bg-yellow-100 text-yellow-800">2023</Badge>
                        Dean's List, Spring Semester
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2 bg-yellow-100 text-yellow-800">2022</Badge>
                        1st Place, University Hackathon
                      </li>
                      <li className="flex items-center">
                        <Badge className="mr-2 bg-yellow-100 text-yellow-800">2021</Badge>
                        Merit Scholarship Recipient
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StudentProfilePage;