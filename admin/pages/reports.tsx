import React, { ReactElement, useEffect, useState } from "react";
import Index from "./index";
import Expanded from "../Components/Expand";
import Axios from "axios";


export default function Reports() {
  
  const [resolveFilter, setFilter] = useState(false);
  const [reports, setReports] = useState([
    {
      id: 1,
      content: "",
      user: {
        id: 1,
        avatarUrl: "",
        fullName: "",
        email: "",
      },
      createdDate: "",
      resolvedDate: "",
      isResolved: false,
      tags: [],
    },
  ]);

  useEffect(() => {
    async function fetchdata() {
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
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbIkd1ZXN0IiwiVXNlciIsIkVtcGxveWVyIiwiQ3VzdG9tZXJDYXJlIiwiQWRtaW4iXSwiZW1haWwiOiJqYmFkbWluQGpvYmJ1Y2tldC5sb2NhbCIsIm5hbWVpZCI6IjEiLCJuYmYiOjE2MjQ3MTM3MTMsImV4cCI6MTYyNDcyMDkxMywiaWF0IjoxNjI0NzEzNzEzLCJpc3MiOiJqb2JidWNrZXQuY29tIiwiYXVkIjoiam9iYnVja2V0LmNvbSJ9.aymWYVLDsoUQuSf3YtJW2qxi82HdZaN3EekftBGjee8",
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
  }, [resolveFilter]);

  return (
    <div>
      <div className="pt-4 md:pt-32">
        <button onClick={() => setFilter(!resolveFilter)}>change filter</button>
        {reports.map((report, key) => (
          <Expanded
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

Reports.layout = Index;