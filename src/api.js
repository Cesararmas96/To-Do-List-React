const BASE_URL = "http://localhost:3001";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const randomNumber = (min = 0, max = 1) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

const simulateNetworkLatency = (min = 30, max = 1500) =>
	delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
	await simulateNetworkLatency();

	options.headers = {
		"Content-Type": "application/json",
		Accept: "application/json",
	};

	const url = BASE_URL + endpoint;
	const response = await fetch(url, options);
	const data = await response.json();
	return data;
}

const api = {
	todos: {
		list() {
			return callApi("/todos");
		},

		create(todo) {
			return callApi(`/todos`, {
				method: "POST",
				body: JSON.stringify(todo),
			});
		},

		read(todoId) {
			return callApi(`/todos/${todoId}`);
		},

		update(todoId, updates) {
			return callApi(`/todos/${todoId}`, {
				method: "PUT",
				body: JSON.stringify(updates),
			});
		},

		remove(todoId) {
			return callApi(`/todos/${todoId}`, {
				method: "DELETE",
			});
		},
	},
};

export default api;
