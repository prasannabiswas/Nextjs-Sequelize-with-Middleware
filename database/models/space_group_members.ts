import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { members, membersId } from './members';
import type { space_groups, space_groupsId } from './space_groups';
import type { space_member_status, space_member_statusId } from './space_member_status';

export interface space_group_membersAttributes {
  id: number;
  space_group_id: number;
  member_id: number;
  space_member_status_id: number;
  invited_by?: number;
  joined_at?: Date;
  createdat?: Date;
  updateat?: Date;
}

export type space_group_membersPk = "id";
export type space_group_membersId = space_group_members[space_group_membersPk];
export type space_group_membersOptionalAttributes = "id" | "space_member_status_id" | "invited_by" | "joined_at" | "createdat" | "updateat";
export type space_group_membersCreationAttributes = Optional<space_group_membersAttributes, space_group_membersOptionalAttributes>;

export class space_group_members extends Model<space_group_membersAttributes, space_group_membersCreationAttributes> implements space_group_membersAttributes {
  id!: number;
  space_group_id!: number;
  member_id!: number;
  space_member_status_id!: number;
  invited_by?: number;
  joined_at?: Date;
  createdat?: Date;
  updateat?: Date;

  // space_group_members belongsTo members via invited_by
  invited_by_member!: members;
  getInvited_by_member!: Sequelize.BelongsToGetAssociationMixin<members>;
  setInvited_by_member!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createInvited_by_member!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // space_group_members belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // space_group_members belongsTo space_groups via space_group_id
  space_group!: space_groups;
  getSpace_group!: Sequelize.BelongsToGetAssociationMixin<space_groups>;
  setSpace_group!: Sequelize.BelongsToSetAssociationMixin<space_groups, space_groupsId>;
  createSpace_group!: Sequelize.BelongsToCreateAssociationMixin<space_groups>;
  // space_group_members belongsTo space_member_status via space_member_status_id
  space_member_status!: space_member_status;
  getSpace_member_status!: Sequelize.BelongsToGetAssociationMixin<space_member_status>;
  setSpace_member_status!: Sequelize.BelongsToSetAssociationMixin<space_member_status, space_member_statusId>;
  createSpace_member_status!: Sequelize.BelongsToCreateAssociationMixin<space_member_status>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_group_members {
    return space_group_members.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    space_group_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'space_groups',
        key: 'id'
      },
      unique: "space_group_members_space_group_id_member_id_key"
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'members',
        key: 'id'
      },
      unique: "space_group_members_space_group_id_member_id_key"
    },
    space_member_status_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 2,
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
    joined_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
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
    tableName: 'space_group_members',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_group_members_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "space_group_members_space_group_id_member_id_key",
        unique: true,
        fields: [
          { name: "space_group_id" },
          { name: "member_id" },
        ]
      },
    ]
  });
  }
}
