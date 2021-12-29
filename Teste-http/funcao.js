const soma = function(a, b, fnCallback){
    return a + b
    //var resposta = a + b
    //return fnCallback(resposta)
}

const somaMostra = function(a, b, fnMostra){
    var resposta = a + b
    return fnMostra(resposta)
}

console.log(soma(10, 5))

function multiplica3(resultado){
    return resultado * 3
}

const n1 = soma(5, 2)
console.log(n1)

somaMostra(2, 90, function(resultado){
    console.log(resultado)
})

somaMostra(4, 8, function(resultado){
    console.log(resultado * 4)
})