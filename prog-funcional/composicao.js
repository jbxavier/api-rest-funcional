
// ...funcoes : definindo um array de funções tornando ilimitado
function composicao(...funcoes){
    return function(valor){
        // percorrendo cada função passada passando a próxima por parâmetro
        return funcoes.reduce((acumulador, funcao) => {
            return funcao(acumulador)
        }, valor) // parâmetro valor inicial

    }
    
}

function gritar(texto){
    return texto.toUpperCase()
}

function enfatizar(texto){
    return `${texto}!!!!!!`
}

function lento(texto){
    return texto.split('').join(' ')
}

const resultado = composicao(gritar, enfatizar, lento)

console.log(resultado('teste'))
console.log(resultado('aprendendo prog funcional'))