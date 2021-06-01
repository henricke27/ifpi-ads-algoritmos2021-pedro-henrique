var input = require('prompt-sync')()

function main(){

    var dia = Number(input('Informe o dia: '))
    var mes = Number(input('Informe o mês: '))
    var ano = Number(input('Informe o ano: '))

    if(data_valida(dia, mes, ano)){
        console.log(`A data ${dia}/${mes}/${ano} é válida.`)

    }else{
        console.log(`A data é inválida.`)
    }
}

function data_valida(dia, mes, ano) {
    var mes_fevereiro = (dia < 29) && (mes === 2)
    var meses_30_dias = (dia < 31) && (mes === 4 || mes === 6 || mes === 8 || mes === 9 || mes === 11)
    var meses_31_dias = (dia < 32) && (mes !== 2 && mes !== 4 && mes !== 6 && mes !== 8 && mes !== 9 && mes !== 11)
    var mes_valido = mes <= 12
    var ano_valido = (ano > 1900) && (ano < 2100)

    if(mes_fevereiro && ano_valido){
        return true

    }else if(meses_30_dias && mes_valido && ano_valido){
        return true
        
    }else if(meses_31_dias && mes_valido && ano_valido){
        return true

    }else{
        return false
    }
}
main()