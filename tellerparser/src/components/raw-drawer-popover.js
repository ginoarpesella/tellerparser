import React, { Component } from "react";
import ReactToolTip from "react-tooltip";
import "./compcss/raw-drawer-popover.css";

class RawDrawerPopover extends Component {
  constructor(props) {
    super(props);
    this.getRawText = this.getRawText.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = { copyTxt: "" };
  }

  componentDidMount() {
    let lines = [];
    let reverseLines = this.props.set;
    for (let i = 0; i < reverseLines.length; i++) {
      lines.push(reverseLines[i].cmd + "\n");
    }
    this.setState({ copyTxt: lines });
  }

  render() {
    return (
      <div className="raised-border" onClick={this.handleClick}>
        <a
          data-tip
          data-for={"reactToolTip_id_" + this.props.keyVal}
          onClick={this.handleClick}
        >
          <i className="fas fa-copy copy-raw-txt" />
        </a>
        <ReactToolTip
          id={"reactToolTip_id_" + this.props.keyVal}
          place="bottom"
          effect="solid"
        >
          <span className="raw-drawer-txt">{this.getRawText()}</span>
        </ReactToolTip>
      </div>
    );
  }

  getRawText() {
    let lines = [];
    let reverseLines = this.props.set;
    reverseLines.reverse();
    for (let i = 0; i < reverseLines.length; i++) {
      lines.push(<div key={i}>** {reverseLines[i].cmd + "\n"} **</div>);
    }

    return lines;
  }

  handleClick(e) {
    navigator.clipboard.writeText(this.state.copyTxt);
  }
}

export default RawDrawerPopover;
