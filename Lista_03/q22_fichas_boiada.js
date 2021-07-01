const prompt = require('prompt-sync')()

function main() {
    let numero_id = 0
    let peso = 0

    let maior_peso = 0
    let menor_peso = 0

    let id_maior_peso = 0
    let id_menor_peso = 0

    for(let i = 0 ; numero_id !== -1 ; i++){
    
        if(peso >= maior_peso){
            maior_peso = peso
            id_maior_peso = numero_id
        }

        if(menor_peso === 0){
            menor_peso = maior_peso
        }
        if(id_menor_peso === 0){
            id_menor_peso = numero_id
        }

        if(peso < menor_peso){
            menor_peso = peso
            id_menor_peso = numero_id
        }

        numero_id = Number(prompt('Número de identificação: '))
        peso = Number(prompt('Peso: '))

    }
    console.log(`O boi ${id_maior_peso} é o mais gordo com ${maior_peso}kg`)
    console.log(`O boi ${id_menor_peso} é o mais magro com ${menor_peso}kg`)
}
main()