const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const usersDb = require('../database/dbHelpers/user-model');

router.post('/api/register', (req, res) => {
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
	user.password = hash;

	usersDb
		.addUser(user)
		.then((saved) => {
			res.status(201).json(saved);
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});

function makeTokenFromUser(user) {
	const payload = {
		subject: user.id,
		username: user.username
		//roles: [ 'pm' ]
	};

	const options = {
		expiresIn: '20h'
	};

	const token = jwt.sign(payload, 'secret text - came from .env', options);

	return token;
}

router.post('/api/login', (req, res) => {
	let { username, password } = req.body;

	usersDb
		.findBy({ username })
		.first()
		.then((user) => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = makeTokenFromUser(user);
				res.status(200).json({
					message: `Welcome ${user.username}!`,
					token: token
				});
			} else {
				res.status(401).json({ message: 'Invalid Credentials' });
			}
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});

module.exports = router;
