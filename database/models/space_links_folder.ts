import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { space_links, space_linksId } from './space_links';
import type { spaces, spacesId } from './spaces';

export interface space_links_folderAttributes {
  id: number;
  space_id?: number;
  space_folder_name?: string;
  view_position?: number;
}

export type space_links_folderPk = "id";
export type space_links_folderId = space_links_folder[space_links_folderPk];
export type space_links_folderOptionalAttributes = "id" | "space_id" | "space_folder_name" | "view_position";
export type space_links_folderCreationAttributes = Optional<space_links_folderAttributes, space_links_folderOptionalAttributes>;

export class space_links_folder extends Model<space_links_folderAttributes, space_links_folderCreationAttributes> implements space_links_folderAttributes {
  id!: number;
  space_id?: number;
  space_folder_name?: string;
  view_position?: number;

  // space_links_folder hasMany space_links via space_folder_id
  space_links!: space_links[];
  getSpace_links!: Sequelize.HasManyGetAssociationsMixin<space_links>;
  setSpace_links!: Sequelize.HasManySetAssociationsMixin<space_links, space_linksId>;
  addSpace_link!: Sequelize.HasManyAddAssociationMixin<space_links, space_linksId>;
  addSpace_links!: Sequelize.HasManyAddAssociationsMixin<space_links, space_linksId>;
  createSpace_link!: Sequelize.HasManyCreateAssociationMixin<space_links>;
  removeSpace_link!: Sequelize.HasManyRemoveAssociationMixin<space_links, space_linksId>;
  removeSpace_links!: Sequelize.HasManyRemoveAssociationsMixin<space_links, space_linksId>;
  hasSpace_link!: Sequelize.HasManyHasAssociationMixin<space_links, space_linksId>;
  hasSpace_links!: Sequelize.HasManyHasAssociationsMixin<space_links, space_linksId>;
  countSpace_links!: Sequelize.HasManyCountAssociationsMixin;
  // space_links_folder belongsTo spaces via space_id
  space!: spaces;
  getSpace!: Sequelize.BelongsToGetAssociationMixin<spaces>;
  setSpace!: Sequelize.BelongsToSetAssociationMixin<spaces, spacesId>;
  createSpace!: Sequelize.BelongsToCreateAssociationMixin<spaces>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_links_folder {
    return space_links_folder.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    space_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'spaces',
        key: 'id'
      }
    },
    space_folder_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    view_position: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'space_links_folder',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_links_folder_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
