var input = require('prompt-sync')()

function main() {

    var inicio_jogo_horas = Number(input('Digite a hora inicial do jogo: '))
    var inicio_jogo_minutos = Number(input('Digite o minuto inicial do jogo: '))
    var final_jogo_horas = Number(input('Digite a hora final do jogo: '))
    var final_jogo_minutos = Number(input('Digite o minuto final do jogo: '))

    var validar_horario_inicial = inicio_jogo_horas < 24 && inicio_jogo_minutos < 60
    var validar_horario_final = final_jogo_horas < 24 && final_jogo_minutos < 60
    var validar_horarios = validar_horario_inicial && validar_horario_final
    
    if(validar_horarios && inicio_jogo_horas > final_jogo_horas && inicio_jogo_minutos > final_jogo_minutos ){
        var horas_duracao = (24 - (inicio_jogo_horas - final_jogo_horas)) - 1
        var minutos_duracao = 60 - (inicio_jogo_minutos - final_jogo_minutos)
        console.log(`O jogo teve duração de ${horas_duracao} horas e ${minutos_duracao} minutos.`) 

    }else if(validar_horarios && inicio_jogo_horas > final_jogo_horas && inicio_jogo_minutos < final_jogo_minutos){
        var horas_duracao = (24 - (inicio_jogo_horas - final_jogo_horas)) - 1
        var minutos_duracao = final_jogo_minutos - inicio_jogo_minutos
        console.log(`O jogo teve duração de ${horas_duracao} horas e ${minutos_duracao} minutos.`) 

    }else if(validar_horarios && inicio_jogo_horas < final_jogo_horas && inicio_jogo_minutos > final_jogo_minutos){
        var horas_duracao = (final_jogo_horas - inicio_jogo_horas) - 1
        var minutos_duracao = 60 - (inicio_jogo_minutos - final_jogo_minutos)
        console.log(`O jogo teve duração de ${horas_duracao} horas e ${minutos_duracao} minutos.`) 

    }else if(validar_horarios && inicio_jogo_horas < final_jogo_horas && inicio_jogo_minutos < final_jogo_minutos){
        var horas_duracao = final_jogo_horas - inicio_jogo_horas
        var minutos_duracao = final_jogo_minutos - inicio_jogo_minutos
        console.log(`O jogo teve duração de ${horas_duracao} horas e ${minutos_duracao} minutos.`) 
    }else{
        console.log('Horário inválido')
    }
}   

main()