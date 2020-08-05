import React from "react";
import './MainBlock.css';

class MainBlock extends React.Component
{
    render() { 
        return (
            <div className="mainBlock">
                This is a main block {this.GreetingMessage()}
            </div>
        )
    }

    GreetingMessage(){
        const hours = Date.getHours;
        if (hours > 16)
            return "Good evening"
        else if (hours > 12)
            return "Good afternoon"
        return "Good morning"
    }
}



export default MainBlock;