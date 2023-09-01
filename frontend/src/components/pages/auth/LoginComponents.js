import React, { useState } from "react";
import HeaderComponents from "../../layouts/HeaderComponents";
import api from "./../../../config/api";

export default function LoginComponents() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const sendCredentials = { email, password };
    try {
      await api.post("login", sendCredentials).then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.userId);
          window.location.href = "/dashboard";
        } else {
          alert(res.data.message);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <HeaderComponents />

      <div className="container">
        <div className="mt-5">
          <form onSubmit={login}>
            <div className="mb-3 row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  id="staticEmail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-3">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
