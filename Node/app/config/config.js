import { Sequelize } from "sequelize";

const db = new Sequelize({
  database: "Progetto_finale",
  username: "root",
  password: "root",
  host: "localhost",
  port: 8889,
  dialect: "mysql",
});

export default db;
