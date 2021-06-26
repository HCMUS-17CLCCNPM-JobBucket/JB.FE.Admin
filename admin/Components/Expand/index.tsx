import React, { ReactElement, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import Axios from "axios";


export default function Expanded(props) {
  const [isResolved, setResolve] = useState(props.isResolved);
  console.log(isResolved);


  async function onResolveReport() {
    await Axios.put(
      "http://128.199.64.229:5008/api/report/" + props.id + "/resolve",
      {},
      {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbIkd1ZXN0IiwiVXNlciIsIkVtcGxveWVyIiwiQ3VzdG9tZXJDYXJlIiwiQWRtaW4iXSwiZW1haWwiOiJqYmFkbWluQGpvYmJ1Y2tldC5sb2NhbCIsIm5hbWVpZCI6IjEiLCJuYmYiOjE2MjQ3MTM3MTMsImV4cCI6MTYyNDcyMDkxMywiaWF0IjoxNjI0NzEzNzEzLCJpc3MiOiJqb2JidWNrZXQuY29tIiwiYXVkIjoiam9iYnVja2V0LmNvbSJ9.aymWYVLDsoUQuSf3YtJW2qxi82HdZaN3EekftBGjee8",
        },
      }
    )
      .then((res) => {
        if (res.status == 200) {
          setResolve(true);
          alert("resolve success");
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
                  flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  ${isResolved ? "bg-purple-100" : "bg-red-500"}`}
            >
              <div>
                <p>{props.fullName}</p>
              </div>
              {
                isResolved ? <p>done</p> : <a className="button" onClick={onResolveReport}>Resolve</a>
              }
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              {props.content}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
