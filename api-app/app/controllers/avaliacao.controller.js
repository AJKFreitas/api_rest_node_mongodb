var Avaliacao = require('../models/avaliacao.model.js');

exports.create = function(req, res) {
     if(!req.body.content) {
        res.status(400).send({message: "Avaliacao can not be empty"});
    }
    var avaliacao = new Avaliacao({
                        nome_laticinio: req.body.nome_laticinio || "Untitled nome_laticinio",
                        nome_produtor: req.body.nome_produtor,
                        gordura: req.body.gordura ,
                        acidez: req.body.acidez ,
                        densidade_relativa: req.body.densidade_relativa ,
                        indice_crioscopico: req.body.indice_crioscopico ,
                        solidos_n_gordurosos: req.body.solidos_n_gordurosos ,
                        proteina_total: req.body.proteina_total ,
                        estabilidade_alizarol: req.body.estabilidade_alizarol ,
                        cont_placas: req.body.cont_placas ,
                        cont_celula_somatica: req.body.cont_celula_somatica });

    avaliacao.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Avaliacao."});
        } else {
            res.send(data);
        }
    });

};

exports.findAll = function(req, res) {
     Avaliacao.find(function(err, avaliacaos){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving avaliacaos."});
        } else {
            res.send(avaliacaos);
        }
    });

};

exports.findOne = function(req, res) {
    // Find a single avaliacao with a avaliacaoId
    Avaliacao.findById(req.params.avaliacaoId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve avaliacao with id " + req.params.avaliacaoId});
        } else {
            res.send(data);
        }
    });

};

exports.update = function(req, res) {
     // Update a avaliacao identified by the avaliacaoId in the request
     Avaliacao.findById(req.params.avaliacaoId, function(err, avaliacao) {
        if(err) {
            res.status(500).send({message: "Could not find a avaliacao with id " + req.params.avaliacaoId});
        }

        avaliacao.title = req.body.title;
        avaliacao.content = req.body.content;

        avaliacao.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update avaliacao with id " + req.params.avaliacaoId});
            } else {
                res.send(data);
            }
        });
    });

};

exports.delete = function(req, res) {
    // Delete a avaliacao with the specified avaliacaoId in the request
    Avaliacao.remove({_id: req.params.avaliacaoId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete avaliacao with id " + req.params.id});
        } else {
            res.send({message: "Avaliacao deleted successfully!"})
        }
    });

};