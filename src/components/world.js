import React from 'react';
import Territory from './territory';
import { MAP, LINK } from './constants';

export default class World extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			round: 0,
			selected: ""
		};
	}

	handleClick (value) {
		console.log("CLICK: " + value);
		this.setState({selected: value});
		// if (value === this.state.selected) {
		// 	this.setState({selected: ""});
		// } else {
		//	this.setState({selected: value});
		// }
	}

	handleClear () {
		console.log("CLEAR");
		// this.setState({selected: ""});
	}

	render () {
		const curr = (this.state.selected) ? LINK[this.state.selected].connected : [];
		return (
			<svg className="app-game fillv map-game" viewBox="0 0 1227 628" onClick={this.handleClear.bind(this)}>
				<line x1="397" y1="381" x2="490" y2="312"/>
				<line x1="722" y1="380" x2="753" y2="426"/>
				<line x1="700" y1="454" x2="736" y2="454"/>
				<line x1="718" y1="288" x2="725" y2="282"/>
				<line x1="642" y1="197" x2="642" y2="213"/>
				<line x1="594" y1="195" x2="607" y2="177"/>
				<line x1="543" y1="198" x2="543" y2="205"/>
				<line x1="557" y1="135" x2="557" y2="140"/>
				<line x1="561" y1="121" x2="582" y2="124"/>
				<line x1="582" y1="124" x2="583" y2="102"/>
				<line x1="583" y1="102" x2="561" y2="121"/>
				<line x1="522" y1="74" x2="580" y2="89"/>
				<line x1="542" y1="109" x2="513" y2="80"/>
				<line x1="496" y1="73" x2="484" y2="61"/>
				<line x1="307" y1="43" x2="376" y2="28"/>
				<line x1="261" y1="111" x2="387" y2="34"/>
				<line x1="352" y1="105" x2="407" y2="45"/>
				<line x1="19" y1="97" x2="1" y2="97"/>
				<line x1="1125" y1="116" x2="1225" y2="116"/>
				<line x1="1094" y1="185" x2="1070" y2="160"/>
				<line x1="1094" y1="185" x2="1050" y2="185"/>
				<line x1="999" y1="318" x2="1024" y2="347"/>
				<line x1="1115" y1="384" x2="1066" y2="384"/>
				<line x1="1115" y1="384" x2="1115" y2="417"/>
				<line x1="1115" y1="384" x2="1077" y2="426"/>
				<line x1="1067" y1="411" x2="1067" y2="432"/>
				{Object.keys(MAP).map((key) => <Territory key={key} tid={key} sel={key === this.state.selected} lnk={curr.includes(key)} onClick={this.handleClick.bind(this, key)} />)}
			</svg>
		);
	}
}
