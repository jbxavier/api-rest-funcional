const bodyParser = require('body-parser')
const http = require('http')


const servidor = http.createServer((req, res) => {
    //  console.log('Método: ', req.method)
    //  console.log('Headers: ', req.headers)
    //  console.log('HTTP versão: ', req.httpVersion)

    if (req.method === 'POST') {
        res.writeHead(201, { 'Content-type': 'application/json' })
        res.write('{"message": "Cadastro efetuado com sucesso!"}')
    }

    if (req.method === 'GET') {
        res.write(200, {
            'Content-type': 'text/html'
        })

        res.writeHead(200, {
            'Content-Type': 'text/html'
        })

        res.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>JavaScript!!!</title>
                <style>
                    body{
                        background-color: bisque;
                        font-family: Arial, Helvetica, sans-serif;
                    }
                    p{
                        width: 500px;
                        text-align: justify;
                    }
                </style>
            </head>
            <body>
                <h1>Primeiro contato com JavaScript</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, quam deserunt expedita fuga maxime in corporis dolorum reprehenderit. Ullam ipsam possimus cum, sapiente sit dolore hic fuga officia voluptatibus dolores!</p>
            
                <p>Testando retorno html através do servidor!</p>
                
                
            </body>
            </html>`)

        res.end()

    }


})

servidor.listen(3001, () => {
    console.log('Servidor rodando')
})