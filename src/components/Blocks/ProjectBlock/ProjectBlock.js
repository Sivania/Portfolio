import React from "react";
import './ProjectBlock.css';
import BlockHeader from "../BlockHeader"
import ProjectEntry from "./ProjectEntry"
class ProjectBlock extends React.Component
{
    render() { 
        return (
            <section id="Projects">
                <BlockHeader color={"#19c9d1"} title={"Projects"} describtion={"My best projects"} />
                    <section className="projectBlockMainContent">
                        <ProjectEntry id={0} />
                        <ProjectEntry id={1} />
                    </section>
            </section>
        )
    }
}

export default ProjectBlock