function registration () {
    
    main.innerHTML = registrationTemplate
    
    elems = ['registration-form', 'login', 'password', 'avatar', 'message', 'picture', 'submit']
        .map(id => ({ [id]: document.getElementById(id) }))
        .reduce((result, link) => Object.assign(result, link), {})
        
    elems.login.oninput = registrationLoginCallback
    
    elems.password.oninput = registrationPasswordCallback
    
    elems.avatar.onchange = function (event) {
        readImage(event.target.files[0])
    }
    
    elems.submit.onclick = function (event) {
        event.target.style.color = '#090'  
        Object.keys(elems)
            .forEach(key => Object.assign(elems[key], { disabled: true }))
        createUser(elems.login.value, {
            password: elems.password.value,
            avatar: elems.picture.src
        }, registrationSubmitCallback)
    }
}
