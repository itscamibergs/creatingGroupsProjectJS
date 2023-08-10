import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.js";
import Students from "./components/views/Students.js";
//import Modules from "./components/views/Modules.js";
import FavStudents from "./components/views/FavStudents.js";
import GroupAssessments from "./components/views/GroupAssessments.js";
import Login from "./components/views/Login.js";
import LecturerView from "./components/views/LecturerView.js";

import "./index.js";

function App() {
  const loggedInUser = "";

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/groupassessments" element={<GroupAssessments />} />
          <Route path="/coursemates" element={<Students />} />
          <Route path="/favstudents" element={<FavStudents />} />
          <Route path="/lecturerview" element={<LecturerView />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;