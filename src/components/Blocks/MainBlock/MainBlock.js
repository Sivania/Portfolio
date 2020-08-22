import React from "react";
import './MainBlock.css';

class MainBlock extends React.Component
{
    render() { 
        return (
            <section className="MainBlockMainContent" id="Home">
                <div className="Welcome"> {this.GreetingMessage()}, I am Emil </div>
                <div className="Introduction">Danish Software Engineering Student</div>
            </section>
        )
    }

    GreetingMessage(){
        var d = new Date();
        var hours = d.getHours();
        if (hours > 16)
            return "Good evening"
        else if (hours > 12)
            return "Good afternoon"
        return "Good morning"
    }
}

export default MainBlock;