import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { members, membersId } from './members';
import type { space_member_status, space_member_statusId } from './space_member_status';
import type { spaces, spacesId } from './spaces';

export interface space_membersAttributes {
  id: number;
  space_id: number;
  member_id: number;
  space_member_status_id?: number;
  invited_by?: number;
  approved_by?: number;
  joined_at?: Date;
  approved_at?: Date;
  createdat?: Date;
  updateat?: Date;
}

export type space_membersPk = "id";
export type space_membersId = space_members[space_membersPk];
export type space_membersOptionalAttributes = "id" | "space_member_status_id" | "invited_by" | "approved_by" | "joined_at" | "approved_at" | "createdat" | "updateat";
export type space_membersCreationAttributes = Optional<space_membersAttributes, space_membersOptionalAttributes>;

export class space_members extends Model<space_membersAttributes, space_membersCreationAttributes> implements space_membersAttributes {
  id!: number;
  space_id!: number;
  member_id!: number;
  space_member_status_id?: number;
  invited_by?: number;
  approved_by?: number;
  joined_at?: Date;
  approved_at?: Date;
  createdat?: Date;
  updateat?: Date;

  // space_members belongsTo members via approved_by
  approved_by_member!: members;
  getApproved_by_member!: Sequelize.BelongsToGetAssociationMixin<members>;
  setApproved_by_member!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createApproved_by_member!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // space_members belongsTo members via invited_by
  invited_by_member!: members;
  getInvited_by_member!: Sequelize.BelongsToGetAssociationMixin<members>;
  setInvited_by_member!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createInvited_by_member!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // space_members belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // space_members belongsTo space_member_status via space_member_status_id
  space_member_status!: space_member_status;
  getSpace_member_status!: Sequelize.BelongsToGetAssociationMixin<space_member_status>;
  setSpace_member_status!: Sequelize.BelongsToSetAssociationMixin<space_member_status, space_member_statusId>;
  createSpace_member_status!: Sequelize.BelongsToCreateAssociationMixin<space_member_status>;
  // space_members belongsTo spaces via space_id
  space!: spaces;
  getSpace!: Sequelize.BelongsToGetAssociationMixin<spaces>;
  setSpace!: Sequelize.BelongsToSetAssociationMixin<spaces, spacesId>;
  createSpace!: Sequelize.BelongsToCreateAssociationMixin<spaces>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_members {
    return space_members.init({
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
      },
      unique: "space_members_space_id_member_id_key"
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'members',
        key: 'id'
      },
      unique: "space_members_space_id_member_id_key"
    },
    space_member_status_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'space_member_status',
        key: 'id'
      }
    },
    invited_by: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      }
    },
    approved_by: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      }
    },
    joined_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    approved_at: {
      type: DataTypes.DATE,
      allowNull: true
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
    tableName: 'space_members',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_members_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "space_members_space_id_member_id_key",
        unique: true,
        fields: [
          { name: "space_id" },
          { name: "member_id" },
        ]
      },
    ]
  });
  }
}
