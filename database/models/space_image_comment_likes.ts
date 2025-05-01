import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { members, membersId } from './members';
import type { space_image_comments, space_image_commentsId } from './space_image_comments';

export interface space_image_comment_likesAttributes {
  id: number;
  space_image_comment_id?: number;
  member_id?: number;
  createdat?: Date;
  updateat?: Date;
}

export type space_image_comment_likesPk = "id";
export type space_image_comment_likesId = space_image_comment_likes[space_image_comment_likesPk];
export type space_image_comment_likesOptionalAttributes = "id" | "space_image_comment_id" | "member_id" | "createdat" | "updateat";
export type space_image_comment_likesCreationAttributes = Optional<space_image_comment_likesAttributes, space_image_comment_likesOptionalAttributes>;

export class space_image_comment_likes extends Model<space_image_comment_likesAttributes, space_image_comment_likesCreationAttributes> implements space_image_comment_likesAttributes {
  id!: number;
  space_image_comment_id?: number;
  member_id?: number;
  createdat?: Date;
  updateat?: Date;

  // space_image_comment_likes belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // space_image_comment_likes belongsTo space_image_comments via space_image_comment_id
  space_image_comment!: space_image_comments;
  getSpace_image_comment!: Sequelize.BelongsToGetAssociationMixin<space_image_comments>;
  setSpace_image_comment!: Sequelize.BelongsToSetAssociationMixin<space_image_comments, space_image_commentsId>;
  createSpace_image_comment!: Sequelize.BelongsToCreateAssociationMixin<space_image_comments>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_image_comment_likes {
    return space_image_comment_likes.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    space_image_comment_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'space_image_comments',
        key: 'id'
      },
      unique: "space_image_comment_likes_space_image_comment_id_member_id_key"
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      },
      unique: "space_image_comment_likes_space_image_comment_id_member_id_key"
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
    tableName: 'space_image_comment_likes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_image_comment_likes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "space_image_comment_likes_space_image_comment_id_member_id_key",
        unique: true,
        fields: [
          { name: "space_image_comment_id" },
          { name: "member_id" },
        ]
      },
    ]
  });
  }
}
