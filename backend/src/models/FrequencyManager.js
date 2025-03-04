const AbstractManager = require("./AbstractManager");

class FrequencyManager extends AbstractManager {
    constructor() {
        super({ table: "frequency" });
    }

    insert(frequency) {
        return this.database.query(`insert into ${this.table} 
            (name, description, image_url, affirmation_audio_url, audio_url, affirmation, category_id) values (?, ?, ?, ?, ?, ?, ?)`, [
            frequency.name, frequency.description, frequency.image_url, frequency.affirmation_audio_url, frequency.audio_url, frequency.affirmation, frequency.category_id
        ]);
    }

    update(frequency) {
        return this.database.query(
            `update ${this.table} set name = ?, description = ?, image_url = ?, affirmation_audio_url = ?, audio_url = ?, affirmation = ?, category_id = ?  where id = ?`,
            [frequency.name, frequency.description, frequency.image_url, frequency.affirmation_audio_url, frequency.audio_url, frequency.affirmation, frequency.category_id, frequency.id]
        );
    }


}

module.exports = FrequencyManager;

