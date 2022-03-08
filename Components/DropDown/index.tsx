import React, { ReactElement } from "react";
import Popper from "popper.js";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/user";
import router from "next/router";
import { useSelector } from "react-redux";
interface Props {}

export default function userDropDown({}: Props): ReactElement {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const handleLogout = () => {
    // localStorage.removeItem("jobbucket");
    dispatch(userActions.logout());
    router.push("/");
  };
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef<HTMLAnchorElement>();
  const popoverDropdownRef = React.createRef<HTMLDivElement>();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-end",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="text-gray-600 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-gray-300 inline-flex items-center justify-center rounded-full">
            <img
              src={
                user.avatarUrl ||
                "http://simpleicon.com/wp-content/uploads/user1.png"
              }
              alt="admin"
              className="w-full rounded-full align-middle border-none shadow-lg"
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg"
        }
        style={{ minWidth: "12rem" }}
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent "
          }
          onClick={handleLogout}
        >
          Logout
        </a>
      </div>
    </>
  );
}
