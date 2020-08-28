import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar bigbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <li><Link className="navbar-brand brand" to="/">Zomaclone</Link></li>
                    </div>
                    <div className="collapse navbar-collapse right" id="myNavbar">
                        <ul className="nav navbar-nav justify-content-end">
                            <li><Link to="/details/:id" clasName="rightlink">List</Link></li>
                            <li><Link clasName="rightlink">Sign In</Link></li>
                            <li><Link clasName="rightlink">Create Account</Link></li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header