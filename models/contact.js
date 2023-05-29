import { DataTypes } from 'sequelize';
import sequelize from './db.js';

const Contact = sequelize.define('Contact',
{
  permanent_address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  current_address: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
});
export default Contact