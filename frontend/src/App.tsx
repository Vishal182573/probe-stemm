import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import TeacherProfilePage from "./pages/TeacherProfile";
import StudentProfilePage from "./pages/studentProfile";
import DiscussionForum from "./pages/discussion";
import GetStartedPage from "./pages/getStarted";
import SuperAdminDashboard from "./pages/superadmin";
import QuestionDetailPage from "./components/questionsDetail";
import BusinessProfilePage from "./pages/business";
import ProjectDetailPage from "./pages/projectsInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/teacher-profile" element={<TeacherProfilePage />} />
        <Route path="/student-profile" element={<StudentProfilePage />} />
        <Route path="/business" element={<BusinessProfilePage/>} />
        <Route path="/project/1" element={<ProjectDetailPage/>} />
        <Route path="/discussions" element={<DiscussionForum />} />
        <Route path="/question/1" element={<QuestionDetailPage/>} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/superadmin-dashboard" element={<SuperAdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
