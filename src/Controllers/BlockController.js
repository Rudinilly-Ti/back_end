const { Bloco } = require('../app/models');
const { Tarefa } = require('../app/models');

module.exports = {
  async index(req, res) {
    const { uuid_projeto } = req.params;
    const block = await Bloco.findAll({ where: { uuid_projeto }});

    return res.json(block)
  },

  async store(req,res) {
    const { uuid_projeto, nome, responsavel, descricao } = req.body;
    

    const block = await Bloco.create({ uuid_projeto, nome, responsavel, descricao });

    return res.json(block);
  },

  async update(req, res) {
    const { nome, responsavel, descricao } = req.body;
    const { id } = req.params;

    const block = await Bloco.update({ nome, responsavel, descricao }, { where:{ id } });

    const bloco = await Bloco.findByPk(id);

    return res.json(bloco);
  },

  async delete(req, res) {
    const { id } = req.params;

    const block = await Bloco.destroy({ where: { id }});
    const tarefa = await Tarefa.destroy({ where: { uuid_bloco : id}});
    const bloco = await Bloco.findByPk(id)

    return res.json(bloco);
  }
}