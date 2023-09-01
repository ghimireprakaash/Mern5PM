import React, { useState } from "react";
import HeaderComponents from "../../layouts/HeaderComponents";
import api from "../../../config/api";

export default function RegisterComponents() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");

  const register = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("gender", gender);
    formData.append("image", image);

    api
      .post("/user", formData)
      .then((res) => {
        if (res.data.message === true) {
          alert("User created successfully.");
          setName("");
          setEmail("");
          setPassword("");
          setGender("");
          setImage(null);
        } else {
          alert("User not created.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <HeaderComponents />

      <div className="container">
        <div className="mt-5">
          <form onSubmit={register}>
            <div className="mb-3 row">
              <label htmlFor="Name" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-3">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-3">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="staticEmail"
                  value={email}
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
                  required
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="gender" className="col-sm-2 col-form-label">
                Gender
              </label>
              <div className="col-sm-3">
                <select
                  required
                  type="text"
                  className="form-control"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">---Select Gender---</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="image" className="col-sm-2 col-form-label">
                Image
              </label>
              <div className="col-sm-3">
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  value={image}
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
