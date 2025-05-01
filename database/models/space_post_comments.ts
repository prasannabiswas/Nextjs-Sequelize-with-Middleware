import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { members, membersId } from './members';
import type { space_post_comment_likes, space_post_comment_likesId } from './space_post_comment_likes';
import type { space_posts, space_postsId } from './space_posts';

export interface space_post_commentsAttributes {
  id: number;
  space_post_id?: number;
  member_id?: number;
  parent_id?: number;
  reply_to_member_id?: number;
  content: string;
  likes_count?: number;
  createdat?: Date;
  updateat?: Date;
}

export type space_post_commentsPk = "id";
export type space_post_commentsId = space_post_comments[space_post_commentsPk];
export type space_post_commentsOptionalAttributes = "id" | "space_post_id" | "member_id" | "parent_id" | "reply_to_member_id" | "likes_count" | "createdat" | "updateat";
export type space_post_commentsCreationAttributes = Optional<space_post_commentsAttributes, space_post_commentsOptionalAttributes>;

export class space_post_comments extends Model<space_post_commentsAttributes, space_post_commentsCreationAttributes> implements space_post_commentsAttributes {
  id!: number;
  space_post_id?: number;
  member_id?: number;
  parent_id?: number;
  reply_to_member_id?: number;
  content!: string;
  likes_count?: number;
  createdat?: Date;
  updateat?: Date;

  // space_post_comments belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // space_post_comments belongsTo members via reply_to_member_id
  reply_to_member!: members;
  getReply_to_member!: Sequelize.BelongsToGetAssociationMixin<members>;
  setReply_to_member!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createReply_to_member!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // space_post_comments hasMany space_post_comment_likes via space_post_comment_id
  space_post_comment_likes!: space_post_comment_likes[];
  getSpace_post_comment_likes!: Sequelize.HasManyGetAssociationsMixin<space_post_comment_likes>;
  setSpace_post_comment_likes!: Sequelize.HasManySetAssociationsMixin<space_post_comment_likes, space_post_comment_likesId>;
  addSpace_post_comment_like!: Sequelize.HasManyAddAssociationMixin<space_post_comment_likes, space_post_comment_likesId>;
  addSpace_post_comment_likes!: Sequelize.HasManyAddAssociationsMixin<space_post_comment_likes, space_post_comment_likesId>;
  createSpace_post_comment_like!: Sequelize.HasManyCreateAssociationMixin<space_post_comment_likes>;
  removeSpace_post_comment_like!: Sequelize.HasManyRemoveAssociationMixin<space_post_comment_likes, space_post_comment_likesId>;
  removeSpace_post_comment_likes!: Sequelize.HasManyRemoveAssociationsMixin<space_post_comment_likes, space_post_comment_likesId>;
  hasSpace_post_comment_like!: Sequelize.HasManyHasAssociationMixin<space_post_comment_likes, space_post_comment_likesId>;
  hasSpace_post_comment_likes!: Sequelize.HasManyHasAssociationsMixin<space_post_comment_likes, space_post_comment_likesId>;
  countSpace_post_comment_likes!: Sequelize.HasManyCountAssociationsMixin;
  // space_post_comments belongsTo space_post_comments via parent_id
  parent!: space_post_comments;
  getParent!: Sequelize.BelongsToGetAssociationMixin<space_post_comments>;
  setParent!: Sequelize.BelongsToSetAssociationMixin<space_post_comments, space_post_commentsId>;
  createParent!: Sequelize.BelongsToCreateAssociationMixin<space_post_comments>;
  // space_post_comments belongsTo space_posts via space_post_id
  space_post!: space_posts;
  getSpace_post!: Sequelize.BelongsToGetAssociationMixin<space_posts>;
  setSpace_post!: Sequelize.BelongsToSetAssociationMixin<space_posts, space_postsId>;
  createSpace_post!: Sequelize.BelongsToCreateAssociationMixin<space_posts>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_post_comments {
    return space_post_comments.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    space_post_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'space_posts',
        key: 'id'
      }
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      }
    },
    parent_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'space_post_comments',
        key: 'id'
      }
    },
    reply_to_member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    likes_count: {
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
    tableName: 'space_post_comments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_post_comments_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
