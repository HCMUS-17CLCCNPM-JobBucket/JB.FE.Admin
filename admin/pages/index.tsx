import React from "react";
import { useFormik } from "formik";
import router from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import Axios from "axios";
import { userActions } from "../redux/user";

export default function LoginScreen() {
  const dispatch = useDispatch();
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
      await Axios.post("http://128.199.64.229:5008/api/user/Login", {
        email: values.username,
        password: values.password,
      })
        .then((res) => {
          if (res.status == 200) {
            const payload = {
              token: res.data.data.token,
            };
            dispatch(userActions.login(payload));
            router.push("/users");
          }
        })
        .catch((error) => {
          alert(error);
        });
    },
  });
  return (
    <>
      <div className="h-screen flex bg-gray-500">
        <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
          <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
            Log in to Admin <i className="bx bxs-user"></i>
          </h1>

          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                type="email"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="password"
                placeholder="Your Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                type="password"
              />
            </div>

            <div className="flex justify-center items-center mt-6">
              <button
                type="submit"
                className="h-10 px-10 text-white transition-colors duration-150 bg-gray-500 rounded-lg focus:outline-none hover:bg-gray-600"
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
