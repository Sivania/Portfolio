import React from "react";

class AboutBlockView extends React.Component
{
    render(props) { 
        return (
            <div className="aboutBlock">
                This is a about block {this.props.showingPage}
            </div>
        )
    }
}



export default AboutBlockView;