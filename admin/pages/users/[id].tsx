import React, { useEffect, useState } from "react";
import Axios from "axios";
import Layout from "../../Components/Layout";
import Link from "next/link";

export const getServerSideProps = async ({ params }) => {
  const id = params.id;
  return {
    props: { id },
  };
};

export default function UserInfo(props) {
  const id = props.id;

  const [user, setUser] = useState({
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
      await Axios.get(
        "http://128.199.249.40:5008/api/user/" + id + "/details",
        {
          headers: {
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbIkd1ZXN0IiwiVXNlciIsIkVtcGxveWVyIiwiQ3VzdG9tZXJDYXJlIiwiQWRtaW4iXSwiZW1haWwiOiJqYmFkbWluQGpvYmJ1Y2tldC5sb2NhbCIsIm5hbWVpZCI6IjEiLCJuYmYiOjE2MjUwMzgxOTAsImV4cCI6MTYyNTA0NTM5MCwiaWF0IjoxNjI1MDM4MTkwLCJpc3MiOiJqb2JidWNrZXQuY29tIiwiYXVkIjoiam9iYnVja2V0LmNvbSJ9.e84tU0nPQ-hRPpOFIY3Iyo9yw0SgLB0n0z1xzwk9DaQ",
          },
        }
      )
        .then((res) => {
          setUser(res.data.data);
        })
        .catch((error) => {
          alert(error);
        });
    }
    fetchdata();
  }, []);
  return (
    <div className="pt-4 md:pt-32">
      <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-white border-0">
        <div className="rounded-t bg-white mb-0 px-10 py-6">
          <div className="text-center flex">
            <Link href="/">
              <i className="bx bx-arrow-back bx-sm mr-2 cursor-pointer"></i>
            </Link>
            <h6 className="text-gray-800 text-xl font-bold">User List</h6>
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
                  Full Name
                </label>
                <label className="py-3">{user.fullName || "N/A"}</label>
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
                <label className="py-3">{user.email || "N/A"}</label>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Birth Date
                </label>
                <label className="py-3">{user.birthDate || "N/A"}</label>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Create Date
                </label>
                <label className="py-3">{user.createdDate || "N/A"}</label>
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

UserInfo.layout = Layout;
