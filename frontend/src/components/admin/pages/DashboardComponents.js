import React from "react";
import TopHeader from "../layouts/TopHeader";
import AsideBar from "../layouts/AsideBar";

export default function DashboardComponents() {
  return (
    <div>
      <TopHeader />
      <div className="container-fluid">
        <div className="row">
          <AsideBar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h1>Dashboard</h1>
          </main>
        </div>
      </div>
    </div>
  );
}
