import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { spaces, spacesId } from './spaces';

export interface images_for_spaceAttributes {
  id: number;
  space_id?: number;
  cover_image_url?: string;
  mobile_thumbnail_url?: string;
  createdat?: Date;
  updateat?: Date;
}

export type images_for_spacePk = "id";
export type images_for_spaceId = images_for_space[images_for_spacePk];
export type images_for_spaceOptionalAttributes = "id" | "space_id" | "cover_image_url" | "mobile_thumbnail_url" | "createdat" | "updateat";
export type images_for_spaceCreationAttributes = Optional<images_for_spaceAttributes, images_for_spaceOptionalAttributes>;

export class images_for_space extends Model<images_for_spaceAttributes, images_for_spaceCreationAttributes> implements images_for_spaceAttributes {
  id!: number;
  space_id?: number;
  cover_image_url?: string;
  mobile_thumbnail_url?: string;
  createdat?: Date;
  updateat?: Date;

  // images_for_space belongsTo spaces via space_id
  space!: spaces;
  getSpace!: Sequelize.BelongsToGetAssociationMixin<spaces>;
  setSpace!: Sequelize.BelongsToSetAssociationMixin<spaces, spacesId>;
  createSpace!: Sequelize.BelongsToCreateAssociationMixin<spaces>;

  static initModel(sequelize: Sequelize.Sequelize): typeof images_for_space {
    return images_for_space.init({
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
      },
      unique: "images_for_space_space_id_key"
    },
    cover_image_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mobile_thumbnail_url: {
      type: DataTypes.TEXT,
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
    tableName: 'images_for_space',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "images_for_space_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "images_for_space_space_id_key",
        unique: true,
        fields: [
          { name: "space_id" },
        ]
      },
    ]
  });
  }
}
