const path = require("path");
const faker = require("faker");
const md5 = require("md5");
const fs = require("fs");

function createTodos(limite = 50) {
	const result = [];

	for (let i = 0; i < limite; i++) {
		const title = faker.name.title();
		const responsible = `${faker.name.firstName()}  ${faker.name.lastName()}`;
		const description = faker.name.title();
		const priority = faker.random.arrayElement(["Low", "Medium", "High"]);

		result.push({
			id: faker.random.uuid(),
			title,
			responsible,
			description,
			priority
		});
	}

	return result;
}

function main() {
	const data = {
		todos: createTodos()
	};

	fs.writeFileSync(
		path.resolve(__dirname, "db.json"),
		JSON.stringify(data, null, 4)
	);
}

main();
