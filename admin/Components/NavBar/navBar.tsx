import React, { ReactElement } from "react";
import DropDown from "../DropDown/userDropDown";

interface Props {}

export default function navBar({}: Props): ReactElement {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4 md:bg-gray-900">
        <div className="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <p
            className="text-white text-sm uppercase hidden md:inline-block font-semibold"
          >
            Admin Dashboard
          </p>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <DropDown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
