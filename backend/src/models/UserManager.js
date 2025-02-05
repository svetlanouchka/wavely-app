const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
	constructor() {
		super({ table: "user" });
	}

	insert(user) {
		return this.database.query(
			`insert into ${this.table} (first_name, last_name, birth_date, email, hashed_password, image_url) values (?, ?, ?, ?, ?, ?)`,
			[
				user.first_name,
				user.last_name,
				user.birth_date,
				user.email,
				user.hashed_password,
				user.image_url,
			],
		);
	}

	update(user) {
		return this.database.query(
			`update ${this.table} set first_name = ?, last_name = ?, birth_date = ?, email = ? where id = ?`,
			[user.first_name, user.last_name, user.birth_date, user.email, user.id],
		);
	}
	updateAvatar(user) {
		return this.database.query(
			`update ${this.table} SET image_url = ? WHERE id = ?`,
			// eslint-disable-next-line camelcase
			[user.image_url, user.id],
		);
	}
}

module.exports = UserManager;
