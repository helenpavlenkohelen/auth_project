function registrationLoginCallback (event) {
    localStorage.getItem(event.target.value)
        ? setPasswordParams('#d00', true)
        : setPasswordParams('#090', false)
}