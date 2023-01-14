

function returnActivity(activity, type, participants, acessibility){
    act = `{
    'id:' '${function createGUID() {
        const dt = new Date().getTime();
        const guid = 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'. replace(/[xy]/g, function(a) {
            const b = (dt + Math.random()+16)%16 | 0;
            dt = Math.floor(dt/16);
            return (a == 'x' ? b :(b&0x3|0x8)).toString(16);
        });
        return guid;
    }}',
    'atividade': '${activity}',
    'tipo': '${type}',
    'participantes': '${participants}',
    'acessibilidade': '${acessibility * 100}%'
    }`

    return act;
};

module.exports = {returnActivity}



