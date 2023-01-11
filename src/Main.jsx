import React from "react";
import videoBG from "./assets/bg.mp4";
import "./Main.css";

const Main = () => {
    return (
        <div className="main">
              <video src={videoBG} autoPlay loop muted/>
        </div>
    )
}


export default Main;