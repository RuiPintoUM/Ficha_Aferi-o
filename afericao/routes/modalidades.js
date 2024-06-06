const express = require('express');
const router = express.Router();
const pessoaController = require('../controllers/pessoas');

router.get('/', async (req, res) => {
    try {
        const pessoas = await pessoaController.getModalidades();
        res.json(pessoas);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:modalidade', async (req, res) => {
    try {
        const modalidade = req.params.modalidade;
        const atletas = await pessoaController.getPesoaByModalidade(modalidade);
        res.json(atletas);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;