import React, { useEffect, useState } from "react";
import router from "next/router";
import LockDialog from "../../Dialog/UserLock";
import UnlockDialog from "../../Dialog/UserUnlock";
import Loading from "../../atoms/Loading";
import ListEmpty from "../../atoms/ListEmpty";

export default function index({ setActionSuccess, loading, job }) {
  const [isLoading, setIsLoading] = useState(loading);
  useEffect(() => {
    if (isLoading !== loading) {
      setIsLoading(loading);
    }
  }, [loading]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : job.length === 0 && loading === false ? (
        <ListEmpty message="No result match" />
      ) : (
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
            {job.map((data, index) => (
              <tr key={index}>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center cursor-pointer">
                  <img
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="avatar"
                    src={
                      data.imageUrls ||
                      "http://simpleicon.com/wp-content/uploads/user1.png"
                    }
                  ></img>
                  <span className="ml-3 font-bold text-gray-700 ">
                    {data.title}
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 cursor-pointer">
                  {data.employer.userName || "N/A"}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  {data.activeStatus == 2 ? (
                    <UnlockDialog
                      id={data.id}
                      title={data.title}
                      unlocksuccess={setActionSuccess}
                    ></UnlockDialog>
                  ) : (
                    <LockDialog
                      id={data.id}
                      title={data.title}
                      locksuccess={setActionSuccess}
                    ></LockDialog>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
