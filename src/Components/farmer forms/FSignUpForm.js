import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../../Components.css";
export const SignUpForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  let history = useHistory();
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phoneNumber, password } = user;
    const res = await fetch("/api/farmer/fsignup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phoneNumber,
        password,
      }),
    });
    const data = await res.json();
    // if (data.status === 400 || !data) {
    // } else {
    // }
    if (data.success) {
      window.alert("Registration Successfull");
      history.push("/login");
    } else {
      window.alert("Invalid Credential");
    }
  };

  return (
    <>
      <div className="container ">
        <div className="row ">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              <div className="card-body p-4 p-sm-5">
                <h3 className="card-title text-center mb-4  fs-5">Register</h3>
                <form method="POST">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      onChange={handleInputs}
                      className="form-control"
                      id="name"
                      name="name"
                      value={user.name}
                      placeholder="myusername"
                      required
                    />
                    <label htmlFor="name">Name</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      onChange={handleInputs}
                      className="form-control"
                      id="email"
                      name="email"
                      value={user.email}
                      placeholder="name@example.com"
                    />
                    <label htmlFor="email">Email address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      onChange={handleInputs}
                      className="form-control"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={user.phoneNumber}
                      placeholder="1234567890"
                    />
                    <label htmlFor="phoneNumber">Phone Number</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      onChange={handleInputs}
                      className="form-control"
                      id="password"
                      name="password"
                      value={user.password}
                      placeholder="Password"
                    />
                    <label htmlFor="password">Password</label>
                  </div>

                  <div className="d-grid mb-2">
                    <button
                      className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                      type="submit"
                      onClick={PostData}
                    >
                      Register
                    </button>
                  </div>
                  <a className="d-block text-center mt-2 small" href="/login">
                    Have an account? Login
                  </a>

                  <hr className="my-4" />

                  <div className="d-grid mb-2">
                    <button
                      className="btn btn-lg btn-google btn-login fw-bold text-uppercase"
                      type="submit"
                    >
                      <i className="fab fa-google me-2"></i> Sign up with Google
                    </button>
                  </div>

                  <div className="d-grid">
                    <button
                      className="btn btn-lg btn-facebook btn-login fw-bold text-uppercase"
                      type="submit"
                    >
                      <i className="fab fa-facebook-f me-2"></i> Sign up with
                      Facebook
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
