import React, { Component } from 'react';
import './compcss/drawer-count.css';
import DrawerContents from './drawer-contents'
import IDDateTime from './id-date-time';

class DrawerCount extends Component {
    constructor(props) {
        super(props);
        this.decode = this.decode.bind(this);

        this.state = {
            txt: props.txt,
            classStyle: props.classStyle,
            drawerId: '',
            dateTime: '',
            sequenceNumber: '',
            counts: []
        }
    }

    componentDidMount() {
        this.decode();
    }

    /* 
    Count event: 82600-005-161109-0003;[0]
    2018-05-09T03:08:17;[1]
    COUNT;[2]
    0000000561;[3]
    ... content lines ... 
    */
    decode() {
        let lineSplit = this.state.txt.split(';');
        if (lineSplit.length === 0) { return; }

        this.setState({ drawerId: lineSplit[0].split(' ').slice(-1)[0] });
        this.setState({ dateTime: new Date(lineSplit[1]).toLocaleString() });
        this.setState({ sequenceNumber: lineSplit[3] });

        let counts = [];
        for (let i = 4; i < lineSplit.length; i++) {
            if (lineSplit[i] !== '') { counts.push(lineSplit[i]); }
        }

        this.setState({ counts: counts });
    }

    render() {
        return (
            <div className={this.state.classStyle}>
                <div className="section-header">
                    <i className="fas fa-money-bill-alt font-awesome-head-img"></i> Drawer Counts
                </div>
                <div>
                    <IDDateTime drawerId={this.state.drawerId} dateTime={this.state.dateTime} />
                    <div><i className="fas fa-sort-numeric-up font-awesome-img" title="Sequence number"></i> {this.state.sequenceNumber}</div>
                    {this.state.counts.length > 0 ?
                        <DrawerContents lines={this.state.counts} /> : null}

                </div>
            </div>
        )
    }
}

export default DrawerCount;
