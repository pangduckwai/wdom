import React from 'react';
import { COUNTRIES } from './constants';
import './map.less';

export default class Territory extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            army: 0
        };
    }

    render () {
        return (
            <g key={this.props.tid} id={this.props.tid} onClick={() => this.props.onClick(this.props.tid)}>
                <path
                    className={this.props.cid + ' ' + this.props.cidx}
                    d={COUNTRIES[this.props.tid].svgPath}/>
                <text className="tname">
                    {this.props.tid}
                </text>
                <text className="tarmy">
                    {this.state.army}
                </text>
            </g>
        );
    }
}
