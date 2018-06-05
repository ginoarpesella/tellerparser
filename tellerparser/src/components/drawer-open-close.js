import React, { Component } from "react";
import "./compcss/drawer-open-close.css";
import IDDateTime from "./id-date-time";
import LineNumber from "./line-number";
import * as _parer from "../scripts/parer.js";

class DrawerOpenClose extends Component {
  render() {
    return (
      <div className={this.props.classStyle}>
        <div className="section-header">
          {this.props.classStyle === "open-drawer" ? (
            <span>
              <i className="fas fa-lock-open font-awesome-head-img" />Open
            </span>
          ) : (
            <span>
              <i className="fas fa-lock font-awesome-head-img" />Close
            </span>
          )}
        </div>
        <IDDateTime dateTime={_parer.getDateTime(this.props.txt)} />
        <LineNumber lineNumber={this.props.lineNumber} />
      </div>
    );
  }
}

export default DrawerOpenClose;
