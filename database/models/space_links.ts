import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { space_links_folder, space_links_folderId } from './space_links_folder';
import type { spaces, spacesId } from './spaces';

export interface space_linksAttributes {
  id: number;
  space_folder_id?: number;
  space_id?: number;
  link_title?: string;
  link_url?: string;
  view_position?: number;
}

export type space_linksPk = "id";
export type space_linksId = space_links[space_linksPk];
export type space_linksOptionalAttributes = "id" | "space_folder_id" | "space_id" | "link_title" | "link_url" | "view_position";
export type space_linksCreationAttributes = Optional<space_linksAttributes, space_linksOptionalAttributes>;

export class space_links extends Model<space_linksAttributes, space_linksCreationAttributes> implements space_linksAttributes {
  id!: number;
  space_folder_id?: number;
  space_id?: number;
  link_title?: string;
  link_url?: string;
  view_position?: number;

  // space_links belongsTo space_links_folder via space_folder_id
  space_folder!: space_links_folder;
  getSpace_folder!: Sequelize.BelongsToGetAssociationMixin<space_links_folder>;
  setSpace_folder!: Sequelize.BelongsToSetAssociationMixin<space_links_folder, space_links_folderId>;
  createSpace_folder!: Sequelize.BelongsToCreateAssociationMixin<space_links_folder>;
  // space_links belongsTo spaces via space_id
  space!: spaces;
  getSpace!: Sequelize.BelongsToGetAssociationMixin<spaces>;
  setSpace!: Sequelize.BelongsToSetAssociationMixin<spaces, spacesId>;
  createSpace!: Sequelize.BelongsToCreateAssociationMixin<spaces>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_links {
    return space_links.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    space_folder_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'space_links_folder',
        key: 'id'
      }
    },
    space_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'spaces',
        key: 'id'
      }
    },
    link_title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    link_url: {
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
    tableName: 'space_links',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_links_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
