import React, { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import Items from "./Items";
import Pagination from "../Pagination";
import { useSelector } from "react-redux";
export default function CardTable() {
  const token = useSelector((state: any) => state.user.token);
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [length, setLength] = useState(0);
  const [isLockout, setisLockout] = useState(false);

  useEffect(() => {
    async function fetchdata() {
      const res = await Axios.post(
        "http://128.199.64.229:5008/api/user/listUser",
        {
          page: currentPage - 1,
          filters: [
            {
              property: "isLockedOut",
              value: isLockout,
              comparison: "==",
            },
          ],
        },
        {
          headers: {
            Authorization:
              "Bearer " +
              token,
          },
        }
      );
      if (res.status === 200) {
        setUser(res.data.data);
      }
      const res1 = await Axios.post(
        "http://128.199.64.229:5008/api/user/count",
        {
          filters: [
            {
              property: "isLockedOut",
              value: isLockout,
              comparison: "==",
            },
          ],
        },
        {
          headers: {
            Authorization:
              "Bearer " +
              token,
          },
        }
      );
      if (res1.status === 200) {
        setLength(res1.data.data);
      }
    }
    fetchdata();
  }, [currentPage, isLockout]);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded bg-white ">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h6 className="text-gray-800 text-xl font-bold">Users List</h6>
              {isLockout ? (
                <button
                  type="button"
                  onClick={() => {
                    setisLockout(false);
                    setCurrentPage(1);
                  }}
                  className="my-4 h-10 px-4 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:outline-none hover:bg-red-600"
                >
                  <i className="bx bxs-lock bx-xs mr-2"></i>
                  LOCKED USERS
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setisLockout(true);
                    setCurrentPage(1);
                  }}
                  className="my-4 h-10 px-4 text-white transition-colors duration-150 bg-green-500 rounded-lg focus:outline-none hover:bg-green-600"
                >
                  <i className="bx bxs-lock bx-xs mr-2"></i>
                  NONLOCKED USERS
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Full Name
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Email
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Phone Number
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Lock Status
                </th>
              </tr>
            </thead>
            <tbody>
              {user.map((data, key) => (
                <Items data={data} key={key}></Items>
              ))}
            </tbody>
          </table>
          <hr></hr>
          <div className="my-4">
            {length != 0 && (
              <Pagination
                pages={length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
