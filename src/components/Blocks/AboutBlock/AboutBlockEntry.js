import React from "react";
import './AboutBlockEntry.css';

class AboutBlockEntry extends React.Component {
    render(props) { 
        let title
        let text
        let img
        if (this.props.id === 0){
            title = "Hi there!"
            img = "https://pictureofday.files.wordpress.com/2009/01/nasar3107_1000x10001.jpg"
            text = this.getIntroductionText()
        }
        else if(this.props.id === 1){
            title = "I'm currently..."
            img = "https://pictureofday.files.wordpress.com/2009/01/nasar3107_1000x10001.jpg"
            text = this.getCurrentText()
        }
        else if(this.props.id === 2){
            title = "Geek at heart!"
            img = "https://pictureofday.files.wordpress.com/2009/01/nasar3107_1000x10001.jpg"
            text = this.getGeekText()
        }

            return(
                <div className="AboutEntry">
                    <div className="AboutArticle">
                        <div>
                            <div className="AboutTitle">{title}</div>
                            <div className="AboutText">{text}</div>
                        </div>
                    </div>
                    <img className="AboutImage" src={img}/>
                </div>
                )
    }
    getIntroductionText(){
        return  "My name is Emil Wibroe Warming. I was born in Elsingor in Denmark, the town hamlet takes place My name is Emil Wibroe Warming. I was born in Elsingor in Denmark, the town hamlet takes place."
    }
    getCurrentText(){
        return  "a student at Aalborg University on my 5th semester."
    }
    getGeekText(){
        return  "I love to learn and keep up with the latest technologies. I play video games, make robots and cosplay in my free time."
    }
}
export default AboutBlockEntry;