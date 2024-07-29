function readImage (file) {      
    if (!file.type.indexOf('image')) {
        elems.message.innerText = ''
        
        const reader = new FileReader

        reader.onload = function (ev) {
            elems.picture.src = ev.target.result
        }

        reader.readAsDataURL(file)
    } else {
        elems.message.innerText = 'Invalid type file'
    }
}