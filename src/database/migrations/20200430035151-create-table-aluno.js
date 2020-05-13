'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable("aluno",{
    id:{
      type: Sequelize.INTEGER,
      allowNull:false,
      autoIncrement: true,
      primaryKey:true
    },
    nome:{
      type: Sequelize.STRING(100),
      allowNull:false
    },
    dtnascimento: {
      type: Sequelize.DATE,
      allowNull: false
    },
    telefone:{
      type: Sequelize.STRING(20),
      allowNull: true
    },
    bairro: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    cep: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
  }),

  down: (queryInterface) => queryInterface.dropTable("aluno")
};
