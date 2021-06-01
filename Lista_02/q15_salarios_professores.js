var input = require('prompt-sync')()

function main(){
    var horas_aula_primeiro_professor = Number(input('Informe a quantidade de horas aula dada pelo primeiro professor: '))
    var valor_hora_primeiro_professor = Number(input('Informe o valor recebido por hora pelo primeiro professor: '))
    var horas_aula_segundo_professor = Number(input('Informe a quantidade de horas aula dada pelo segundo professor: '))
    var valor_hora_segundo_professor = Number(input('Informe o valor recebido por hora pelo segundo professor: '))

    var salario_primeiro_professor = horas_aula_primeiro_professor * valor_hora_primeiro_professor
    var salario_segundo_professor = horas_aula_segundo_professor * valor_hora_segundo_professor

    if(salario_primeiro_professor > salario_segundo_professor){
        console.log(`O primeiro professor tem um salário total maior.`)

    }else{
        console.log(`O segundo professor tem um salário total maior.`)
    }
}
main()