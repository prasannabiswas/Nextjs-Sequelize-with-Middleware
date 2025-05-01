import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { chat_messages, chat_messagesId } from './chat_messages';
import type { members, membersId } from './members';

export interface chat_reactionsAttributes {
  id: number;
  message_id?: number;
  member_id?: number;
  reaction: string;
  createdat?: Date;
}

export type chat_reactionsPk = "id";
export type chat_reactionsId = chat_reactions[chat_reactionsPk];
export type chat_reactionsOptionalAttributes = "id" | "message_id" | "member_id" | "createdat";
export type chat_reactionsCreationAttributes = Optional<chat_reactionsAttributes, chat_reactionsOptionalAttributes>;

export class chat_reactions extends Model<chat_reactionsAttributes, chat_reactionsCreationAttributes> implements chat_reactionsAttributes {
  id!: number;
  message_id?: number;
  member_id?: number;
  reaction!: string;
  createdat?: Date;

  // chat_reactions belongsTo chat_messages via message_id
  message!: chat_messages;
  getMessage!: Sequelize.BelongsToGetAssociationMixin<chat_messages>;
  setMessage!: Sequelize.BelongsToSetAssociationMixin<chat_messages, chat_messagesId>;
  createMessage!: Sequelize.BelongsToCreateAssociationMixin<chat_messages>;
  // chat_reactions belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;

  static initModel(sequelize: Sequelize.Sequelize): typeof chat_reactions {
    return chat_reactions.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    message_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'chat_messages',
        key: 'id'
      },
      unique: "chat_reactions_message_id_member_id_reaction_key"
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      },
      unique: "chat_reactions_message_id_member_id_reaction_key"
    },
    reaction: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "chat_reactions_message_id_member_id_reaction_key"
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'chat_reactions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chat_reactions_message_id_member_id_reaction_key",
        unique: true,
        fields: [
          { name: "message_id" },
          { name: "member_id" },
          { name: "reaction" },
        ]
      },
      {
        name: "chat_reactions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
