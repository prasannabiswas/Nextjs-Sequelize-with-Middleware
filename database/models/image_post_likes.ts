import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { members, membersId } from './members';
import type { space_images, space_imagesId } from './space_images';

export interface image_post_likesAttributes {
  id: number;
  space_image_id?: number;
  member_id?: number;
  createdat?: Date;
  updateat?: Date;
}

export type image_post_likesPk = "id";
export type image_post_likesId = image_post_likes[image_post_likesPk];
export type image_post_likesOptionalAttributes = "id" | "space_image_id" | "member_id" | "createdat" | "updateat";
export type image_post_likesCreationAttributes = Optional<image_post_likesAttributes, image_post_likesOptionalAttributes>;

export class image_post_likes extends Model<image_post_likesAttributes, image_post_likesCreationAttributes> implements image_post_likesAttributes {
  id!: number;
  space_image_id?: number;
  member_id?: number;
  createdat?: Date;
  updateat?: Date;

  // image_post_likes belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // image_post_likes belongsTo space_images via space_image_id
  space_image!: space_images;
  getSpace_image!: Sequelize.BelongsToGetAssociationMixin<space_images>;
  setSpace_image!: Sequelize.BelongsToSetAssociationMixin<space_images, space_imagesId>;
  createSpace_image!: Sequelize.BelongsToCreateAssociationMixin<space_images>;

  static initModel(sequelize: Sequelize.Sequelize): typeof image_post_likes {
    return image_post_likes.init({
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
      unique: "image_post_likes_space_image_id_member_id_key"
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      },
      unique: "image_post_likes_space_image_id_member_id_key"
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
    tableName: 'image_post_likes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "image_post_likes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "image_post_likes_space_image_id_member_id_key",
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
