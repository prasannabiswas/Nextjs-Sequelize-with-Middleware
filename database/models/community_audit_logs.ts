import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { communities, communitiesId } from './communities';
import type { community_audit_action_type, community_audit_action_typeId } from './community_audit_action_type';
import type { members, membersId } from './members';
import type { permission_key, permission_keyId } from './permission_key';

export interface community_audit_logsAttributes {
  id: number;
  community_id?: number;
  member_id?: number;
  target_member_id?: number;
  action_type?: number;
  old_value?: string;
  new_value?: string;
  permission_key: number;
  createdat?: Date;
  updateat?: Date;
}

export type community_audit_logsPk = "id";
export type community_audit_logsId = community_audit_logs[community_audit_logsPk];
export type community_audit_logsOptionalAttributes = "id" | "community_id" | "member_id" | "target_member_id" | "action_type" | "old_value" | "new_value" | "createdat" | "updateat";
export type community_audit_logsCreationAttributes = Optional<community_audit_logsAttributes, community_audit_logsOptionalAttributes>;

export class community_audit_logs extends Model<community_audit_logsAttributes, community_audit_logsCreationAttributes> implements community_audit_logsAttributes {
  id!: number;
  community_id?: number;
  member_id?: number;
  target_member_id?: number;
  action_type?: number;
  old_value?: string;
  new_value?: string;
  permission_key!: number;
  createdat?: Date;
  updateat?: Date;

  // community_audit_logs belongsTo communities via community_id
  community!: communities;
  getCommunity!: Sequelize.BelongsToGetAssociationMixin<communities>;
  setCommunity!: Sequelize.BelongsToSetAssociationMixin<communities, communitiesId>;
  createCommunity!: Sequelize.BelongsToCreateAssociationMixin<communities>;
  // community_audit_logs belongsTo community_audit_action_type via action_type
  action_type_community_audit_action_type!: community_audit_action_type;
  getAction_type_community_audit_action_type!: Sequelize.BelongsToGetAssociationMixin<community_audit_action_type>;
  setAction_type_community_audit_action_type!: Sequelize.BelongsToSetAssociationMixin<community_audit_action_type, community_audit_action_typeId>;
  createAction_type_community_audit_action_type!: Sequelize.BelongsToCreateAssociationMixin<community_audit_action_type>;
  // community_audit_logs belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // community_audit_logs belongsTo members via target_member_id
  target_member!: members;
  getTarget_member!: Sequelize.BelongsToGetAssociationMixin<members>;
  setTarget_member!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createTarget_member!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // community_audit_logs belongsTo permission_key via permission_key
  permission_key_permission_key!: permission_key;
  getPermission_key_permission_key!: Sequelize.BelongsToGetAssociationMixin<permission_key>;
  setPermission_key_permission_key!: Sequelize.BelongsToSetAssociationMixin<permission_key, permission_keyId>;
  createPermission_key_permission_key!: Sequelize.BelongsToCreateAssociationMixin<permission_key>;

  static initModel(sequelize: Sequelize.Sequelize): typeof community_audit_logs {
    return community_audit_logs.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    community_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'communities',
        key: 'id'
      }
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      }
    },
    target_member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      }
    },
    action_type: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'community_audit_action_type',
        key: 'id'
      }
    },
    old_value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    new_value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    permission_key: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'permission_key',
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
    tableName: 'community_audit_logs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "community_audit_logs_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
