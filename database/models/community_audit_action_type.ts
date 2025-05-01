import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { community_audit_logs, community_audit_logsId } from './community_audit_logs';

export interface community_audit_action_typeAttributes {
  id: number;
  audit_action_type?: string;
  createdat?: Date;
  updateat?: Date;
}

export type community_audit_action_typePk = "id";
export type community_audit_action_typeId = community_audit_action_type[community_audit_action_typePk];
export type community_audit_action_typeOptionalAttributes = "id" | "audit_action_type" | "createdat" | "updateat";
export type community_audit_action_typeCreationAttributes = Optional<community_audit_action_typeAttributes, community_audit_action_typeOptionalAttributes>;

export class community_audit_action_type extends Model<community_audit_action_typeAttributes, community_audit_action_typeCreationAttributes> implements community_audit_action_typeAttributes {
  id!: number;
  audit_action_type?: string;
  createdat?: Date;
  updateat?: Date;

  // community_audit_action_type hasMany community_audit_logs via action_type
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

  static initModel(sequelize: Sequelize.Sequelize): typeof community_audit_action_type {
    return community_audit_action_type.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    audit_action_type: {
      type: DataTypes.STRING(255),
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
    tableName: 'community_audit_action_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "community_audit_action_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
