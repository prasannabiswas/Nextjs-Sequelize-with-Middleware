import { Sequelize } from "sequelize";
import pg from "pg";

let sequelize: Sequelize | null = null;

export function getSequelize() {
  if (!sequelize) {
    const dbUrl = process.env.POSTGRES_DATABASE_URL_DEV;
    if (!dbUrl) {
      throw new Error("POSTGRES_DATABASE_URL_DEV is not defined");
    }
    sequelize = new Sequelize(dbUrl, {
      dialect: "postgres",
      dialectModule: pg,
    });
  }

  return sequelize;
}
