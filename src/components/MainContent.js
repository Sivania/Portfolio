import React from "react";

import MainBlock from "./Blocks/MainBlock/MainBlock"
import ProjectBlock from "./Blocks/ProjectBlock/ProjectBlock"
import AboutBlock from "./Blocks/AboutBlock/AboutBlock"
import ContactBlock from "./Blocks/ContactBlock/ContactBlock";

function MainContent(){
    return (
    <div>
        <MainBlock/>
        <ProjectBlock/>
        <AboutBlock/>
        <ContactBlock/>
    </div>
    )
}

export default MainContent