import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { members, membersId } from './members';
import type { space_chat, space_chatId } from './space_chat';

export interface space_chat_bookmarksAttributes {
  id: number;
  space_chat_id?: number;
  member_id?: number;
  createdat?: Date;
  updateat?: Date;
}

export type space_chat_bookmarksPk = "id";
export type space_chat_bookmarksId = space_chat_bookmarks[space_chat_bookmarksPk];
export type space_chat_bookmarksOptionalAttributes = "id" | "space_chat_id" | "member_id" | "createdat" | "updateat";
export type space_chat_bookmarksCreationAttributes = Optional<space_chat_bookmarksAttributes, space_chat_bookmarksOptionalAttributes>;

export class space_chat_bookmarks extends Model<space_chat_bookmarksAttributes, space_chat_bookmarksCreationAttributes> implements space_chat_bookmarksAttributes {
  id!: number;
  space_chat_id?: number;
  member_id?: number;
  createdat?: Date;
  updateat?: Date;

  // space_chat_bookmarks belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // space_chat_bookmarks belongsTo space_chat via space_chat_id
  space_chat!: space_chat;
  getSpace_chat!: Sequelize.BelongsToGetAssociationMixin<space_chat>;
  setSpace_chat!: Sequelize.BelongsToSetAssociationMixin<space_chat, space_chatId>;
  createSpace_chat!: Sequelize.BelongsToCreateAssociationMixin<space_chat>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_chat_bookmarks {
    return space_chat_bookmarks.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    space_chat_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'space_chat',
        key: 'id'
      },
      unique: "space_chat_bookmarks_space_chat_id_member_id_key"
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      },
      unique: "space_chat_bookmarks_space_chat_id_member_id_key"
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
    tableName: 'space_chat_bookmarks',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_chat_bookmarks_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "space_chat_bookmarks_space_chat_id_member_id_key",
        unique: true,
        fields: [
          { name: "space_chat_id" },
          { name: "member_id" },
        ]
      },
    ]
  });
  }
}
