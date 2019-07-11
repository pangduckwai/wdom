import React from 'react';
import { MAP } from './constants';
import './map.css';

export default class Territory extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			army: 0
		};
	}

	handleClick(value, e) {
		e.stopPropagation();
		e.nativeEvent.stopImmediatePropagation();

		this.props.onClick(value);
		this.setState((state, props) => ({
			army: state.army + 1
		}));
	}

	render() {
		const local = MAP[this.props.tid];
		let clazz = 'c';
		if (this.props.sel) clazz = 'c s';
		if (this.props.lnk) clazz = 'c l';

		let val = this.state.army;
		if (this.props.player > 0 && this.state.army === 0) val = 1; //TODO HERE!!! state not update!!!

		return (
			<g className={clazz} id={this.props.tid} onClick={this.handleClick.bind(this, this.props.tid)}>
				<path
					className={`${local.continent} ${local.cindex}`}
					d={local.svgPath}/>
				<text className="tname" x="560" y="590">
					{this.props.tid}
				</text>
				<text className="tarmy" x={local.loc[0]} y={local.loc[1]}>
					{val}
				</text>
				<polyline
					className={`player${this.props.player}`} points="0,0 0,-20 20,-15 0,-10"
					transform={`translate(${local.loc[2]}, ${local.loc[3]})`} />
			</g>
		);
	}
}
