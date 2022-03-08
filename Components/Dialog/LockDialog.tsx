import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Axios from "axios";
import { parse } from "node:path";
import { useSelector } from "react-redux";

export default function MyModal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state: any) => state.user);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  async function onLockUser() {

    await Axios.put(
      process.env.BASE_URL + "/userManagement/Lock/" + props.id,
      {},
      {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      }
    )
      .then((res) => {
        if (res.status == 200) {
          props.locksuccess(true);
          setIsOpen(false);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="h-10 px-10 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:outline-none hover:bg-red-600"
      >
        <i className="bx bxs-lock bx-xs mr-2"></i>
        LOCK
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Lock user {props.fullname}
                </Dialog.Title>
                {/* <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Choose how long the user be lockout?
                  </p>
                  <select
                    className="form-select block py-2 pl-2 mt-4"
                    onChange={(e) => handleDurationChange(e)}
                  >
                    {lockList.map((value, key) => (
                      <option key={value.value} value={value.value}>
                        {value.name}
                      </option>
                    ))}
                  </select>
                </div> */}
                <div className="mt-4 flex justify-between ">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-400 border border-transparent rounded-md hover:bg-green-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={onLockUser}
                  >
                    Lock
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-400 border border-transparent rounded-md hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
