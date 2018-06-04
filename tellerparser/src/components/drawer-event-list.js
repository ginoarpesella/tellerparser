import React, { Component } from "react";

class DrawerEventList extends Component {
  render() {
    return (
      <div id="accordion" role="tablist">
        <div className="card">
          <div className="card-header" role="tab" id="headingOne">
            <h5 className="mb-0">
              <a
                data-toggle="collapse"
                href="#collapseOne"
                role="button"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Collapsible Group Item #1
              </a>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse"
            role="tabpanel"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body">{/* drawer event goes here */}text</div>
          </div>
        </div>
      </div>
    );
  }
}

export default DrawerEventList;
