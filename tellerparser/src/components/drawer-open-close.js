import React, { Component } from 'react';
import './drawer-open-close.css';
import IDDateTime from './id-date-time';

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
                <div className="section-header">
                    {this.state.classStyle === 'open-drawer' ?
                        <span><i className="fas fa-lock-open font-awesome-head-img"></i>Open</span> :
                        <span><i className="fas fa-lock font-awesome-head-img"></i>Close</span>}
                </div>
                <IDDateTime drawerId={this.state.drawerId} dateTime={this.state.dateTime} />
            </div>
        );
    }
}

export default DrawerOpenClose;