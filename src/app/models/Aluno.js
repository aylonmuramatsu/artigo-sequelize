import Sequelize, { Model } from "sequelize";

class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING(100),
        dtnascimento: Sequelize.STRING(100),
        telefone: Sequelize.DATE,
        bairro:Sequelize.STRING(100),
        cep: Sequelize.STRING(20)
      },
      {
        sequelize,
        tableName: 'aluno',
      }
    );

    return this;
  }
  /**
   * Sempre que um model tiver um relacionamento 
   * adicionaremos esse associate para indicar
   * com que esse model se relaciona
   */
  static associate(models){
    /**
     * Neste caso usaremos o belongsTo, mas dependendo da necessidade
     * temos outras opçoes
     * belongsToMany, belongsTo, HasMany, HasOne,Association
     * para conhecer mais acesse:
     * https://sequelize.org/master/class/lib/associations/belongs-to.js~BelongsTo.html
     */

    this.belongsTo(models.Curso, {
        foreignKey: 'curso_id',
        as: 'curso',
    });

  }
}

export default Aluno