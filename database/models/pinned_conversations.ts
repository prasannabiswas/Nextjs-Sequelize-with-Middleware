import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { chat_conversations, chat_conversationsId } from './chat_conversations';
import type { members, membersId } from './members';

export interface pinned_conversationsAttributes {
  id: number;
  conversation_id?: number;
  member_id?: number;
  pinned_at?: Date;
}

export type pinned_conversationsPk = "id";
export type pinned_conversationsId = pinned_conversations[pinned_conversationsPk];
export type pinned_conversationsOptionalAttributes = "id" | "conversation_id" | "member_id" | "pinned_at";
export type pinned_conversationsCreationAttributes = Optional<pinned_conversationsAttributes, pinned_conversationsOptionalAttributes>;

export class pinned_conversations extends Model<pinned_conversationsAttributes, pinned_conversationsCreationAttributes> implements pinned_conversationsAttributes {
  id!: number;
  conversation_id?: number;
  member_id?: number;
  pinned_at?: Date;

  // pinned_conversations belongsTo chat_conversations via conversation_id
  conversation!: chat_conversations;
  getConversation!: Sequelize.BelongsToGetAssociationMixin<chat_conversations>;
  setConversation!: Sequelize.BelongsToSetAssociationMixin<chat_conversations, chat_conversationsId>;
  createConversation!: Sequelize.BelongsToCreateAssociationMixin<chat_conversations>;
  // pinned_conversations belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;

  static initModel(sequelize: Sequelize.Sequelize): typeof pinned_conversations {
    return pinned_conversations.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    conversation_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'chat_conversations',
        key: 'id'
      },
      unique: "pinned_conversations_conversation_id_member_id_key"
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      },
      unique: "pinned_conversations_conversation_id_member_id_key"
    },
    pinned_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'pinned_conversations',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pinned_conversations_conversation_id_member_id_key",
        unique: true,
        fields: [
          { name: "conversation_id" },
          { name: "member_id" },
        ]
      },
      {
        name: "pinned_conversations_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
