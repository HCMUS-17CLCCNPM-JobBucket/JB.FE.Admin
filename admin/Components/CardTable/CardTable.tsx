import React, { ReactElement, useState } from "react";
import {useRouter} from 'next/router'
interface Props {}

export default function CardTable({}: Props): ReactElement {
  const router = useRouter();

  const [dummydata, setdata] = useState([
    {
      number: 1,
      name: "nguyen huu tuan",
      createDate: "11/09/1999",
      role: "Admin",
      status: "active",
    },
    {
      number: 2,
      name: "nguyen huu thang",
      createDate: "11/09/1999",
      role: "Admin",
      status: "active",
    },
    {
      number: 3,
      name: "nguyen huu thanh",
      createDate: "11/09/1999",
      role: "Admin",
      status: "active",
    },
    {
      number: 4,
      name: "nguyen huu truong",
      createDate: "11/09/1999",
      role: "Admin",
      status: "active",
    },
    {
      number: 5,
      name: "nguyen huu tien",
      createDate: "11/09/1999",
      role: "Admin",
      status: "active",
    },
  ]);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded bg-white ">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h6 className="text-gray-800 text-xl font-bold">Users List</h6>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  #
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Name
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Date Create
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Role
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Status
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {dummydata.map((data, key) => (
                <tr className="cursor-pointer" key={key} onClick={()=>router.push("/UserInfo")}>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    {data.number}
                  </td>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                    <img
                      className="h-12 w-12 bg-white rounded-full border"
                      alt="..."
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    ></img>
                    <span className="ml-3 font-bold text-gray-700 ">
                      {data.name}
                    </span>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    {data.createDate}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    {data.role}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    {data.status}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    <button className="" type="button">
                      <i
                        className="bx bx-trash bx-sm"
                        style={{ color: "red" }}
                      ></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr></hr>
          <nav className="block float-right mr-8 my-4">
            <ul className="flex pl-0 rounded list-none flex-wrap">
              <li>
                <a
                  href="#pablo"
                  className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500"
                >
                  <i className="bx bxs-chevrons-left -ml-px"></i>
                </a>
              </li>
              <li>
                <a
                  href="#pablo"
                  className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500"
                >
                  <i className="bx bxs-chevron-left -ml-px"></i>
                </a>
              </li>
              <li>
                <a
                  href="#pablo"
                  className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#pablo"
                  className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#pablo"
                  className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#pablo"
                  className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#pablo"
                  className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#pablo"
                  className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500"
                >
                  <i className="bx bxs-chevron-right -mr-px"></i>
                </a>
              </li>
              <li>
                <a
                  href="#pablo"
                  className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500"
                >
                  <i className="bx bxs-chevrons-right -mr-px"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
