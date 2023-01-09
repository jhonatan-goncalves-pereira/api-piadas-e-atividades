const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}
fetch(`https://api.chucknorris.io/jokes/random`, options).then(result => {result.json()
        .then((data) => {
            console.log(data)   
        })
    })
    .catch(err => console.log("Erro:" + err,message))