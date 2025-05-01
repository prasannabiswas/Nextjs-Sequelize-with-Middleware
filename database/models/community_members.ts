import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { access_group_members, access_group_membersId } from './access_group_members';
import type { communities, communitiesId } from './communities';
import type { community_member_role, community_member_roleId } from './community_member_role';
import type { community_member_status, community_member_statusId } from './community_member_status';
import type { member_levels, member_levelsCreationAttributes, member_levelsId } from './member_levels';
import type { member_points, member_pointsId } from './member_points';
import type { member_rewards, member_rewardsId } from './member_rewards';
import type { members, membersId } from './members';

export interface community_membersAttributes {
  id: number;
  community_id?: number;
  member_id?: number;
  community_member_role_id?: number;
  community_member_status_id?: number;
  createdat?: Date;
  updateat?: Date;
}

export type community_membersPk = "id";
export type community_membersId = community_members[community_membersPk];
export type community_membersOptionalAttributes = "id" | "community_id" | "member_id" | "community_member_role_id" | "community_member_status_id" | "createdat" | "updateat";
export type community_membersCreationAttributes = Optional<community_membersAttributes, community_membersOptionalAttributes>;

export class community_members extends Model<community_membersAttributes, community_membersCreationAttributes> implements community_membersAttributes {
  id!: number;
  community_id?: number;
  member_id?: number;
  community_member_role_id?: number;
  community_member_status_id?: number;
  createdat?: Date;
  updateat?: Date;

  // community_members belongsTo communities via community_id
  community!: communities;
  getCommunity!: Sequelize.BelongsToGetAssociationMixin<communities>;
  setCommunity!: Sequelize.BelongsToSetAssociationMixin<communities, communitiesId>;
  createCommunity!: Sequelize.BelongsToCreateAssociationMixin<communities>;
  // community_members belongsTo community_member_role via community_member_role_id
  community_member_role!: community_member_role;
  getCommunity_member_role!: Sequelize.BelongsToGetAssociationMixin<community_member_role>;
  setCommunity_member_role!: Sequelize.BelongsToSetAssociationMixin<community_member_role, community_member_roleId>;
  createCommunity_member_role!: Sequelize.BelongsToCreateAssociationMixin<community_member_role>;
  // community_members belongsTo community_member_status via community_member_status_id
  community_member_status!: community_member_status;
  getCommunity_member_status!: Sequelize.BelongsToGetAssociationMixin<community_member_status>;
  setCommunity_member_status!: Sequelize.BelongsToSetAssociationMixin<community_member_status, community_member_statusId>;
  createCommunity_member_status!: Sequelize.BelongsToCreateAssociationMixin<community_member_status>;
  // community_members hasMany access_group_members via member_id
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
  // community_members hasOne member_levels via member_id
  member_level!: member_levels;
  getMember_level!: Sequelize.HasOneGetAssociationMixin<member_levels>;
  setMember_level!: Sequelize.HasOneSetAssociationMixin<member_levels, member_levelsId>;
  createMember_level!: Sequelize.HasOneCreateAssociationMixin<member_levels>;
  // community_members hasMany member_points via member_id
  member_points!: member_points[];
  getMember_points!: Sequelize.HasManyGetAssociationsMixin<member_points>;
  setMember_points!: Sequelize.HasManySetAssociationsMixin<member_points, member_pointsId>;
  addMember_point!: Sequelize.HasManyAddAssociationMixin<member_points, member_pointsId>;
  addMember_points!: Sequelize.HasManyAddAssociationsMixin<member_points, member_pointsId>;
  createMember_point!: Sequelize.HasManyCreateAssociationMixin<member_points>;
  removeMember_point!: Sequelize.HasManyRemoveAssociationMixin<member_points, member_pointsId>;
  removeMember_points!: Sequelize.HasManyRemoveAssociationsMixin<member_points, member_pointsId>;
  hasMember_point!: Sequelize.HasManyHasAssociationMixin<member_points, member_pointsId>;
  hasMember_points!: Sequelize.HasManyHasAssociationsMixin<member_points, member_pointsId>;
  countMember_points!: Sequelize.HasManyCountAssociationsMixin;
  // community_members hasMany member_rewards via member_id
  member_rewards!: member_rewards[];
  getMember_rewards!: Sequelize.HasManyGetAssociationsMixin<member_rewards>;
  setMember_rewards!: Sequelize.HasManySetAssociationsMixin<member_rewards, member_rewardsId>;
  addMember_reward!: Sequelize.HasManyAddAssociationMixin<member_rewards, member_rewardsId>;
  addMember_rewards!: Sequelize.HasManyAddAssociationsMixin<member_rewards, member_rewardsId>;
  createMember_reward!: Sequelize.HasManyCreateAssociationMixin<member_rewards>;
  removeMember_reward!: Sequelize.HasManyRemoveAssociationMixin<member_rewards, member_rewardsId>;
  removeMember_rewards!: Sequelize.HasManyRemoveAssociationsMixin<member_rewards, member_rewardsId>;
  hasMember_reward!: Sequelize.HasManyHasAssociationMixin<member_rewards, member_rewardsId>;
  hasMember_rewards!: Sequelize.HasManyHasAssociationsMixin<member_rewards, member_rewardsId>;
  countMember_rewards!: Sequelize.HasManyCountAssociationsMixin;
  // community_members belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;

  static initModel(sequelize: Sequelize.Sequelize): typeof community_members {
    return community_members.init({
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
      },
      unique: "community_members_community_id_member_id_key"
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      },
      unique: "community_members_community_id_member_id_key"
    },
    community_member_role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'community_member_role',
        key: 'id'
      }
    },
    community_member_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'community_member_status',
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
    tableName: 'community_members',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "community_members_community_id_member_id_key",
        unique: true,
        fields: [
          { name: "community_id" },
          { name: "member_id" },
        ]
      },
      {
        name: "community_members_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
