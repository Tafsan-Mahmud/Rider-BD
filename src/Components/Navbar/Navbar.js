import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './The-Ride-Logo-02.png'

function Navbar() {
    return (
        <div>
            <div className="bg-dark shadow">
                <nav class="navbar navbar-expand-lg navbar-light container nav-color ">
                    <div class="container-fluid">
                        <Link class="navbar-brand nav-color" rel="noreferrer" to="/home">Home</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link active nav-color" aria-current="page" to="/GoToRide">Destination</Link>
                                </li>
                                <li class="nav-item ">
                                    <Link class="nav-link active nav-color" aria-current="page" to="/check">Contact</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active  nav-login-btn" aria-current="page" to="/login">log in</Link>
                                </li>
                            </ul>
                            <span style={{display:'flex'}} >
                                <h3 style={{marginRight:'3px'}}>Rider BD</h3>
                                <img style={{width:'50px' , borderRadius:'2px'}} src={logo} alt=""/>
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;