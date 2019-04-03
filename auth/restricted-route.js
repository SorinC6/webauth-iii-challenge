const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	const token = req.headers.authorization;

	if (token) {
		jwt.verify(token, 'secret text - came from .env', (err, decodedToken) => {
			if (err) {
				res.status(401).json({ message: 'Invalid Credentials' });
			} else {
				req.decodedToken = decodedToken;
				next();
			}
		});
	} else {
		res.status(400).json({ message: 'No credentials provided' });
	}
};
