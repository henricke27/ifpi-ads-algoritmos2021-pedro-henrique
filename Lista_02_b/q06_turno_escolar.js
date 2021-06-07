var input = require('prompt-sync')()

function main() {
    var input_turno = (input('Digite uma letra de acordo com a inicial turno correspondente: ')).toUpperCase()
    var turno = verificar_turno(input_turno)

    if(turno === 'M'){
        console.log("Bom dia!")
    }else if(turno === 'V'){
        console.log("Boa tarde!")
    }else if(turno === 'N'){
        console.log("Boa noite!")
    }else{
        console.log("Digite apenas uma das iniciais dos turnos!")
    }

}

function verificar_turno(turno){
    if(turno === 'M'){
        return 'M'
    }else if(turno === 'V'){
        return 'V'
    }else if(turno === 'N'){
        return 'N'
    }else{
        return false
    }
}
main()