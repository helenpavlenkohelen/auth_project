function registrationSubmitCallback (response) {
    console.log(response)

    localStorage.setItem(elems.login.value, elems.password.value)
    elems['registration-form'].remove()
}