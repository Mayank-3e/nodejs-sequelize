import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.dbname, process.env.dbuser, process.env.dbpwd, {
  host: 'localhost',
  dialect: 'mysql'
});
export default sequelize

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}