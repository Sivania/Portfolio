import React from "react";
import './ContactBlock.css';

import BlockHeader from "../BlockHeader"

class ContactBlock extends React.Component
{
    render() { 
        return (
          <section id="About">
            <BlockHeader color={"#eeeeee"}title={"Contact"} describtion={"Reach out to me"} />
            <section className="ContactBlockMainContent">
                <button><a href="mailto:EmilWW@hotmail.dk">Link text</a></button>
            </section>
          </section>
        )
      }
}

export default ContactBlock;