import React from "react";
// import Navbar from "../components/navbar";

import { useNavigate } from "react-router-dom";
// import Breadcrum from "../components/breadcrum";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Screensizehook from "../components/Screensizehook";

const AdminProfileSetting = () => {
  const navigate = useNavigate();
  const screenSize = Screensizehook();

  return (
    <>
      <Header highlight={"admin"}/>
      <div className="flex">
        {screenSize.width < 550 ? "" : <Sidebar name={"adminprofilesetn"} />}

        <div className="w-full">
    
          <div className="grid grid-cols-1 gap-14 px-24 lg:grid-cols-3 py-12 bg-gray-300 h-full">

            Admin School Management Here

          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfileSetting;