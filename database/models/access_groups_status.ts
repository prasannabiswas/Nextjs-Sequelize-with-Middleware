import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { access_groups, access_groupsId } from './access_groups';

export interface access_groups_statusAttributes {
  id: number;
  status?: string;
}

export type access_groups_statusPk = "id";
export type access_groups_statusId = access_groups_status[access_groups_statusPk];
export type access_groups_statusOptionalAttributes = "id" | "status";
export type access_groups_statusCreationAttributes = Optional<access_groups_statusAttributes, access_groups_statusOptionalAttributes>;

export class access_groups_status extends Model<access_groups_statusAttributes, access_groups_statusCreationAttributes> implements access_groups_statusAttributes {
  id!: number;
  status?: string;

  // access_groups_status hasMany access_groups via status
  access_groups!: access_groups[];
  getAccess_groups!: Sequelize.HasManyGetAssociationsMixin<access_groups>;
  setAccess_groups!: Sequelize.HasManySetAssociationsMixin<access_groups, access_groupsId>;
  addAccess_group!: Sequelize.HasManyAddAssociationMixin<access_groups, access_groupsId>;
  addAccess_groups!: Sequelize.HasManyAddAssociationsMixin<access_groups, access_groupsId>;
  createAccess_group!: Sequelize.HasManyCreateAssociationMixin<access_groups>;
  removeAccess_group!: Sequelize.HasManyRemoveAssociationMixin<access_groups, access_groupsId>;
  removeAccess_groups!: Sequelize.HasManyRemoveAssociationsMixin<access_groups, access_groupsId>;
  hasAccess_group!: Sequelize.HasManyHasAssociationMixin<access_groups, access_groupsId>;
  hasAccess_groups!: Sequelize.HasManyHasAssociationsMixin<access_groups, access_groupsId>;
  countAccess_groups!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof access_groups_status {
    return access_groups_status.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'access_groups_status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "access_groups_status_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
