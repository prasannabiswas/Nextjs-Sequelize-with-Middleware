import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { communities, communitiesId } from './communities';

export interface community_gamification_settingsAttributes {
  id: number;
  community_id: number;
  is_enabled?: boolean;
  include_admins?: boolean;
  include_moderators?: boolean;
  show_rewards_to_others?: boolean;
  updatedat?: Date;
}

export type community_gamification_settingsPk = "id";
export type community_gamification_settingsId = community_gamification_settings[community_gamification_settingsPk];
export type community_gamification_settingsOptionalAttributes = "id" | "is_enabled" | "include_admins" | "include_moderators" | "show_rewards_to_others" | "updatedat";
export type community_gamification_settingsCreationAttributes = Optional<community_gamification_settingsAttributes, community_gamification_settingsOptionalAttributes>;

export class community_gamification_settings extends Model<community_gamification_settingsAttributes, community_gamification_settingsCreationAttributes> implements community_gamification_settingsAttributes {
  id!: number;
  community_id!: number;
  is_enabled?: boolean;
  include_admins?: boolean;
  include_moderators?: boolean;
  show_rewards_to_others?: boolean;
  updatedat?: Date;

  // community_gamification_settings belongsTo communities via community_id
  community!: communities;
  getCommunity!: Sequelize.BelongsToGetAssociationMixin<communities>;
  setCommunity!: Sequelize.BelongsToSetAssociationMixin<communities, communitiesId>;
  createCommunity!: Sequelize.BelongsToCreateAssociationMixin<communities>;

  static initModel(sequelize: Sequelize.Sequelize): typeof community_gamification_settings {
    return community_gamification_settings.init({
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
      unique: "community_gamification_settings_community_id_key"
    },
    is_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    include_admins: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    include_moderators: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    show_rewards_to_others: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'community_gamification_settings',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "community_gamification_settings_community_id_key",
        unique: true,
        fields: [
          { name: "community_id" },
        ]
      },
      {
        name: "community_gamification_settings_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
