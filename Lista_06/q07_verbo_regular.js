const prompt = require('prompt-sync')()

function main(){
    let verbo = prompt('Verbo regular: ')
    let sufixo = ''
    let letra = ''

    for (let i = verbo.length -2; verbo.length !== i; i++){
        letra = verbo[i]
        sufixo = sufixo + letra
    }

    let conjugacao = conjugar(verbo, sufixo)

    console.log(conjugacao)

    function conjugar(verbo, sufixo) {
        let radical = obter_radical(verbo)

        let primeira_pessoa = 'o'
        let segunda_pessoa = 'es'
        let terceira_pessoa = 'e'
        let primeira_pessoa_plural = 'emos'

        if(sufixo === 'er'){
            return `Eu ${radical + primeira_pessoa}. tu ${radical + segunda_pessoa}. ele ${radical + terceira_pessoa}. nós ${radical + primeira_pessoa_plural} `

        }else{
            return 'O verbo não é regular terminado em "ER"!'
        }
    }

    function obter_radical(verbo) { 
        let radical = ''
        let caractere = ''

        for(let i = 0; verbo.length - i !== 2; i++){
            caractere = verbo[i]
            radical = radical + caractere
        }
        return radical
    }
}
main()