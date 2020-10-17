const { Projeto } = require('../app/models');
const { Bloco } = require('../app/models');
const { Tarefa } = require('../app/models');

module.exports = {
  async index(req,res) {
      const project = await Projeto.findAll();

      return res.json(project);
  },

  async store(req, res) {
    const { nome, responsavel, cliente, descricao } = req.body;

    const project = await Projeto.create({ nome, responsavel, cliente, descricao });

    return res.json(project);
  },

  async update(req, res) {
    const { nome, responsavel, cliente, descricao } = req.body;
    const { id } = req.params;

    const project = await Projeto.update({ nome, responsavel, cliente, descricao }, { where:{ id } });

    const projeto = await Projeto.findByPk(id);

    return res.json(projeto);
  },

  async delete(req, res) {
    const { id } = req.params;

    const project = await Projeto.destroy({ where: { id }});
    const block = await Bloco.destroy({ where: { uuid_projeto : id}});
    const tarefa = await Tarefa.destroy({ where: { uuid_projeto : id}});
    const projeto = await Projeto.findByPk(id);

    res.json(projeto);
  }
}