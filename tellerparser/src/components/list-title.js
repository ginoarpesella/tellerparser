import React, { Component } from "react";
import * as _parser from "../scripts/parer";
import "./compcss/list-title.css";

class ListTitle extends Component {
  render() {
    let faults = 0;
    faults = this.validate();
    return (
      <div>
        <span className="title-group">
          <span>
            <i
              className="fas fa-id-card-alt font-awesome-img-title"
              title="drawer id"
            />
            <label>{this.getDrawerIds()}</label>
          </span>
          {this.hasOpen() ? (
            <span>
              <i
                className="fas fa-lock-open font-awesome-img-title"
                title="open found"
              />
            </span>
          ) : null}

          {this.hasClose() ? (
            <span>
              <i
                className="fas fa-lock font-awesome-img-title"
                title="close found"
              />
            </span>
          ) : null}

          {this.hasCount() ? (
            <span>
              <i
                className="fas fa-money-bill-alt font-awesome-img-title"
                title="count found"
              />
              <label>{this.getSequenceNumber()}</label>
            </span>
          ) : null}
        </span>
        {faults > 0 ? (
          <span className="badge badge-pill badge-danger list-title-badge">
            {faults}
          </span>
        ) : null}
      </div>
    );
  }

  hasOpen() {
    for (let i = 0; i < this.props.set.length; i++) {
      if (_parser.isOpen(this.props.set[i].cmd)) {
        return true;
      }
    }
  }

  hasClose() {
    for (let i = 0; i < this.props.set.length; i++) {
      if (_parser.isClose(this.props.set[i].cmd)) {
        return true;
      }
    }
  }

  hasCount() {
    for (let i = 0; i < this.props.set.length; i++) {
      if (_parser.isCount(this.props.set[i].cmd)) {
        return true;
      }
    }
  }

  validate() {
    let faults = 0;
    let lines = [];
    for (let i = 0; i < this.props.set.length; i++) {
      lines.push(_parser.getDrawerId(this.props.set[i].cmd));
    }
    let validIds = _parser.validate_drawerIds(lines);
    if (!validIds) {
      faults += 1;
    }

    return faults;
  }

  getSequenceNumber() {
    for (let i = 0; i < this.props.set.length; i++) {
      if (_parser.isCount(this.props.set[i].cmd)) {
        return _parser.getSequenceNumber(this.props.set[i].cmd);
      }
    }
  }

  getDrawerIds() {
    let list = [];
    for (let i = 0; i < this.props.set.length; i++) {
      list.push(_parser.getDrawerId(this.props.set[i].cmd));
    }

    let uniqeList = list.filter(_parser.onlyUnique);
    let ids = "";
    uniqeList.forEach(el => {
      ids = ids + " " + el;
    });

    return ids.trim();
  }
}

export default ListTitle;
