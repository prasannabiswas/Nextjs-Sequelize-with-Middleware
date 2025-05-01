import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { members, membersId } from './members';
import type { space_image_comment_likes, space_image_comment_likesId } from './space_image_comment_likes';
import type { space_images, space_imagesId } from './space_images';

export interface space_image_commentsAttributes {
  id: number;
  space_image_id?: number;
  member_id?: number;
  parent_id?: number;
  content: string;
  likes_count?: number;
  createdat?: Date;
  updateat?: Date;
}

export type space_image_commentsPk = "id";
export type space_image_commentsId = space_image_comments[space_image_commentsPk];
export type space_image_commentsOptionalAttributes = "id" | "space_image_id" | "member_id" | "parent_id" | "likes_count" | "createdat" | "updateat";
export type space_image_commentsCreationAttributes = Optional<space_image_commentsAttributes, space_image_commentsOptionalAttributes>;

export class space_image_comments extends Model<space_image_commentsAttributes, space_image_commentsCreationAttributes> implements space_image_commentsAttributes {
  id!: number;
  space_image_id?: number;
  member_id?: number;
  parent_id?: number;
  content!: string;
  likes_count?: number;
  createdat?: Date;
  updateat?: Date;

  // space_image_comments belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // space_image_comments hasMany space_image_comment_likes via space_image_comment_id
  space_image_comment_likes!: space_image_comment_likes[];
  getSpace_image_comment_likes!: Sequelize.HasManyGetAssociationsMixin<space_image_comment_likes>;
  setSpace_image_comment_likes!: Sequelize.HasManySetAssociationsMixin<space_image_comment_likes, space_image_comment_likesId>;
  addSpace_image_comment_like!: Sequelize.HasManyAddAssociationMixin<space_image_comment_likes, space_image_comment_likesId>;
  addSpace_image_comment_likes!: Sequelize.HasManyAddAssociationsMixin<space_image_comment_likes, space_image_comment_likesId>;
  createSpace_image_comment_like!: Sequelize.HasManyCreateAssociationMixin<space_image_comment_likes>;
  removeSpace_image_comment_like!: Sequelize.HasManyRemoveAssociationMixin<space_image_comment_likes, space_image_comment_likesId>;
  removeSpace_image_comment_likes!: Sequelize.HasManyRemoveAssociationsMixin<space_image_comment_likes, space_image_comment_likesId>;
  hasSpace_image_comment_like!: Sequelize.HasManyHasAssociationMixin<space_image_comment_likes, space_image_comment_likesId>;
  hasSpace_image_comment_likes!: Sequelize.HasManyHasAssociationsMixin<space_image_comment_likes, space_image_comment_likesId>;
  countSpace_image_comment_likes!: Sequelize.HasManyCountAssociationsMixin;
  // space_image_comments belongsTo space_image_comments via parent_id
  parent!: space_image_comments;
  getParent!: Sequelize.BelongsToGetAssociationMixin<space_image_comments>;
  setParent!: Sequelize.BelongsToSetAssociationMixin<space_image_comments, space_image_commentsId>;
  createParent!: Sequelize.BelongsToCreateAssociationMixin<space_image_comments>;
  // space_image_comments belongsTo space_images via space_image_id
  space_image!: space_images;
  getSpace_image!: Sequelize.BelongsToGetAssociationMixin<space_images>;
  setSpace_image!: Sequelize.BelongsToSetAssociationMixin<space_images, space_imagesId>;
  createSpace_image!: Sequelize.BelongsToCreateAssociationMixin<space_images>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_image_comments {
    return space_image_comments.init({
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
        model: 'space_image_comments',
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
    tableName: 'space_image_comments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_image_comments_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
