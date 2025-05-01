import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { members, membersId } from './members';
import type { space_posts, space_postsId } from './space_posts';

export interface space_post_followersAttributes {
  id: number;
  space_post_id?: number;
  member_id?: number;
  createdat?: Date;
  updateat?: Date;
}

export type space_post_followersPk = "id";
export type space_post_followersId = space_post_followers[space_post_followersPk];
export type space_post_followersOptionalAttributes = "id" | "space_post_id" | "member_id" | "createdat" | "updateat";
export type space_post_followersCreationAttributes = Optional<space_post_followersAttributes, space_post_followersOptionalAttributes>;

export class space_post_followers extends Model<space_post_followersAttributes, space_post_followersCreationAttributes> implements space_post_followersAttributes {
  id!: number;
  space_post_id?: number;
  member_id?: number;
  createdat?: Date;
  updateat?: Date;

  // space_post_followers belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // space_post_followers belongsTo space_posts via space_post_id
  space_post!: space_posts;
  getSpace_post!: Sequelize.BelongsToGetAssociationMixin<space_posts>;
  setSpace_post!: Sequelize.BelongsToSetAssociationMixin<space_posts, space_postsId>;
  createSpace_post!: Sequelize.BelongsToCreateAssociationMixin<space_posts>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_post_followers {
    return space_post_followers.init({
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
      unique: "space_post_followers_space_post_id_member_id_key"
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      },
      unique: "space_post_followers_space_post_id_member_id_key"
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
    tableName: 'space_post_followers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_post_followers_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "space_post_followers_space_post_id_member_id_key",
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
