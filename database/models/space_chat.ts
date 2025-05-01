import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { members, membersId } from './members';
import type { space_chat_bookmarks, space_chat_bookmarksId } from './space_chat_bookmarks';
import type { space_chat_mentions, space_chat_mentionsId } from './space_chat_mentions';
import type { space_chat_reactions, space_chat_reactionsId } from './space_chat_reactions';
import type { spaces, spacesId } from './spaces';

export interface space_chatAttributes {
  id: number;
  space_id: number;
  sender_id: number;
  parent_id: number;
  content: string;
  is_edited?: boolean;
  is_pinned?: boolean;
  createdat?: Date;
  updateat?: Date;
}

export type space_chatPk = "id";
export type space_chatId = space_chat[space_chatPk];
export type space_chatOptionalAttributes = "id" | "is_edited" | "is_pinned" | "createdat" | "updateat";
export type space_chatCreationAttributes = Optional<space_chatAttributes, space_chatOptionalAttributes>;

export class space_chat extends Model<space_chatAttributes, space_chatCreationAttributes> implements space_chatAttributes {
  id!: number;
  space_id!: number;
  sender_id!: number;
  parent_id!: number;
  content!: string;
  is_edited?: boolean;
  is_pinned?: boolean;
  createdat?: Date;
  updateat?: Date;

  // space_chat belongsTo members via sender_id
  sender!: members;
  getSender!: Sequelize.BelongsToGetAssociationMixin<members>;
  setSender!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createSender!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // space_chat belongsTo space_chat via parent_id
  parent!: space_chat;
  getParent!: Sequelize.BelongsToGetAssociationMixin<space_chat>;
  setParent!: Sequelize.BelongsToSetAssociationMixin<space_chat, space_chatId>;
  createParent!: Sequelize.BelongsToCreateAssociationMixin<space_chat>;
  // space_chat hasMany space_chat_bookmarks via space_chat_id
  space_chat_bookmarks!: space_chat_bookmarks[];
  getSpace_chat_bookmarks!: Sequelize.HasManyGetAssociationsMixin<space_chat_bookmarks>;
  setSpace_chat_bookmarks!: Sequelize.HasManySetAssociationsMixin<space_chat_bookmarks, space_chat_bookmarksId>;
  addSpace_chat_bookmark!: Sequelize.HasManyAddAssociationMixin<space_chat_bookmarks, space_chat_bookmarksId>;
  addSpace_chat_bookmarks!: Sequelize.HasManyAddAssociationsMixin<space_chat_bookmarks, space_chat_bookmarksId>;
  createSpace_chat_bookmark!: Sequelize.HasManyCreateAssociationMixin<space_chat_bookmarks>;
  removeSpace_chat_bookmark!: Sequelize.HasManyRemoveAssociationMixin<space_chat_bookmarks, space_chat_bookmarksId>;
  removeSpace_chat_bookmarks!: Sequelize.HasManyRemoveAssociationsMixin<space_chat_bookmarks, space_chat_bookmarksId>;
  hasSpace_chat_bookmark!: Sequelize.HasManyHasAssociationMixin<space_chat_bookmarks, space_chat_bookmarksId>;
  hasSpace_chat_bookmarks!: Sequelize.HasManyHasAssociationsMixin<space_chat_bookmarks, space_chat_bookmarksId>;
  countSpace_chat_bookmarks!: Sequelize.HasManyCountAssociationsMixin;
  // space_chat hasMany space_chat_mentions via space_chat_id
  space_chat_mentions!: space_chat_mentions[];
  getSpace_chat_mentions!: Sequelize.HasManyGetAssociationsMixin<space_chat_mentions>;
  setSpace_chat_mentions!: Sequelize.HasManySetAssociationsMixin<space_chat_mentions, space_chat_mentionsId>;
  addSpace_chat_mention!: Sequelize.HasManyAddAssociationMixin<space_chat_mentions, space_chat_mentionsId>;
  addSpace_chat_mentions!: Sequelize.HasManyAddAssociationsMixin<space_chat_mentions, space_chat_mentionsId>;
  createSpace_chat_mention!: Sequelize.HasManyCreateAssociationMixin<space_chat_mentions>;
  removeSpace_chat_mention!: Sequelize.HasManyRemoveAssociationMixin<space_chat_mentions, space_chat_mentionsId>;
  removeSpace_chat_mentions!: Sequelize.HasManyRemoveAssociationsMixin<space_chat_mentions, space_chat_mentionsId>;
  hasSpace_chat_mention!: Sequelize.HasManyHasAssociationMixin<space_chat_mentions, space_chat_mentionsId>;
  hasSpace_chat_mentions!: Sequelize.HasManyHasAssociationsMixin<space_chat_mentions, space_chat_mentionsId>;
  countSpace_chat_mentions!: Sequelize.HasManyCountAssociationsMixin;
  // space_chat hasMany space_chat_reactions via space_chat_id
  space_chat_reactions!: space_chat_reactions[];
  getSpace_chat_reactions!: Sequelize.HasManyGetAssociationsMixin<space_chat_reactions>;
  setSpace_chat_reactions!: Sequelize.HasManySetAssociationsMixin<space_chat_reactions, space_chat_reactionsId>;
  addSpace_chat_reaction!: Sequelize.HasManyAddAssociationMixin<space_chat_reactions, space_chat_reactionsId>;
  addSpace_chat_reactions!: Sequelize.HasManyAddAssociationsMixin<space_chat_reactions, space_chat_reactionsId>;
  createSpace_chat_reaction!: Sequelize.HasManyCreateAssociationMixin<space_chat_reactions>;
  removeSpace_chat_reaction!: Sequelize.HasManyRemoveAssociationMixin<space_chat_reactions, space_chat_reactionsId>;
  removeSpace_chat_reactions!: Sequelize.HasManyRemoveAssociationsMixin<space_chat_reactions, space_chat_reactionsId>;
  hasSpace_chat_reaction!: Sequelize.HasManyHasAssociationMixin<space_chat_reactions, space_chat_reactionsId>;
  hasSpace_chat_reactions!: Sequelize.HasManyHasAssociationsMixin<space_chat_reactions, space_chat_reactionsId>;
  countSpace_chat_reactions!: Sequelize.HasManyCountAssociationsMixin;
  // space_chat belongsTo spaces via space_id
  space!: spaces;
  getSpace!: Sequelize.BelongsToGetAssociationMixin<spaces>;
  setSpace!: Sequelize.BelongsToSetAssociationMixin<spaces, spacesId>;
  createSpace!: Sequelize.BelongsToCreateAssociationMixin<spaces>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_chat {
    return space_chat.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    space_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'spaces',
        key: 'id'
      }
    },
    sender_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'members',
        key: 'id'
      }
    },
    parent_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'space_chat',
        key: 'id'
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_edited: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    is_pinned: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
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
    tableName: 'space_chat',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_chat_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
