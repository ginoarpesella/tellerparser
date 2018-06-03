import React, { Component } from "react";
import "./compcss/content-line.css";

class ContentLine extends Component {
  render() {
    let fontAweCss = "";
    let headerCss = "";
    let bodyCss = "";
    let cssName = "";

    function getCssClasses(cName) {
      if (cName === "coin-pocket") {
        cssName = cName;
        fontAweCss = "fas fa-coins font-awesome-img";
        headerCss = "coin-pocket-header";
        bodyCss = "coin-pocket-body";
      } else {
        cssName = cName;
        fontAweCss = "fas fa-money-bill font-awesome-img";
        headerCss = "note-pocket-header";
        bodyCss = "note-pocket-body";
      }
    }

    getCssClasses(this.props.cssName);

    return (
      <div
        className={cssName}
        title={`Position: ${this.props.pos} - Quantity: ${this.props.qty}`}
      >
        <div className={headerCss}>
          <i className={fontAweCss} />
          {this.props.name}
        </div>
        <div className={bodyCss}>{this.props.val}</div>
      </div>
    );
  }
}

export default ContentLine;
