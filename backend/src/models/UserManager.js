const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
    constructor() {
        super({ table: "user" });
    }

    insert(user) {
        return this.database.query(`insert into ${this.table} (first_name) values (?)`, [
            user.first_name,
        ]);
    }

    update(user) {
        return this.database.query(
            `update ${this.table} set first_name = ? where id = ?`,
            [user.first_name, item.id]
        );
    }


}

module.exports = UserManager;

