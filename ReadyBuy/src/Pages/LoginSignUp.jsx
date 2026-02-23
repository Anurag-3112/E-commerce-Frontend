import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './CSS/LoginSignUp.css'


const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      console.log("Login Data:", {
        email: formData.email,
        password: formData.password,
      });
      alert("Login Successful (Demo)");
    } else {
      console.log("Signup Data:", formData);
      alert("Signup Successful (Demo)");
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-light" style={{ minHeight: "80vh" }}>
      <div
        className="card shadow p-4"
        style={{ width: "420px", borderRadius: "12px" }}
      >
        <h2 className="text-center mb-4 fw-bold">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required={!isLogin}
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {isLogin && (
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="remember" />
              <label className="form-check-label" htmlFor="remember">
                Remember me
              </label>
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100 fw-bold">
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <div className="text-center mt-3">
          {isLogin ? (
            <p className="mb-0">
              Don't have an account?{" "}
              <span
                style={{ cursor: "pointer", color: "#b89668", fontWeight: "600" }}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p className="mb-0">
              Already have an account?{" "}
              <span
                style={{ cursor: "pointer", color: "#b89668", fontWeight: "600" }}
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
