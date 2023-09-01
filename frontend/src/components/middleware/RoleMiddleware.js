import React, { useContext } from "react";
import { UserContext } from "./../../App";
import { Outlet } from "react-router";

export default function RoleMiddleware() {
  const user = useContext(UserContext);
  if (user.name) {
    if (user.role !== "admin") {
      window.location.href = "/dashboard";
    } else {
      return <Outlet />;
    }
  }
}
