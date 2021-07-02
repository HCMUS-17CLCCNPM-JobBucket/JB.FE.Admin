import React, { ReactElement, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import Axios from "axios";
import { useSelector } from "react-redux";
import user from "../../redux/user";

export default function Expanded(props) {
  const user = useSelector((state: any) => state.user);

  async function onResolveReport() {
    await Axios.put(
      "http://128.199.64.229:5008/api/report/" + props.id + "/resolve",
      {},
      {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      }
    )
      .then((res) => {
        if (res.status == 200) {
          alert("resolve success");
          props.setResolveSucccess(true);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div className="w-full p-2 mx-auto bg-white">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`
                  flex justify-between w-full px-4 py-2 text-sm font-medium text-left rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  ${
                    props.isResolved
                      ? "bg-green-500 text-black"
                      : "bg-red-500 text-white"
                  }`}
            >
              <div className="flex">
                <img
                  className="h-10 w-10 bg-white rounded-full border mr-2"
                  alt="avatar"
                  src={props.user.avatarUrl}
                ></img>
                <div>
                <p>{props.user.fullName}</p>
                <p>{props.user.email}</p>
                </div>
              </div>
              {props.isResolved ? (
                <i className="bx bx-check bx-xs mr-2"></i>
              ) : (
                <a
                  className="button border-b-2 text-white"
                  onClick={onResolveReport}
                >
                  <i className="bx bxs-edit bx-xs"></i>Resolve
                </a>
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black">
              {props.content}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
