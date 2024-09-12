import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import TeacherProfilePage from "./pages/TeacherProfile";
import StudentProfilePage from "./pages/studentProfile";
import DiscussionForum from "./pages/discussion";
import GetStartedPage from "./pages/getStarted";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/teacher-profile" element={<TeacherProfilePage />} />
        <Route path="/student-profile" element={<StudentProfilePage />} />
        <Route path="/discussions" element={<DiscussionForum />} />
        <Route path="/get-started" element={<GetStartedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
