import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { spaces, spacesId } from './spaces';

export interface space_access_levelAttributes {
  id: number;
  access_level?: string;
  createdat?: Date;
  updateat?: Date;
}

export type space_access_levelPk = "id";
export type space_access_levelId = space_access_level[space_access_levelPk];
export type space_access_levelOptionalAttributes = "id" | "access_level" | "createdat" | "updateat";
export type space_access_levelCreationAttributes = Optional<space_access_levelAttributes, space_access_levelOptionalAttributes>;

export class space_access_level extends Model<space_access_levelAttributes, space_access_levelCreationAttributes> implements space_access_levelAttributes {
  id!: number;
  access_level?: string;
  createdat?: Date;
  updateat?: Date;

  // space_access_level hasMany spaces via access_level_id
  spaces!: spaces[];
  getSpaces!: Sequelize.HasManyGetAssociationsMixin<spaces>;
  setSpaces!: Sequelize.HasManySetAssociationsMixin<spaces, spacesId>;
  addSpace!: Sequelize.HasManyAddAssociationMixin<spaces, spacesId>;
  addSpaces!: Sequelize.HasManyAddAssociationsMixin<spaces, spacesId>;
  createSpace!: Sequelize.HasManyCreateAssociationMixin<spaces>;
  removeSpace!: Sequelize.HasManyRemoveAssociationMixin<spaces, spacesId>;
  removeSpaces!: Sequelize.HasManyRemoveAssociationsMixin<spaces, spacesId>;
  hasSpace!: Sequelize.HasManyHasAssociationMixin<spaces, spacesId>;
  hasSpaces!: Sequelize.HasManyHasAssociationsMixin<spaces, spacesId>;
  countSpaces!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_access_level {
    return space_access_level.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    access_level: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    updateat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'space_access_level',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_access_level_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
