import React from "react";
import Tables from "../Components/CardTable";
import Layout from "../Components/Layout";


export default function UsersTable() {
  return (
    <>
      <div className="pt-4 md:pt-32">
        <Tables />
      </div>
    </>
  );
}

UsersTable.layout = Layout;