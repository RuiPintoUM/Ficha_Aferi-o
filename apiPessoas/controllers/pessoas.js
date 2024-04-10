var mongoose = require('mongoose')
const { modelName } = require('../models/pessoas.js')
var Compositor = require("../models/pessoas.js")

// insert 
module.exports.insert = (pessoa) => {
    var newPessoa = new Pessoa(pessoa)
    return newPessoa.save()
}


// update 
module.exports.update = (id, pessoa) => {
    return Pessoa
        .findByIdAndUpdate(id, compositor, {new : true}) // new:true, devolve o aluno nova se nao tivesse devolvia o antigo
        .exec()
}