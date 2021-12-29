const Sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')

// objeto que representa as colunas da tabela
const colunas = {
    empresa: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    categoria: {
        type: Sequelize.ENUM('ração', 'brinquedos'),
        allowNull: false
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'fornecedores',
    timestamps: true,
    createdAt: 'dataCriacao', // traduzindo o nome das colunas fornecidas pelo sequelize
    updatedAt: 'dataAtualizacao', // essas colunas também serão criadas na tabela!!!
    version: 'versao'
}

module.exports = instancia.define('fornecedor', colunas, opcoes)