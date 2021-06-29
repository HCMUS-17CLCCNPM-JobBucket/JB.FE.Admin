import React, { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import { User } from "../../interface/user";
import Items from "./Items";
import Pagination from "../Pagination";
export default function CardTable() {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);
  const [length, setLength] = useState(0);
  const [lockFilter, setLockFilter] = useState('<=');

  useEffect(() => {
    async function fetchdata() {
      const date = new Date();
      await Axios.post(
        "http://128.199.64.229:5008/api/user/listUser",
        {
          page: currentPage - 1,
          filters: [
            {
              property: "birthDate",
              value: date.toISOString(),
              comparison: lockFilter,
            },
          ],
        },
        {
          headers: {
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbIkd1ZXN0IiwiVXNlciIsIkVtcGxveWVyIiwiQ3VzdG9tZXJDYXJlIiwiQWRtaW4iXSwiZW1haWwiOiJqYmFkbWluQGpvYmJ1Y2tldC5sb2NhbCIsIm5hbWVpZCI6IjEiLCJuYmYiOjE2MjQ5NTg1MjIsImV4cCI6MTYyNDk2NTcyMiwiaWF0IjoxNjI0OTU4NTIyLCJpc3MiOiJqb2JidWNrZXQuY29tIiwiYXVkIjoiam9iYnVja2V0LmNvbSJ9.0TZ4RaVPsY3fnTfcV6X3CpSPNYLjfYpdiN4DaSWHjQ8",
          },
        }
      )
        .then((res) => {
          setUser(res.data.data);
        })
        .catch((error) => {
          alert(error);
        });
      await Axios.post(
        "http://128.199.64.229:5008/api/user/count",
        {
          filters: [
            {
              property: "birthDate",
              value: date.toISOString(),
              comparison: lockFilter,
            },
          ],
        },
        {
          headers: {
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbIkd1ZXN0IiwiVXNlciIsIkVtcGxveWVyIiwiQ3VzdG9tZXJDYXJlIiwiQWRtaW4iXSwiZW1haWwiOiJqYmFkbWluQGpvYmJ1Y2tldC5sb2NhbCIsIm5hbWVpZCI6IjEiLCJuYmYiOjE2MjQ5NTg1MjIsImV4cCI6MTYyNDk2NTcyMiwiaWF0IjoxNjI0OTU4NTIyLCJpc3MiOiJqb2JidWNrZXQuY29tIiwiYXVkIjoiam9iYnVja2V0LmNvbSJ9.0TZ4RaVPsY3fnTfcV6X3CpSPNYLjfYpdiN4DaSWHjQ8",
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
  }, [currentPage, lockFilter]);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded bg-white ">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h6 className="text-gray-800 text-xl font-bold">Users List</h6>
            </div>
            {lockFilter =='<=' ? <button onClick={()=>setLockFilter('>=')}>all</button>: <button onClick={()=>setLockFilter('<=')}>nothing</button>}
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
                <Items data={data} key={key}></Items>
              ))}
            </tbody>
          </table>
          <hr></hr>
          {length !== 0 && (
            <Pagination
              pages={length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </div>
    </>
  );
}
