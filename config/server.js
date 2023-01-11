const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')
const expressValidator = require('express-validator')

const app = express()

/*Setando as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs')
app.set('views', './app/views')

/*Configurando o middleware express.static */
app.use(express.static('./app/public'))

/*configurando o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}))

/*Configurando o middleware express-validator */
app.use(expressValidator())

/*Autoload das rotas, models e controllers */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)

module.exports = app