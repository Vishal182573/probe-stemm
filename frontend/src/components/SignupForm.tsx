import React from "react";
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

export const SignupForm: React.FC = () => {
  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-gray-800">
          Register as Teacher or Student
        </CardTitle>
        <p className="text-sm text-gray-600">
          Already a user?{" "}
          <a href="#" className="text-orange-500 hover:underline">
            Log in
          </a>
        </p>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <Input type="text" placeholder="Name" className="border-gray-300" />
          <Input
            type="email"
            placeholder="Email ID"
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
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Student/Teacher" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="teacher">Teacher</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" className="form-checkbox" />
            <label htmlFor="terms" className="text-sm text-gray-600">
              Your data is secure with us
            </label>
          </div>
          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600"
          >
            Register
          </Button>
        </form>
        <p className="mt-4 text-xs text-gray-600">
          By proceeding ahead you expressly agree to Probe Stemm's{" "}
          <a href="#" className="text-orange-500 hover:underline">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-orange-500 hover:underline">
            Privacy Policy
          </a>
        </p>
      </CardContent>
    </Card>
  );
};
