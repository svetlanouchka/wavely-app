const AbstractManager = require("./AbstractManager");

class TagManager extends AbstractManager {
	constructor() {
		super({ table: "tag" });
	}
}

module.exports = TagManager;
