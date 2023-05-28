import React from "react";
import imgsorce from "../assets/60111.jpg";

function Content(){
    return(
        <>
            <div className="image-wrapper">
                <h2>"logo"</h2>
            </div>
            <div className="containers image-wrapper container-behind">
                <h2>Shorts Hack with "Your Name"</h2>
                <img className="imgsize" src={imgsorce} alt="your pic"/>
                <h5>Teacher</h5>
                <h5>"Logo"</h5>
                
            </div>
        </>
        
    );
}

export default Content;