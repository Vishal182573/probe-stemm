import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { User2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Use useNavigate for programmatic navigation

export const SignupForm: React.FC = () => {
  const [userType, setUserType] = useState<"student-profile" | "teacher-profile" | "business">();
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission reload
    if (userType) {
      navigate(`/${userType}`); // Redirect to the selected user profile page
    } else {
      alert("Please select a user type.");
    }
  };

  return (
    <Card className="w-full max-w-md shadow-lg bg-white">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-blue-700">
          Join Probe Stemm
        </CardTitle>
        <p className="text-sm text-gray-600">
          Already a member?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Log in
          </a>
        </p>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Full Name"
            className="border-gray-300"
          />
          <Input
            type="email"
            placeholder="Email Address"
            className="border-gray-300"
          />
          <Input
            type="password"
            placeholder="Password"
            className="border-gray-300"
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            className="border-gray-300"
          />
          <Select onValueChange={(value) => setUserType(value as "student-profile" | "teacher-profile" | "business")}>
            <SelectTrigger className="w-full border-gray-300">
              <SelectValue placeholder="I am a..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="student-profile">Student</SelectItem>
              <SelectItem value="teacher-profile">Teacher</SelectItem>
              <SelectItem value="business">Business</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Sign Up
            <User2Icon className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
