getAllUsers()

let elems = {}

const regBtn = document.getElementById('registration-btn')
const authBtn = document.getElementById('authorization-btn')

const main = addElem('main')

regBtn.onclick = function (event) {
    // event.target.style.background = '#ddd'
    registration()
}

authBtn.onclick = function (event) {
    // event.target.style.background = '#ddd'
    authorization()
}



