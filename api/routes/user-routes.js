const express = require('express');
const router = express.Router();

const restricted = require('../../auth/restricted-route');

const db = require('../../database/dbHelpers/user-model');

router.get('/api/users', restricted, (req, res) => {
	db
		.getAllUsers()
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((error) => {
			res.status(500).json({ error: 'errory trying to get the users' });
		});
});

module.exports = router;
