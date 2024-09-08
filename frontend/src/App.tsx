import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/home";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import TeacherProfilePage from "./pages/TeacherProfile";
import StudentProfilePage from "./pages/studentProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/teacher-profile" element={<TeacherProfilePage />} />
        <Route path="/student-profile" element={<StudentProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
