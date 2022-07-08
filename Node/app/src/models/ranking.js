import { Sequelize } from "sequelize"; 
import db from "../../config/config.js";
 
const { DataTypes } = Sequelize;

const Rating = db.define('ranking', {
  userId: {
    type: DataTypes.INTEGER
  },
  gamePoints: {
    type: DataTypes.INTEGER
  }
}, {
  freezeTableName: true
});
 
export default Ranking;