import React, { Component } from "react";
import DrawerOpenClose from "./drawer-open-close";
import DrawerCount from "./drawer-count";
import DrawerStats from "./drawer-stats";
import ListTitle from "./list-title";
import RawDrawerPopover from "./raw-drawer-popover";
import * as _parser from "../scripts/parer";

class DrawerEventList extends Component {
  constructor(props) {
    super(props);
    this.build = this.build.bind(this);

    this.state = {
      openTxt: "",
      openLineNumber: 0,
      closeTxt: "",
      closeLineNumber: 0,
      countTxt: "",
      countLineNumber: 0
    };
  }

  componentDidMount() {
    this.build();
  }

  render() {
    return (
      <div id="accordion" role="tablist">
        <div className="card">
          <div
            className="card-header"
            role="tab"
            id={"heading_" + this.props.keyVal}
          >
            <h3 className="mb-0">
              <a
                data-toggle="collapse"
                href={"#collapse_" + this.props.keyVal}
                role="button"
                aria-expanded="true"
                aria-controls={"collapse_" + this.props.keyVal}
              >
                <ListTitle set={this.props.set} />
              </a>
            </h3>
          </div>
          <div
            id={"collapse_" + this.props.keyVal}
            className="collapse"
            role="tabpanel"
            aria-labelledby={"heading_" + this.props.keyVal}
            data-parent="#accordion"
          >
            <div className="card-body">
              <div className="main-info">
                <div className="row">
                  <div className="col">
                    {this.state.openTxt ? (
                      <DrawerOpenClose
                        txt={this.state.openTxt}
                        classStyle="open-drawer"
                        lineNumber={this.state.openLineNumber}
                      />
                    ) : null}
                  </div>
                  <div className="col">
                    {this.state.closeTxt ? (
                      <DrawerOpenClose
                        txt={this.state.closeTxt}
                        classStyle="close-drawer"
                        lineNumber={this.state.closeLineNumber}
                      />
                    ) : null}
                  </div>
                </div>
                {this.state.countTxt ? (
                  <DrawerCount
                    txt={this.state.countTxt}
                    classStyle="count-drawer"
                    lineNumber={this.state.countLineNumber}
                  />
                ) : null}
                {this.state.openTxt ||
                this.state.closeTxt ||
                this.state.countTxt ? (
                  <DrawerStats
                    openTxt={this.state.openTxt}
                    closeTxt={this.state.closeTxt}
                    countTxt={this.state.countTxt}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* 
  thsi.props.set = [
    {cmd: string, lineNumber, i},
    {cmd: string, lineNumber, i},
    {cmd: string, lineNumber, i}
  ]
  */

  build(e) {
    this.props.set.forEach(set => {
      if (_parser.isOpen(set.cmd)) {
        this.setState({ openTxt: set.cmd, openLineNumber: set.lineNumber });
        return;
      }

      if (_parser.isClose(set.cmd)) {
        this.setState({ closeTxt: set.cmd, closeLineNumber: set.lineNumber });
        return;
      }

      if (_parser.isCount(set.cmd)) {
        this.setState({ countTxt: set.cmd, countLineNumber: set.lineNumber });
      }
    });
  }
}

export default DrawerEventList;
