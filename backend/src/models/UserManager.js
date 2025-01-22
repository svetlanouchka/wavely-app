const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {

	constructor() {
		super({ table: "user" });
	}

	insert(user) {
		return this.database.query(
			`insert into ${this.table} (first_name, last_name, birth_date, email, hached_password) values (?, ?, ?, ?, ?)`,
			[
				user.first_name,
				user.last_name,
				user.birth_date,
				user.email,
				user.hached_password,
			],
		);
	}

	update(user, image_url) {
		return this.database.query(
			`update ${this.table} set first_name = ?, last_name = ?, birth_date = ?, email = ?, image_url = ? where id = ?`,
			[
				user.first_name,
				user.last_name,
				user.birth_date,
				user.email,
				image_url,
				user.id,
			],
		);
	}
}

module.exports = UserManager;
