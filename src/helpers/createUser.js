function createUser(id, user, callback) {
	fetch(`${host}/user/${id}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	}).then((response) => {
		if (response.status === 200)
			response.json().then((response) => callback(response));
	});
}
