const app = require('./config/server')

app.listen(80, () => {
    console.log('Servidor rodando na porta padrão 80')
})