const express = require('express');

const session = require('cookie-session')
const helmet = require('helmet');
const safe = require('safe-regex');
const csrf = require('csurf');
const limit = require('express-rate-limit');

const app = express();

const SERVER_PORT = 54321;

app.set('trust proxy', 1); // trust first proxy
app.use(session({
		name: 'session',
		keys: ['097yohgffyr65', 'q4vqwdaasd23q4'],
		cookie: {
			secure: true,
			httpOnly: true,
			domain: 'sea9.org',
			path: '/',
			expires: new Date(Date.now() + 60 * 60 * 1000)
		}
}));

app.use(helmet());

app.use(csrf());
app.use(function( req, res, next ) {
	res.locals.csrftoken = req.csrfToken() ;
	next() ;
});

let limiter = new limit({
	windowMs: 900000, // 900,000 == 15*60*1000 == 15 minutes
	max: 150,
	delayMs: 0 // disabled
});
app.use(limiter);

app.use(express.static('html', { index: false }));

app.get('/', (req, res) => res.send('Hello World Secure!!!'));

app.get('/i/time', (req, res) => {
	let now = new Date();
	res.send({
		"year"  : now.getFullYear(),
		"month" : now.getMonth() + 1,
		"date"  : now.getDate(),
		"hour"  : now.getHours(),
		"minute": now.getMinutes(),
		"second": now.getSeconds()
	});
});

app.get('/i/clock', (req, res) => {
	res.send('<html><head><title>CLOCK</title><script src="sea9.js" type="text/javascript"></script><script type="text/javascript">function l(){t("k", "./i/time");};</script></head><body onload="l();"><p id="k">&nbsp;</p></body></html>');
});

app.listen(SERVER_PORT, () => console.log('Example app listening on port', SERVER_PORT));