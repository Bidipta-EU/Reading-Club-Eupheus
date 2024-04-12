import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import StudentSignUp from "./pages/StudentSignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SchoolSignUp from "./pages/SchoolSignUp";
import HomeDash from "./admindashboard/AdminHome";
import AdminHome from "./admindashboard/AdminHome";
import AdminSchoolReg from "./admindashboard/AdminSchoolReg";
import AdminSchoolMng from "./admindashboard/AdminSchoolMng";
import AdminProfileSetting from "./admindashboard/AdminProfileSetting";
import AdminSchoolEdit from "./admindashboard/AdminSchoolEdit";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/studentsignup-up":
        title = "";
        metaDescription = "";
        break;
      case "/signin":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/studentsignup" element={<StudentSignUp />} />
      <Route path="/adminhome" element={<AdminHome />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/adminschoolregistration" element={<AdminSchoolReg />} />
      <Route path="/adminschoolmanage" element={<AdminSchoolMng />} />
      <Route path="/adminprofilesetting" element={<AdminProfileSetting />} />
      <Route path="/adminschooledit/:id" element={<AdminSchoolEdit />} />
    </Routes>
  );
}
export default App;
