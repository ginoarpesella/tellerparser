import React, { Component } from 'react';
import './drawer-contents.css';

class DrawerContents extends Component {
    constructor(props) {
        super(props);
        this.decode = this.decode.bind(this);

        this.state = {
            lines: props.lines
        }
    }

    componentDidMount() {
        this.decode();
    }

    render() {
        console.log(this.state.lines);
        
        let contentLines = this.state.lines.map((line, i) => {
            return <li name="row" key={i}>{line}</li>
        })

        return (
            <ul>
                {contentLines}
            </ul>
        );
    }

    /*
    1,826,10p,0,0.00;[0]
    2,826,£2,0,0.00;[1]
    3,826,5p,0,0.00;[2]
    4,826,£1,0,0.00;[3]
    5,826,2p,0,0.00;[4]
    6,826,50p,0,0.00;[5]
    7,826,1p,0,0.00;[6]
    8,826,20p,0,0.00;[7]
    9,826,£5,6,30.00;[8]
    10,826,£10,7,70.00;[9]
    11,826,£20,8,160.00;[10]
    12,826,£50,0,0.00;[11]
    13,826,£5,7,35.00;[12]
    14,826,BN14,0,0.00;[13]
    */
    decode() {
        if (this.state.lines.length > 0) {

        }
    }
}

export default DrawerContents;