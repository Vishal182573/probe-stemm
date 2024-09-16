// NewsAlert.tsx
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "./ui/button";
import { FaBell } from "react-icons/fa";

export const NewsAlert: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="bg-black text-foreground p-4 flex justify-between items-center rounded-lg shadow-md">
      <div className="flex items-center">
        <FaBell className="text-white mr-3 text-xl" />
        <p className="text-white text-md font-semibold">
          New STEM challenge starts next week! Join now and win exciting prizes.
        </p>
      </div>
      <Link to={isLoginPage ? "/signup" : "/login"}>
        <Button
          variant="outline"
          className="w-full bg-primary hover:bg-primary/80 text-primary-foreground"
        >
          {isLoginPage ? "Register Now" : "Login Now"}
        </Button>
      </Link>
    </div>
  );
};
