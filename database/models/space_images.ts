import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { communities, communitiesId } from './communities';
import type { community_topics, community_topicsId } from './community_topics';
import type { image_post_likes, image_post_likesId } from './image_post_likes';
import type { members, membersId } from './members';
import type { space_image_bookmarks, space_image_bookmarksId } from './space_image_bookmarks';
import type { space_image_comments, space_image_commentsId } from './space_image_comments';
import type { space_image_followers, space_image_followersId } from './space_image_followers';
import type { space_image_topics, space_image_topicsId } from './space_image_topics';
import type { spaces, spacesId } from './spaces';

export interface space_imagesAttributes {
  id: number;
  member_id?: number;
  community_id?: number;
  space_id: number;
  image_url: object;
  caption?: string;
  custom_url_slug?: string;
  likes_count?: number;
  comments_count?: number;
  is_pinned?: boolean;
  hide_likes?: boolean;
  hide_comments?: boolean;
  close_comments?: boolean;
  hide_from_featured?: boolean;
  is_truncation_disabled?: boolean;
  hide_meta_info?: boolean;
  createdat?: Date;
  updateat?: Date;
}

export type space_imagesPk = "id";
export type space_imagesId = space_images[space_imagesPk];
export type space_imagesOptionalAttributes = "id" | "member_id" | "community_id" | "caption" | "custom_url_slug" | "likes_count" | "comments_count" | "is_pinned" | "hide_likes" | "hide_comments" | "close_comments" | "hide_from_featured" | "is_truncation_disabled" | "hide_meta_info" | "createdat" | "updateat";
export type space_imagesCreationAttributes = Optional<space_imagesAttributes, space_imagesOptionalAttributes>;

export class space_images extends Model<space_imagesAttributes, space_imagesCreationAttributes> implements space_imagesAttributes {
  id!: number;
  member_id?: number;
  community_id?: number;
  space_id!: number;
  image_url!: object;
  caption?: string;
  custom_url_slug?: string;
  likes_count?: number;
  comments_count?: number;
  is_pinned?: boolean;
  hide_likes?: boolean;
  hide_comments?: boolean;
  close_comments?: boolean;
  hide_from_featured?: boolean;
  is_truncation_disabled?: boolean;
  hide_meta_info?: boolean;
  createdat?: Date;
  updateat?: Date;

  // space_images belongsTo communities via community_id
  community!: communities;
  getCommunity!: Sequelize.BelongsToGetAssociationMixin<communities>;
  setCommunity!: Sequelize.BelongsToSetAssociationMixin<communities, communitiesId>;
  createCommunity!: Sequelize.BelongsToCreateAssociationMixin<communities>;
  // space_images belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // space_images belongsToMany community_topics via space_image_id and community_topics_id
  community_topics_id_community_topics_space_image_topics!: community_topics[];
  getCommunity_topics_id_community_topics_space_image_topics!: Sequelize.BelongsToManyGetAssociationsMixin<community_topics>;
  setCommunity_topics_id_community_topics_space_image_topics!: Sequelize.BelongsToManySetAssociationsMixin<community_topics, community_topicsId>;
  addCommunity_topics_id_community_topics_space_image_topic!: Sequelize.BelongsToManyAddAssociationMixin<community_topics, community_topicsId>;
  addCommunity_topics_id_community_topics_space_image_topics!: Sequelize.BelongsToManyAddAssociationsMixin<community_topics, community_topicsId>;
  createCommunity_topics_id_community_topics_space_image_topic!: Sequelize.BelongsToManyCreateAssociationMixin<community_topics>;
  removeCommunity_topics_id_community_topics_space_image_topic!: Sequelize.BelongsToManyRemoveAssociationMixin<community_topics, community_topicsId>;
  removeCommunity_topics_id_community_topics_space_image_topics!: Sequelize.BelongsToManyRemoveAssociationsMixin<community_topics, community_topicsId>;
  hasCommunity_topics_id_community_topics_space_image_topic!: Sequelize.BelongsToManyHasAssociationMixin<community_topics, community_topicsId>;
  hasCommunity_topics_id_community_topics_space_image_topics!: Sequelize.BelongsToManyHasAssociationsMixin<community_topics, community_topicsId>;
  countCommunity_topics_id_community_topics_space_image_topics!: Sequelize.BelongsToManyCountAssociationsMixin;
  // space_images hasMany image_post_likes via space_image_id
  image_post_likes!: image_post_likes[];
  getImage_post_likes!: Sequelize.HasManyGetAssociationsMixin<image_post_likes>;
  setImage_post_likes!: Sequelize.HasManySetAssociationsMixin<image_post_likes, image_post_likesId>;
  addImage_post_like!: Sequelize.HasManyAddAssociationMixin<image_post_likes, image_post_likesId>;
  addImage_post_likes!: Sequelize.HasManyAddAssociationsMixin<image_post_likes, image_post_likesId>;
  createImage_post_like!: Sequelize.HasManyCreateAssociationMixin<image_post_likes>;
  removeImage_post_like!: Sequelize.HasManyRemoveAssociationMixin<image_post_likes, image_post_likesId>;
  removeImage_post_likes!: Sequelize.HasManyRemoveAssociationsMixin<image_post_likes, image_post_likesId>;
  hasImage_post_like!: Sequelize.HasManyHasAssociationMixin<image_post_likes, image_post_likesId>;
  hasImage_post_likes!: Sequelize.HasManyHasAssociationsMixin<image_post_likes, image_post_likesId>;
  countImage_post_likes!: Sequelize.HasManyCountAssociationsMixin;
  // space_images hasMany space_image_bookmarks via space_image_id
  space_image_bookmarks!: space_image_bookmarks[];
  getSpace_image_bookmarks!: Sequelize.HasManyGetAssociationsMixin<space_image_bookmarks>;
  setSpace_image_bookmarks!: Sequelize.HasManySetAssociationsMixin<space_image_bookmarks, space_image_bookmarksId>;
  addSpace_image_bookmark!: Sequelize.HasManyAddAssociationMixin<space_image_bookmarks, space_image_bookmarksId>;
  addSpace_image_bookmarks!: Sequelize.HasManyAddAssociationsMixin<space_image_bookmarks, space_image_bookmarksId>;
  createSpace_image_bookmark!: Sequelize.HasManyCreateAssociationMixin<space_image_bookmarks>;
  removeSpace_image_bookmark!: Sequelize.HasManyRemoveAssociationMixin<space_image_bookmarks, space_image_bookmarksId>;
  removeSpace_image_bookmarks!: Sequelize.HasManyRemoveAssociationsMixin<space_image_bookmarks, space_image_bookmarksId>;
  hasSpace_image_bookmark!: Sequelize.HasManyHasAssociationMixin<space_image_bookmarks, space_image_bookmarksId>;
  hasSpace_image_bookmarks!: Sequelize.HasManyHasAssociationsMixin<space_image_bookmarks, space_image_bookmarksId>;
  countSpace_image_bookmarks!: Sequelize.HasManyCountAssociationsMixin;
  // space_images hasMany space_image_comments via space_image_id
  space_image_comments!: space_image_comments[];
  getSpace_image_comments!: Sequelize.HasManyGetAssociationsMixin<space_image_comments>;
  setSpace_image_comments!: Sequelize.HasManySetAssociationsMixin<space_image_comments, space_image_commentsId>;
  addSpace_image_comment!: Sequelize.HasManyAddAssociationMixin<space_image_comments, space_image_commentsId>;
  addSpace_image_comments!: Sequelize.HasManyAddAssociationsMixin<space_image_comments, space_image_commentsId>;
  createSpace_image_comment!: Sequelize.HasManyCreateAssociationMixin<space_image_comments>;
  removeSpace_image_comment!: Sequelize.HasManyRemoveAssociationMixin<space_image_comments, space_image_commentsId>;
  removeSpace_image_comments!: Sequelize.HasManyRemoveAssociationsMixin<space_image_comments, space_image_commentsId>;
  hasSpace_image_comment!: Sequelize.HasManyHasAssociationMixin<space_image_comments, space_image_commentsId>;
  hasSpace_image_comments!: Sequelize.HasManyHasAssociationsMixin<space_image_comments, space_image_commentsId>;
  countSpace_image_comments!: Sequelize.HasManyCountAssociationsMixin;
  // space_images hasMany space_image_followers via space_image_id
  space_image_followers!: space_image_followers[];
  getSpace_image_followers!: Sequelize.HasManyGetAssociationsMixin<space_image_followers>;
  setSpace_image_followers!: Sequelize.HasManySetAssociationsMixin<space_image_followers, space_image_followersId>;
  addSpace_image_follower!: Sequelize.HasManyAddAssociationMixin<space_image_followers, space_image_followersId>;
  addSpace_image_followers!: Sequelize.HasManyAddAssociationsMixin<space_image_followers, space_image_followersId>;
  createSpace_image_follower!: Sequelize.HasManyCreateAssociationMixin<space_image_followers>;
  removeSpace_image_follower!: Sequelize.HasManyRemoveAssociationMixin<space_image_followers, space_image_followersId>;
  removeSpace_image_followers!: Sequelize.HasManyRemoveAssociationsMixin<space_image_followers, space_image_followersId>;
  hasSpace_image_follower!: Sequelize.HasManyHasAssociationMixin<space_image_followers, space_image_followersId>;
  hasSpace_image_followers!: Sequelize.HasManyHasAssociationsMixin<space_image_followers, space_image_followersId>;
  countSpace_image_followers!: Sequelize.HasManyCountAssociationsMixin;
  // space_images hasMany space_image_topics via space_image_id
  space_image_topics!: space_image_topics[];
  getSpace_image_topics!: Sequelize.HasManyGetAssociationsMixin<space_image_topics>;
  setSpace_image_topics!: Sequelize.HasManySetAssociationsMixin<space_image_topics, space_image_topicsId>;
  addSpace_image_topic!: Sequelize.HasManyAddAssociationMixin<space_image_topics, space_image_topicsId>;
  addSpace_image_topics!: Sequelize.HasManyAddAssociationsMixin<space_image_topics, space_image_topicsId>;
  createSpace_image_topic!: Sequelize.HasManyCreateAssociationMixin<space_image_topics>;
  removeSpace_image_topic!: Sequelize.HasManyRemoveAssociationMixin<space_image_topics, space_image_topicsId>;
  removeSpace_image_topics!: Sequelize.HasManyRemoveAssociationsMixin<space_image_topics, space_image_topicsId>;
  hasSpace_image_topic!: Sequelize.HasManyHasAssociationMixin<space_image_topics, space_image_topicsId>;
  hasSpace_image_topics!: Sequelize.HasManyHasAssociationsMixin<space_image_topics, space_image_topicsId>;
  countSpace_image_topics!: Sequelize.HasManyCountAssociationsMixin;
  // space_images belongsTo spaces via space_id
  space!: spaces;
  getSpace!: Sequelize.BelongsToGetAssociationMixin<spaces>;
  setSpace!: Sequelize.BelongsToSetAssociationMixin<spaces, spacesId>;
  createSpace!: Sequelize.BelongsToCreateAssociationMixin<spaces>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_images {
    return space_images.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      }
    },
    community_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'communities',
        key: 'id'
      }
    },
    space_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'spaces',
        key: 'id'
      }
    },
    image_url: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    caption: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    custom_url_slug: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    likes_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    comments_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_pinned: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    hide_likes: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    hide_comments: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    close_comments: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    hide_from_featured: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    is_truncation_disabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    hide_meta_info: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
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
    tableName: 'space_images',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_images_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
