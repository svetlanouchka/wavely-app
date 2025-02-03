const AbstractManager = require("./AbstractManager");

class SessionManager extends AbstractManager {
	constructor() {
		super({ table: "seance" });
	}

	insert(session) {
		return this.database.query(
			`insert into ${this.table} (note_before, note_after, review, comment, frequency_id, user_id) values (?, ?, ?, ?, ?, ?)`,
			[
				session.note_before,
				session.note_after,
				session.review,
				session.comment,
				session.frequency_id,
				session.user_id,
			],
		);
	}

	update(session) {
		return this.database.query(
			`update ${this.table} set comment = ? where id = ?`,
			[session.comment, session.id],
		);
	}
}

module.exports = SessionManager;
