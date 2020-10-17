const { Tarefa } = require('../app/models');

module.exports = {
  async index(req, res) {
    const appointment = await Tarefa.findAll();

    return res.json(appointment)
  },

  async store(req,res) {
    const { 
      uuid_projeto,
      uuid_bloco,
      responsavel, 
      descricao,
      status,
      data_inicio,
      data_fim } = req.body;
    

    const appointment = await Tarefa.create({ 
      uuid_projeto,
      uuid_bloco,
      responsavel, 
      descricao,
      status,
      data_inicio,
      data_fim
    });

    return res.json(appointment);
  },

  async update(req, res) {
    const { 
      uuid_projeto,
      uuid_bloco,
      responsavel, 
      descricao,
      status,
      data_inicio,
      data_fim } = req.body;
    const { id } = req.params;

    const appointment = await Tarefa.update({
      uuid_projeto,
      uuid_bloco,
      responsavel, 
      descricao,
      status,
      data_inicio,
      data_fim }, 
      { where: { id }});

    const tarefa = await Tarefa.findByPk(id);

    return res.json(tarefa);
  },

  async delete(req, res) {
    const { id } = req.params;

    const appointment = await Tarefa.destroy({ where: { id }});
    const tarefa = await Tarefa.findByPk(id)

    return res.json(tarefa);
  }

}