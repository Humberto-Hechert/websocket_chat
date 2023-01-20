module.exports.chatPage = (app, req, res) => {

    const dadosForm = req.body

    req.assert('apelido', 'Nome não pode ser vazio').notEmpty()
    req.assert('apelido', 'Nome não pode ter menos de 3 e mais de 15 caracteres').len(3, 15)

    const erros = req.validationErrors()

    if (erros){
        res.render("index", {validacao : erros})
        return
    }
    res.render('chat.ejs')
}