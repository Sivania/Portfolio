import React from "react";
import './Footer.css';

class ContactBlock extends React.Component
{
    render() { 
        return (
          <section className="Footer">
              <ul className="FooterSection">
              <li className="FooterTitle" ><a>Social links</a></li>
              <li className="FooterItem"><a className="FooterLink" href="https://github.com/Sivania">Github</a></li>
              <li className="FooterItem"><a className="FooterLink" href="https://www.linkedin.com/in/emilww/">Linkedin</a></li>
              <li className="FooterItem"><a className="FooterLink" href="https://www.hackerrank.com/emilww">HackerRank</a></li>
              </ul>
          </section>
        )
    }
}

export default ContactBlock;