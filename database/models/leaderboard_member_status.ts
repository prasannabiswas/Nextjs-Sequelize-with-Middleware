import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { member_rewards, member_rewardsId } from './member_rewards';

export interface leaderboard_member_statusAttributes {
  id: number;
  status?: string;
}

export type leaderboard_member_statusPk = "id";
export type leaderboard_member_statusId = leaderboard_member_status[leaderboard_member_statusPk];
export type leaderboard_member_statusOptionalAttributes = "id" | "status";
export type leaderboard_member_statusCreationAttributes = Optional<leaderboard_member_statusAttributes, leaderboard_member_statusOptionalAttributes>;

export class leaderboard_member_status extends Model<leaderboard_member_statusAttributes, leaderboard_member_statusCreationAttributes> implements leaderboard_member_statusAttributes {
  id!: number;
  status?: string;

  // leaderboard_member_status hasMany member_rewards via status
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

  static initModel(sequelize: Sequelize.Sequelize): typeof leaderboard_member_status {
    return leaderboard_member_status.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'leaderboard_member_status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "leaderboard_member_status_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
