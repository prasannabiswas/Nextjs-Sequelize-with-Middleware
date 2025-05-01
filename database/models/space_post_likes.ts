import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { members, membersId } from './members';
import type { space_posts, space_postsId } from './space_posts';

export interface space_post_likesAttributes {
  id: number;
  space_post_id?: number;
  member_id?: number;
  createdat?: Date;
  updateat?: Date;
}

export type space_post_likesPk = "id";
export type space_post_likesId = space_post_likes[space_post_likesPk];
export type space_post_likesOptionalAttributes = "id" | "space_post_id" | "member_id" | "createdat" | "updateat";
export type space_post_likesCreationAttributes = Optional<space_post_likesAttributes, space_post_likesOptionalAttributes>;

export class space_post_likes extends Model<space_post_likesAttributes, space_post_likesCreationAttributes> implements space_post_likesAttributes {
  id!: number;
  space_post_id?: number;
  member_id?: number;
  createdat?: Date;
  updateat?: Date;

  // space_post_likes belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // space_post_likes belongsTo space_posts via space_post_id
  space_post!: space_posts;
  getSpace_post!: Sequelize.BelongsToGetAssociationMixin<space_posts>;
  setSpace_post!: Sequelize.BelongsToSetAssociationMixin<space_posts, space_postsId>;
  createSpace_post!: Sequelize.BelongsToCreateAssociationMixin<space_posts>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_post_likes {
    return space_post_likes.init({
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
      },
      unique: "space_post_likes_space_post_id_member_id_key"
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      },
      unique: "space_post_likes_space_post_id_member_id_key"
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
    tableName: 'space_post_likes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_post_likes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "space_post_likes_space_post_id_member_id_key",
        unique: true,
        fields: [
          { name: "space_post_id" },
          { name: "member_id" },
        ]
      },
    ]
  });
  }
}
