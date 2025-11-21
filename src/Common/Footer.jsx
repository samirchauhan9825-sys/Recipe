import React from 'react'

function Footer() {
    return (
        <>
            {/* footer section  */}
            <div className="container footer">
                <div className="row">
                    <h5 className="text-danger mt-3">Kochina</h5>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <a href="#">Presentations</a><br />
                        <a href="#">Professionals</a><br />
                        <a href="#">Stores</a><br />
                        <p>Made by Unbounde in Guatemala City</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <a href="#">Webinars</a><br />
                        <a href="#">Workshops</a><br />
                        <a href="#">Stores</a>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <a href="#">Our Initiatives</a><br />
                        <a href="#">Giving Back</a><br />
                        <a href="#">Communities</a>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <a href="#">Contact Form</a><br />
                        <a href="#">Work With Us</a><br />
                        <a href="#">Visit Us</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer