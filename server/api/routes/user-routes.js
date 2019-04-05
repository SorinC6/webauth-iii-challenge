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

router.get('/api/users/departament', restricted, async (req, res) => {
	const userInDepartament = req.decoded.departament;
	try {
		const users = await db.findUserByDepartament(userInDepartament);
		if (users.length) {
			res.status(200).json(users);
		} else {
			res.status(404).json({ message: 'No users in this departament' });
		}
	} catch (error) {
		res.status(500).json({ error: 'error trying to retrive the users from departamant' });
	}
});

module.exports = router;
