import React, { Component } from "react";
import "./compcss/drawer-coin-row.css";
import ContentLine from "./content-line";

class DrawerCountRow extends Component {
  render() {
    return (
      <div className={this.props.cssName}>
        {this.createContentLines(this.props.lines)}
      </div>
    );
  }

  createContentLines(objLines) {
    let componentList = [];
    for (let i = 0; i < objLines.length; i++) {
      componentList.push(
        <ContentLine
          pos={objLines[i].pos}
          name={objLines[i].name}
          qty={objLines[i].qty}
          val={objLines[i].val}
          key={objLines[i].pos}
        />
      );
    }

    return componentList;
  }
}

export default DrawerCountRow;
