const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
    constructor() {
        super({ table: "category" });
    }

    insert(category) {
        return this.database.query(`insert into ${this.table} 
            (name) values (?)`, [
            category.name
        ]);
    }

    update(category) {
        return this.database.query(
            `update ${this.table} set name = ?  where id = ?`,
            [category.name]
        );
    }


}

module.exports = CategoryManager;

