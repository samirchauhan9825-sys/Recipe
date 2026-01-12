import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            {/* footer section  */}
            <div className="container footer">
                <div className="row">
                    <h5 className="text-danger mt-3">Kochina</h5>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <Link to={"/category"}>Recipes</Link><br />
                        <p>Made by Unbounde in Guatemala City</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <Link to={"/"}>Home</Link><br />
                        </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <Link to={"/search"}>Find Recipe</Link><br />
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <Link to={"/contac"}>Contact Us</Link><br />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer