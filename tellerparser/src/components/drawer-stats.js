import React, { Component } from "react";
import "./compcss/drawer-stats.css";
import * as _parser from "../scripts/parser";

class DrawerStats extends Component {
  render() {
    return (
      <div className="drawer-stats raised-border">
        <div className="section-header">
          <i className="fas fa-clipboard-check font-awesome-head-img" />Stats
        </div>
        <div className="container">
          <div className="row">
            <div className="col">{this.validateDrawerId()}</div>
            <div className="col">{this.showTimes()}</div>
            <div className="col">{this.drawerTotal()}</div>
          </div>
        </div>
      </div>
    );
  }

  validateDrawerId() {
    let ids = [];
    ids.push(_parser.getDrawerId(this.props.openTxt));
    ids.push(_parser.getDrawerId(this.props.closeTxt));
    ids.push(_parser.getDrawerId(this.props.countTxt));

    ids = ids.filter(a => {
      return a.length > 0;
    });

    if (ids.length === 0) {
      return;
    }

    // everthings_equal is a function that takes an array
    const everythings_equal = array => array.every(a => a === array[0]);
    if (everythings_equal(ids)) {
      return (
        <span className="drawer-stat">
          <i className="fas fa-id-card font-awesome-img" title="Drawer Id" />
          {ids[0]}
        </span>
      );
    } else {
      return (
        <div className="text-danger">Not all Drawer Ids are the same!</div>
      );
    }
  }

  showTimes() {
    let openTime = _parser.getDateTime(this.props.openTxt);
    let closeTime = _parser.getDateTime(this.props.closeTxt);
    let countTime = _parser.getDateTime(this.props.countTxt);

    let openCloseDiff = 0;
    if (openTime !== undefined && closeTime !== undefined) {
      let diff = Math.abs(closeTime - openTime);
      openCloseDiff = Math.ceil(diff / 1000); // to seconds
    }

    let closeCountDiff = 0;
    if (closeTime !== undefined && countTime !== null) {
      let diff = Math.abs(countTime - closeTime);
      closeCountDiff = Math.ceil(diff / 1000); // to seconds
    }

    return (
      <span className="drawer-stat">
        {openCloseDiff > 0 ? (
          <span>
            <i
              className="fas fa-lock-open font-awesome-img"
              title="open drawer"
            />
            <span className="time-in-seconds">{openCloseDiff} sec</span>
            <i className="fas fa-lock font-awesome-img" title="closed drawer" />
          </span>
        ) : null}

        {closeCountDiff > 0 ? (
          <span>
            <i className="fas fa-lock font-awesome-img" title="closed drawer" />
            <span className="time-in-seconds">{closeCountDiff} sec</span>
            <i
              className="fas fa-money-bill-alt font-awesome-img"
              title="count"
            />
          </span>
        ) : null}
      </span>
    );
  }

  drawerTotal() {
    if (this.props.countTxt) {
      let total = _parser.getDrawerTotal(this.props.countTxt);
      if (total !== undefined) {
        return (
          <span className="drawer-stat">
            <i
              className="fas fa-dollar-sign font-awesome-img"
              title="drawer total"
            />
            {total}
          </span>
        );
      }
    }

    return;
  }
}

export default DrawerStats;
