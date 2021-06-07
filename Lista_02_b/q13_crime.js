var input = require('prompt-sync')()

function main() {
    var pergunta_1 = (input('Telefonou para a vítima? ')).toLowerCase()
    var pergunta_2 = (input('Esteve no local do crime? ')).toLowerCase()
    var pergunta_3 = (input('Mora perto da vítima? ')).toLowerCase()
    var pergunta_4 = (input('Devia para a vítima? ')).toLowerCase()
    var pergunta_5 = (input('Já trabalhou com a vítima? ')).toLowerCase()

    var classificacao = verificar_classificacao(pergunta_1, pergunta_2, pergunta_3, pergunta_4, pergunta_5)

    if((pergunta_1 === 'sim' || pergunta_1 === 'nao') && (pergunta_2 === 'sim' || pergunta_2 === 'nao') && (pergunta_3 === 'sim' || pergunta_3 === 'nao') 
    && (pergunta_4 === 'sim' || pergunta_4 === 'nao') && (pergunta_5 === 'sim' || pergunta_5 === 'nao')){
        console.log(`A pessoa é ${classificacao}`)
    }else{
        console.log('Responda apenas com "sim" ou "nao"')
    }
}

function verificar_classificacao(info_1, info_2, info_3, info_4, info_5) {
    var acumulador = 0

    if(info_1 === 'sim'){
        acumulador += 1 
    }if(info_2 === 'sim'){
        acumulador += 1
    }if(info_3 === 'sim'){
        acumulador += 1
    }if(info_4 === 'sim'){
        acumulador += 1
    }if(info_5 === 'sim'){
        acumulador += 1
    }

    if(acumulador === 2){
        return 'supeita'
    }else if(acumulador === 3 || acumulador === 4){
        return 'cúmplice'
    }else if(acumulador === 5){
        return 'assassina'
    }else{
        return 'inocente'
    }
}
main()