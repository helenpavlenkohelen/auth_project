function authorization () {

    main.innerHTML = authorizationTemplate

    elems = ['registration-form', 'login', 'password', 'submit', 'message', 'picture']
        .map(id => ( { [id]: document.getElementById(id)}))
        .reduce((result, link) => Object.assign(result, link), {})

    elems.login.oninput = authLoginCallback

    elems.password.oninput = authPasswordCallback

    elems.submit.onclick = function(event) {
        event.target.disabled = true

        const test = elems.password.value === localStorage.getItem(elems.login.value)

        console.log(elems.password.value, test)

        elems.message.innerText = test ? `Hello ${elems.login.value}` : 'Invalid password'
        getUser(elems.login.value, response => { elems.picture.src = response.avatar || null })
        stylizeButton(event.target, test)
    }
}
