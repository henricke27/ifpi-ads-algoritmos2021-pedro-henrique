const prompt = require('prompt-sync')()

function main(){
    let horario = prompt('informe o horário(hh:mm:ss): ')

    let horas = ''
    let minutos = ''
    let segundos = ''

    for (let i = 0; i < horario.length; i++){
        caractere = horario[i]

        if(caractere.charCodeAt(0) === 58 ){
            continue
        }else if(horas.length !== 2){
            horas = horas + caractere
        }else if(minutos.length !== 2){
            minutos = minutos + caractere
        }else{
            segundos = segundos + caractere
        }
    }
    console.log(`${horas} horas, ${minutos} minutos e ${segundos} segundos.`)
}
main()