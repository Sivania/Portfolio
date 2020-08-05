import React from "react"

class Project extends React.Component
{
    render(props) { 
        return (
            <div className="Project">
                {this.props.name}
            </div>
        )
    }
}

export default Project