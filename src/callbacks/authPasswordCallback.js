function authPasswordCallback (event) {
    event.target.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
        ? setSubmitParams('#090', false)
        : setSubmitParams('#b00', true)
}
