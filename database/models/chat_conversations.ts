import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { chat_messages, chat_messagesId } from './chat_messages';
import type { members, membersId } from './members';
import type { pinned_conversations, pinned_conversationsId } from './pinned_conversations';

export interface chat_conversationsAttributes {
  id: number;
  member_one_id?: number;
  member_two_id?: number;
  last_message_at?: Date;
  createdat?: Date;
  updatedat?: Date;
}

export type chat_conversationsPk = "id";
export type chat_conversationsId = chat_conversations[chat_conversationsPk];
export type chat_conversationsOptionalAttributes = "id" | "member_one_id" | "member_two_id" | "last_message_at" | "createdat" | "updatedat";
export type chat_conversationsCreationAttributes = Optional<chat_conversationsAttributes, chat_conversationsOptionalAttributes>;

export class chat_conversations extends Model<chat_conversationsAttributes, chat_conversationsCreationAttributes> implements chat_conversationsAttributes {
  id!: number;
  member_one_id?: number;
  member_two_id?: number;
  last_message_at?: Date;
  createdat?: Date;
  updatedat?: Date;

  // chat_conversations hasMany chat_messages via conversation_id
  chat_messages!: chat_messages[];
  getChat_messages!: Sequelize.HasManyGetAssociationsMixin<chat_messages>;
  setChat_messages!: Sequelize.HasManySetAssociationsMixin<chat_messages, chat_messagesId>;
  addChat_message!: Sequelize.HasManyAddAssociationMixin<chat_messages, chat_messagesId>;
  addChat_messages!: Sequelize.HasManyAddAssociationsMixin<chat_messages, chat_messagesId>;
  createChat_message!: Sequelize.HasManyCreateAssociationMixin<chat_messages>;
  removeChat_message!: Sequelize.HasManyRemoveAssociationMixin<chat_messages, chat_messagesId>;
  removeChat_messages!: Sequelize.HasManyRemoveAssociationsMixin<chat_messages, chat_messagesId>;
  hasChat_message!: Sequelize.HasManyHasAssociationMixin<chat_messages, chat_messagesId>;
  hasChat_messages!: Sequelize.HasManyHasAssociationsMixin<chat_messages, chat_messagesId>;
  countChat_messages!: Sequelize.HasManyCountAssociationsMixin;
  // chat_conversations hasMany pinned_conversations via conversation_id
  pinned_conversations!: pinned_conversations[];
  getPinned_conversations!: Sequelize.HasManyGetAssociationsMixin<pinned_conversations>;
  setPinned_conversations!: Sequelize.HasManySetAssociationsMixin<pinned_conversations, pinned_conversationsId>;
  addPinned_conversation!: Sequelize.HasManyAddAssociationMixin<pinned_conversations, pinned_conversationsId>;
  addPinned_conversations!: Sequelize.HasManyAddAssociationsMixin<pinned_conversations, pinned_conversationsId>;
  createPinned_conversation!: Sequelize.HasManyCreateAssociationMixin<pinned_conversations>;
  removePinned_conversation!: Sequelize.HasManyRemoveAssociationMixin<pinned_conversations, pinned_conversationsId>;
  removePinned_conversations!: Sequelize.HasManyRemoveAssociationsMixin<pinned_conversations, pinned_conversationsId>;
  hasPinned_conversation!: Sequelize.HasManyHasAssociationMixin<pinned_conversations, pinned_conversationsId>;
  hasPinned_conversations!: Sequelize.HasManyHasAssociationsMixin<pinned_conversations, pinned_conversationsId>;
  countPinned_conversations!: Sequelize.HasManyCountAssociationsMixin;
  // chat_conversations belongsTo members via member_one_id
  member_one!: members;
  getMember_one!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember_one!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember_one!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // chat_conversations belongsTo members via member_two_id
  member_two!: members;
  getMember_two!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember_two!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember_two!: Sequelize.BelongsToCreateAssociationMixin<members>;

  static initModel(sequelize: Sequelize.Sequelize): typeof chat_conversations {
    return chat_conversations.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    member_one_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      },
      unique: "chat_conversations_member_one_id_member_two_id_key"
    },
    member_two_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      },
      unique: "chat_conversations_member_one_id_member_two_id_key"
    },
    last_message_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'chat_conversations',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chat_conversations_member_one_id_member_two_id_key",
        unique: true,
        fields: [
          { name: "member_one_id" },
          { name: "member_two_id" },
        ]
      },
      {
        name: "chat_conversations_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
