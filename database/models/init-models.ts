import type { Sequelize } from "sequelize";
import { users as _users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";

export {
  _users as users,
};

export type {
  usersAttributes,
  usersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const users = _users.initModel(sequelize);


  return {
    users: users,
  };
}
