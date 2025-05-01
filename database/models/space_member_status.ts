import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { space_group_members, space_group_membersId } from './space_group_members';
import type { space_members, space_membersId } from './space_members';

export interface space_member_statusAttributes {
  id: number;
  status?: string;
}

export type space_member_statusPk = "id";
export type space_member_statusId = space_member_status[space_member_statusPk];
export type space_member_statusOptionalAttributes = "id" | "status";
export type space_member_statusCreationAttributes = Optional<space_member_statusAttributes, space_member_statusOptionalAttributes>;

export class space_member_status extends Model<space_member_statusAttributes, space_member_statusCreationAttributes> implements space_member_statusAttributes {
  id!: number;
  status?: string;

  // space_member_status hasMany space_group_members via space_member_status_id
  space_group_members!: space_group_members[];
  getSpace_group_members!: Sequelize.HasManyGetAssociationsMixin<space_group_members>;
  setSpace_group_members!: Sequelize.HasManySetAssociationsMixin<space_group_members, space_group_membersId>;
  addSpace_group_member!: Sequelize.HasManyAddAssociationMixin<space_group_members, space_group_membersId>;
  addSpace_group_members!: Sequelize.HasManyAddAssociationsMixin<space_group_members, space_group_membersId>;
  createSpace_group_member!: Sequelize.HasManyCreateAssociationMixin<space_group_members>;
  removeSpace_group_member!: Sequelize.HasManyRemoveAssociationMixin<space_group_members, space_group_membersId>;
  removeSpace_group_members!: Sequelize.HasManyRemoveAssociationsMixin<space_group_members, space_group_membersId>;
  hasSpace_group_member!: Sequelize.HasManyHasAssociationMixin<space_group_members, space_group_membersId>;
  hasSpace_group_members!: Sequelize.HasManyHasAssociationsMixin<space_group_members, space_group_membersId>;
  countSpace_group_members!: Sequelize.HasManyCountAssociationsMixin;
  // space_member_status hasMany space_members via space_member_status_id
  space_members!: space_members[];
  getSpace_members!: Sequelize.HasManyGetAssociationsMixin<space_members>;
  setSpace_members!: Sequelize.HasManySetAssociationsMixin<space_members, space_membersId>;
  addSpace_member!: Sequelize.HasManyAddAssociationMixin<space_members, space_membersId>;
  addSpace_members!: Sequelize.HasManyAddAssociationsMixin<space_members, space_membersId>;
  createSpace_member!: Sequelize.HasManyCreateAssociationMixin<space_members>;
  removeSpace_member!: Sequelize.HasManyRemoveAssociationMixin<space_members, space_membersId>;
  removeSpace_members!: Sequelize.HasManyRemoveAssociationsMixin<space_members, space_membersId>;
  hasSpace_member!: Sequelize.HasManyHasAssociationMixin<space_members, space_membersId>;
  hasSpace_members!: Sequelize.HasManyHasAssociationsMixin<space_members, space_membersId>;
  countSpace_members!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_member_status {
    return space_member_status.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'space_member_status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_member_status_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
