module.exports = function(app) {
    
        var avaliacoes = require('../controllers/avaliacao.controller.js');
    
        // Create a new Note
        app.post('/avaliacoes', avaliacoes.create);
    
        // Retrieve all Notes
        app.get('/avaliacoes', avaliacoes.findAll);
    
        // Retrieve a single Note with avaliacaoId
        app.get('/avaliacoes/:avaliacaoId', avaliacoes.findOne);
    
        // Update a Note with avaliacaoId
        app.put('/avaliacoes/:avaliacaoId', avaliacoes.update);
    
        // Delete a Note with avaliacaoId
        app.delete('/avaliacoes/:avaliacaoId', avaliacoes.delete);
    }