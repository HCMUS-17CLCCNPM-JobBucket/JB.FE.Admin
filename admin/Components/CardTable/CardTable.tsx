import React, { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import { User } from "../../interface/user";
import LockDialog from "../Dialog/LockDialog";
import UnlockDialog from "../Dialog/UnlockDialog";
export default function CardTable() {
  let today = new Date();

  const router = useRouter();

  const [user, setUser] = useState<Array<User>>([]);

  useEffect(() => {
    async function fetchdata() {
      await Axios.post(
        "http://128.199.249.40:5008/api/user/listUser",
        {},
        {
          headers: {
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbIkd1ZXN0IiwiVXNlciIsIkVtcGxveWVyIiwiQ3VzdG9tZXJDYXJlIiwiQWRtaW4iXSwiZW1haWwiOiJqYmFkbWluQGpvYmJ1Y2tldC5sb2NhbCIsIm5hbWVpZCI6IjEiLCJuYmYiOjE2MjE0NDIxODksImV4cCI6MTYyMTQ0OTM4OSwiaWF0IjoxNjIxNDQyMTg5LCJpc3MiOiJqb2JidWNrZXQuY29tIiwiYXVkIjoiam9iYnVja2V0LmNvbSJ9.aqvhP7sZqQPtfm0Ya3DIU-ZPGGFg00JWr9vu62dfsls",
          },
        }
      )
        .then((res) => {
          console.log(res.data.data);
          console.log(user);
          setUser(res.data.data);
        })
        .catch((error) => {
          alert(error);
        });
    }
    fetchdata();
  }, []);

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
                  BirthDay
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {user.map((data, key) => (
                <tr className="cursor-pointer" key={key}>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    1
                  </td>
                  <th
                    className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center"
                    onClick={() => router.push("/users/" + data.id)}
                  >
                    <img
                      className="h-12 w-12 bg-white rounded-full border"
                      alt="..."
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    ></img>
                    <span className="ml-3 font-bold text-gray-700 ">
                      {data.userName}
                    </span>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    {Date.parse(data.lockoutEnd) - today.getTime()}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    {data.accountType}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    {Date.parse(data.lockoutEnd) - today.getTime() > 0  ? (
                      <UnlockDialog id={data.id}></UnlockDialog>
                    ) : (
                      <LockDialog id={data.id}></LockDialog>
                    )}
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
