import React, { Component } from "react";
import "./compcss/drawer-contents.css";
import DrawerCountRow from "./drawer-count-row";

class DrawerContents extends Component {
  constructor(props) {
    super(props);
  }

  decode() {
    let decodedLines = [];
    this.props.lines.forEach(line => {
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

    return (
      <div className="container drawer-contents">
        <div className="row">
          <div className="col-7">
            <div className="container">
              <div className="row">{formattedLines[0]}</div>
              <div className="row">{formattedLines[1]}</div>
            </div>
          </div>
          <div className="col-5">{formattedLines[2]}</div>
        </div>
      </div>
    );
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
    arrangedLines = arrangedLines.concat(noteLines.reverse());

    return this.selectCssClassAndWrap(arrangedLines);
  }

  // select what css to apply to which div container
  selectCssClassAndWrap(lines) {
    let top = lines.slice(0, 4);
    let bottom = lines.slice(4, 8);
    let notes = lines.slice(8);

    let result = [];
    result.push(
      <DrawerCountRow
        lines={top}
        cssName={"drawer-coin"}
        cssPocket={"coin-pocket"}
        key={"DrawerCoinRow_1"}
      />
    );
    result.push(
      <DrawerCountRow
        lines={bottom}
        cssName={"drawer-coin"}
        cssPocket={"coin-pocket"}
        key={"DrawerCoinRow_2"}
      />
    );
    result.push(
      <DrawerCountRow
        lines={notes}
        cssName={"drawer-note"}
        cssPocket={"note-pocket"}
        key={"DrawerCoinRow_3"}
      />
    );
    return result;
  }
}

export default DrawerContents;
