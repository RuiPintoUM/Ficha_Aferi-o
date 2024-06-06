const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pessoaSchema = new Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
  sexo: { type: String, enum: ['masculino', 'feminino', 'outro'], default: 'outro' },
  morada: {
    cidade: { type: String, required: true },
    distrito: { type: String, required: true }
  },
  BI: { type: String, required: true },
  descrição: String,
  profissao: String,
  partido_politico: {
    party_abbr: String,
    party_name: String
  },
  religiao: String,
  desportos: [String],
  animais: [String],
  figura_publica_pt: [String],
  marca_carro: String,
  destinos_favoritos: [String],
  atributos: {
    fumador: Boolean,
    gosta_cinema: Boolean,
    gosta_viajar: Boolean,
    acorda_cedo: Boolean,
    gosta_ler: Boolean,
    gosta_musica: Boolean,
    gosta_comer: Boolean,
    gosta_animais_estimacao: Boolean,
    gosta_dancar: Boolean,
    comida_favorita: String
  }
});

const Pessoa = mongoose.model('Pessoa', pessoaSchema);

module.exports = Pessoa;
