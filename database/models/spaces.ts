import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { access_group_spaces, access_group_spacesId } from './access_group_spaces';
import type { communities, communitiesId } from './communities';
import type { images_for_space, images_for_spaceCreationAttributes, images_for_spaceId } from './images_for_space';
import type { members, membersId } from './members';
import type { space_access_level, space_access_levelId } from './space_access_level';
import type { space_chat, space_chatId } from './space_chat';
import type { space_courses, space_coursesId } from './space_courses';
import type { space_events, space_eventsId } from './space_events';
import type { space_filter_topics, space_filter_topicsId } from './space_filter_topics';
import type { space_groups, space_groupsId } from './space_groups';
import type { space_images, space_imagesId } from './space_images';
import type { space_links, space_linksId } from './space_links';
import type { space_links_folder, space_links_folderId } from './space_links_folder';
import type { space_members, space_membersId } from './space_members';
import type { space_posts, space_postsId } from './space_posts';
import type { space_settings, space_settingsCreationAttributes, space_settingsId } from './space_settings';
import type { space_type, space_typeId } from './space_type';

export interface spacesAttributes {
  id: number;
  community_id?: number;
  group_id?: number;
  name: string;
  space_type_id?: number;
  access_level_id?: number;
  view_position?: number;
  created_by?: number;
  createdat?: Date;
  updateat?: Date;
}

export type spacesPk = "id";
export type spacesId = spaces[spacesPk];
export type spacesOptionalAttributes = "id" | "community_id" | "group_id" | "space_type_id" | "access_level_id" | "view_position" | "created_by" | "createdat" | "updateat";
export type spacesCreationAttributes = Optional<spacesAttributes, spacesOptionalAttributes>;

export class spaces extends Model<spacesAttributes, spacesCreationAttributes> implements spacesAttributes {
  id!: number;
  community_id?: number;
  group_id?: number;
  name!: string;
  space_type_id?: number;
  access_level_id?: number;
  view_position?: number;
  created_by?: number;
  createdat?: Date;
  updateat?: Date;

  // spaces belongsTo communities via community_id
  community!: communities;
  getCommunity!: Sequelize.BelongsToGetAssociationMixin<communities>;
  setCommunity!: Sequelize.BelongsToSetAssociationMixin<communities, communitiesId>;
  createCommunity!: Sequelize.BelongsToCreateAssociationMixin<communities>;
  // spaces belongsTo members via created_by
  created_by_member!: members;
  getCreated_by_member!: Sequelize.BelongsToGetAssociationMixin<members>;
  setCreated_by_member!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createCreated_by_member!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // spaces belongsTo space_access_level via access_level_id
  access_level!: space_access_level;
  getAccess_level!: Sequelize.BelongsToGetAssociationMixin<space_access_level>;
  setAccess_level!: Sequelize.BelongsToSetAssociationMixin<space_access_level, space_access_levelId>;
  createAccess_level!: Sequelize.BelongsToCreateAssociationMixin<space_access_level>;
  // spaces belongsTo space_groups via group_id
  group!: space_groups;
  getGroup!: Sequelize.BelongsToGetAssociationMixin<space_groups>;
  setGroup!: Sequelize.BelongsToSetAssociationMixin<space_groups, space_groupsId>;
  createGroup!: Sequelize.BelongsToCreateAssociationMixin<space_groups>;
  // spaces belongsTo space_type via space_type_id
  space_type!: space_type;
  getSpace_type!: Sequelize.BelongsToGetAssociationMixin<space_type>;
  setSpace_type!: Sequelize.BelongsToSetAssociationMixin<space_type, space_typeId>;
  createSpace_type!: Sequelize.BelongsToCreateAssociationMixin<space_type>;
  // spaces hasMany access_group_spaces via space_id
  access_group_spaces!: access_group_spaces[];
  getAccess_group_spaces!: Sequelize.HasManyGetAssociationsMixin<access_group_spaces>;
  setAccess_group_spaces!: Sequelize.HasManySetAssociationsMixin<access_group_spaces, access_group_spacesId>;
  addAccess_group_space!: Sequelize.HasManyAddAssociationMixin<access_group_spaces, access_group_spacesId>;
  addAccess_group_spaces!: Sequelize.HasManyAddAssociationsMixin<access_group_spaces, access_group_spacesId>;
  createAccess_group_space!: Sequelize.HasManyCreateAssociationMixin<access_group_spaces>;
  removeAccess_group_space!: Sequelize.HasManyRemoveAssociationMixin<access_group_spaces, access_group_spacesId>;
  removeAccess_group_spaces!: Sequelize.HasManyRemoveAssociationsMixin<access_group_spaces, access_group_spacesId>;
  hasAccess_group_space!: Sequelize.HasManyHasAssociationMixin<access_group_spaces, access_group_spacesId>;
  hasAccess_group_spaces!: Sequelize.HasManyHasAssociationsMixin<access_group_spaces, access_group_spacesId>;
  countAccess_group_spaces!: Sequelize.HasManyCountAssociationsMixin;
  // spaces hasOne images_for_space via space_id
  images_for_space!: images_for_space;
  getImages_for_space!: Sequelize.HasOneGetAssociationMixin<images_for_space>;
  setImages_for_space!: Sequelize.HasOneSetAssociationMixin<images_for_space, images_for_spaceId>;
  createImages_for_space!: Sequelize.HasOneCreateAssociationMixin<images_for_space>;
  // spaces hasMany space_chat via space_id
  space_chats!: space_chat[];
  getSpace_chats!: Sequelize.HasManyGetAssociationsMixin<space_chat>;
  setSpace_chats!: Sequelize.HasManySetAssociationsMixin<space_chat, space_chatId>;
  addSpace_chat!: Sequelize.HasManyAddAssociationMixin<space_chat, space_chatId>;
  addSpace_chats!: Sequelize.HasManyAddAssociationsMixin<space_chat, space_chatId>;
  createSpace_chat!: Sequelize.HasManyCreateAssociationMixin<space_chat>;
  removeSpace_chat!: Sequelize.HasManyRemoveAssociationMixin<space_chat, space_chatId>;
  removeSpace_chats!: Sequelize.HasManyRemoveAssociationsMixin<space_chat, space_chatId>;
  hasSpace_chat!: Sequelize.HasManyHasAssociationMixin<space_chat, space_chatId>;
  hasSpace_chats!: Sequelize.HasManyHasAssociationsMixin<space_chat, space_chatId>;
  countSpace_chats!: Sequelize.HasManyCountAssociationsMixin;
  // spaces hasMany space_courses via space_id
  space_courses!: space_courses[];
  getSpace_courses!: Sequelize.HasManyGetAssociationsMixin<space_courses>;
  setSpace_courses!: Sequelize.HasManySetAssociationsMixin<space_courses, space_coursesId>;
  addSpace_course!: Sequelize.HasManyAddAssociationMixin<space_courses, space_coursesId>;
  addSpace_courses!: Sequelize.HasManyAddAssociationsMixin<space_courses, space_coursesId>;
  createSpace_course!: Sequelize.HasManyCreateAssociationMixin<space_courses>;
  removeSpace_course!: Sequelize.HasManyRemoveAssociationMixin<space_courses, space_coursesId>;
  removeSpace_courses!: Sequelize.HasManyRemoveAssociationsMixin<space_courses, space_coursesId>;
  hasSpace_course!: Sequelize.HasManyHasAssociationMixin<space_courses, space_coursesId>;
  hasSpace_courses!: Sequelize.HasManyHasAssociationsMixin<space_courses, space_coursesId>;
  countSpace_courses!: Sequelize.HasManyCountAssociationsMixin;
  // spaces hasMany space_events via space_id
  space_events!: space_events[];
  getSpace_events!: Sequelize.HasManyGetAssociationsMixin<space_events>;
  setSpace_events!: Sequelize.HasManySetAssociationsMixin<space_events, space_eventsId>;
  addSpace_event!: Sequelize.HasManyAddAssociationMixin<space_events, space_eventsId>;
  addSpace_events!: Sequelize.HasManyAddAssociationsMixin<space_events, space_eventsId>;
  createSpace_event!: Sequelize.HasManyCreateAssociationMixin<space_events>;
  removeSpace_event!: Sequelize.HasManyRemoveAssociationMixin<space_events, space_eventsId>;
  removeSpace_events!: Sequelize.HasManyRemoveAssociationsMixin<space_events, space_eventsId>;
  hasSpace_event!: Sequelize.HasManyHasAssociationMixin<space_events, space_eventsId>;
  hasSpace_events!: Sequelize.HasManyHasAssociationsMixin<space_events, space_eventsId>;
  countSpace_events!: Sequelize.HasManyCountAssociationsMixin;
  // spaces hasMany space_filter_topics via space_id
  space_filter_topics!: space_filter_topics[];
  getSpace_filter_topics!: Sequelize.HasManyGetAssociationsMixin<space_filter_topics>;
  setSpace_filter_topics!: Sequelize.HasManySetAssociationsMixin<space_filter_topics, space_filter_topicsId>;
  addSpace_filter_topic!: Sequelize.HasManyAddAssociationMixin<space_filter_topics, space_filter_topicsId>;
  addSpace_filter_topics!: Sequelize.HasManyAddAssociationsMixin<space_filter_topics, space_filter_topicsId>;
  createSpace_filter_topic!: Sequelize.HasManyCreateAssociationMixin<space_filter_topics>;
  removeSpace_filter_topic!: Sequelize.HasManyRemoveAssociationMixin<space_filter_topics, space_filter_topicsId>;
  removeSpace_filter_topics!: Sequelize.HasManyRemoveAssociationsMixin<space_filter_topics, space_filter_topicsId>;
  hasSpace_filter_topic!: Sequelize.HasManyHasAssociationMixin<space_filter_topics, space_filter_topicsId>;
  hasSpace_filter_topics!: Sequelize.HasManyHasAssociationsMixin<space_filter_topics, space_filter_topicsId>;
  countSpace_filter_topics!: Sequelize.HasManyCountAssociationsMixin;
  // spaces hasMany space_images via space_id
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
  // spaces hasMany space_links via space_id
  space_links!: space_links[];
  getSpace_links!: Sequelize.HasManyGetAssociationsMixin<space_links>;
  setSpace_links!: Sequelize.HasManySetAssociationsMixin<space_links, space_linksId>;
  addSpace_link!: Sequelize.HasManyAddAssociationMixin<space_links, space_linksId>;
  addSpace_links!: Sequelize.HasManyAddAssociationsMixin<space_links, space_linksId>;
  createSpace_link!: Sequelize.HasManyCreateAssociationMixin<space_links>;
  removeSpace_link!: Sequelize.HasManyRemoveAssociationMixin<space_links, space_linksId>;
  removeSpace_links!: Sequelize.HasManyRemoveAssociationsMixin<space_links, space_linksId>;
  hasSpace_link!: Sequelize.HasManyHasAssociationMixin<space_links, space_linksId>;
  hasSpace_links!: Sequelize.HasManyHasAssociationsMixin<space_links, space_linksId>;
  countSpace_links!: Sequelize.HasManyCountAssociationsMixin;
  // spaces hasMany space_links_folder via space_id
  space_links_folders!: space_links_folder[];
  getSpace_links_folders!: Sequelize.HasManyGetAssociationsMixin<space_links_folder>;
  setSpace_links_folders!: Sequelize.HasManySetAssociationsMixin<space_links_folder, space_links_folderId>;
  addSpace_links_folder!: Sequelize.HasManyAddAssociationMixin<space_links_folder, space_links_folderId>;
  addSpace_links_folders!: Sequelize.HasManyAddAssociationsMixin<space_links_folder, space_links_folderId>;
  createSpace_links_folder!: Sequelize.HasManyCreateAssociationMixin<space_links_folder>;
  removeSpace_links_folder!: Sequelize.HasManyRemoveAssociationMixin<space_links_folder, space_links_folderId>;
  removeSpace_links_folders!: Sequelize.HasManyRemoveAssociationsMixin<space_links_folder, space_links_folderId>;
  hasSpace_links_folder!: Sequelize.HasManyHasAssociationMixin<space_links_folder, space_links_folderId>;
  hasSpace_links_folders!: Sequelize.HasManyHasAssociationsMixin<space_links_folder, space_links_folderId>;
  countSpace_links_folders!: Sequelize.HasManyCountAssociationsMixin;
  // spaces hasMany space_members via space_id
  space_members!: space_members[];
  getSpace_members!: Sequelize.HasManyGetAssociationsMixin<space_members>;
  setSpace_members!: Sequelize.HasManySetAssociationsMixin<space_members, space_membersId>;
  addSpace_member!: Sequelize.HasManyAddAssociationMixin<space_members, space_membersId>;
  addSpace_members!: Sequelize.HasManyAddAssociationsMixin<space_members, space_membersId>;
  createSpace_member!: Sequelize.HasManyCreateAssociationMixin<space_members>;
  removeSpace_member!: Sequelize.HasManyRemoveAssociationMixin<space_members, space_membersId>;
  removeSpace_members!: Sequelize.HasManyRemoveAssociationsMixin<space_members, space_membersId>;
  hasSpace_member!: Sequelize.HasManyHasAssociationMixin<space_members, space_membersId>;
  hasSpace_members!: Sequelize.HasManyHasAssociationsMixin<space_members, space_membersId>;
  countSpace_members!: Sequelize.HasManyCountAssociationsMixin;
  // spaces hasMany space_posts via space_id
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
  // spaces hasOne space_settings via space_id
  space_setting!: space_settings;
  getSpace_setting!: Sequelize.HasOneGetAssociationMixin<space_settings>;
  setSpace_setting!: Sequelize.HasOneSetAssociationMixin<space_settings, space_settingsId>;
  createSpace_setting!: Sequelize.HasOneCreateAssociationMixin<space_settings>;

  static initModel(sequelize: Sequelize.Sequelize): typeof spaces {
    return spaces.init({
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
      }
    },
    group_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'space_groups',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    space_type_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'space_type',
        key: 'id'
      }
    },
    access_level_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'space_access_level',
        key: 'id'
      }
    },
    view_position: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
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
    tableName: 'spaces',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "spaces_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
