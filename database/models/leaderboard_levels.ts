import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { communities, communitiesId } from './communities';
import type { leaderboard_rewards, leaderboard_rewardsId } from './leaderboard_rewards';
import type { member_levels, member_levelsId } from './member_levels';

export interface leaderboard_levelsAttributes {
  id: number;
  community_id: number;
  level: number;
  level_name: string;
  points_required: number;
}

export type leaderboard_levelsPk = "id";
export type leaderboard_levelsId = leaderboard_levels[leaderboard_levelsPk];
export type leaderboard_levelsOptionalAttributes = "id";
export type leaderboard_levelsCreationAttributes = Optional<leaderboard_levelsAttributes, leaderboard_levelsOptionalAttributes>;

export class leaderboard_levels extends Model<leaderboard_levelsAttributes, leaderboard_levelsCreationAttributes> implements leaderboard_levelsAttributes {
  id!: number;
  community_id!: number;
  level!: number;
  level_name!: string;
  points_required!: number;

  // leaderboard_levels belongsTo communities via community_id
  community!: communities;
  getCommunity!: Sequelize.BelongsToGetAssociationMixin<communities>;
  setCommunity!: Sequelize.BelongsToSetAssociationMixin<communities, communitiesId>;
  createCommunity!: Sequelize.BelongsToCreateAssociationMixin<communities>;
  // leaderboard_levels hasMany leaderboard_rewards via level_id
  leaderboard_rewards!: leaderboard_rewards[];
  getLeaderboard_rewards!: Sequelize.HasManyGetAssociationsMixin<leaderboard_rewards>;
  setLeaderboard_rewards!: Sequelize.HasManySetAssociationsMixin<leaderboard_rewards, leaderboard_rewardsId>;
  addLeaderboard_reward!: Sequelize.HasManyAddAssociationMixin<leaderboard_rewards, leaderboard_rewardsId>;
  addLeaderboard_rewards!: Sequelize.HasManyAddAssociationsMixin<leaderboard_rewards, leaderboard_rewardsId>;
  createLeaderboard_reward!: Sequelize.HasManyCreateAssociationMixin<leaderboard_rewards>;
  removeLeaderboard_reward!: Sequelize.HasManyRemoveAssociationMixin<leaderboard_rewards, leaderboard_rewardsId>;
  removeLeaderboard_rewards!: Sequelize.HasManyRemoveAssociationsMixin<leaderboard_rewards, leaderboard_rewardsId>;
  hasLeaderboard_reward!: Sequelize.HasManyHasAssociationMixin<leaderboard_rewards, leaderboard_rewardsId>;
  hasLeaderboard_rewards!: Sequelize.HasManyHasAssociationsMixin<leaderboard_rewards, leaderboard_rewardsId>;
  countLeaderboard_rewards!: Sequelize.HasManyCountAssociationsMixin;
  // leaderboard_levels hasMany member_levels via level_id
  member_levels!: member_levels[];
  getMember_levels!: Sequelize.HasManyGetAssociationsMixin<member_levels>;
  setMember_levels!: Sequelize.HasManySetAssociationsMixin<member_levels, member_levelsId>;
  addMember_level!: Sequelize.HasManyAddAssociationMixin<member_levels, member_levelsId>;
  addMember_levels!: Sequelize.HasManyAddAssociationsMixin<member_levels, member_levelsId>;
  createMember_level!: Sequelize.HasManyCreateAssociationMixin<member_levels>;
  removeMember_level!: Sequelize.HasManyRemoveAssociationMixin<member_levels, member_levelsId>;
  removeMember_levels!: Sequelize.HasManyRemoveAssociationsMixin<member_levels, member_levelsId>;
  hasMember_level!: Sequelize.HasManyHasAssociationMixin<member_levels, member_levelsId>;
  hasMember_levels!: Sequelize.HasManyHasAssociationsMixin<member_levels, member_levelsId>;
  countMember_levels!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof leaderboard_levels {
    return leaderboard_levels.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    community_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'communities',
        key: 'id'
      },
      unique: "leaderboard_levels_community_id_level_key"
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "leaderboard_levels_community_id_level_key"
    },
    level_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    points_required: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'leaderboard_levels',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "leaderboard_levels_community_id_level_key",
        unique: true,
        fields: [
          { name: "community_id" },
          { name: "level" },
        ]
      },
      {
        name: "leaderboard_levels_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
