import React from "react";

function Contac() {
  return (
    <>
      {/* contact section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h1 className="display-3 my-4">Hello, what's on your mind?</h1>
            <p style={{ color: "gray", fontSize: "1.1rem" }}>
              Credibly administrate market positioning deliverables rather than
              clicks-and-mortar methodologies. Proactively formulate
              out-of-the-box technology with clicks-and-mortar testing
              procedures. Uniquely promote leveraged web-readiness for standards
              compliant value. Rapidiously pontificate cooperative mindshare via
              maintainable applications.
            </p>
            <button className="p-2 bg-danger text-light border-0 rounded-pill my-4 ps-3 pe-3">
              Schedule a call
            </button>
          </div>
          <div className="col-lg-6 col-md-12">
            <form className="bg-danger rounded p-5">
              <label htmlFor="name" className="text-light">
                Name
              </label>
              <br />
              <input
                type="text"
                id="name"
                className="w-100 p-1 my-2 bg-transparent rounded-pill border border-2 border-white p-2"
                style={{ outline: "none" }}
              />
              <label htmlFor="name" className="text-light mt-2">
                Email
              </label>
              <br />
              <input
                type="email"
                id="email"
                className="w-100 p-1 my-2 bg-transparent rounded-pill border border-2 border-white p-2"
              />
              <label htmlFor="msg" className="text-light mt-2">
                Message
              </label>
              <br />
              <textarea
                name
                id="msg"
                className="w-100 my-2 bg-transparent rounded border border-2 border-white"
                style={{ height: 90 }}
                defaultValue={""}
              />
              <div className="text-center">
                <button className="p-2 mt-3 rounded-pill bg-warning border-0 ps-3 pe-3">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contac;
