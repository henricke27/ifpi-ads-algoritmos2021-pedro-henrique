const prompt = require('prompt-sync')()

function main() {
    let matricula = 1
    let total_aprovados = 0
    let total_reprovados = 0
    let total_alunos = 0

    while(matricula !== 0){
        matricula = Number(prompt('Informe o número da matrícula: '))
        let nota1 = Number(prompt('Informe a primeira nota: '))
        let nota2 = Number(prompt('Informe a segunda nota: '))
        let nota3 = Number(prompt('Informe a terceira nota: '))

        let media_final = ((2 * nota1) + (3 * nota2) + (5 * nota3)) / 10 

        if(media_final >= 7 && matricula !== 0){
            total_aprovados++
        }else if(matricula !== 0){
            total_reprovados++
        }

        if(matricula !== 0){
            total_alunos++
        }else{
            total_alunos = total_alunos
        }
    }
    console.log(`Total de aprovados: ${total_aprovados}`)
    console.log(`Total de reprovados: ${total_reprovados}`)
    console.log(`Total de alunos da turma: ${total_alunos}`)

}
main()