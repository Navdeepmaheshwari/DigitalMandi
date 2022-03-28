import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../Components.css";
export const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",

    password: "",
  });
  let history = useHistory();
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/merchant/mlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });
    const data = await res.json();
    if (data.status === 400 || !data) {
      window.alert("Invalid Credential");
    } else {
      window.alert("Login Successfull");
      localStorage.setItem("token", data.authtoken);
      // history.push("/");
    }
  };
  return (
    <>
      <div className="container ">
        <div className="row ">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              <div className="card-body p-4 p-sm-5">
                <h3 className="card-title text-center mb-4  fs-5">Login</h3>
                <form method="POST">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      // onChange={handleInputs}
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="email">Email address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      // onChange={handleInputs}
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                    <label htmlFor="password">Password</label>
                  </div>

                  <div className="d-grid mb-2">
                    <button
                      className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                      type="submit"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>

                  <a className="d-block text-center mt-2 small" href="#">
                    Haven't an account? Register
                  </a>

                  <hr className="my-4" />

                  <div className="d-grid mb-2">
                    <button
                      className="btn btn-lg btn-google btn-login fw-bold text-uppercase"
                      type="submit"
                    >
                      <i className="fab fa-google me-2"></i> Login with Google
                    </button>
                  </div>

                  <div className="d-grid">
                    <button
                      className="btn btn-lg btn-facebook btn-login fw-bold text-uppercase"
                      type="submit"
                    >
                      <i className="fab fa-facebook-f me-2"></i> Login with
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
