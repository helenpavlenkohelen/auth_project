function authLoginCallback (event) {
    localStorage.getItem(event.target.value)
        ? setPasswordParams('#090', false)
        : setPasswordParams('#b00', true)
}
