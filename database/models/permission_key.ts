import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { community_audit_logs, community_audit_logsId } from './community_audit_logs';
import type { community_permissions, community_permissionsId } from './community_permissions';

export interface permission_keyAttributes {
  id: number;
  name: string;
  createdat?: Date;
  updateat?: Date;
}

export type permission_keyPk = "id";
export type permission_keyId = permission_key[permission_keyPk];
export type permission_keyOptionalAttributes = "id" | "createdat" | "updateat";
export type permission_keyCreationAttributes = Optional<permission_keyAttributes, permission_keyOptionalAttributes>;

export class permission_key extends Model<permission_keyAttributes, permission_keyCreationAttributes> implements permission_keyAttributes {
  id!: number;
  name!: string;
  createdat?: Date;
  updateat?: Date;

  // permission_key hasMany community_audit_logs via permission_key
  community_audit_logs!: community_audit_logs[];
  getCommunity_audit_logs!: Sequelize.HasManyGetAssociationsMixin<community_audit_logs>;
  setCommunity_audit_logs!: Sequelize.HasManySetAssociationsMixin<community_audit_logs, community_audit_logsId>;
  addCommunity_audit_log!: Sequelize.HasManyAddAssociationMixin<community_audit_logs, community_audit_logsId>;
  addCommunity_audit_logs!: Sequelize.HasManyAddAssociationsMixin<community_audit_logs, community_audit_logsId>;
  createCommunity_audit_log!: Sequelize.HasManyCreateAssociationMixin<community_audit_logs>;
  removeCommunity_audit_log!: Sequelize.HasManyRemoveAssociationMixin<community_audit_logs, community_audit_logsId>;
  removeCommunity_audit_logs!: Sequelize.HasManyRemoveAssociationsMixin<community_audit_logs, community_audit_logsId>;
  hasCommunity_audit_log!: Sequelize.HasManyHasAssociationMixin<community_audit_logs, community_audit_logsId>;
  hasCommunity_audit_logs!: Sequelize.HasManyHasAssociationsMixin<community_audit_logs, community_audit_logsId>;
  countCommunity_audit_logs!: Sequelize.HasManyCountAssociationsMixin;
  // permission_key hasMany community_permissions via permission_key
  community_permissions!: community_permissions[];
  getCommunity_permissions!: Sequelize.HasManyGetAssociationsMixin<community_permissions>;
  setCommunity_permissions!: Sequelize.HasManySetAssociationsMixin<community_permissions, community_permissionsId>;
  addCommunity_permission!: Sequelize.HasManyAddAssociationMixin<community_permissions, community_permissionsId>;
  addCommunity_permissions!: Sequelize.HasManyAddAssociationsMixin<community_permissions, community_permissionsId>;
  createCommunity_permission!: Sequelize.HasManyCreateAssociationMixin<community_permissions>;
  removeCommunity_permission!: Sequelize.HasManyRemoveAssociationMixin<community_permissions, community_permissionsId>;
  removeCommunity_permissions!: Sequelize.HasManyRemoveAssociationsMixin<community_permissions, community_permissionsId>;
  hasCommunity_permission!: Sequelize.HasManyHasAssociationMixin<community_permissions, community_permissionsId>;
  hasCommunity_permissions!: Sequelize.HasManyHasAssociationsMixin<community_permissions, community_permissionsId>;
  countCommunity_permissions!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof permission_key {
    return permission_key.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
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
    tableName: 'permission_key',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "permission_key_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
