'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable("curso", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement: true,
      allowNull:false
    },
    nomecurso: {
      type: Sequelize.STRING(100),
    },
    duracaocurso: Sequelize.STRING(100),
    datapublicacao: Sequelize.DATE
  }),

  down: (queryInterface) => queryInterface.dropTable("curso")
};
