import React from "react";
import "./Logo.css";
import logo from "../Assets/logo.png";

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="logo" className="logo" />
        </div>
    );
};

export default Logo;