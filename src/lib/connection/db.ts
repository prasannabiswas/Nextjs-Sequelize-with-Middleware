import { Sequelize, Options } from "sequelize";
import { createOptions } from "../../../database/config/config.mjs";
import pg from "pg";

const options = createOptions();
const dbOptions = options as Options;
dbOptions.dialectModule = pg;

const sequelize = new Sequelize(dbOptions);

export default sequelize;
