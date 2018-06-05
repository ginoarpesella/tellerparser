import React, { Component } from "react";
import * as _parser from "../scripts/parer";

class RawDrawerPopover extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          data-container="body"
          data-toggle="popover"
          data-placement="bottom"
          data-content={this.getRawText()}
        >
          raw text
        </button>
      </div>
    );
  }

  getRawText() {
    let lines = "";
    for (let i = 0; i < this.props.set.length; i++) {
      lines += _parser.getDrawerId(this.props.set[i].cmd) + "\n";
    }
    return lines;
  }
}

export default RawDrawerPopover;
