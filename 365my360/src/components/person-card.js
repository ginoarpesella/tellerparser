import React, { Component } from "react";
import "./compcss/person-card.css";

class PersonCard extends Component {
  render() {
    return (
      <div className="card person-card">
        {/* image */}
        <img
          className="card-img-top rounded-circle person-card-img raised-border"
          src={this.props.img}
          alt="Card"
        />
        {/* body */}
        <div className="card-body person-card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.bio}</p>
        </div>
        {/* footer */}
        <div className="card-footer">
          <small className="text-muted">
            <a href="#" onClick={this.handleClick}>
              Send {this.props.name} a message
            </a>
          </small>
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

  handleClick(e) {
    e.preventDefault();
  }
}

export default PersonCard;
