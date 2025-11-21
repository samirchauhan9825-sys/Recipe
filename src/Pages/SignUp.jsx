import React from "react";

function SignUp() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 text-center">
            <h5
              className="fw-bold text-danger mt-3"
              style={{ fontFamily: "cursive" }}
            >
              Kochina
            </h5>
            <h3 className="my-4 fw-bold">Sign In to Kocina</h3>
            <div>
              <span
                className="fa fa-facebook p-3 border border-2 border-info rounded-pill me-3 btn-outline-primary"
                style={{ color: "blueviolet" }}
              />
              <span className="fa fa-google-plus p-3 text-danger border border-2 border-danger rounded-pill btn-outline-danger" />
              <span
                className="fa fa-linkedin p-3 border border-2 border-info rounded-pill ms-3 btn-outline-primary"
                style={{ color: "blueviolet" }}
              />
            </div>
            <p className="my-4 fs-5" style={{ color: "gray" }}>
              Or use your email for registration:
            </p>
            <form>
              <p style={{ color: "gray" }}>Full Name</p>
              <input
                type="text"
                placeholder="Tom Atkins"
                className="w-75 p-2 text-center border border-2 rounded-pill mb-4"
              />
              <p style={{ color: "gray" }}>Email</p>
              <input
                type="email"
                placeholder="tom@company.com"
                className="w-75 p-2 text-center border border-2 rounded-pill"
              />
              <p className="mt-4" style={{ color: "gray" }}>
                Password
              </p>
              <input
                type="password"
                id
                placeholder="Min 8 characters"
                className="w-75 p-2 text-center border border-2 rounded-pill mb-3"
              />
              <br />
              <a href="#" style={{ color: "gray" }}>
                Forgot your password?
              </a>
              <br />
              <button className="mt-4 p-3 border-0 text-light bg-danger rounded-pill ps-5 pe-5">
                Sign in
              </button>
              <p className="mt-2">
                By signing up you agree to our{" "}
                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="text-danger"
                >
                  terms
                </a>{" "}
                of service.
              </p>
            </form>
          </div>
          <div
            className="col-lg-6 col-md-12 mt-3"
            style={{
              height: 680,
              backgroundColor: "rgb(85,85,85)",
              borderRadius: 20,
            }}
          >
            <div className="p-5 text-center">
              <h2 className="text-white" style={{ marginTop: 200 }}>
                Welcome Back
              </h2>
              <p className="text-white mt-3">
                Already signed up, enter your details and start cooking your
                first meal today
              </p>
              <button className="my-4 p-3 border-0 bg-white rounded-pill ps-5 pe-5">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
