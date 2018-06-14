import React, { Component } from "react";
import "./App.css";
import PersonCard from "./components/person-card";
import * as _siteMain from "./scripts/site-main";

class App extends Component {
  render() {
    let data = _siteMain.getData();
    return (
      <div className="container">
        <div className="App">
          <div className="row">
            <div className="col">
              <PersonCard
                img={data[0].img}
                name={data[0].name}
                bio={data[0].infoTxt}
              />
            </div>
            <div className="col">
              <PersonCard
                img={data[1].img}
                name={data[1].name}
                bio={data[1].infoTxt}
              />
            </div>
            <div className="col">
              <PersonCard
                img={data[2].img}
                name={data[2].name}
                bio={data[2].infoTxt}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <PersonCard
                img={data[3].img}
                name={data[3].name}
                bio={data[3].infoTxt}
              />
            </div>
            <div className="col">
              <PersonCard
                img={data[4].img}
                name={data[4].name}
                bio={data[4].infoTxt}
              />
            </div>
            <div className="col">
              <PersonCard
                img={data[5].img}
                name={data[5].name}
                bio={data[5].infoTxt}
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
