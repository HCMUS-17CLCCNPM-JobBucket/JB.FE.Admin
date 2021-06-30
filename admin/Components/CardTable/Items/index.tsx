import React, { useEffect, useState } from "react";
import router from "next/router";
import LockDialog from "../../Dialog/LockDialog";
import UnlockDialog from "../../Dialog/UnlockDialog";

export default function index({ data }) {
  const [isLock, setLock] = useState(
    Date.parse(data.lockoutEnd) - Date.now() > 0
  );

  const handlesetLock = (countdown) =>{
    setLock(true)
    setTimeout(() => {
      setLock(false);
    }, countdown);
  }

  useEffect(() => {
    if (data.isLockedOut) {
      let countdown = Date.parse(data.lockoutEnd) - Date.now();
      setTimeout(() => {
        setLock(false);
      }, countdown);
    }
  }, []);

  return (
    <tr className="cursor-pointer">
      <th
        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center"
        onClick={() => router.push("/users/" + data.id)}
      >
        <img
          className="h-12 w-12 bg-white rounded-full border"
          alt="avatar"
          src={data.avatarUrl}
        ></img>
        <span className="ml-3 font-bold text-gray-700 ">{data.fullName}</span>
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
        {data.email || 'N/A'} 
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
        {data.phoneNumber || 'N/A'}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
        {data.isLockedOut ? (
          <UnlockDialog id={data.id} setunlock={setLock}></UnlockDialog>
        ) : (
          <LockDialog id={data.id} setlock={(countdown) =>handlesetLock(countdown)}></LockDialog>
        )}
      </td>
    </tr>
  );
}

