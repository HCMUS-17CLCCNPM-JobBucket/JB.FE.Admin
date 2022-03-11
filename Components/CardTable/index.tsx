import React, { ReactElement, useEffect, useState } from "react";
import router from "next/router";
import Axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterActions } from "../../redux/filter";
import { userActions } from "../../redux/user";
import { toast } from "react-toastify";
import Items from "./Items";
export default function CardTable() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [changeFilter, setChangeFilter] = useState(false);
  const [last, setLast] = useState(false);

  useEffect(() => {
    async function fetchdata() {
      setLast(false);
      setChangeFilter(false);
      setLoading(true);
      const res = await Axios.get(
        process.env.BASE_URL + "/userManagement/List",
        {
          params: { page: page },
          headers: {
            Authorization: "Bearer " + user.token,
          },
        }
      )
        .then((res) => {
          setUsers(res.data);
          setLoading(false);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
      const res1 = await Axios.get(
        process.env.BASE_URL + "/userManagement/List",
        {
          params: { page: page + 1 },
          headers: {
            Authorization: "Bearer " + user.token,
          },
        }
      )
        .then((res) => {
          if (res.data.length == 0) {
            setLast(true);
          }
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    }
    fetchdata();
  }, [page, changeFilter]);

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
            {!last && (
              <button
                type="button"
                onClick={() => setPage(page + 1)}
                className="h-10 px-4 text-white transition-colors duration-150 bg-gray-400 rounded-lg focus:outline-none hover:bg-gray-500"
              >
                <i className="bx bx-right-arrow-alt"></i>
                Next
              </button>
            )}
          </div>
          <Items
            loading={loading}
            users={users}
            setActionSuccess={setChangeFilter}
          />
        </div>
      </div>
    </>
  );
}
