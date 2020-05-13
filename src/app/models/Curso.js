import Sequelize, { Model } from "sequelize";

class Curso extends Model {
  static init(sequelize) {
    super.init(
      {
        nomecurso: Sequelize.STRING(100),
        duracaocurso: Sequelize.STRING(100),
        datapublicacao: Sequelize.DATE
      },
      {
        sequelize,
        tableName: 'curso',
      }
    );

    return this;
  }
}

export default Curso