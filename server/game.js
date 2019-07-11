const express = require('express');
const body = require('body-parser');
const cnst = require('./constants');

const router = express.Router();

// TODO TEMP: data for testing
const TEMP = {
	"Test game" : {
		host : "Paul",
		players : ["John", "Bill", "Donald", "Paul", "Timmy", "Josh"]
	},
	"12345678" : {
		name : "Donald",
		game : "Test game"
	}
}

function shuffleCards(players) {
	let cards = Object.keys(cnst.TERRITORIES);
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
		ret[v] = (index % players + 1);
		index ++;
	}
	return ret;
}

router.use(body.json());
router.use((req, res, next) => {
	let strict = false;
	next();
});
router
.get('/', (req, res) => {
	res.send({value : "Hello world!"});
})
.get('/starting/:token', (req, res) => { // TODO TEMP: should be push from server
	let player = TEMP[req.params.token];
	let game = TEMP[player.game];
	let owners = shuffleCards(game.players.length);

	if (game == null) {
		res.send({ "err": 3, "msg": "Game not found" });
	} else {
		res.send({
			"token"  : req.params.token,
			"name"   : player.name,
			"game"   : player.game,
			"host"   : game.host,
			"players": game.players,
			"owners" : owners
		});
	}
});

module.exports = router;