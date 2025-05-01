import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { communities, communitiesId } from './communities';
import type { community_member_role, community_member_roleId } from './community_member_role';
import type { permission_key, permission_keyId } from './permission_key';

export interface community_permissionsAttributes {
  id: number;
  community_id?: number;
  community_member_role_id?: number;
  permission_key?: number;
  is_allowed?: boolean;
  createdat?: Date;
  updateat?: Date;
}

export type community_permissionsPk = "id";
export type community_permissionsId = community_permissions[community_permissionsPk];
export type community_permissionsOptionalAttributes = "id" | "community_id" | "community_member_role_id" | "permission_key" | "is_allowed" | "createdat" | "updateat";
export type community_permissionsCreationAttributes = Optional<community_permissionsAttributes, community_permissionsOptionalAttributes>;

export class community_permissions extends Model<community_permissionsAttributes, community_permissionsCreationAttributes> implements community_permissionsAttributes {
  id!: number;
  community_id?: number;
  community_member_role_id?: number;
  permission_key?: number;
  is_allowed?: boolean;
  createdat?: Date;
  updateat?: Date;

  // community_permissions belongsTo communities via community_id
  community!: communities;
  getCommunity!: Sequelize.BelongsToGetAssociationMixin<communities>;
  setCommunity!: Sequelize.BelongsToSetAssociationMixin<communities, communitiesId>;
  createCommunity!: Sequelize.BelongsToCreateAssociationMixin<communities>;
  // community_permissions belongsTo community_member_role via community_member_role_id
  community_member_role!: community_member_role;
  getCommunity_member_role!: Sequelize.BelongsToGetAssociationMixin<community_member_role>;
  setCommunity_member_role!: Sequelize.BelongsToSetAssociationMixin<community_member_role, community_member_roleId>;
  createCommunity_member_role!: Sequelize.BelongsToCreateAssociationMixin<community_member_role>;
  // community_permissions belongsTo permission_key via permission_key
  permission_key_permission_key!: permission_key;
  getPermission_key_permission_key!: Sequelize.BelongsToGetAssociationMixin<permission_key>;
  setPermission_key_permission_key!: Sequelize.BelongsToSetAssociationMixin<permission_key, permission_keyId>;
  createPermission_key_permission_key!: Sequelize.BelongsToCreateAssociationMixin<permission_key>;

  static initModel(sequelize: Sequelize.Sequelize): typeof community_permissions {
    return community_permissions.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    community_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 1,
      references: {
        model: 'communities',
        key: 'id'
      },
      unique: "community_permissions_community_id_community_member_role_id_key"
    },
    community_member_role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      references: {
        model: 'community_member_role',
        key: 'id'
      },
      unique: "community_permissions_community_id_community_member_role_id_key"
    },
    permission_key: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'permission_key',
        key: 'id'
      },
      unique: "community_permissions_community_id_community_member_role_id_key"
    },
    is_allowed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
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
    tableName: 'community_permissions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "community_permissions_community_id_community_member_role_id_key",
        unique: true,
        fields: [
          { name: "community_id" },
          { name: "community_member_role_id" },
          { name: "permission_key" },
        ]
      },
      {
        name: "community_permissions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
