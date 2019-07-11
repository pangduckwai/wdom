import React from 'react';
import Territory from './territory';
import { MAP, LINK, LINE } from './constants';

export default class World extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			players: 6,
			round: 0,
			selected: ""
		};
	}

	handleClick(value) {
		this.setState({selected: value});
	}

	handleClear() {
		this.setState({selected: ""});
	}

	render() {
		let cards = shuffleCards(this.state.players);
		const curr = (this.state.selected !== "") ? LINK[this.state.selected].connected : [];

		return (
			<svg className="app-game fillv map-game" viewBox="0 0 1227 628" onClick={this.handleClear.bind(this)}>
				{LINE.map((points, i) =>
					<line key={i} x1={points[0]} y1={points[1]} x2={points[2]} y2={points[3]} />)}
				{Object.keys(MAP).map((key) =>
					<Territory key={key} tid={key} player={cards[key]} sel={key === this.state.selected} lnk={curr.includes(key)} onClick={this.handleClick.bind(this, key)} />)}
			</svg>
		);
	}
}

function shuffleCards(players) {
	let cards = Object.keys(MAP);
	let size = cards.length;

	while (size > 0) {
		let idx = Math.floor(Math.random() * size);
		size --;

		let tmp = cards[size];
		cards[size] = cards[idx];
		cards[idx] = tmp;
	}

	let ret = {};
	let index = 0;
	for (let v of cards) {
		ret[v] = index % players;
		index ++;
	}
	return ret;
}
