function  registrationPasswordCallback (event) {
    event.target.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
        ? setSubmitParams('#090', false)
        : setSubmitParams('#d00', true)
}