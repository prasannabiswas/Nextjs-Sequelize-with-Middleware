import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { chat_conversations, chat_conversationsId } from './chat_conversations';
import type { chat_reactions, chat_reactionsId } from './chat_reactions';
import type { members, membersId } from './members';

export interface chat_messagesAttributes {
  id: number;
  conversation_id?: number;
  sender_id?: number;
  message: string;
  parent_message_id?: number;
  createdat?: Date;
  updatedat?: Date;
}

export type chat_messagesPk = "id";
export type chat_messagesId = chat_messages[chat_messagesPk];
export type chat_messagesOptionalAttributes = "id" | "conversation_id" | "sender_id" | "parent_message_id" | "createdat" | "updatedat";
export type chat_messagesCreationAttributes = Optional<chat_messagesAttributes, chat_messagesOptionalAttributes>;

export class chat_messages extends Model<chat_messagesAttributes, chat_messagesCreationAttributes> implements chat_messagesAttributes {
  id!: number;
  conversation_id?: number;
  sender_id?: number;
  message!: string;
  parent_message_id?: number;
  createdat?: Date;
  updatedat?: Date;

  // chat_messages belongsTo chat_conversations via conversation_id
  conversation!: chat_conversations;
  getConversation!: Sequelize.BelongsToGetAssociationMixin<chat_conversations>;
  setConversation!: Sequelize.BelongsToSetAssociationMixin<chat_conversations, chat_conversationsId>;
  createConversation!: Sequelize.BelongsToCreateAssociationMixin<chat_conversations>;
  // chat_messages belongsTo chat_messages via parent_message_id
  parent_message!: chat_messages;
  getParent_message!: Sequelize.BelongsToGetAssociationMixin<chat_messages>;
  setParent_message!: Sequelize.BelongsToSetAssociationMixin<chat_messages, chat_messagesId>;
  createParent_message!: Sequelize.BelongsToCreateAssociationMixin<chat_messages>;
  // chat_messages hasMany chat_reactions via message_id
  chat_reactions!: chat_reactions[];
  getChat_reactions!: Sequelize.HasManyGetAssociationsMixin<chat_reactions>;
  setChat_reactions!: Sequelize.HasManySetAssociationsMixin<chat_reactions, chat_reactionsId>;
  addChat_reaction!: Sequelize.HasManyAddAssociationMixin<chat_reactions, chat_reactionsId>;
  addChat_reactions!: Sequelize.HasManyAddAssociationsMixin<chat_reactions, chat_reactionsId>;
  createChat_reaction!: Sequelize.HasManyCreateAssociationMixin<chat_reactions>;
  removeChat_reaction!: Sequelize.HasManyRemoveAssociationMixin<chat_reactions, chat_reactionsId>;
  removeChat_reactions!: Sequelize.HasManyRemoveAssociationsMixin<chat_reactions, chat_reactionsId>;
  hasChat_reaction!: Sequelize.HasManyHasAssociationMixin<chat_reactions, chat_reactionsId>;
  hasChat_reactions!: Sequelize.HasManyHasAssociationsMixin<chat_reactions, chat_reactionsId>;
  countChat_reactions!: Sequelize.HasManyCountAssociationsMixin;
  // chat_messages belongsTo members via sender_id
  sender!: members;
  getSender!: Sequelize.BelongsToGetAssociationMixin<members>;
  setSender!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createSender!: Sequelize.BelongsToCreateAssociationMixin<members>;

  static initModel(sequelize: Sequelize.Sequelize): typeof chat_messages {
    return chat_messages.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    conversation_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'chat_conversations',
        key: 'id'
      }
    },
    sender_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      }
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    parent_message_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'chat_messages',
        key: 'id'
      }
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
    tableName: 'chat_messages',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chat_messages_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
