function getUser (login, callback) {
    fetch(`${host}/user/${login}`)
        .then(response => response.json(), response => console.warn('Error', response))
        .then(response => callback(response))
}