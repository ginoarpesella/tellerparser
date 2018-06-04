import React, { Component } from "react";
import DrawerOpenClose from "./drawer-open-close";
import DrawerCount from "./drawer-count";
import DrawerStats from "./drawer-stats";

class DrawerEvent extends Component {
  render() {
    return (
      <div className="main-info">
        {this.props.openTxt ? (
          <DrawerOpenClose txt={this.props.openTxt} classStyle="open-drawer" />
        ) : null}
        {this.props.closeTxt ? (
          <DrawerOpenClose
            txt={this.props.closeTxt}
            classStyle="close-drawer"
          />
        ) : null}
        {this.props.countTxt ? (
          <DrawerCount txt={this.props.countTxt} classStyle="count-drawer" />
        ) : null}
        {this.props.openTxt | this.props.closeTxt | this.props.countTxt ? (
          <DrawerStats
            openTxt={this.props.openTxt}
            closeTxt={this.props.closeTxt}
            countTxt={this.props.countTxt}
          />
        ) : null}
      </div>
    );
  }
}

export default DrawerEvent;
