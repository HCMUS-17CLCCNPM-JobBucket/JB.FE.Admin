import React, { ReactElement, useEffect, useState } from "react";
import router from "next/router";
import Axios from "axios";
import Items from "./Items";
import Pagination from "../Pagination";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterActions } from "../../redux/filter";
import { userActions } from "../../redux/user";
export default function CardTable() {
  const size = 10;
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.user);
  const filter = useSelector((state: any) => state.filter);
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [length, setLength] = useState(0);
  const [isLockout, setisLockout] = useState(filter.locked_fliter);
  const [changeFilter, setChangeFilter] = useState(false);

  useEffect(() => {
    async function fetchdata() {
      setChangeFilter(false);
      const res = await Axios.get(
        process.env.BASE_URL + "/UserManagement/ListUsers/listUser",
        {
          params: { Page: currentPage, Size: size },
          headers: {
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpiYWRtaW5Aam9iYnVja2V0LmxvY2FsIiwibmFtZWlkIjoiMSIsInJvbGUiOiJBZG1pbmlzdHJhdG9yIiwibmJmIjoxNjMzMDA3NzE4LCJleHAiOjE2MzMwMTQ5MTgsImlhdCI6MTYzMzAwNzcxOCwiaXNzIjoiam9iYnVja2V0LmNvbSIsImF1ZCI6ImpvYmJ1Y2tldC5jb20ifQ.8aB_ZYTMMIr2AmGYzcU5eaG_8B6J1BlvyIG-HyBil4g",
          },
        }

        // {
        //   page: currentPage,
        //   size: 10,
        //   // filters: [
        //   //   {
        //   //     property: "isLockedOut",
        //   //     value: isLockout,
        //   //     comparison: "==",
        //   //   },
        //   // ],
        // },
        // {
        //   headers: {
        //     Authorization:
        //       "Bearer " +
        //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpiYWRtaW5Aam9iYnVja2V0LmxvY2FsIiwibmFtZWlkIjoiMSIsInJvbGUiOiJBZG1pbmlzdHJhdG9yIiwibmJmIjoxNjMyNDAzNjM0LCJleHAiOjE2MzI0MTA4MzQsImlhdCI6MTYzMjQwMzYzNCwiaXNzIjoiam9iYnVja2V0LmNvbSIsImF1ZCI6ImpvYmJ1Y2tldC5jb20ifQ.3ostaTYTCYR6OIuBeg6YhQgnXsABYW4wNWwxQeyjTc0",
        //   },
        // }
      );
      console.log(res);
      if (res.status === 200) {
        setUser(res.data);
        console.log(user);
      }
      // if (res.status === 401) {
      //   dispatch(userActions.logout());
      //   router.push("/");
      // }
      // const res1 = await Axios.post(
      //   process.env.BASE_URL + "/UserManagement/CountUser/count",
      //   {
      //     filters: [
      //       {
      //         property: "isLockedOut",
      //         value: isLockout,
      //         comparison: "==",
      //       },
      //     ],
      //   },
      //   {
      //     headers: {
      //       Authorization: "Bearer " + users.token,
      //     },
      //   }
      // );
      // if (res1.status === 200) {
      //   setLength(res1.data.data);
      // }
      // if (res.status === 401) {
      //   dispatch(userActions.logout());
      //   router.push("/");
      // }
    }
    fetchdata();
  }, [currentPage, isLockout, changeFilter]);

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
                    dispatch(filterActions.changeLocked(false));
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
                    dispatch(filterActions.changeLocked(true));
                    setCurrentPage(1);
                  }}
                  className="my-4 h-10 px-4 text-white transition-colors duration-150 bg-green-500 rounded-lg focus:outline-none hover:bg-green-600"
                >
                  <i className="bx bxs-lock-open bx-xs mr-2"></i>
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
                <Items
                  data={data}
                  key={key}
                  setActionSuccess={setChangeFilter}
                ></Items>
              ))}
            </tbody>
          </table>
          <hr></hr>
          <div className="my-4">
            {length != 0 ? (
              <Pagination
                size = {size}
                pages={length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            ) : (
              <div className="text-center">
                <p>Empty</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
