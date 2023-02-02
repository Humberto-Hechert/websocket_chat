const app = require('./config/server')

let server = app.listen(80, () => {
    console.log('Servidor rodando na porta padrão 80')
})

let io = require('socket.io').listen(server)

/*Setando o objeto io como variável global para podermos usar em nossos controllers */
app.set('io', io)

/*Criando a conexão por websocket */
io.on('connection', (socket) => {
    console.log('Usuário conectou')

    socket.on('disconnect', () => {
        console.log('Usuário desconectou')
    })
})