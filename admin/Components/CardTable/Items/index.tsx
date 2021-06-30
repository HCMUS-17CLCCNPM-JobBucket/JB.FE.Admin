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
    if (isLock) {
      let countdown = Date.parse(data.lockoutEnd) - Date.now();
      setTimeout(() => {
        setLock(false);
      }, countdown);
    }
  }, []);

  return (
    <tr className="cursor-pointer">
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
        1
      </td>
      <th
        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center"
        onClick={() => router.push("/users/" + data.id)}
      >
        <img
          className="h-12 w-12 bg-white rounded-full border"
          alt="..."
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        ></img>
        <span className="ml-3 font-bold text-gray-700 ">{data.userName}</span>
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
        Nothing
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
        {data.accountType}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
        {isLock ? (
          <UnlockDialog id={data.id} setunlock={setLock}></UnlockDialog>
        ) : (
          <LockDialog id={data.id} setlock={(countdown) =>handlesetLock(countdown)}></LockDialog>
        )}
      </td>
    </tr>
  );
}

