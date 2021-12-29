const roteador = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedores')
const Fornecedor = require('./Fornecedor')

// definindo rotas
    roteador.get('/', async (requisicao, resposta) => {
        const resultados = await TabelaFornecedor.listar()
    resposta.send(JSON.stringify(resultados))
    })

    roteador.post('/', async (requisicao, resposta) => {
        console.log('iniciando post...')
        const dadosRecebidos = requisicao.body
        console.log('antes de criar fornecedor....')
        const fornecedor = new Fornecedor(dadosRecebidos)
        await fornecedor.criar()
        console.log('antes de fazer send fornecedor para postman')
        resposta.send(JSON.stringify(fornecedor))
    })



module.exports = roteador