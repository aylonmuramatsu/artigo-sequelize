import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Curso from '../app/models/Curso';
import Aluno from '../app/models/Aluno';
const models = [Curso,Aluno];

class Database {
  constructor(){
      this.init();
  }

  init(){
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection))
      .map((model) => {
          if(model.associate) model.associate(this.connection.models);
          return model;
      })
  }
}

export default new Database();
