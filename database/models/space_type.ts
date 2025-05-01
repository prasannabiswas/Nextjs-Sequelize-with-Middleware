import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { spaces, spacesId } from './spaces';

export interface space_typeAttributes {
  id: number;
  space_type_name?: string;
  view_position?: number;
  createdat?: Date;
  updateat?: Date;
}

export type space_typePk = "id";
export type space_typeId = space_type[space_typePk];
export type space_typeOptionalAttributes = "id" | "space_type_name" | "view_position" | "createdat" | "updateat";
export type space_typeCreationAttributes = Optional<space_typeAttributes, space_typeOptionalAttributes>;

export class space_type extends Model<space_typeAttributes, space_typeCreationAttributes> implements space_typeAttributes {
  id!: number;
  space_type_name?: string;
  view_position?: number;
  createdat?: Date;
  updateat?: Date;

  // space_type hasMany spaces via space_type_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof space_type {
    return space_type.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    space_type_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    view_position: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'space_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
