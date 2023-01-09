const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}
fetch(`https://www.boredapi.com/api/activity`, options).then(result => {result.json()
        .then((data) => {
            console.log(data)   
        })
    })
    .catch(err => console.log("Erro:" + err,message))