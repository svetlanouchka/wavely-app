const AbstractManager = require("./AbstractManager");

class FrequencyTagManager extends AbstractManager {
    constructor() {
        super({ table: "frequency_tag" });
    }

    findTagByFrequency(frequencyId) {
        return this.database.query(`select t.id, t.name from tag t join ${this.table} ft
            on t.id = ft.tag_id where ft.frequency_id = ?`, [frequencyId]);
    }

    
}

module.exports = FrequencyTagManager;