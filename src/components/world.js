import React from 'react';
import Territory from './territory';

export default class World extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            round: 0
        };

        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick (value) {
        console.log(value + " clicked");
    }

    render () {
        return (
            <svg className="app-game fillv map-game" viewBox="0 0 1227 628">
                <Territory cid="Africa" tid="Congo" cidx="v3" onClick={(v) => this.handleClick(v)} />
                <Territory cid="Europe" tid="Iceland" cidx="v4" onClick={(v) => this.handleClick(v)} />
            </svg>
        );
    }
}
