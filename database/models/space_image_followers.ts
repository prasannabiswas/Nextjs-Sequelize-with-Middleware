import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { members, membersId } from './members';
import type { space_images, space_imagesId } from './space_images';

export interface space_image_followersAttributes {
  id: number;
  space_image_id?: number;
  member_id?: number;
  createdat?: Date;
  updateat?: Date;
}

export type space_image_followersPk = "id";
export type space_image_followersId = space_image_followers[space_image_followersPk];
export type space_image_followersOptionalAttributes = "id" | "space_image_id" | "member_id" | "createdat" | "updateat";
export type space_image_followersCreationAttributes = Optional<space_image_followersAttributes, space_image_followersOptionalAttributes>;

export class space_image_followers extends Model<space_image_followersAttributes, space_image_followersCreationAttributes> implements space_image_followersAttributes {
  id!: number;
  space_image_id?: number;
  member_id?: number;
  createdat?: Date;
  updateat?: Date;

  // space_image_followers belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // space_image_followers belongsTo space_images via space_image_id
  space_image!: space_images;
  getSpace_image!: Sequelize.BelongsToGetAssociationMixin<space_images>;
  setSpace_image!: Sequelize.BelongsToSetAssociationMixin<space_images, space_imagesId>;
  createSpace_image!: Sequelize.BelongsToCreateAssociationMixin<space_images>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_image_followers {
    return space_image_followers.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    space_image_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'space_images',
        key: 'id'
      },
      unique: "space_image_followers_space_image_id_member_id_key"
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      },
      unique: "space_image_followers_space_image_id_member_id_key"
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
    tableName: 'space_image_followers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_image_followers_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "space_image_followers_space_image_id_member_id_key",
        unique: true,
        fields: [
          { name: "space_image_id" },
          { name: "member_id" },
        ]
      },
    ]
  });
  }
}
