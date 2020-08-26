import React from "react"
import './MainBlock.css'
import SingleArrow from "./singleArrow.png"
import DoubleArrow from "./doubleArrow.jpg"

class MainBlock extends React.Component
{
    render() { 
        return (
            <section className="MainBlockMainContent" id="Home">
                <div className="MainTop">
                    <div className="Welcome0"> {this.GreetingMessage()}, I am Emil </div>
                    <div className="Welcome1"><p>Danish Software Engineering Student</p></div>
                </div>

                <div className="MainBottom">
                    <div className="Welcome2">Welcome to my portfolio</div>
                    <a className="Arrow" href="#Projects" ></a>
                </div>
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