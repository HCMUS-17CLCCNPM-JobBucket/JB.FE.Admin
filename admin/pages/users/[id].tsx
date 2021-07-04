import React, { useEffect, useState } from "react";
import Axios from "axios";
import Layout from "../../Components/Layout";
import { useSelector } from "react-redux";
import router from "next/router";

export const getServerSideProps = async ({ params }) => {
  const id = params.id;
  return {
    props: { id },
  };
};

export default function UserInfo(props) {
  const id = props.id;
  const users = useSelector((state: any) => state.user);
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    async function fetchdata() {
      await Axios.get(
        process.env.BASE_URL +"/user/" + id + "/details",
        {
          headers: {
            Authorization: "Bearer " + users.token,
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
            <button onClick={() => router.back()}>
              <i className="bx bx-chevron-left bx-sm mr-2 cursor-pointer"></i>
            </button>
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
                <label className="py-3">
                  {user.birthDate ? user.birthDate.substr(0, 10) : "N/A"}
                </label>
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
                <label className="py-3">
                  {user.createdDate ? user.createdDate.substr(0, 10) : "N/A"}
                </label>
              </div>
            </div>
            {user.isLockedOut ? (
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Lockout end
                  </label>
                  <label className="py-3">
                    {user.lockoutEnd.substr(0, 10) || "N/A"}
                  </label>
                </div>
              </div>
            ) : (
              <> </>
            )}
          </div>

          <hr className="mt-6 border-b-1 border-gray-400" />

          <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
            Contact Information
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Address
                </label>
                <label className="py-3">N/A</label>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Phone number
                </label>
                <label className="py-3">{user.phoneNumber || "N/A"}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

UserInfo.layout = Layout;
