import React, { useEffect, useState } from "react";
import router from "next/router";

export default function index({ data, setActionSuccess }) {
//   useEffect(() => {
//     if (data.isLockedOut) {
//       let countdown = Date.parse(data.lockoutEnd) - Date.now();
//       setTimeout(() => {
//         setActionSuccess(true);
//       }, countdown);
//     }
//   }, []);

  return (
    <tr>
      <th
        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center cursor-pointer"
        onClick={() => router.push("/jobs/" + data.id)}
      >
        {/* <img
          className="h-12 w-12 bg-white rounded-full border"
          alt="avatar"
          src={data.avatarUrl}
        ></img> */}
        <span className="ml-3 font-bold text-gray-700 " >{data.title}</span>
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 cursor-pointer" onClick={() => router.push("/users/" + data.employer.id)}>
        {data.employer.fullName || "N/A"}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
        {/* {data.isLockedOut ? (
          <UnlockDialog
            id={data.id}
            fullname={data.fullName}
            unlocksuccess={setActionSuccess}
          ></UnlockDialog>
        ) : (
          <LockDialog
            id={data.id}
            fullname={data.fullName}
            locksuccess={setActionSuccess}
          ></LockDialog>
        )} */}
      </td>
    </tr>
  );
}
