var mongoose = require('mongoose');

var AvaliacaoSchema = mongoose.Schema({
    nome_laticinio: String,
	nome_produtor : String,
    gordura:String,
    acidez:String,
    densidade_relativa:String,
    indice_crioscopico:String,
    solidos_n_gordurosos:String,
    proteina_total:String,
    estabilidade_alizarol:String,
    cont_placas:String,
    cont_celula_somatica:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Avaliacao', AvaliacaoSchema);
