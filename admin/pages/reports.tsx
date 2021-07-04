import React, { ReactElement, useEffect, useState } from "react";
import Layout from "../Components/Layout";
import Expanded from "../Components/Expand";
import Axios from "axios";
import { useSelector } from "react-redux";
import Pagination from "../Components/Pagination";
import user from "../redux/user";

export default function Reports() {
  const [resolveFilter, setFilter] = useState(false);
  const [reports, setReports] = useState([]);
  const [resoveSuccess, setResolve] = useState(false);
  const user = useSelector((state: any) => state.user);
  const [currentPage, setCurrentPage] = useState(1);
  const [length, setLength] = useState(0);

  useEffect(() => {
    async function fetchdata() {
      setResolve(false);
      await Axios.post(
        process.env.BASE_URL +"/report/listReport",
        {
          page: currentPage - 1,
          filters: [
            {
              property: "isResolved",
              value: resolveFilter,
              comparison: "==",
            },
          ],
        },
        {
          headers: {
            Authorization: "Bearer " + user.token,
          },
        }
      )
        .then((res) => {
          setReports(res.data.data);
        })
        .catch((error) => {
          alert(error);
        });
      await Axios.post(
        process.env.BASE_URL +"/report/count",
        {
          filters: [
            {
              property: "isResolved",
              value: resolveFilter,
              comparison: "==",
            },
          ],
        },
        {
          headers: {
            Authorization: "Bearer " + user.token,
          },
        }
      )
        .then((res) => {
          setLength(res.data.data);
        })
        .catch((error) => {
          alert(error);
        });
    }
    fetchdata();
  }, [resolveFilter, resoveSuccess, currentPage]);

  return (
    <div className="pt-4 md:pt-32">
      <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h6 className="text-gray-800 text-xl font-bold">Reports List</h6>
              {resolveFilter ? (
                <button
                  type="button"
                  onClick={() => setFilter(!resolveFilter)}
                  className="my-4 h-10 px-4 text-white transition-colors duration-150 bg-green-500 rounded-lg focus:outline-none hover:bg-green-600"
                >
                  <i className="bx bx-check bx-xs mr-2"></i>
                  RESOLVED
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setFilter(!resolveFilter)}
                  className="my-4 h-10 px-4 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:outline-none hover:bg-red-600"
                >
                  <i className="bx bx-x bx-xs mr-2"></i>
                  UNRESOLVED
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {reports.map((report, key) => (
            <Expanded
              setResolveSucccess={setResolve}
              key={key}
              isResolved={report.isResolved}
              id={report.id}
              user={report.user}
              content={report.content}
            />
          ))}

          <hr></hr>
          <div className="my-4">
            {length != 0 ? (
              <Pagination
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
    </div>
  );
}

Reports.layout = Layout;
