const ModeloTabela = require('../rotas/fornecedores/modeloTabelaFornecedores')

// vamos sincronizar a criação das tabelas, retornará uma promessa que deverá ser tratada
ModeloTabela
    .sync()
    .then(() => console.log('Tabela crianda com sucesso'))
    .catch(console.log)