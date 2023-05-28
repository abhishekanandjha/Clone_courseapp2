import React from "react";
import Header from "./Header";
// import Content from "./Content";
import Lowercontent from "./Lowercontent";
import Video from "./Video";
import Videocontent from "./Videocontent";
import Footer from "./Footer";



function App(){
    return (
        <>
        <div className="container">
            <div className="content">
            <Header/>
            {/* <Content/> */}
            <Video/>
            <Videocontent/>
            <Lowercontent/>
            <Footer/>
            </div>
        </div>
        </>
    )
}

export default App;