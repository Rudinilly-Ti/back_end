module.exports = (sequelize, DataTypes) => {
  const Projeto = sequelize.define("Projeto", {
    nome: DataTypes.STRING,
    responsavel: DataTypes.STRING,
    cliente: DataTypes.STRING,
    descricao: DataTypes.STRING
  });

  return Projeto;
};