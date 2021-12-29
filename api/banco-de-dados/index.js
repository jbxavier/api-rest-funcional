const Sequelize = require('sequelize') // conexão com BD
const config = require('config') // foi instalado módulo config para trabalhar com default.json


const instancia = new Sequelize(
    config.get('mysql.banco-de-dados'),
    config.get('mysql.usuario'),
    config.get('mysql.senha'),
    {
        host: config.get('mysql.host'),
        dialect: 'mysql'
    }

  /* -> Foi substituído pela estrutura acima, pois não expõe as informações de usuário
        e senha como no modelo abaixo. Esse código fica aqui para saber que assim também funciona
        apesar de não ser recomendado por questões de segurança. 
  
    'petshop', // nome do banco
    'root',    // usuário BD
    'admin',   // senha BD
    {
        host: '127.0.0.1',
        dialect: 'mysql'
    }
    */

) // instância de sequelize

module.exports = instancia