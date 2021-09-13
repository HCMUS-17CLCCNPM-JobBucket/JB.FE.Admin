import { useFormik } from "formik";
import router from "next/router";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import Axios from "axios";
import { userActions } from "../redux/user";

import { filterActions } from "../redux/filter";
import React, { useEffect, useState } from "react";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .email("Invalid email format")
        .required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
    }),

    onSubmit: async (values) => {
      await Axios.post(process.env.BASE_URL + "/user/Login", {
        email: values.username,
        password: values.password,
      })
        .then((res) => {
          if (res.status == 200) {
            const payload = {
              token: res.data.data.token,
              avatarUrl: res.data.data.user.avatarUrl,
            };
            dispatch(userActions.login(payload));
            dispatch(filterActions.changeLocked(false));
            router.push("/users");
          }
        })
        .catch((error) => {
          setError("Error");
        });
    },
  });
  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-gray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('register_bg_2.png')",
            }}
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <h1 className="text-2xl uppercase text-gray-600 font-bold  mt-4 mb-12 text-center">
                      Log in to Admin <i className="bx bxs-user"></i>
                    </h1>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          id="username"
                          name="username"
                          value={formik.values.username}
                          onChange={formik.handleChange}
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Your Email"
                          required
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          id="password"
                          placeholder="Your Password"
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          type="password"
                          required
                        />
                      </div>
                      <div className="text-center mt-6">
                        <button
                          type="submit"
                          className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
