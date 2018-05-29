import React, { Component } from 'react';
import './drawer-contents.css';
import ContentLine from './content-line';

class DrawerContents extends Component {
    constructor(props) {
        super(props);
        this.decode = this.decode.bind(this);

        this.state = {
            lines: props.lines,
        }
    }

    render() {
        let decodedLines = this.decode();
        let contentLines = decodedLines.map((line, i) => {
            return <ContentLine pos={line.pos} name={line.name} qty={line.qty} val={line.val} key={i} />
        })
        
        let list = [];
        for (let i = 0; i < contentLines.length; i++) {
            
        }

        return (
            <div className="container">
                {contentLines}
            </div>
        );
    }

    decode() {
        let decodedLines = [];
        this.state.lines.forEach(line => {
            let sp = line.split(',');
            decodedLines.push({
                pos: sp[0],
                name: sp[2],
                qty: sp[3],
                val: sp[4]
            });
        });
        return decodedLines;
    }
}

export default DrawerContents;