import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";


export default function MyModal(props) {
  let [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state: any) => state.user);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  async function UnlockUser() {
    await Axios.put(
      "http://128.199.64.229:5008/api/user/" + props.id + "/unlock",
      {},
      {
        headers: {
          Authorization:
            "Bearer " +
            user.token,
        },
      }
    )
      .then((res) => {
        if ((res.status = 200)) {
          props.unlocksuccess(true);
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
        className="h-10 px-10 text-white transition-colors duration-150 bg-green-500 rounded-lg focus:outline-none hover:bg-green-600"
      >
        <i className='bx bxs-lock-open bx-xs mr-2' ></i>
        UNLOCK
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
                  Unlock User
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Do you want to unlock {props.fullname}?
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={UnlockUser}
                  >
                    Yes
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
