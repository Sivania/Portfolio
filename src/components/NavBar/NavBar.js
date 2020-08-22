import React from "react";
import './NavBar.css';
import BurgerIcon from "..\\Images\\BurgerIcon.png"

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
                    <li className={this.state.toggleNavBar}><a href="#Home">HOME</a></li>
                    <li className={this.state.toggleNavBar}><a href="#Projects">PROJECTS</a></li>
                    <li className={this.state.toggleNavBar}><a href="#About">ABOUT</a></li>
                    <li className={this.state.toggleNavBar}><a href="#Contact">CONTACT</a></li>
                    <li className={this.state.toggleNavBar}><a href="Resume.pdf" target="_blank">RESUME</a></li>
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