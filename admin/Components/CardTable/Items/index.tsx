import React, { useEffect, useState } from "react";
import router from "next/router";
import LockDialog from "../../Dialog/LockDialog";
import UnlockDialog from "../../Dialog/UnlockDialog";

export default function index({ data, setActionSuccess }) {
  useEffect(() => {
    if (data.isLockedOut) {
      let countdown = Date.parse(data.lockoutEnd) - Date.now();
      setTimeout(() => {
        setActionSuccess(true);
      }, countdown);
    }
  }, []);

  return (
    <tr
      className="cursor-pointer"
      onClick={() => router.push("/users/" + data.id)}
    >
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
        <img
          className="h-12 w-12 bg-white rounded-full border"
          alt="avatar"
          src={data.avatarUrl}
        ></img>
        <span className="ml-3 font-bold text-gray-700 ">{data.fullName}</span>
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
        {data.email || "N/A"}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
        {data.phoneNumber || "N/A"}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
        {data.isLockedOut ? (
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
        )}
      </td>
    </tr>
  );
}
