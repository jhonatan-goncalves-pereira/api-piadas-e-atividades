

function dataFormat(date){
    newdate = date.slice(0,10).split('-')
    return `${newdate[2]}-${newdate[1]}-${newdate[0]}`
}

function contentFormat(updated_at, created_at, icon_url, id, joke, reference){
    const template = `{
    "data_atualizacao": "${updated_at}",
    "data_criacao": "${created_at}",
    "icone": "${icon_url}",
    "id": "${id}",
    "piada": "${joke}",
    "referencia": "${reference}"
    }`
    return template
}

function chuckUpper(string){
    string_upper = string.replace('Chuck Norris', 'CHUCK NORRIS')
    return string_upper
}

module.exports = {dataFormat, contentFormat, chuckUpper}