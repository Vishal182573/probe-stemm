import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const LoginForm: React.FC = () => {
  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-gray-800">
          Login as Teacher or Student
        </CardTitle>
        <p className="text-sm text-gray-600">
          New user?{" "}
          <a href="/signup" className="text-orange-500 hover:underline">
            Sign up
          </a>
        </p>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
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
          <div className="flex justify-between items-center">
            <a href="#" className="text-orange-500 text-sm hover:underline">
              Forgot Password
            </a>
            <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
              Login
            </Button>
          </div>
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
