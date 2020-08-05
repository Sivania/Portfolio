import React from "react";

import MainBlock from "./Blocks/MainBlock/MainBlock"
import ProjectBlock from "./Blocks/ProjectBlock/ProjectBlock"
import AboutBlock from "./Blocks/AboutBlock/AboutBlock"

function MainContent(){
    return (
    <div>
        <MainBlock/>
        <ProjectBlock/>
        <AboutBlock/>
    </div>
    )
}

export default MainContent