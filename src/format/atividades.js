function createGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

function returnActivity(activity, type, participants, acessibility){
    const act = `{
    "id": "${createGUID()}",
    "atividade": "${activity}",
    "tipo": "${type}",
    "participantes": "${participants}",
    "acessibilidade": "${acessibility * 100}%"
    }`
    return JSON.parse(act);
};

//console.log(returnActivity("a", "esc", 2, 0.2))
module.exports = {returnActivity, createGUID}



