// LoginForm.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogInIcon } from "lucide-react";

export const LoginForm: React.FC = () => {
  return (
    <Card className="w-full max-w-md shadow-lg bg-white">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-blue-700">
          Welcome Back
        </CardTitle>
        <p className="text-sm text-gray-600">
          New to Probe Stemm?{" "}
          <a
            href="/signup"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign up
          </a>
        </p>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
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
          <div className="flex justify-between items-center">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Log In
            <LogInIcon className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
