import React, { useEffect, useState } from "react";
import router from "next/router";
import LockDialog from "../../Dialog/LockDialog";
import UnlockDialog from "../../Dialog/UnlockDialog";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../atoms/Loading";
import ListEmpty from "../../atoms/ListEmpty";

export default function index({
  hasMore,
  loading,
  users,
  setPage,
  setActionSuccess,
}) {
  const [isLoading, setIsLoading] = useState(loading);
  const [userValues, setUserValues] = useState(users);
  const [hasMoreValue, setHasMoreValue] = useState(hasMore);
  useEffect(() => {
    if (isLoading !== loading) {
      setIsLoading(loading);
    }
    if (users !== userValues) {
      setUserValues(users);
    }
    if (hasMore !== hasMoreValue) {
      setHasMoreValue(hasMore);
    }
  }, [loading, users, hasMore]);

  const fetchMoreData = () => {
    setPage();
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : users.length === 0 && loading === false ? (
        <ListEmpty message="No result match" />
      ) : (
        <InfiniteScroll
          dataLength={users.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Loading />}
          scrollableTarget="scrollableDiv"
        >
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Full Name
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Email
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Phone Number
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 ">
                  Lock Status
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={index}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center cursor-pointer">
                    <img
                      className="h-12 w-12 bg-white rounded-full border"
                      alt="avatar"
                      src={
                        item.avatarUrl ||
                        "http://simpleicon.com/wp-content/uploads/user1.png"
                      }
                    ></img>
                    <span className="ml-3 font-bold text-gray-700 ">
                      {item.name}
                    </span>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    {item.email || "N/A"}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    {item.phoneNumber || "N/A"}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    {item.isLockedOut ? (
                      <UnlockDialog
                        id={item.id}
                        fullname={item.name}
                        unlocksuccess={setActionSuccess}
                      ></UnlockDialog>
                    ) : (
                      <LockDialog
                        id={item.id}
                        fullname={item.name}
                        locksuccess={setActionSuccess}
                      ></LockDialog>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </InfiniteScroll>
      )}
      {!hasMore && <p className="text-center">No more data</p>}
    </>
  );
}
