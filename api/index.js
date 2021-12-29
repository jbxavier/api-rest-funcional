const express = require('express') // biblioteca api
const app = express() // instância do express gerando a app
const config = require('config') // permite ler a porta configurada em default.json

// app.use(bodyParser.json()) // indicando o formato aceito na aplicação
app.use(express.json()) // body-parser está descontinuado/deprecated
app.use(express.urlencoded({ extended: true }))

// fazendo ligação com o arquivo de rotas em api/rotas/fornecedores/index.js
const roteador = require('./rotas/fornecedores') // aqui acessamos o index.js
app.use('/api/fornecedores', roteador) // aqui o roteador representa um grupo de funções desse caminho

// definindo uma porta para aplicação escutar as requisições
// parâmetros (porta, função callback) // porta do default.json config.get('api.porta')
app.listen(config.get('api.porta'), () => console.log('Api rodando'))

