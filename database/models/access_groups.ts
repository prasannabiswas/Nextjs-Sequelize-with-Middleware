import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { access_group_members, access_group_membersId } from './access_group_members';
import type { access_group_spaces, access_group_spacesId } from './access_group_spaces';
import type { access_groups_status, access_groups_statusId } from './access_groups_status';
import type { communities, communitiesId } from './communities';

export interface access_groupsAttributes {
  id: number;
  community_id?: number;
  name: string;
  description?: string;
  status?: number;
  createdat?: Date;
  updatedat?: Date;
}

export type access_groupsPk = "id";
export type access_groupsId = access_groups[access_groupsPk];
export type access_groupsOptionalAttributes = "id" | "community_id" | "description" | "status" | "createdat" | "updatedat";
export type access_groupsCreationAttributes = Optional<access_groupsAttributes, access_groupsOptionalAttributes>;

export class access_groups extends Model<access_groupsAttributes, access_groupsCreationAttributes> implements access_groupsAttributes {
  id!: number;
  community_id?: number;
  name!: string;
  description?: string;
  status?: number;
  createdat?: Date;
  updatedat?: Date;

  // access_groups hasMany access_group_members via access_group_id
  access_group_members!: access_group_members[];
  getAccess_group_members!: Sequelize.HasManyGetAssociationsMixin<access_group_members>;
  setAccess_group_members!: Sequelize.HasManySetAssociationsMixin<access_group_members, access_group_membersId>;
  addAccess_group_member!: Sequelize.HasManyAddAssociationMixin<access_group_members, access_group_membersId>;
  addAccess_group_members!: Sequelize.HasManyAddAssociationsMixin<access_group_members, access_group_membersId>;
  createAccess_group_member!: Sequelize.HasManyCreateAssociationMixin<access_group_members>;
  removeAccess_group_member!: Sequelize.HasManyRemoveAssociationMixin<access_group_members, access_group_membersId>;
  removeAccess_group_members!: Sequelize.HasManyRemoveAssociationsMixin<access_group_members, access_group_membersId>;
  hasAccess_group_member!: Sequelize.HasManyHasAssociationMixin<access_group_members, access_group_membersId>;
  hasAccess_group_members!: Sequelize.HasManyHasAssociationsMixin<access_group_members, access_group_membersId>;
  countAccess_group_members!: Sequelize.HasManyCountAssociationsMixin;
  // access_groups hasMany access_group_spaces via access_group_id
  access_group_spaces!: access_group_spaces[];
  getAccess_group_spaces!: Sequelize.HasManyGetAssociationsMixin<access_group_spaces>;
  setAccess_group_spaces!: Sequelize.HasManySetAssociationsMixin<access_group_spaces, access_group_spacesId>;
  addAccess_group_space!: Sequelize.HasManyAddAssociationMixin<access_group_spaces, access_group_spacesId>;
  addAccess_group_spaces!: Sequelize.HasManyAddAssociationsMixin<access_group_spaces, access_group_spacesId>;
  createAccess_group_space!: Sequelize.HasManyCreateAssociationMixin<access_group_spaces>;
  removeAccess_group_space!: Sequelize.HasManyRemoveAssociationMixin<access_group_spaces, access_group_spacesId>;
  removeAccess_group_spaces!: Sequelize.HasManyRemoveAssociationsMixin<access_group_spaces, access_group_spacesId>;
  hasAccess_group_space!: Sequelize.HasManyHasAssociationMixin<access_group_spaces, access_group_spacesId>;
  hasAccess_group_spaces!: Sequelize.HasManyHasAssociationsMixin<access_group_spaces, access_group_spacesId>;
  countAccess_group_spaces!: Sequelize.HasManyCountAssociationsMixin;
  // access_groups belongsTo access_groups_status via status
  status_access_groups_status!: access_groups_status;
  getStatus_access_groups_status!: Sequelize.BelongsToGetAssociationMixin<access_groups_status>;
  setStatus_access_groups_status!: Sequelize.BelongsToSetAssociationMixin<access_groups_status, access_groups_statusId>;
  createStatus_access_groups_status!: Sequelize.BelongsToCreateAssociationMixin<access_groups_status>;
  // access_groups belongsTo communities via community_id
  community!: communities;
  getCommunity!: Sequelize.BelongsToGetAssociationMixin<communities>;
  setCommunity!: Sequelize.BelongsToSetAssociationMixin<communities, communitiesId>;
  createCommunity!: Sequelize.BelongsToCreateAssociationMixin<communities>;

  static initModel(sequelize: Sequelize.Sequelize): typeof access_groups {
    return access_groups.init({
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'access_groups_status',
        key: 'id'
      }
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'access_groups',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "access_groups_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
