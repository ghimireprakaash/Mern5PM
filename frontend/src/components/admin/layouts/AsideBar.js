import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./../../../App";

export default function AsideBar() {
  const user = useContext(UserContext);
  if (!user)
    return (
      <>
        <h1>Loading....</h1>
      </>
    );

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
        <div
          className="offcanvas-md offcanvas-end bg-body-tertiary"
          tabIndex={-1}
          id="sidebarMenu"
          aria-labelledby="sidebarMenuLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="sidebarMenuLabel">
              MERN News
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              data-bs-target="#sidebarMenu"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
            <h1>{user && user.name}</h1>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  to="/dashboard"
                  className="nav-link d-flex align-items-center gap-2 active"
                  aria-current="page"
                >
                  <i className="bi bi-airplane-engines-fill"></i>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/dashboard"
                  className="nav-link d-flex align-items-center gap-2 active"
                  aria-current="page"
                >
                  <i className="bi bi-airplane-engines-fill"></i>
                  Manage Users
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/dashboard"
                  className="nav-link d-flex align-items-center gap-2 active"
                  aria-current="page"
                >
                  <i className="bi bi-airplane-engines-fill"></i>
                  Manage Category
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/dashboard"
                  className="nav-link d-flex align-items-center gap-2 active"
                  aria-current="page"
                >
                  <i className="bi bi-airplane-engines-fill"></i>
                  Manage News
                </Link>
              </li>
            </ul>
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
