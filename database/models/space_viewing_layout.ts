import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { space_settings, space_settingsId } from './space_settings';

export interface space_viewing_layoutAttributes {
  id: number;
  layout_type?: string;
}

export type space_viewing_layoutPk = "id";
export type space_viewing_layoutId = space_viewing_layout[space_viewing_layoutPk];
export type space_viewing_layoutOptionalAttributes = "id" | "layout_type";
export type space_viewing_layoutCreationAttributes = Optional<space_viewing_layoutAttributes, space_viewing_layoutOptionalAttributes>;

export class space_viewing_layout extends Model<space_viewing_layoutAttributes, space_viewing_layoutCreationAttributes> implements space_viewing_layoutAttributes {
  id!: number;
  layout_type?: string;

  // space_viewing_layout hasMany space_settings via space_viewing_layout_id
  space_settings!: space_settings[];
  getSpace_settings!: Sequelize.HasManyGetAssociationsMixin<space_settings>;
  setSpace_settings!: Sequelize.HasManySetAssociationsMixin<space_settings, space_settingsId>;
  addSpace_setting!: Sequelize.HasManyAddAssociationMixin<space_settings, space_settingsId>;
  addSpace_settings!: Sequelize.HasManyAddAssociationsMixin<space_settings, space_settingsId>;
  createSpace_setting!: Sequelize.HasManyCreateAssociationMixin<space_settings>;
  removeSpace_setting!: Sequelize.HasManyRemoveAssociationMixin<space_settings, space_settingsId>;
  removeSpace_settings!: Sequelize.HasManyRemoveAssociationsMixin<space_settings, space_settingsId>;
  hasSpace_setting!: Sequelize.HasManyHasAssociationMixin<space_settings, space_settingsId>;
  hasSpace_settings!: Sequelize.HasManyHasAssociationsMixin<space_settings, space_settingsId>;
  countSpace_settings!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_viewing_layout {
    return space_viewing_layout.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    layout_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'space_viewing_layout',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_viewing_layout_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
