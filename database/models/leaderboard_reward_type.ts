import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { leaderboard_rewards, leaderboard_rewardsId } from './leaderboard_rewards';

export interface leaderboard_reward_typeAttributes {
  id: number;
  type?: string;
}

export type leaderboard_reward_typePk = "id";
export type leaderboard_reward_typeId = leaderboard_reward_type[leaderboard_reward_typePk];
export type leaderboard_reward_typeOptionalAttributes = "id" | "type";
export type leaderboard_reward_typeCreationAttributes = Optional<leaderboard_reward_typeAttributes, leaderboard_reward_typeOptionalAttributes>;

export class leaderboard_reward_type extends Model<leaderboard_reward_typeAttributes, leaderboard_reward_typeCreationAttributes> implements leaderboard_reward_typeAttributes {
  id!: number;
  type?: string;

  // leaderboard_reward_type hasMany leaderboard_rewards via reward_type
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

  static initModel(sequelize: Sequelize.Sequelize): typeof leaderboard_reward_type {
    return leaderboard_reward_type.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'leaderboard_reward_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "leaderboard_reward_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
