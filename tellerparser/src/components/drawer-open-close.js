import React, { Component } from 'react';
import './drawer-open-close.css';

class DrawerOpenClose extends Component {
    constructor(props) {
        super(props);
        this.decode = this.decode.bind(this);

        this.state = {
            txt: props.txt,
            classStyle: props.classStyle,
            drawerId: '',
            dateTime: '',
        };
    }

    componentDidMount() {
        this.decode();
    }

    decode() {
        let lineSplit = this.state.txt.split(';');
        if (lineSplit.length === 0) { return; }

        this.setState({ drawerId: lineSplit[0].split(' ').slice(-1)[0] });
        this.setState({ dateTime: new Date(lineSplit[1]).toLocaleString() });
    }

    render() {
        return (
            <div className={this.state.classStyle}>
                <div>
                    <div>Drawer ID: {this.state.drawerId}</div>
                    <div>Date and Time: {this.state.dateTime}</div>
                </div>
            </div>
        );
    }
}

export default DrawerOpenClose;