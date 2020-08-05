import React from "react";
import './AboutBlock.css';

import AboutBlockView from "./AboutBlockView"

class AboutBlock extends React.Component {
    constructor() {
        super();
        this.state = {
          showingPage: 0
        }
        this.showPage = this.showPage.bind(this);
        this.showNextPage = this.showNextPage.bind(this);
    }
    showNextPage() {
        const numOfPages = 7 //Number of pages in the rotation

        this.setState(prevstate => {
            const NewShowingPageId = (prevstate.showingPage + 1) % numOfPages
            return {
                showingPage: NewShowingPageId
            }
        })
    }

    showPage(event, pageId) {
        this.setState({ showingPage: pageId })
    }

    render() { 
        return (
            <div className="aboutBlock">
                <AboutBlockView showingPage={this.state.showingPage}/>
                <button onClick={this.showNextPage}>Show next page</button>
                <button onClick={(e) => {this.showPage(e, 0)}}>Show 0</button>
                <button onClick={(e) => {this.showPage(e, 1)}}>Show 1</button>
                <button onClick={(e) => {this.showPage(e, 2)}}>Show 2</button>
                <button onClick={(e) => {this.showPage(e, 3)}}>Show 3</button>
                This is a about block
            </div>
        )
    }
}
export default AboutBlock;