import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
// use context object
// class Button extends React.Component {
//   static contextType = LanguageContext;
//   // must call "contextType"
//   // static key word add function onto class


//   render() {
//     const text = this.context === "english" ? 'Submit' : 'Voorleggen';
//     return <button className="ui button primary">{text}</button>
//   }
// }

// or you can assign context type by doing this
// Button.contextType = LanguageContext;



// use consumers function for multiple context objects
class Button extends React.Component {
  createButton(color) {
    return (
      <button className={`ui button ${color} `}>
        <LanguageContext.Consumer>
          {({ language }) => language === "english" ? "Submit" : "Voorleggen"}
        </LanguageContext.Consumer>
      </button>
    )
  }
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.createButton(color)}
      </ColorContext.Consumer>
    )
  }
}
export default Button;