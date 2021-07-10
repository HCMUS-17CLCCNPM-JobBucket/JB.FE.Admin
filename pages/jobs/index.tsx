import React from "react";
import Tables from "../../Components/Jobtable";
import Layout from "../../Components/Layout";


export default function Jobs() {
  return (
    <>
      <div className="pt-4 md:pt-32">
        <Tables />
      </div>
    </>
  );
}

Jobs.layout = Layout;