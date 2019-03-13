import { DB_CONNECTION_TOKEN } from './constants';
import { Sequelize } from 'sequelize-typescript';

let sequelize: Sequelize;

export const databaseProvider = {
  provide: DB_CONNECTION_TOKEN,
  useFactory: async(): Promise<Sequelize> => {
    const url = '';

    sequelize = new Sequelize({
      dialect: 'postgres',
      modelPaths: [
        __dirname + '/../model/entities',
      ],
      url
    });
    return sequelize;
  }
}
