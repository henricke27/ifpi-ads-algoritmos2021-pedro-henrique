const prompt = require('prompt-sync')()

function main(){
    let data = prompt('Informe a data: ')
    let numero = ''

    let dia = ''
    let mes = ''
    let ano = ''

    for (let i = 0; i < data.length; i++){
        numero = data[i]

        if(numero.charCodeAt(0) === 47){
            continue
        }else if(dia.length !== 2){
            dia = dia + numero
        }else if(mes.length !== 2){
            mes = mes + numero
        }else{
            ano = ano + numero
        }
    }
    console.log(`${dia} de ${mes_por_extenso(mes)} de ${ano}`)

    function mes_por_extenso(mes) {
        let numero_mes = Number(mes)

        if(numero_mes === 1){
            return 'janeiro'
        }else if(numero_mes === 2){
            return 'fevereiro'
        }else if(numero_mes === 3){
            return 'março'
        }else if(numero_mes === 4){
            return 'abril'
        }else if(numero_mes === 5){
            return 'maio'
        }else if(numero_mes === 6){
            return 'junho'
        }else if(numero_mes === 7){
            return 'julho'
        }else if(numero_mes === 8){
            return 'agosto'
        }else if(numero_mes === 9){
            return 'setembro'
        }else if(numero_mes === 10){
            return 'outubro'
        }else if(numero_mes === 11){
            return 'novembro'
        }else{
            return 'dezembro'
        }
    }
}
main()