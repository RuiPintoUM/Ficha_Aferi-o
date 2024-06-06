const express = require('express');
const router = express.Router();
const pessoaController = require('../controllers/pessoas');

// Rota para listar todas as pessoas
router.get('/', async (req, res) => {
  try {
    const pessoas = await pessoaController.list();
    res.json(pessoas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para buscar uma pessoa por ID
router.get('/:id', async (req, res) => {
  try {
    const pessoa = await pessoaController.findById(req.params.id);
    if (pessoa) {
      res.json(pessoa);
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para inserir uma nova pessoa
router.post('/', async (req, res) => {
  try {
    const novaPessoa = await pessoaController.insert(req.body);
    res.status(201).json(novaPessoa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Rota para atualizar uma pessoa por ID
router.put('/:id', async (req, res) => {
  try {
    const pessoaAtualizada = await pessoaController.update(req.params.id, req.body);
    res.json(pessoaAtualizada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Rota para remover uma pessoa por ID
router.delete('/:nome', async (req, res) => {
  try {
    await pessoaController.removeById(req.params.nome);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
