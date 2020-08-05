import React from "react";
import './ProjectBlock.css';

import Project from "./Project";
class ProjectBlock extends React.Component
{
    render() { 
        return (
            <div className="projectBlock">
                This is a project block
                <div className="projects">
                    <Project name="Project1" describtion="fwafawf"/>
                </div>
            </div>
        )
    }
}

export default ProjectBlock