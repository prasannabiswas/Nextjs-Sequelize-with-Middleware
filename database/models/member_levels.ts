import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { community_members, community_membersId } from './community_members';
import type { leaderboard_levels, leaderboard_levelsId } from './leaderboard_levels';

export interface member_levelsAttributes {
  id: number;
  member_id: number;
  level_id: number;
  achieved_at?: Date;
}

export type member_levelsPk = "id";
export type member_levelsId = member_levels[member_levelsPk];
export type member_levelsOptionalAttributes = "id" | "achieved_at";
export type member_levelsCreationAttributes = Optional<member_levelsAttributes, member_levelsOptionalAttributes>;

export class member_levels extends Model<member_levelsAttributes, member_levelsCreationAttributes> implements member_levelsAttributes {
  id!: number;
  member_id!: number;
  level_id!: number;
  achieved_at?: Date;

  // member_levels belongsTo community_members via member_id
  member!: community_members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<community_members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<community_members, community_membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<community_members>;
  // member_levels belongsTo leaderboard_levels via level_id
  level!: leaderboard_levels;
  getLevel!: Sequelize.BelongsToGetAssociationMixin<leaderboard_levels>;
  setLevel!: Sequelize.BelongsToSetAssociationMixin<leaderboard_levels, leaderboard_levelsId>;
  createLevel!: Sequelize.BelongsToCreateAssociationMixin<leaderboard_levels>;

  static initModel(sequelize: Sequelize.Sequelize): typeof member_levels {
    return member_levels.init({
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
      },
      unique: "member_levels_member_id_key"
    },
    level_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'leaderboard_levels',
        key: 'id'
      }
    },
    achieved_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'member_levels',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "member_levels_member_id_key",
        unique: true,
        fields: [
          { name: "member_id" },
        ]
      },
      {
        name: "member_levels_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
