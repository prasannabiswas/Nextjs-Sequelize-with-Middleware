import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { members, membersId } from './members';
import type { space_chat, space_chatId } from './space_chat';

export interface space_chat_mentionsAttributes {
  id: number;
  space_chat_id: number;
  mentioned_member_id: number;
  createdat?: Date;
  updateat?: Date;
}

export type space_chat_mentionsPk = "id";
export type space_chat_mentionsId = space_chat_mentions[space_chat_mentionsPk];
export type space_chat_mentionsOptionalAttributes = "id" | "createdat" | "updateat";
export type space_chat_mentionsCreationAttributes = Optional<space_chat_mentionsAttributes, space_chat_mentionsOptionalAttributes>;

export class space_chat_mentions extends Model<space_chat_mentionsAttributes, space_chat_mentionsCreationAttributes> implements space_chat_mentionsAttributes {
  id!: number;
  space_chat_id!: number;
  mentioned_member_id!: number;
  createdat?: Date;
  updateat?: Date;

  // space_chat_mentions belongsTo members via mentioned_member_id
  mentioned_member!: members;
  getMentioned_member!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMentioned_member!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMentioned_member!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // space_chat_mentions belongsTo space_chat via space_chat_id
  space_chat!: space_chat;
  getSpace_chat!: Sequelize.BelongsToGetAssociationMixin<space_chat>;
  setSpace_chat!: Sequelize.BelongsToSetAssociationMixin<space_chat, space_chatId>;
  createSpace_chat!: Sequelize.BelongsToCreateAssociationMixin<space_chat>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_chat_mentions {
    return space_chat_mentions.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    space_chat_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'space_chat',
        key: 'id'
      }
    },
    mentioned_member_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'members',
        key: 'id'
      }
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
    tableName: 'space_chat_mentions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_chat_mentions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
