
function soma(...numeros) {
    let resultado = 0
    numeros.forEach(element => {
        resultado += element
    });
    
    return resultado
}

function somaReduce(...numeros){
    return numeros.reduce((acumula, elemArray) => acumula + elemArray, 0)
}


const resultado = somaReduce(2, 3, 4, 5, 6, 8)

//const res = soma(4, 7, 9, 2, 10)

console.log(resultado)

