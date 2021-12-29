const Modelo = require("./modeloTabelaFornecedores")

module.exports = {
    listar(){
        return Modelo.findAll()
    },

    inserir (fornecedor){
        console.log('passando pelo método inserir...')
        return Modelo.create(fornecedor)
    }
}