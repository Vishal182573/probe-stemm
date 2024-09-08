//app.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/home";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
