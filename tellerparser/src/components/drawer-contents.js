import React, { Component } from "react";
import "./compcss/drawer-contents.css";
import ContentLine from "./content-line";

class DrawerContents extends Component {
  constructor(props) {
    super(props);
    this.decode = this.decode.bind(this);

    this.state = {
      lines: props.lines
    };
  }

  render() {
    let decodedLines = this.decode();
    let contentLines = decodedLines.map((line, i) => {
      let cssName = "";
      if (i < 4) {
        cssName = "drawer-top-coin";
      } else if (i > 7) {
        cssName = "drawer-note";
      } else {
        cssName = "drawer-botton-coin";
      }
      return (
        <ContentLine
          pos={line.pos}
          name={line.name}
          qty={line.qty}
          val={line.val}
          cssName={cssName}
          key={i}
        />
      );
    });

    return <div className="container">{contentLines}</div>;
  }

  decode() {
    let decodedLines = [];
    this.state.lines.forEach(line => {
      let sp = line.split(",");
      decodedLines.push({
        pos: sp[0],
        name: sp[2],
        qty: sp[3],
        val: sp[4]
      });
    });
    return decodedLines;
  }

  // this will take the pocket number and
  // work out which css class is needed
  getCountCSSClass(i) {
    if (i < 5) {
      return "drawer-top-coin";
    } else if (i > 8) {
      return "drawer-botton-coin";
    }
  }
}

export default DrawerContents;
