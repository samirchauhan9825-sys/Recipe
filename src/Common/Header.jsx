import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            {/* nav and banner section */}
            <div className="container">
                <div className="row">
        

                    <div className="col">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <a className="navbar-brand text-danger" href="#">Kochina</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">
                                        <Link className="nav-link ms-5" aria-current="page" to={"/"}>Home</Link>
                                        <Link className="nav-link ms-3" to="recipe">Recipe</Link>
                                        <Link className="nav-link ms-3" to="./search">Search</Link>
                                        <Link className="nav-link ms-3" to="./contac">Contact</Link>
                                    </div>
                                </div>
                                <nav className="navbar navbar-light">
                                    <form className="container-fluid justify-content-start">
                                        <button className="btn btn-sm bg-light me-3 rounded-pill ps-3 pe-3" type="button"><Link to="./signin" className="text-dark text-decoration-none">Sign
                                            In</Link></button>
                                        <button className="btn btn-sm bg-danger text-light rounded-pill ps-4 pe-4" type="button"><Link to="./signup" className="text-light text-decoration-none">Sign
                                            Up</Link></button>
                                    </form>
                                </nav>
                            </div>
                        </nav>
                    </div>
                </div>
                {/* nav and banner section */}
            </div>

        </>
    )
}

export default Header