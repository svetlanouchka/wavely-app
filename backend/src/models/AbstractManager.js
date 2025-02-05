class AbstractManager {
	constructor({ table }) {
		this.table = table;
	}

	find(id) {
		return this.database.query(`select * from  ${this.table} where id = ?`, [
			id,
		]);
	}

	findAll() {
		return this.database.query(`select * from  ${this.table}`);
	}

	findUserByEmail(email) {
		return this.database.query(`select * from ${this.table} where email = ?`, [
			email,
		]);
	}

	delete(id) {
		return this.database.query(`delete from ${this.table} where id = ?`, [id]);
	}

	setDatabase(database) {
		this.database = database;
	}
}

module.exports = AbstractManager;
