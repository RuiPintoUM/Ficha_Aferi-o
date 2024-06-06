const mongoose = require('mongoose');
const Pessoa = require('../models/pessoas');

module.exports.list = async () => {
  return await Pessoa
    .find()
    .exec();
}

module.exports.findById = id => {
    return Pessoa
      .findOne({ _id: new mongoose.Types.ObjectId(id) })  // Usando 'new' para criar o ObjectId
      .exec();
 }

module.exports.findByNome = periodo => {
  return Pessoa
    .find({ nome: nome })
    .exec();
}

module.exports.insert = pessoaData => {
    return Pessoa.create(pessoaData); // 'Pessoa' é o modelo Mongoose, 'pessoaData' é o objeto a ser inserido.
  }

module.exports.removeById = nome => {
  return Pessoa.deleteOne({ nome: nome });
}

module.exports.update = (id, Pessoa) => {
  return Pessoa.updateOne({ id: id }, Pessoa);
}

module.exports.getModalidades = async () => {
    return await Pessoa.distinct('desportos').exec();
}

module.exports.getPesoaByModalidade = async (modalidade) => {
    return await Pessoa.aggregate([
        { $match: { desportos: modalidade } },
        { $sort: { nome: 1 } }
    ]).exec();
}