import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { leaderboard_levels, leaderboard_levelsId } from './leaderboard_levels';
import type { leaderboard_reward_type, leaderboard_reward_typeId } from './leaderboard_reward_type';
import type { member_rewards, member_rewardsId } from './member_rewards';

export interface leaderboard_rewardsAttributes {
  id: number;
  level_id: number;
  reward_type?: number;
  reward_value: string;
  createdat?: Date;
}

export type leaderboard_rewardsPk = "id";
export type leaderboard_rewardsId = leaderboard_rewards[leaderboard_rewardsPk];
export type leaderboard_rewardsOptionalAttributes = "id" | "reward_type" | "createdat";
export type leaderboard_rewardsCreationAttributes = Optional<leaderboard_rewardsAttributes, leaderboard_rewardsOptionalAttributes>;

export class leaderboard_rewards extends Model<leaderboard_rewardsAttributes, leaderboard_rewardsCreationAttributes> implements leaderboard_rewardsAttributes {
  id!: number;
  level_id!: number;
  reward_type?: number;
  reward_value!: string;
  createdat?: Date;

  // leaderboard_rewards belongsTo leaderboard_levels via level_id
  level!: leaderboard_levels;
  getLevel!: Sequelize.BelongsToGetAssociationMixin<leaderboard_levels>;
  setLevel!: Sequelize.BelongsToSetAssociationMixin<leaderboard_levels, leaderboard_levelsId>;
  createLevel!: Sequelize.BelongsToCreateAssociationMixin<leaderboard_levels>;
  // leaderboard_rewards belongsTo leaderboard_reward_type via reward_type
  reward_type_leaderboard_reward_type!: leaderboard_reward_type;
  getReward_type_leaderboard_reward_type!: Sequelize.BelongsToGetAssociationMixin<leaderboard_reward_type>;
  setReward_type_leaderboard_reward_type!: Sequelize.BelongsToSetAssociationMixin<leaderboard_reward_type, leaderboard_reward_typeId>;
  createReward_type_leaderboard_reward_type!: Sequelize.BelongsToCreateAssociationMixin<leaderboard_reward_type>;
  // leaderboard_rewards hasMany member_rewards via reward_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof leaderboard_rewards {
    return leaderboard_rewards.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    level_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'leaderboard_levels',
        key: 'id'
      }
    },
    reward_type: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'leaderboard_reward_type',
        key: 'id'
      }
    },
    reward_value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'leaderboard_rewards',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "leaderboard_rewards_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
