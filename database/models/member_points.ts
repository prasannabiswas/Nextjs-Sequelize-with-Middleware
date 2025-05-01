import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { communities, communitiesId } from './communities';
import type { community_members, community_membersId } from './community_members';

export interface member_pointsAttributes {
  id: number;
  member_id: number;
  community_id: number;
  total_points: number;
  updatedat?: Date;
}

export type member_pointsPk = "id";
export type member_pointsId = member_points[member_pointsPk];
export type member_pointsOptionalAttributes = "id" | "total_points" | "updatedat";
export type member_pointsCreationAttributes = Optional<member_pointsAttributes, member_pointsOptionalAttributes>;

export class member_points extends Model<member_pointsAttributes, member_pointsCreationAttributes> implements member_pointsAttributes {
  id!: number;
  member_id!: number;
  community_id!: number;
  total_points!: number;
  updatedat?: Date;

  // member_points belongsTo communities via community_id
  community!: communities;
  getCommunity!: Sequelize.BelongsToGetAssociationMixin<communities>;
  setCommunity!: Sequelize.BelongsToSetAssociationMixin<communities, communitiesId>;
  createCommunity!: Sequelize.BelongsToCreateAssociationMixin<communities>;
  // member_points belongsTo community_members via member_id
  member!: community_members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<community_members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<community_members, community_membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<community_members>;

  static initModel(sequelize: Sequelize.Sequelize): typeof member_points {
    return member_points.init({
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
      unique: "member_points_member_id_community_id_key"
    },
    community_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'communities',
        key: 'id'
      },
      unique: "member_points_member_id_community_id_key"
    },
    total_points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'member_points',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "member_points_member_id_community_id_key",
        unique: true,
        fields: [
          { name: "member_id" },
          { name: "community_id" },
        ]
      },
      {
        name: "member_points_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
