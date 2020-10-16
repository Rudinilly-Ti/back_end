module.exports = (sequelize, DataTypes) => {
  const Bloco = sequelize.define("Bloco", {
    uuid_projeto: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    responsavel: DataTypes.STRING,
    descricao: DataTypes.STRING
  });

  return Bloco;
};