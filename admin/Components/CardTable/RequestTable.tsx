import React from 'react'

export default function RequestTable() {
    return (
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white ">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-lg bg-white ">Card Tables</h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Project
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Budget
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Status
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Users
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Completion
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 "></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                  <img
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span className="ml-3 font-bold text-gray-700 ">
                    Argon Design System
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  $2,500 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <i className="fas fa-circle text-orange-500 mr-2"></i> pending
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <div className="flex">
                    <img
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-100 shadow"
                    ></img>
                    <img
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                    ></img>
                    <img
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                    ></img>
                    <img
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">60%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                        <div
                          style={{ width: "60%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                  <img
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span className="ml-3 font-bold text-gray-700">
                    Angular Now UI Kit PRO
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  $1,800 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <i className="fas fa-circle text-green-500 mr-2"></i>{" "}
                  completed
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <div className="flex">
                    <img
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-100 shadow"
                    ></img>
                    <img
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                    ></img>
                    <img
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                    ></img>
                    <img
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">100%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                        <div
                          style={{ width: "100%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                  <img
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span className="ml-3 font-bold text-gray-700 ">
                    Black Dashboard Sketch
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  $3,150 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <i className="fas fa-circle text-red-500 mr-2"></i> delayed
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <div className="flex">
                    <img
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-100 shadow"
                    ></img>
                    <img
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                    ></img>
                    <img
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                    ></img>
                    <img
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">73%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                        <div
                          style={{ width: "73%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                  <img
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span className="ml-3 font-bold text-gray-700 ">
                    React Material Dashboard
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  $4,400 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <i className="fas fa-circle text-teal-500 mr-2"></i> on
                  schedule
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <div className="flex">
                    <img
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-100 shadow"
                    ></img>
                    <img
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                    ></img>
                    <img
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                    ></img>
                    <img
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">90%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
                        <div
                          style={{ width: "90%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                  <img
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span className="ml-3 font-bold text-gray-700 ">
                    React Material Dashboard
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  $2,200 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <i className="fas fa-circle text-green-500 mr-2"></i>{" "}
                  completed
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <div className="flex">
                    <img
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-100 shadow"
                    ></img>
                    <img
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                    ></img>
                    <img
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                    ></img>
                    <img
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-100 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">100%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                        <div
                          style={{ width: "100%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
}
