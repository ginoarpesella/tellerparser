import React, { Component } from 'react';
import './content-line.css';

class ContentLine extends Component {
    render() {
        return (
            <div className="col">
                <span> {this.props.pos}</span>
                <span> {this.props.name}</span>
                <span>Quantity: {this.props.qty}</span>
                <span><i className="fas fa-money-bill font-awesome-img"></i> {this.props.val}</span>
            </div>
        );
    }
}

export default ContentLine;