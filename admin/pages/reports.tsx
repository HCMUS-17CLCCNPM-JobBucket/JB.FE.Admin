import React, { ReactElement, useEffect, useState } from "react";
import Layout from "../Components/Layout";
import Expanded from "../Components/Expand";
import Axios from "axios";

export default function Reports() {
  const [resolveFilter, setFilter] = useState(false);
  const [reports, setReports] = useState([]);
  const [resoveSuccess, setResolve] = useState(false);

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
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbIkd1ZXN0IiwiVXNlciIsIkVtcGxveWVyIiwiQ3VzdG9tZXJDYXJlIiwiQWRtaW4iXSwiZW1haWwiOiJqYmFkbWluQGpvYmJ1Y2tldC5sb2NhbCIsIm5hbWVpZCI6IjEiLCJuYmYiOjE2MjUwNDcxNTUsImV4cCI6MTYyNTA1NDM1NSwiaWF0IjoxNjI1MDQ3MTU1LCJpc3MiOiJqb2JidWNrZXQuY29tIiwiYXVkIjoiam9iYnVja2V0LmNvbSJ9.cyPBm-k8UMZhE7dB7wrRcQuWjQcquBHkB5SLldZKM78",
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
