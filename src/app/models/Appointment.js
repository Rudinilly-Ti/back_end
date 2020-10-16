module.exports = (sequelize, DataTypes) => {
  const Tarefa = sequelize.define("Tarefa", {
    uuid_projeto: DataTypes.INTEGER,
    uuid_bloco: DataTypes.INTEGER,
    responsavel: DataTypes.STRING,
    descricao: DataTypes.STRING,
    data_inicio: DataTypes.DATE,
    data_fim: DataTypes.DATE,
    status: DataTypes.STRING,
  });

  return Tarefa;
};