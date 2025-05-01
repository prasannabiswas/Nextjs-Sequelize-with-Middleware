import "dotenv/config";

console.log("Loaded ENV variables:");
console.log("DB_USERNAME:", process.env.DB_USERNAME);
console.log("DB_PASSWORD:", typeof process.env.DB_PASSWORD);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_PORT:", process.env.DB_PORT);
console.log("NODE_ENV:", process.env.NODE_ENV);

export function createOptions() {
  return {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "postgres",
    logging: process.env.NODE_ENV === "development" ? console.log : false,
    migrationStorageTableName: "migrations",
  };
}

const options_development = createOptions();
const options_test = createOptions();
const options_production = createOptions();

if (process.env.NODE_ENV === "production") {
  options_production.dialectOptions = {
    ssl: {
      rejectUnauthorized: true,
    },
  };
}

export default {
  development: options_development,
  test: options_test,
  production: options_production,
};
