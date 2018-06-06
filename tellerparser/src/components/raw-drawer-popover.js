import React, { Component } from "react";
import * as _parser from "../scripts/parer";
import ReactToolTip from "react-tooltip";
import "./compcss/raw-drawer-popover.css";

class RawDrawerPopover extends Component {
  render() {
    return (
      <div className="raised-border">
        <a data-tip data-for={"reactToolTip_id_" + this.props.keyVal}>
          raw text
        </a>
        <ReactToolTip
          id={"reactToolTip_id_" + this.props.keyVal}
          // place="bottom"
          type="light"
          // effect="solid"
        >
          <span className="raw-drawer">{this.getRawText()}</span>
        </ReactToolTip>
      </div>
    );
  }

  getRawText() {
    let lines = "";
    for (let i = 0; i < this.props.set.length; i++) {
      lines += this.props.set[i].cmd + "\n";
    }
    return lines;
  }
}

export default RawDrawerPopover;
