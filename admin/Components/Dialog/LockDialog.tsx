import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Axios from "axios";
import { parse } from "node:path";
import { useSelector } from "react-redux";

export default function MyModal(props) {
  // add a day
  const [isOpen, setIsOpen] = useState(false);
  const token = useSelector((state: any) => state.user.token);
  const [lockList, setLockList] = useState([
    { name: "7 days", value: 7 },
    { name: "1 months", value: 30 },
    { name: "6 months", value: 180 },
  ]);

  const [duaration, setDuaration] = useState("7");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleDurationChange(e) {
    setDuaration(e.target.value);
  }

  async function onLockUser() {
    let date = new Date();
    // add a day
    date.setDate(date.getDate() + parseInt(duaration));

    await Axios.put(
      "http://128.199.249.40:5008/api/user/" + props.id + "/lock",
      { lockUntil: date.toISOString() },
      {
        headers: {
          Authorization:
            "Bearer " +
            token,
        },
      }
    )
      .then((res) => {
        if (res.status == 200) {
          alert("lock success");
          props.setlock(date.getTime() - Date.now());
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
        <i className='bx bxs-lock bx-xs mr-2' ></i>
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
                  Lock user
                </Dialog.Title>
                <div className="mt-2">
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
                </div>
                <div className="mt-4 flex justify-between ">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={onLockUser}
                  >
                    Lock {props.id}
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
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
