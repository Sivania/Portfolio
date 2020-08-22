import React from "react";
import './AboutBlock.css';

import BlockHeader from "../BlockHeader"
import AboutBlockEntry from "./AboutBlockEntry"

const maxPages = 7;
class AboutBlock extends React.Component {
  constructor() {
    super();
    this.state = {
    showingPage: 0
  }
this.showNextPage = this.showNextPage.bind(this);
this.showPrevPage = this.showPrevPage.bind(this);
}
  render() { 
      return (
        <section id="About">
          <BlockHeader color={"#d591ee"}title={"About"} describtion={"My past, present and future"} />
          <section className="aboutBlockMainContent">
                  <button className="aboutBlockMainContentNextButton" onClick={this.showPrevPage}>{"<"}</button>
                    <div className="aboutBlockMainContentArticle">
                        <AboutBlockEntry id={this.state.showingPage}/>
                      <div className="pageNum">{this.state.showingPage + 1} / {maxPages}</div>
                    </div>
                  <button className="aboutBlockMainContentPrevButton" onClick={this.showNextPage}>{">"}</button>
          </section>
        </section>
      )
    }
  showNextPage() {
    this.setState(prevstate => {
        const NewShowingPageId = (prevstate.showingPage + 1) % maxPages
        return {
            showingPage: NewShowingPageId
        }
    })
  }

  showPrevPage() {
    this.setState(prevstate => {
        const NewShowingPageId = (prevstate.showingPage + 7 - 1 ) % maxPages
        return {
            showingPage: NewShowingPageId
        }
    })
  }
}
export default AboutBlock;