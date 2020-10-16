const { Projeto } = require("../../src/app/models");
const { Bloco } = require("../../src/app/models");
const { Tarefa } = require("../../src/app/models");

describe('Criação', () => {

  it('Deve criar um projeto', async () => {
    const project = await Projeto.create({ 
      nome: 'Formatar',
      responsavel: 'Fulano', 
      cliente: 'Sicrano', 
      descricao: 'O computador contém vírus'
    });

    expect(project.nome).toBe('Formatar');
  });

  it('Deve criar um bloco', async () => {
    const block = await Bloco.create({ 
      uuid_projeto: 1,
      nome: 'Salvar dados do cliente', 
      responsavel: 'Fulano', 
      descricao: 'O cliente que suas fotos, videos e audios salvos'
    });

    expect(block.responsavel).toBe('Fulano');
  });

  it('Deve criar uma tarefa', async () => {
    const appointment = await Tarefa.create({ 
      uuid_projeto: 1,
      uuid_bloco: 1,
      responsavel: 'Fulano', 
      descricao: 'Obter um hd ou ssd',
      status: 'incompleto',
      data_inicio: '2020-10-16T16:08:25.560Z',
      data_fim: '2020-10-16T16:16:31.740Z',
    });

    expect(appointment.status).toBe('incompleto');
  });

})

describe('Leitura', () => {
  it("Deve procurar um Projeto pelo id", async () => {
      const project = await Projeto.findByPk(1)

      expect(project.nome).toBe('Formatar');
  });

  it("Deve procurar um Bloco pelo id", async () => {
    const block = await Bloco.findByPk(1)

    expect(block.responsavel).toBe('Fulano');
  });

  it("Deve procurar uma Tarefa pelo id", async () => {
    const appointment = await Tarefa.findByPk(1)

    expect(appointment.status).toBe('incompleto');
  });

})

describe('Atualização', () => {
  it('Deve atualizar um projeto', async () => {
    const project = await Projeto.update({ nome: 'Formatari' }, { where:{ id: 1} })

    const projeto = await Projeto.findByPk(1)

    expect(projeto.nome).toBe('Formatari')
  })

  it('Deve atualizar um bloco', async () => {
    const block = await Bloco.update({ responsavel: 'Sicrano' }, { where:{ id: 1} })

    const bloco = await Bloco.findByPk(1)

    expect(bloco.responsavel).toBe('Sicrano')
  })

  it('Deve atualizar uma tarefa', async () => {
    const appointement = await Tarefa.update({ status: 'completo' }, { where:{ id: 1} })

    const tarefa = await Tarefa.findByPk(1)

    expect(tarefa.status).toBe('completo')
  })

})

describe('Exclusão', () => {
 it('Deve excluir um projeto', async () => {
    const project = await Projeto.destroy({ where: {id : 1}})
    const projeto = await Projeto.findByPk(1)
    expect(projeto).toBe(null)
  })

  it('Deve excluir um bloco', async () => {
    const block = await Bloco.destroy({ where: {id : 1}})
    const bloco = await Bloco.findByPk(1)
    expect(bloco).toBe(null)
  })

  it('Deve excluir uma tarefa', async () => {
    const appointment = await Tarefa.destroy({ where: {id : 1}})
    const tarefa = await Tarefa.findByPk(1)
    expect(tarefa).toBe(null)
  })
})
 

  
 
