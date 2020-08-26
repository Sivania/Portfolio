import React from "react";
import './NavBar.css';
import BurgerIcon from "./burger.png"
import PDF from '../../Resume.pdf';

class NavBar extends React.Component
{
  constructor() {
    super();
    this.state = {
      toggleNavBar: "Hide"
    }
  this.toggleNavBar = this.toggleNavBar.bind(this);
  }

  render() { 
    return (
            <nav>
                <ul class="NavBar">
                    <li className={this.state.toggleNavBar}><a className="Blue" href="#Home">HOME</a></li>
                    <li className={this.state.toggleNavBar}><a className="Pink" href="#Projects">PROJECTS</a></li>
                    <li className={this.state.toggleNavBar}><a className="Beige" href="#About">ABOUT</a></li>
                    <li className={this.state.toggleNavBar}><a className="Pink" href="#Contact">CONTACT</a></li>
                    <li className={this.state.toggleNavBar}><a className="Blue" href={PDF} target="_blank">RESUME</a></li>
                    <li className="Icon"><a onClick={this.toggleNavBar}><img className="BurgerIcon" src={BurgerIcon}/></a></li>
                </ul>
            </nav>
        )
  }

  toggleNavBar(){
    if(this.state.toggleNavBar === "Hide"){
        this.setState(prevstate => {
          return {
            toggleNavBar: "Show"
          }
      })
    }
    else if (this.state.toggleNavBar === "Show")
    this.setState(prevstate => {
      return { toggleNavBar: "Hide" }
    })
  }
}



export default NavBar;