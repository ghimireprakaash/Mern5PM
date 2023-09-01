import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeComponents from "../pages/HomeComponent";
import LoginComponents from "../pages/auth/LoginComponents";
import RegisterComponents from "../pages/auth/RegisterComponents";
import RouteMiddleware from "../middleware/RouteMiddleware";
import DashboardComponents from "../admin/pages/DashboardComponents";
import PageNotFound from "../errors/PageNotFound";
import RoleMiddleware from "../middleware/RoleMiddleware";
import UserComponent from "../admin/pages/UserComponents";
import CategoryComponents from "./../admin/pages/CategoryComponents";

export default function RouterComponents() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={HomeComponents} />
        <Route path="/login" Component={LoginComponents} />
        <Route path="/register" Component={RegisterComponents} />
        <Route Component={RouteMiddleware}>
          <Route path="/dashboard" Component={DashboardComponents} />
          <Route Component={RoleMiddleware}>
            <Route path="/manage-users" Component={UserComponent} />
            <Route path="/manage-category" Component={CategoryComponents} />
          </Route>
        </Route>
        <Route path="*" Component={PageNotFound} />
      </Routes>
    </>
  );
}
