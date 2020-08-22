import React from "react";
import './BlockHeader.css';

class AboutBlockView extends React.Component
{
    render(props) { 
        return (
            <section style={{backgroundColor: this.props.color}} className="blockHeader">
                <h1 className="blockHeaderTitle">{this.props.title}</h1>
                <h2 className="blockHeaderDescribtion"> {this.props.describtion}</h2>
            </section>
        )
    }
}



export default AboutBlockView;