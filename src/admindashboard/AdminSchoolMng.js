import React from "react";
// import Navbar from "../components/navbar";

import { Link, useNavigate } from "react-router-dom";
// import Breadcrum from "../components/breadcrum";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Screensizehook from "../components/Screensizehook";
import BreadCrumb from "../components/BreadCrumb";

const AdminSchoolMng = () => {
  const navigate = useNavigate();
  const screenSize = Screensizehook();

  return (
    <>
      <Header highlight={"admin"} />
      <div className="flex">
        {screenSize.width < 550 ? "" : <Sidebar name={"adminschoolmng"} />}

        <div className="w-full bg-gray-300">
        <BreadCrumb
            crumbData={[
              { name: "School Management", path: null }
            ]}
          />
          <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
            <div className="overflow-y-hidden rounded-lg border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-violet-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                      <th className="px-5 py-3">School Code</th>
                      <th className="px-5 py-3">School Name</th>
                      <th className="px-5 py-3">Address</th>
                      <th className="px-5 py-3">Created at</th>
                      <th className="px-5 py-3">Status</th>
                      <th className="px-5 py-3">Manage</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-500">
                    <tr>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">31212</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <div className="flex items-center">
                       
                         
                            <p className="whitespace-no-wrap">Golden Hills Preparatory School</p>
                    
                        </div>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">B 8/65, Rohini, Delhi</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">Sep 28, 2022</p>
                      </td>

                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                          Active
                        </span>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <Link to="/adminschooledit/2" className="rounded-full bg-violet-500 px-3 py-1 font-medium text-white focus:bg-violet-700 focus:outline-none hover:bg-violet-700">Edit</Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">732323</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <div className="flex items-center">
                      
                    
                            <p className="whitespace-no-wrap">Maplewood Middle School</p>
                       
                        </div>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">Jain Temple Road, Mumbai</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">Sep 28, 2022</p>
                      </td>

                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                          Active
                        </span>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <Link to="/adminschooledit/2" className="rounded-full bg-violet-500 px-3 py-1 font-medium text-white focus:bg-violet-700 focus:outline-none hover:bg-violet-700">Edit</Link>

                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">1232323</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <div className="flex items-center">
                      
                         
                            <p className="whitespace-no-wrap">Pinecrest High School</p>
                         
                        </div>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">Pandav Nagar, Delhi</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">Sep 28, 2022</p>
                      </td>

                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <span className="rounded-full bg-red-200 px-3 py-1 text-xs font-semibold text-red-900">
                          Inactive
                        </span>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <Link to="/adminschooledit/2" className="rounded-full bg-violet-500 px-3 py-1 font-medium text-white focus:bg-violet-700 focus:outline-none hover:bg-violet-700">Edit</Link>

                      </td>
                    </tr>
                    <tr>
                      <td className="bg-white px-5 py-5 text-sm border-b">
                        <p className="whitespace-no-wrap">663232</p>
                      </td>
                      <td className="bg-white px-5 py-5 text-sm border-b">
                        <div className="flex items-center">
                       
                        
                            <p className="whitespace-no-wrap">Meadowview Academy</p>
                    
                        </div>
                      </td>
                      <td className="bg-white px-5 py-5 text-sm border-b">
                        <p className="whitespace-no-wrap">Pandav Nagar, Delhi</p>
                      </td>
                      <td className="bg-white px-5 py-5 text-sm border-b">
                        <p className="whitespace-no-wrap">Sep 28, 2022</p>
                      </td>

                      <td className="bg-white px-5 py-5 text-sm border-b">
                        <span className="rounded-full bg-red-200 px-3 py-1 text-xs font-semibold text-red-900">
                          Inactive
                        </span>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <Link to="/adminschooledit/2" className="rounded-full bg-violet-500 px-3 py-1 font-medium text-white focus:bg-violet-700 focus:outline-none hover:bg-violet-700">Edit</Link>

                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">123434</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <div className="flex items-center">
                                            
                            <p className="whitespace-no-wrap">Emerald Valley High School</p>
                       
                        </div>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">Pandav Nagar, Delhi</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">Sep 28, 2022</p>
                      </td>

                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                          Active
                        </span>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <Link to="/adminschooledit/2" className="rounded-full bg-violet-500 px-3 py-1 font-medium text-white focus:bg-violet-700 focus:outline-none hover:bg-violet-700">Edit</Link>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSchoolMng;
