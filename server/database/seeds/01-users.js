exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('users').del().then(function() {
		// Inserts seed entries
		return knex('users').insert([
			{ id: 1, username: 'ALin', password: '123', departament: 'fun' },
			{ id: 2, username: 'Ion', password: '123', departament: 'fun' },
			{ id: 3, username: 'Maria', password: '123', departament: 'bad' }
		]);
	});
};
