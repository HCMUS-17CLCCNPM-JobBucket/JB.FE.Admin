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

export default function JobInfo(props) {
  const id = props.id;
  const users = useSelector((state: any) => state.user);
  const [job, setJob] = useState<any>({});

  useEffect(() => {
    async function fetchdata() {
      await Axios.get(process.env.BASE_URL + "/job/" + id, {
        headers: {
          Authorization: "Bearer " + users.token,
        },
      })
        .then((res) => {
          setJob(res.data.data);
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
            <h6 className="text-gray-800 text-xl font-bold">Jobs List</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0 ">
          <div className="p-8 flex flex-col gap-6">
            <div className="w-full">
              <div className="col-span-2">
                <p className="text-2xl font-bold">{job.title}</p>
                <p className="text-lg text-gray-600">
                  ${job.minSalary} - ${job.maxSalary}
                </p>
                <div className="text-gray-500">Expires in {job.expireDate}</div>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-x-8">
              <div>
                <p className="text-lg font-bold">City</p>
                <p className="text-gray-600">{job.city}</p>
              </div>
              {/* <div>
                <p className="text-lg font-bold">Category</p>

                <p className="text-gray-600">{job.category.name}</p>
              </div> */}
              <div>
                <p className="text-lg font-bold">Job Type</p>
                <p className="text-gray-600">{job.jobForm}</p>
              </div>
              <div>
                <p className="text-lg font-bold">Gender</p>
                <p className="text-gray-600">{job.gender}</p>
              </div>
              <div>
                <p className="text-lg font-bold">Posted Date</p>
                <p className="text-gray-600">{job.createdDate}</p>
              </div>
            </div>
            {job.description !== "" && (
              <div>
                <p className=" font-semibold">DESCRIPTION</p>

                <div dangerouslySetInnerHTML={{ __html: job.description }} />
              </div>
            )}
            {job.requirement !== "" && (
              <div>
                <p className=" font-semibold">REQUIREMENT</p>

                <div dangerouslySetInnerHTML={{ __html: job.requirement }} />
              </div>
            )}
            {job.experience !== "" && (
              <div>
                <p className=" font-semibold">EXPERIENCE</p>

                <div dangerouslySetInnerHTML={{ __html: job.experience }} />
              </div>
            )}
            {job.benefit !== "" && (
              <div>
                <p className=" font-semibold">BENEFIT</p>

                <div dangerouslySetInnerHTML={{ __html: job.benefit }} />
              </div>
            )}

            <div>
              <p className=" font-bold">LOCATION</p>
              <p>{job.address}</p>
            </div>
            {/* <div>
              <p className=" font-bold">COMPANY</p>
              <p>{job.employer.fullName}</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

JobInfo.layout = Layout;
