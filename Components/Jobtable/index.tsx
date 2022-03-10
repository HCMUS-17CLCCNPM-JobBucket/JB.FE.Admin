import React, { ReactElement, useEffect, useState } from "react";
import router from "next/router";
import Axios from "axios";
import Items from "./Items";
import Pagination from "../Pagination";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterActions } from "../../redux/filter";
import user, { userActions } from "../../redux/user";
import { toast } from "react-toastify";
export default function JobTable() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const [job, setJob] = useState([]);
  const [changeFilter, setChangeFilter] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchdata() {
      setLoading(true);
      setChangeFilter(false);
      const res = await Axios.get(process.env.BASE_URL + "/job/List", {
        params: { page: page },
        headers: {
          Authorization: "Bearer " + user.token,
        },
      })
        .then((res) => {
          if (res.data.length > 0) {
            setJob(res.data);
            setLoading(false);
          } else {
            toast.warning("last page");
            setPage(page - 1);
          }
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    }
    fetchdata();
  }, [page,changeFilter]);

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
          <div className="ml-6 mb-4 flex gap-4">
            {page > 1 && (
              <button
                type="button"
                onClick={() => setPage(page - 1)}
                className="h-10 px-4 text-white transition-colors duration-150 bg-gray-400 rounded-lg focus:outline-none hover:bg-gray-500"
              >
                <i className="bx bx-left-arrow-alt"></i>
                Previous
              </button>
            )}
            <button
              type="button"
              onClick={() => setPage(page + 1)}
              className="h-10 px-4 text-white transition-colors duration-150 bg-gray-400 rounded-lg focus:outline-none hover:bg-gray-500"
            >
              <i className="bx bx-right-arrow-alt"></i>
              Next
            </button>
          </div>
          <Items
            loading={loading}
            job={job}
            setActionSuccess={setChangeFilter}
          ></Items>
        </div>
      </div>
    </>
  );
}
