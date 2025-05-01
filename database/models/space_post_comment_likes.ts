import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { members, membersId } from './members';
import type { space_post_comments, space_post_commentsId } from './space_post_comments';

export interface space_post_comment_likesAttributes {
  id: number;
  space_post_comment_id?: number;
  member_id?: number;
  createdat?: Date;
  updateat?: Date;
}

export type space_post_comment_likesPk = "id";
export type space_post_comment_likesId = space_post_comment_likes[space_post_comment_likesPk];
export type space_post_comment_likesOptionalAttributes = "id" | "space_post_comment_id" | "member_id" | "createdat" | "updateat";
export type space_post_comment_likesCreationAttributes = Optional<space_post_comment_likesAttributes, space_post_comment_likesOptionalAttributes>;

export class space_post_comment_likes extends Model<space_post_comment_likesAttributes, space_post_comment_likesCreationAttributes> implements space_post_comment_likesAttributes {
  id!: number;
  space_post_comment_id?: number;
  member_id?: number;
  createdat?: Date;
  updateat?: Date;

  // space_post_comment_likes belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // space_post_comment_likes belongsTo space_post_comments via space_post_comment_id
  space_post_comment!: space_post_comments;
  getSpace_post_comment!: Sequelize.BelongsToGetAssociationMixin<space_post_comments>;
  setSpace_post_comment!: Sequelize.BelongsToSetAssociationMixin<space_post_comments, space_post_commentsId>;
  createSpace_post_comment!: Sequelize.BelongsToCreateAssociationMixin<space_post_comments>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_post_comment_likes {
    return space_post_comment_likes.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    space_post_comment_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'space_post_comments',
        key: 'id'
      },
      unique: "space_post_comment_likes_space_post_comment_id_member_id_key"
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      },
      unique: "space_post_comment_likes_space_post_comment_id_member_id_key"
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
    tableName: 'space_post_comment_likes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_post_comment_likes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "space_post_comment_likes_space_post_comment_id_member_id_key",
        unique: true,
        fields: [
          { name: "space_post_comment_id" },
          { name: "member_id" },
        ]
      },
    ]
  });
  }
}
