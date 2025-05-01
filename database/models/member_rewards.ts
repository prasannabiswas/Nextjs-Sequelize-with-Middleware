import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { community_members, community_membersId } from './community_members';
import type { leaderboard_member_status, leaderboard_member_statusId } from './leaderboard_member_status';
import type { leaderboard_rewards, leaderboard_rewardsId } from './leaderboard_rewards';

export interface member_rewardsAttributes {
  id: number;
  member_id: number;
  reward_id: number;
  status?: number;
  granted_at?: Date;
}

export type member_rewardsPk = "id";
export type member_rewardsId = member_rewards[member_rewardsPk];
export type member_rewardsOptionalAttributes = "id" | "status" | "granted_at";
export type member_rewardsCreationAttributes = Optional<member_rewardsAttributes, member_rewardsOptionalAttributes>;

export class member_rewards extends Model<member_rewardsAttributes, member_rewardsCreationAttributes> implements member_rewardsAttributes {
  id!: number;
  member_id!: number;
  reward_id!: number;
  status?: number;
  granted_at?: Date;

  // member_rewards belongsTo community_members via member_id
  member!: community_members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<community_members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<community_members, community_membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<community_members>;
  // member_rewards belongsTo leaderboard_member_status via status
  status_leaderboard_member_status!: leaderboard_member_status;
  getStatus_leaderboard_member_status!: Sequelize.BelongsToGetAssociationMixin<leaderboard_member_status>;
  setStatus_leaderboard_member_status!: Sequelize.BelongsToSetAssociationMixin<leaderboard_member_status, leaderboard_member_statusId>;
  createStatus_leaderboard_member_status!: Sequelize.BelongsToCreateAssociationMixin<leaderboard_member_status>;
  // member_rewards belongsTo leaderboard_rewards via reward_id
  reward!: leaderboard_rewards;
  getReward!: Sequelize.BelongsToGetAssociationMixin<leaderboard_rewards>;
  setReward!: Sequelize.BelongsToSetAssociationMixin<leaderboard_rewards, leaderboard_rewardsId>;
  createReward!: Sequelize.BelongsToCreateAssociationMixin<leaderboard_rewards>;

  static initModel(sequelize: Sequelize.Sequelize): typeof member_rewards {
    return member_rewards.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'community_members',
        key: 'id'
      }
    },
    reward_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'leaderboard_rewards',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'leaderboard_member_status',
        key: 'id'
      }
    },
    granted_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'member_rewards',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "member_rewards_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
