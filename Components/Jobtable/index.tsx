import React, { ReactElement, useEffect, useState } from "react";
import router from "next/router";
import Axios from "axios";
import Items from "./Items";
import Pagination from "../Pagination";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterActions } from "../../redux/filter";
import user, { userActions } from "../../redux/user";
export default function JobTable() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const filter = useSelector((state: any) => state.filter);
  const [job, setJob] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [length, setLength] = useState(0);
  const [isLockout, setisLockout] = useState(filter.locked_fliter);
  const [changeFilter, setChangeFilter] = useState(false);

  useEffect(() => {
    async function fetchdata() {
      setChangeFilter(false);
      const res = await Axios.get(process.env.BASE_URL + "/job/List", {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      });
      if (res.status === 200) {
        console.log(res)
        setJob(res.data);
      }
    }
    fetchdata();
  }, [changeFilter]);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded bg-white ">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h6 className="text-gray-800 text-xl font-bold">Jobs List</h6>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Title
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Employer
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Lock Status
                </th>
              </tr>
            </thead>
            <tbody>
              {job.map((data, key) => (
                <Items
                  data={data}
                  key={key}
                  setActionSuccess={setChangeFilter}
                ></Items>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
