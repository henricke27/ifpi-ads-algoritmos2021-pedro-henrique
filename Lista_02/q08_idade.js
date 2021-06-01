var input = require('prompt-sync')()

function main(){

    var dia_atual = Number(input('Informe o dia atual: ')) 
    var mes_atual = Number(input('Informe o mês atual: ')) 
    var ano_atual = Number(input('Informe o ano atual: ')) 
    var dia_nascimento = Number(input('Informe o dia de nascimento: ')) 
    var mes_nascimento = Number(input('Informe o mês de nascimento: ')) 
    var ano_nascimento = Number(input('Informe o ano de nascimento: ')) 

    var idade_exata = Number(calcular_idade(dia_atual, mes_atual, ano_atual, dia_nascimento, mes_nascimento, ano_nascimento))
    console.log(`A idade corresponde a ${idade_exata} anos.`)
}

function calcular_idade(dia, mes, ano, dia_nasc, mes_nasc, ano_nasc) {
    var intervalo_anos = ano - ano_nasc
    if(dia >= dia_nasc && mes === mes_nasc){
        var idade = intervalo_anos 
        return idade

    }else if(dia < dia_nasc && mes === mes_nasc){
        var idade = intervalo_anos - 1
        return idade

    }else if(mes > mes_nasc){
        var idade = intervalo_anos 
        return idade 
    }else {
        var idade = intervalo_anos - 1
        return idade
    }
}
main()