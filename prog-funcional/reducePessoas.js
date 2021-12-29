const pessoas = [
    { nome: 'Pedro', idade: 24 },
    { nome: 'Marcelo', idade: 16 },
    { nome: 'Fábio', idade: 27 },
    { nome: 'Silva', idade: 12 },
    { nome: 'Berenice', idade: 34 },
    { nome: 'Eliana', idade: 44 },
    { nome: 'Bento', idade: 8 },
    { nome: 'Gisleine', idade: 17 }
]

const pessoasMaiorMenor =
    pessoas.reduce(
        function (acumulador, elementoArray) {
            const propMaiorMenor = elementoArray.idade >= 18 ? 'maior' : 'menor'

            acumulador[propMaiorMenor].push(elementoArray)

            return acumulador
        }
        , { maior: [], menor: [] }) // retorno (valor inicial)

console.log(pessoasMaiorMenor)