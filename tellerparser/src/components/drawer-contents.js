import React, { Component } from "react";
import "./compcss/drawer-contents.css";
import DrawerCoinRow from "./drawer-coin-row";

class DrawerContents extends Component {
  constructor(props) {
    super(props);
    this.decode = this.decode.bind(this);

    this.state = {
      lines: props.lines
    };
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

    return this.arrangeContentLines(decodedLines);
  }

  render() {
    let formattedLines = this.decode();
    console.log(formattedLines);
    return <div className="container">{formattedLines}</div>;
  }

  arrangeContentLines(lines) {
    let noteLines = [];
    let topLines = []; // top drawer row
    let bottomLines = []; // bottom drawer row

    for (let i = 0; i < lines.length; i++) {
      if (i > 7) {
        noteLines.push(lines[i]);
      } else if (i % 2) {
        topLines.push(lines[i]);
      } else {
        bottomLines.push(lines[i]);
      }
    }

    let arrangedLines = topLines.reverse();
    arrangedLines = arrangedLines.concat(bottomLines);
    arrangedLines = arrangedLines.concat(noteLines);

    return this.selectCssClassAndWrap(arrangedLines);
  }

  // select what css to apply to which div container
  selectCssClassAndWrap(lines) {
    let top = lines.slice(0, 4);
    let bottom = lines.slice(4, 8);
    let notes = lines.slice(8);

    let result = [];
    result.push(
      <DrawerCoinRow
        lines={top}
        cssName={"drawer-top-coin"}
        key={"DrawerCoinRow_1"}
      />
    );
    result.push(
      <DrawerCoinRow
        lines={bottom}
        cssName={"drawer-botton-coin"}
        key={"DrawerCoinRow_2"}
      />
    );
    result.push(
      <DrawerCoinRow
        lines={notes}
        cssName={"drawer-note"}
        key={"DrawerCoinRow_3"}
      />
    );
    return result;
  }
}

export default DrawerContents;
