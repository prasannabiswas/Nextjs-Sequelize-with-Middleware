import { Sequelize } from "sequelize";
import { SequelizeOptions } from "sequelize-typescript";
import { createOptions } from "../../../database/config/config.mjs";
import pg from "pg";

const options = createOptions();
const dbOptions = <SequelizeOptions>options;
dbOptions.dialectModule = pg;

const sequelize = new Sequelize(dbOptions);

export default sequelize;
