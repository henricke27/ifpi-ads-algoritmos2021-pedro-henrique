const prompt = require('prompt-sync')()

function main() {
    let populacao_a = Number(prompt('Informe a população da cidade A: '))
    let populacao_b = Number(prompt('Informe a população da cidade B: '))
    let crescimento_a = Number(prompt('Informe a taxa de crescimento da população da cidade A (%): '))
    let crescimento_b = Number(prompt('Informe a taxa de crescimento da população da cidade B (%): '))

    let total_anos = 0

    while(populacao_b > populacao_a){
        populacao_a = populacao_a + (populacao_a * (crescimento_a / 100))
        populacao_b = populacao_b + (populacao_b * (crescimento_b / 100))

        total_anos++
    }
    console.log(`A população da cidade A demorou ${total_anos} anos para ultrapassar a população da cidade B`)
}
main()