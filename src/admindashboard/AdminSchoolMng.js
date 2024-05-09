import React, { useEffect, useState } from "react";
// import Navbar from "../components/navbar";

import { Link, useNavigate } from "react-router-dom";
// import Breadcrum from "../components/breadcrum";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Screensizehook from "../components/Screensizehook";
import BreadCrumb from "../components/BreadCrumb";
import instance from "../Instance";
import Cookies from "js-cookie";
import { Backdrop, CircularProgress } from "@mui/material";

const AdminSchoolMng = () => {
  const navigate = useNavigate();
  const screenSize = Screensizehook();
  const [allSchool, setAllSchool] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllScchool = async () => {
    console.log(Cookies.get("token"));
    setLoading(true);
    const res = await instance({
      url: `school/all`,
      method: "GET",
      headers: {
        Authorization: Cookies.get("token"),
        // accesskey: `auth74961a98ba76d4e4`,
      },
    });
    // console.log(res.data.data)
    setAllSchool(res.data.data);
    setLoading(false);
  };

  useEffect(() => {
    getAllScchool();
  }, []);

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Header highlight={"admin"} />
      <div className="flex">
        {screenSize.width < 550 ? "" : <Sidebar name={"adminschoolmng"} />}

        <div className="w-full bg-gray-300">
          <BreadCrumb crumbData={[{ name: "School Management", path: null }]} />
          <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
            <div className="overflow-y-hidden rounded-lg border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-violet-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                      <th className="px-5 py-3">School Code</th>
                      <th className="px-5 py-3">School Name</th>
                      <th className="px-5 py-3">Address</th>
                      <th className="px-5 py-3">City</th>
                      <th className="px-5 py-3">State</th>
                      <th className="px-5 py-3">Discount</th>
                      <th className="px-5 py-3">Inactive/Active</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-500">
                    {allSchool.map(function (ele) {
                      return (
                        <tr key={ele.id}>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">
                              {ele.schoolCode}
                            </p>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <div className="flex items-center">
                              <p className="whitespace-no-wrap">
                                {ele.schoolName}
                              </p>
                            </div>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">{ele.address}</p>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">{ele.city}</p>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">{ele.state}</p>
                          </td>

                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p className="whitespace-no-wrap">{ele.discount}</p>
                          </td>
                          <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <label class="inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                value=""
                                class="sr-only peer"
                                defaultChecked
                              />
                              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                            </label>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {/* <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
                <span className="text-xs text-gray-600 sm:text-sm">
                  {" "}
                  Showing 1 to 5 of 12 Entries{" "}
                </span>
                <div className="mt-2 inline-flex sm:mt-0">
                  <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-200">
                    Prev
                  </button>
                  <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-200">
                    Next
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSchoolMng;
