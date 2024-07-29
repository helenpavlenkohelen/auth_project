function getAllUsers () {
   fetch(`${host}/users/all`).then(response => {
      if(response.status === 200)
         response.json().then(response => {
            Object.keys(response)
               .forEach(key => localStorage.setItem(key, response[key].password))                  
         })   
   })
}