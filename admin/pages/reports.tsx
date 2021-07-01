import React, { ReactElement, useEffect, useState } from "react";
import Layout from "../Components/Layout";
import Expanded from "../Components/Expand";
import Axios from "axios";
import { useSelector } from "react-redux";

export default function Reports() {
  const [resolveFilter, setFilter] = useState(false);
  const [reports, setReports] = useState([]);
  const [resoveSuccess, setResolve] = useState(false);
  const token = useSelector((state: any) => state.user.token);

  useEffect(() => {
    async function fetchdata() {
      setResolve(false)
      await Axios.post(
        "http://128.199.64.229:5008/api/report/listReport",
        {
          filters: [
            {
              property: "isResolved",
              value: resolveFilter,
              comparison: "==",
            },
          ],
        },
        {
          headers: {
            Authorization:
              "Bearer " +
              token,
          },
        }
      )
        .then((res) => {
          setReports(res.data.data);
        })
        .catch((error) => {
          alert(error);
        });
    }
    fetchdata();
  }, [resolveFilter, resoveSuccess]);

  return (
    <div>
      <div className="pt-4 md:pt-32">
        <button onClick={() => setFilter(!resolveFilter)}>change filter</button>
        {reports.map((report, key) => (
          <Expanded
            setResolveSucccess = {setResolve}
            key={key}
            isResolved={report.isResolved}
            id={report.id}
            fullName={report.user.fullName}
            content={report.content}
          />
        ))}
      </div>
    </div>
  );
}

Reports.layout = Layout;
