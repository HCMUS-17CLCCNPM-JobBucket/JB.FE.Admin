import {useRouter} from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import Axios from "axios";
import Index from "../index";
import { User } from "../../interface/user";

export const getServerSideProps = async ({params}) => {
  const id = params.id;
  return {
     props: { id }
  }
}

export default function UserInfo(props) {

  const id = props.id;

  const [user, setUser] = useState<User>({
    accountType: 1,
    id: "",
    email: "",
    userName: "",
    phoneNumber: "",
    phoneNumberConfirmedL: "",
    birthDate: null,
    createdDate: null,
    addressLine: [],
    city: "",
    country: "",
    avatarUrl: "",
    lockoutEnabled: true,
    fullName: "",
    lockoutEnd: "",
  });

  useEffect(() => {
    async function fetchdata() {
      await Axios.get("http://128.199.249.40:5008/api/user/" + id + "/details", {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbIkd1ZXN0IiwiVXNlciIsIkVtcGxveWVyIiwiQ3VzdG9tZXJDYXJlIiwiQWRtaW4iXSwiZW1haWwiOiJqYmFkbWluQGpvYmJ1Y2tldC5sb2NhbCIsIm5hbWVpZCI6IjEiLCJuYmYiOjE2MjI0NzEyOTQsImV4cCI6MTYyMjQ3ODQ5NCwiaWF0IjoxNjIyNDcxMjk0LCJpc3MiOiJqb2JidWNrZXQuY29tIiwiYXVkIjoiam9iYnVja2V0LmNvbSJ9.CY7KQ3M5DyxP3ic_aELPBpa-pLSCe8ixp79QEurqXOI",
        },
      })
        .then((res) => {
          setUser(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchdata();
  }, []);
  return (
    <div className="pt-4 md:pt-32">
      <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-white border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-gray-800 text-xl font-bold">User Account</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0 ">
          <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
            User Information
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Username
                </label>
                <label className="py-3">{user.userName}</label>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email address
                </label>
                <label className="py-3">{user.email}</label>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  First Name
                </label>
                <label className="py-3">{user.birthDate == null? 'nothing' : user.birthDate}</label>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Last Name
                </label>
                <label className="py-3">Tuan</label>
              </div>
            </div>
          </div>

          <hr className="mt-6 border-b-1 border-gray-400" />

          <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
            Contact Information
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Address
                </label>
                <label className="py-3">123 Nguyen Van Cu</label>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  City
                </label>
                <label className="py-3">HCM</label>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Country
                </label>
                <label className="py-3">VietNam</label>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Postal Code
                </label>
                <label className="py-3">70000</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

UserInfo.layout = Index;
