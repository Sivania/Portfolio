import React from "react"
import "./ProjectEntry.css"
import GitHub from "..\\..\\Images\\GitHub-Mark-32px.png"

class ProjectEntry extends React.Component
{
    render(props) { 
        let title
        let intro
        let goal
        let result
        let technologies
        let img
        let githubLink
        if (this.props.id === 0){
            title = "Personal Portfolio Website"
            intro = "You are currently looking at my portfolio website project"
            goal = "The goal of this project was to make a responsive portfolio showcasing my best projects and personality. This way, employers and collaborators will get a glimpse of who I am and my capabilities. I also wanted to learn about web development and web design to be able to make websites for the world to see."
            result = "The result is a colorful personal responsive website that can be shown on most devices and able to be expanded upon to hold additional content. I learned about basic HTML, CSS and Javascript development in React and responsive web design."
            technologies = "Built with HTML, CSS and Javascript in React."
            img = "https://pictureofday.files.wordpress.com/2009/01/nasar3107_1000x10001.jpg"
            githubLink = "https://github.com/Sivania/Portfolio"
        }
        else if (this.props.id === 1){
            title = "TeamBoard Standalone Application"
            intro = "TeamBoard is a digital dashboard for teams to request assistance or post updates. It can for instance be used by software development teams."
            goal = "The dashboard will run on a big monitor in the office where developers can post from their own computer. A post can for instance be a request for assistance. I wanted to learn about the client-server architecture and wanted this to be a standalone application, so anybody can try an application of mine without any complicated setup."
            result = "This application is a functional standalone ready to be run on a Windows 8/10 computer. I gained experience with developing a full application with a server and multiple clients and with multi-threading."
            technologies = "Built with .NET WPF with C# using MVVM pattern, MSSQL, client-server architecture and EntityFramework."
            img = "https://pictureofday.files.wordpress.com/2009/01/nasar3107_1000x10001.jpg"
            githubLink = "https://github.com/Sivania/TeamBoard"
        }

        return (
            <div className={"ProjectEntry"}>
                <div className={"ProjectArticle"}>
                    <div>
                        <div className="ProjectTitle">{title}</div>
                        <div className="ProjectText">{intro}</div>
                        <div className="ProjectText">{goal}</div>
                        <div className="ProjectText">{result}</div>
                        <div className="ProjectText">{technologies}</div>
                        <div className="ProjectButtons">
                            <button href="Resume.pdf" className="ProjectButton">GitHub</button>
                            <button className="ProjectButton">Video </button>
                        </div>

                    </div>
                </div>
                <img className="ProjectImage" src={img}/>
            </div>
        )
    }
}

export default ProjectEntry

