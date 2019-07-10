import React from 'react';
import { MAP } from './constants';
import './map.css';

export default class Territory extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			selected: false,
			owner: "player0",
			army: 0
		};
	}

	handleClick (value) {
		console.log(value + " clicked!!!");
	}

	render () {
		const local = MAP[this.props.tid];
		return (
			<g className={(this.state.selected ? 'c s' : 'c')} id={this.props.tid} onClick={() => this.handleClick(this.props.tid)}>
				<path
					className={local.continent + ' ' + local.cindex}
					d={local.svgPath}/>
				<text className="tname" x={local.loc[0]} y={local.loc[1]}>
					{this.props.tid}
				</text>
				<text className="tarmy" x={local.loc[0]} y={local.loc[1]}>
					{this.state.army}
				</text>
				<polyline
					className={this.state.owner} points="0,0 0,-20 20,-15 0,-10"
					transform={"translate(" + local.loc[2] + "," + local.loc[3] + ")"} />
			</g>
		);
	}
}
