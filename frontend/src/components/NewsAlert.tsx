import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "./ui/button";

export const NewsAlert: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="bg-orange-100 p-4 flex justify-between items-center rounded-md shadow-md">
      <p className="text-orange-800 text-md font-semibold">
        ----- Ongoing news alerts ongoing here -----
      </p>
      <Link to={isLoginPage ? "/signup" : "/login"}>
        <Button
          variant="outline"
          className="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 rounded-full px-6 py-2 shadow-lg transition-all duration-300 ease-in-out"
        >
          {isLoginPage ? "Register Now" : "Login Now"}
        </Button>
      </Link>
    </div>
  );
};
