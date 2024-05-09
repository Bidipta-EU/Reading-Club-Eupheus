import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Screensizehook from "../components/Screensizehook";
import Sidebar from "../components/Sidebar";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import instance from "../Instance";
import Cookies from "js-cookie";



const AdminBatchEdit = () => {

  const [allBatch, setAllBatch] = useState([]);
  const [loading, setLoading] = useState(false);


  const getAllBatch = async () => {
    // console.log(Cookies.get("token"));
    setLoading(true);
    const res = await instance({
      url: `batch/all`,
      method: "GET",
      headers: {
        Authorization: Cookies.get("token"),
        // accesskey: `auth74961a98ba76d4e4`,
      },
    });
    console.log(res.data.data)
    setAllBatch(res.data.data);
    setLoading(false);
  };

  useEffect(() => {
    getAllBatch();
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
        {Screensizehook.width < 550 ? "" : <Sidebar name={"adminbatchmng"} />}

        <div className="w-full bg-gray-300">
          <BreadCrumb
            crumbData={[
              { name: "Batch Management", path: null },
            ]}
          />
           <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
          {/* <div className="pb-4">
          <div class="flex flex-col border-b p-2 bg-white px-4 sm:flex-row sm:items-start rounded-lg">
                <div class="shrink-0 mr-auto sm:py-3">
                  <p class="font-semibold">Create New Batch</p>
                </div>
            
                <button class="hidden rounded-lg border-2 border-transparent bg-violet-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-violet-700">
                  Create
                </button>
              </div>
          </div> */}
            <div className="overflow-y-hidden rounded-lg border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-violet-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                      <th className="px-5 py-3">Start Date</th>
                      <th className="px-5 py-3">Batch Name</th>
                      <th className="px-5 py-3">Days of Week</th>
                      <th className="px-5 py-3">Max Student Allowed</th>
                      <th className="px-5 py-3">Student Enrolled</th>
                      <th className="px-5 py-3">Batch Level</th>
                      <th className="px-5 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-500">
                  {allBatch.map(function (ele) {
                      return (
                        <tr key={ele.id}>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">{ele.startDate.slice(0,10)}</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <div className="flex items-center">
                       
                         
                            <p className="whitespace-no-wrap">{ele.batchName}</p>
                    
                        </div>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">{ele.dayOfWeek}</p>
                      </td>

                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">{ele.maximumStudents}</p>
                      </td>

                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">{ele.studentsEnrolled}</p>
                      </td>

                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        {/* <p className="whitespace-no-wrap">{ele.level}</p> */}
                        <p className="whitespace-no-wrap">Level 1</p>

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
 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBatchEdit;
