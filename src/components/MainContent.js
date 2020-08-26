import React from "react";

import NavBar from "./NavBar/NavBar"
import MainBlock from "./Blocks/MainBlock/MainBlock"
import ProjectBlock from "./Blocks/ProjectBlock/ProjectBlock"
import AboutBlock from "./Blocks/AboutBlock/AboutBlock"
import ContactBlock from "./Blocks/ContactBlock/ContactBlock";
import Footer from "./Footer/Footer"
function MainContent(){
    return (
    <div>
        <NavBar/>
        <MainBlock/>
        <ProjectBlock/>
        <AboutBlock/>
        <ContactBlock/>
        <Footer/>
    </div>
    )
}

export default MainContent