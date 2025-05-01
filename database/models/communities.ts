import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { access_groups, access_groupsId } from './access_groups';
import type { community_audit_logs, community_audit_logsId } from './community_audit_logs';
import type { community_gamification_settings, community_gamification_settingsCreationAttributes, community_gamification_settingsId } from './community_gamification_settings';
import type { community_links, community_linksId } from './community_links';
import type { community_members, community_membersId } from './community_members';
import type { community_navigation_links, community_navigation_linksId } from './community_navigation_links';
import type { community_permissions, community_permissionsId } from './community_permissions';
import type { community_topics, community_topicsId } from './community_topics';
import type { leaderboard_levels, leaderboard_levelsId } from './leaderboard_levels';
import type { member_points, member_pointsId } from './member_points';
import type { members, membersId } from './members';
import type { space_groups, space_groupsId } from './space_groups';
import type { space_images, space_imagesId } from './space_images';
import type { space_posts, space_postsId } from './space_posts';
import type { spaces, spacesId } from './spaces';

export interface communitiesAttributes {
  id: number;
  name: string;
  owner_id?: number;
  community_slug: string;
  trial_expires_at?: Date;
  is_active?: boolean;
  createdat?: Date;
  updatedat?: Date;
}

export type communitiesPk = "id";
export type communitiesId = communities[communitiesPk];
export type communitiesOptionalAttributes = "id" | "owner_id" | "trial_expires_at" | "is_active" | "createdat" | "updatedat";
export type communitiesCreationAttributes = Optional<communitiesAttributes, communitiesOptionalAttributes>;

export class communities extends Model<communitiesAttributes, communitiesCreationAttributes> implements communitiesAttributes {
  id!: number;
  name!: string;
  owner_id?: number;
  community_slug!: string;
  trial_expires_at?: Date;
  is_active?: boolean;
  createdat?: Date;
  updatedat?: Date;

  // communities hasMany access_groups via community_id
  access_groups!: access_groups[];
  getAccess_groups!: Sequelize.HasManyGetAssociationsMixin<access_groups>;
  setAccess_groups!: Sequelize.HasManySetAssociationsMixin<access_groups, access_groupsId>;
  addAccess_group!: Sequelize.HasManyAddAssociationMixin<access_groups, access_groupsId>;
  addAccess_groups!: Sequelize.HasManyAddAssociationsMixin<access_groups, access_groupsId>;
  createAccess_group!: Sequelize.HasManyCreateAssociationMixin<access_groups>;
  removeAccess_group!: Sequelize.HasManyRemoveAssociationMixin<access_groups, access_groupsId>;
  removeAccess_groups!: Sequelize.HasManyRemoveAssociationsMixin<access_groups, access_groupsId>;
  hasAccess_group!: Sequelize.HasManyHasAssociationMixin<access_groups, access_groupsId>;
  hasAccess_groups!: Sequelize.HasManyHasAssociationsMixin<access_groups, access_groupsId>;
  countAccess_groups!: Sequelize.HasManyCountAssociationsMixin;
  // communities hasMany community_audit_logs via community_id
  community_audit_logs!: community_audit_logs[];
  getCommunity_audit_logs!: Sequelize.HasManyGetAssociationsMixin<community_audit_logs>;
  setCommunity_audit_logs!: Sequelize.HasManySetAssociationsMixin<community_audit_logs, community_audit_logsId>;
  addCommunity_audit_log!: Sequelize.HasManyAddAssociationMixin<community_audit_logs, community_audit_logsId>;
  addCommunity_audit_logs!: Sequelize.HasManyAddAssociationsMixin<community_audit_logs, community_audit_logsId>;
  createCommunity_audit_log!: Sequelize.HasManyCreateAssociationMixin<community_audit_logs>;
  removeCommunity_audit_log!: Sequelize.HasManyRemoveAssociationMixin<community_audit_logs, community_audit_logsId>;
  removeCommunity_audit_logs!: Sequelize.HasManyRemoveAssociationsMixin<community_audit_logs, community_audit_logsId>;
  hasCommunity_audit_log!: Sequelize.HasManyHasAssociationMixin<community_audit_logs, community_audit_logsId>;
  hasCommunity_audit_logs!: Sequelize.HasManyHasAssociationsMixin<community_audit_logs, community_audit_logsId>;
  countCommunity_audit_logs!: Sequelize.HasManyCountAssociationsMixin;
  // communities hasOne community_gamification_settings via community_id
  community_gamification_setting!: community_gamification_settings;
  getCommunity_gamification_setting!: Sequelize.HasOneGetAssociationMixin<community_gamification_settings>;
  setCommunity_gamification_setting!: Sequelize.HasOneSetAssociationMixin<community_gamification_settings, community_gamification_settingsId>;
  createCommunity_gamification_setting!: Sequelize.HasOneCreateAssociationMixin<community_gamification_settings>;
  // communities hasMany community_links via community_id
  community_links!: community_links[];
  getCommunity_links!: Sequelize.HasManyGetAssociationsMixin<community_links>;
  setCommunity_links!: Sequelize.HasManySetAssociationsMixin<community_links, community_linksId>;
  addCommunity_link!: Sequelize.HasManyAddAssociationMixin<community_links, community_linksId>;
  addCommunity_links!: Sequelize.HasManyAddAssociationsMixin<community_links, community_linksId>;
  createCommunity_link!: Sequelize.HasManyCreateAssociationMixin<community_links>;
  removeCommunity_link!: Sequelize.HasManyRemoveAssociationMixin<community_links, community_linksId>;
  removeCommunity_links!: Sequelize.HasManyRemoveAssociationsMixin<community_links, community_linksId>;
  hasCommunity_link!: Sequelize.HasManyHasAssociationMixin<community_links, community_linksId>;
  hasCommunity_links!: Sequelize.HasManyHasAssociationsMixin<community_links, community_linksId>;
  countCommunity_links!: Sequelize.HasManyCountAssociationsMixin;
  // communities hasMany community_members via community_id
  community_members!: community_members[];
  getCommunity_members!: Sequelize.HasManyGetAssociationsMixin<community_members>;
  setCommunity_members!: Sequelize.HasManySetAssociationsMixin<community_members, community_membersId>;
  addCommunity_member!: Sequelize.HasManyAddAssociationMixin<community_members, community_membersId>;
  addCommunity_members!: Sequelize.HasManyAddAssociationsMixin<community_members, community_membersId>;
  createCommunity_member!: Sequelize.HasManyCreateAssociationMixin<community_members>;
  removeCommunity_member!: Sequelize.HasManyRemoveAssociationMixin<community_members, community_membersId>;
  removeCommunity_members!: Sequelize.HasManyRemoveAssociationsMixin<community_members, community_membersId>;
  hasCommunity_member!: Sequelize.HasManyHasAssociationMixin<community_members, community_membersId>;
  hasCommunity_members!: Sequelize.HasManyHasAssociationsMixin<community_members, community_membersId>;
  countCommunity_members!: Sequelize.HasManyCountAssociationsMixin;
  // communities hasMany community_navigation_links via community_id
  community_navigation_links!: community_navigation_links[];
  getCommunity_navigation_links!: Sequelize.HasManyGetAssociationsMixin<community_navigation_links>;
  setCommunity_navigation_links!: Sequelize.HasManySetAssociationsMixin<community_navigation_links, community_navigation_linksId>;
  addCommunity_navigation_link!: Sequelize.HasManyAddAssociationMixin<community_navigation_links, community_navigation_linksId>;
  addCommunity_navigation_links!: Sequelize.HasManyAddAssociationsMixin<community_navigation_links, community_navigation_linksId>;
  createCommunity_navigation_link!: Sequelize.HasManyCreateAssociationMixin<community_navigation_links>;
  removeCommunity_navigation_link!: Sequelize.HasManyRemoveAssociationMixin<community_navigation_links, community_navigation_linksId>;
  removeCommunity_navigation_links!: Sequelize.HasManyRemoveAssociationsMixin<community_navigation_links, community_navigation_linksId>;
  hasCommunity_navigation_link!: Sequelize.HasManyHasAssociationMixin<community_navigation_links, community_navigation_linksId>;
  hasCommunity_navigation_links!: Sequelize.HasManyHasAssociationsMixin<community_navigation_links, community_navigation_linksId>;
  countCommunity_navigation_links!: Sequelize.HasManyCountAssociationsMixin;
  // communities hasMany community_permissions via community_id
  community_permissions!: community_permissions[];
  getCommunity_permissions!: Sequelize.HasManyGetAssociationsMixin<community_permissions>;
  setCommunity_permissions!: Sequelize.HasManySetAssociationsMixin<community_permissions, community_permissionsId>;
  addCommunity_permission!: Sequelize.HasManyAddAssociationMixin<community_permissions, community_permissionsId>;
  addCommunity_permissions!: Sequelize.HasManyAddAssociationsMixin<community_permissions, community_permissionsId>;
  createCommunity_permission!: Sequelize.HasManyCreateAssociationMixin<community_permissions>;
  removeCommunity_permission!: Sequelize.HasManyRemoveAssociationMixin<community_permissions, community_permissionsId>;
  removeCommunity_permissions!: Sequelize.HasManyRemoveAssociationsMixin<community_permissions, community_permissionsId>;
  hasCommunity_permission!: Sequelize.HasManyHasAssociationMixin<community_permissions, community_permissionsId>;
  hasCommunity_permissions!: Sequelize.HasManyHasAssociationsMixin<community_permissions, community_permissionsId>;
  countCommunity_permissions!: Sequelize.HasManyCountAssociationsMixin;
  // communities hasMany community_topics via community_id
  community_topics!: community_topics[];
  getCommunity_topics!: Sequelize.HasManyGetAssociationsMixin<community_topics>;
  setCommunity_topics!: Sequelize.HasManySetAssociationsMixin<community_topics, community_topicsId>;
  addCommunity_topic!: Sequelize.HasManyAddAssociationMixin<community_topics, community_topicsId>;
  addCommunity_topics!: Sequelize.HasManyAddAssociationsMixin<community_topics, community_topicsId>;
  createCommunity_topic!: Sequelize.HasManyCreateAssociationMixin<community_topics>;
  removeCommunity_topic!: Sequelize.HasManyRemoveAssociationMixin<community_topics, community_topicsId>;
  removeCommunity_topics!: Sequelize.HasManyRemoveAssociationsMixin<community_topics, community_topicsId>;
  hasCommunity_topic!: Sequelize.HasManyHasAssociationMixin<community_topics, community_topicsId>;
  hasCommunity_topics!: Sequelize.HasManyHasAssociationsMixin<community_topics, community_topicsId>;
  countCommunity_topics!: Sequelize.HasManyCountAssociationsMixin;
  // communities hasMany leaderboard_levels via community_id
  leaderboard_levels!: leaderboard_levels[];
  getLeaderboard_levels!: Sequelize.HasManyGetAssociationsMixin<leaderboard_levels>;
  setLeaderboard_levels!: Sequelize.HasManySetAssociationsMixin<leaderboard_levels, leaderboard_levelsId>;
  addLeaderboard_level!: Sequelize.HasManyAddAssociationMixin<leaderboard_levels, leaderboard_levelsId>;
  addLeaderboard_levels!: Sequelize.HasManyAddAssociationsMixin<leaderboard_levels, leaderboard_levelsId>;
  createLeaderboard_level!: Sequelize.HasManyCreateAssociationMixin<leaderboard_levels>;
  removeLeaderboard_level!: Sequelize.HasManyRemoveAssociationMixin<leaderboard_levels, leaderboard_levelsId>;
  removeLeaderboard_levels!: Sequelize.HasManyRemoveAssociationsMixin<leaderboard_levels, leaderboard_levelsId>;
  hasLeaderboard_level!: Sequelize.HasManyHasAssociationMixin<leaderboard_levels, leaderboard_levelsId>;
  hasLeaderboard_levels!: Sequelize.HasManyHasAssociationsMixin<leaderboard_levels, leaderboard_levelsId>;
  countLeaderboard_levels!: Sequelize.HasManyCountAssociationsMixin;
  // communities hasMany member_points via community_id
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
  // communities hasMany space_groups via community_id
  space_groups!: space_groups[];
  getSpace_groups!: Sequelize.HasManyGetAssociationsMixin<space_groups>;
  setSpace_groups!: Sequelize.HasManySetAssociationsMixin<space_groups, space_groupsId>;
  addSpace_group!: Sequelize.HasManyAddAssociationMixin<space_groups, space_groupsId>;
  addSpace_groups!: Sequelize.HasManyAddAssociationsMixin<space_groups, space_groupsId>;
  createSpace_group!: Sequelize.HasManyCreateAssociationMixin<space_groups>;
  removeSpace_group!: Sequelize.HasManyRemoveAssociationMixin<space_groups, space_groupsId>;
  removeSpace_groups!: Sequelize.HasManyRemoveAssociationsMixin<space_groups, space_groupsId>;
  hasSpace_group!: Sequelize.HasManyHasAssociationMixin<space_groups, space_groupsId>;
  hasSpace_groups!: Sequelize.HasManyHasAssociationsMixin<space_groups, space_groupsId>;
  countSpace_groups!: Sequelize.HasManyCountAssociationsMixin;
  // communities hasMany space_images via community_id
  space_images!: space_images[];
  getSpace_images!: Sequelize.HasManyGetAssociationsMixin<space_images>;
  setSpace_images!: Sequelize.HasManySetAssociationsMixin<space_images, space_imagesId>;
  addSpace_image!: Sequelize.HasManyAddAssociationMixin<space_images, space_imagesId>;
  addSpace_images!: Sequelize.HasManyAddAssociationsMixin<space_images, space_imagesId>;
  createSpace_image!: Sequelize.HasManyCreateAssociationMixin<space_images>;
  removeSpace_image!: Sequelize.HasManyRemoveAssociationMixin<space_images, space_imagesId>;
  removeSpace_images!: Sequelize.HasManyRemoveAssociationsMixin<space_images, space_imagesId>;
  hasSpace_image!: Sequelize.HasManyHasAssociationMixin<space_images, space_imagesId>;
  hasSpace_images!: Sequelize.HasManyHasAssociationsMixin<space_images, space_imagesId>;
  countSpace_images!: Sequelize.HasManyCountAssociationsMixin;
  // communities hasMany space_posts via community_id
  space_posts!: space_posts[];
  getSpace_posts!: Sequelize.HasManyGetAssociationsMixin<space_posts>;
  setSpace_posts!: Sequelize.HasManySetAssociationsMixin<space_posts, space_postsId>;
  addSpace_post!: Sequelize.HasManyAddAssociationMixin<space_posts, space_postsId>;
  addSpace_posts!: Sequelize.HasManyAddAssociationsMixin<space_posts, space_postsId>;
  createSpace_post!: Sequelize.HasManyCreateAssociationMixin<space_posts>;
  removeSpace_post!: Sequelize.HasManyRemoveAssociationMixin<space_posts, space_postsId>;
  removeSpace_posts!: Sequelize.HasManyRemoveAssociationsMixin<space_posts, space_postsId>;
  hasSpace_post!: Sequelize.HasManyHasAssociationMixin<space_posts, space_postsId>;
  hasSpace_posts!: Sequelize.HasManyHasAssociationsMixin<space_posts, space_postsId>;
  countSpace_posts!: Sequelize.HasManyCountAssociationsMixin;
  // communities hasMany spaces via community_id
  spaces!: spaces[];
  getSpaces!: Sequelize.HasManyGetAssociationsMixin<spaces>;
  setSpaces!: Sequelize.HasManySetAssociationsMixin<spaces, spacesId>;
  addSpace!: Sequelize.HasManyAddAssociationMixin<spaces, spacesId>;
  addSpaces!: Sequelize.HasManyAddAssociationsMixin<spaces, spacesId>;
  createSpace!: Sequelize.HasManyCreateAssociationMixin<spaces>;
  removeSpace!: Sequelize.HasManyRemoveAssociationMixin<spaces, spacesId>;
  removeSpaces!: Sequelize.HasManyRemoveAssociationsMixin<spaces, spacesId>;
  hasSpace!: Sequelize.HasManyHasAssociationMixin<spaces, spacesId>;
  hasSpaces!: Sequelize.HasManyHasAssociationsMixin<spaces, spacesId>;
  countSpaces!: Sequelize.HasManyCountAssociationsMixin;
  // communities belongsTo members via owner_id
  owner!: members;
  getOwner!: Sequelize.BelongsToGetAssociationMixin<members>;
  setOwner!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createOwner!: Sequelize.BelongsToCreateAssociationMixin<members>;

  static initModel(sequelize: Sequelize.Sequelize): typeof communities {
    return communities.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    owner_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      }
    },
    community_slug: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "communities_community_slug_key"
    },
    trial_expires_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
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
    tableName: 'communities',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "communities_community_slug_key",
        unique: true,
        fields: [
          { name: "community_slug" },
        ]
      },
      {
        name: "communities_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
