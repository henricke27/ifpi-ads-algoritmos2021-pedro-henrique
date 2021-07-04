const prompt = require('prompt-sync')()

function main() {
    let nome = prompt('Nome completo: ')
    let caractere1 = ''
    let caractere2 = ''
    let inicial_nomes = ''
    let ultimo_nome = ''
    
    for (let i = nome.length - 1; caractere2.charCodeAt(0) !== 32; i--){
        caractere2 = nome[i]

        if(caractere2.charCodeAt(0) !== 32){
            ultimo_nome = ultimo_nome + caractere2
        }
    }
    for(let i = 0; i < nome.length; i++){
        caractere1 = nome[i]

        if(caractere1.charCodeAt(0) >= 65 && caractere1.charCodeAt(0) <= 90 && caractere1 !== ultimo_nome[ultimo_nome.length -1]){
            inicial_nomes = inicial_nomes + caractere1 + '.'
        }
    }
    console.log(`${ultimo_nome.split('').reverse().join('')}, ${inicial_nomes}`)
}
main()