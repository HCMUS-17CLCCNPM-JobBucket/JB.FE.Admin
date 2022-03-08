import React, { useEffect, useState } from "react";
import router from "next/router";
import LockDialog from "../../Dialog/UserLock";
import UnlockDialog from "../../Dialog/UserUnlock";

export default function index({ data, setActionSuccess }) {
  return (
    <tr>
      <th
        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center cursor-pointer"
      >
        <img
          className="h-12 w-12 bg-white rounded-full border"
          alt="avatar"
          src={
            data.imageUrls ||
            "http://simpleicon.com/wp-content/uploads/user1.png"
          }
        ></img>
        <span className="ml-3 font-bold text-gray-700 ">{data.title}</span>
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
  );
}
