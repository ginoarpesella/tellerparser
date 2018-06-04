import React, { Component } from "react";
import "./compcss/drawer-count.css";
import DrawerContents from "./drawer-contents";
import IDDateTime from "./id-date-time";
import * as _parer from "../scripts/parer.js";

class DrawerCount extends Component {
  render() {
    return (
      <div className={this.props.classStyle}>
        <div className="section-header">
          <i className="fas fa-money-bill-alt font-awesome-head-img" /> Drawer
          Counts{" "}
          <span className="sequenceNumber">
            <i
              className="fas fa-sort-numeric-up font-awesome-img"
              title="Sequence number"
            />{" "}
            {_parer.getSequenceNumber(this.props.txt)}
          </span>
        </div>
        <div>
          <IDDateTime dateTime={_parer.getDateTime(this.props.txt)} />
          <DrawerContents lines={_parer.getCounts(this.props.txt)} />
        </div>
      </div>
    );
  }
}

export default DrawerCount;
