import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { communities, communitiesId } from './communities';
import type { community_topics, community_topicsId } from './community_topics';
import type { members, membersId } from './members';
import type { space_post_bookmarks, space_post_bookmarksId } from './space_post_bookmarks';
import type { space_post_comments, space_post_commentsId } from './space_post_comments';
import type { space_post_followers, space_post_followersId } from './space_post_followers';
import type { space_post_likes, space_post_likesId } from './space_post_likes';
import type { space_posts_topics, space_posts_topicsId } from './space_posts_topics';
import type { spaces, spacesId } from './spaces';

export interface space_postsAttributes {
  id: number;
  member_id?: number;
  community_id?: number;
  space_id: number;
  title?: string;
  content: string;
  likes_count?: number;
  comments_count?: number;
  is_pinned?: boolean;
  hide_likes?: boolean;
  hide_comments?: boolean;
  close_comments?: boolean;
  hide_from_featured?: boolean;
  createdat?: Date;
  updateat?: Date;
}

export type space_postsPk = "id";
export type space_postsId = space_posts[space_postsPk];
export type space_postsOptionalAttributes = "id" | "member_id" | "community_id" | "title" | "likes_count" | "comments_count" | "is_pinned" | "hide_likes" | "hide_comments" | "close_comments" | "hide_from_featured" | "createdat" | "updateat";
export type space_postsCreationAttributes = Optional<space_postsAttributes, space_postsOptionalAttributes>;

export class space_posts extends Model<space_postsAttributes, space_postsCreationAttributes> implements space_postsAttributes {
  id!: number;
  member_id?: number;
  community_id?: number;
  space_id!: number;
  title?: string;
  content!: string;
  likes_count?: number;
  comments_count?: number;
  is_pinned?: boolean;
  hide_likes?: boolean;
  hide_comments?: boolean;
  close_comments?: boolean;
  hide_from_featured?: boolean;
  createdat?: Date;
  updateat?: Date;

  // space_posts belongsTo communities via community_id
  community!: communities;
  getCommunity!: Sequelize.BelongsToGetAssociationMixin<communities>;
  setCommunity!: Sequelize.BelongsToSetAssociationMixin<communities, communitiesId>;
  createCommunity!: Sequelize.BelongsToCreateAssociationMixin<communities>;
  // space_posts belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // space_posts belongsToMany community_topics via space_post_id and community_topics_id
  community_topics_id_community_topics_space_posts_topics!: community_topics[];
  getCommunity_topics_id_community_topics_space_posts_topics!: Sequelize.BelongsToManyGetAssociationsMixin<community_topics>;
  setCommunity_topics_id_community_topics_space_posts_topics!: Sequelize.BelongsToManySetAssociationsMixin<community_topics, community_topicsId>;
  addCommunity_topics_id_community_topics_space_posts_topic!: Sequelize.BelongsToManyAddAssociationMixin<community_topics, community_topicsId>;
  addCommunity_topics_id_community_topics_space_posts_topics!: Sequelize.BelongsToManyAddAssociationsMixin<community_topics, community_topicsId>;
  createCommunity_topics_id_community_topics_space_posts_topic!: Sequelize.BelongsToManyCreateAssociationMixin<community_topics>;
  removeCommunity_topics_id_community_topics_space_posts_topic!: Sequelize.BelongsToManyRemoveAssociationMixin<community_topics, community_topicsId>;
  removeCommunity_topics_id_community_topics_space_posts_topics!: Sequelize.BelongsToManyRemoveAssociationsMixin<community_topics, community_topicsId>;
  hasCommunity_topics_id_community_topics_space_posts_topic!: Sequelize.BelongsToManyHasAssociationMixin<community_topics, community_topicsId>;
  hasCommunity_topics_id_community_topics_space_posts_topics!: Sequelize.BelongsToManyHasAssociationsMixin<community_topics, community_topicsId>;
  countCommunity_topics_id_community_topics_space_posts_topics!: Sequelize.BelongsToManyCountAssociationsMixin;
  // space_posts hasMany space_post_bookmarks via space_post_id
  space_post_bookmarks!: space_post_bookmarks[];
  getSpace_post_bookmarks!: Sequelize.HasManyGetAssociationsMixin<space_post_bookmarks>;
  setSpace_post_bookmarks!: Sequelize.HasManySetAssociationsMixin<space_post_bookmarks, space_post_bookmarksId>;
  addSpace_post_bookmark!: Sequelize.HasManyAddAssociationMixin<space_post_bookmarks, space_post_bookmarksId>;
  addSpace_post_bookmarks!: Sequelize.HasManyAddAssociationsMixin<space_post_bookmarks, space_post_bookmarksId>;
  createSpace_post_bookmark!: Sequelize.HasManyCreateAssociationMixin<space_post_bookmarks>;
  removeSpace_post_bookmark!: Sequelize.HasManyRemoveAssociationMixin<space_post_bookmarks, space_post_bookmarksId>;
  removeSpace_post_bookmarks!: Sequelize.HasManyRemoveAssociationsMixin<space_post_bookmarks, space_post_bookmarksId>;
  hasSpace_post_bookmark!: Sequelize.HasManyHasAssociationMixin<space_post_bookmarks, space_post_bookmarksId>;
  hasSpace_post_bookmarks!: Sequelize.HasManyHasAssociationsMixin<space_post_bookmarks, space_post_bookmarksId>;
  countSpace_post_bookmarks!: Sequelize.HasManyCountAssociationsMixin;
  // space_posts hasMany space_post_comments via space_post_id
  space_post_comments!: space_post_comments[];
  getSpace_post_comments!: Sequelize.HasManyGetAssociationsMixin<space_post_comments>;
  setSpace_post_comments!: Sequelize.HasManySetAssociationsMixin<space_post_comments, space_post_commentsId>;
  addSpace_post_comment!: Sequelize.HasManyAddAssociationMixin<space_post_comments, space_post_commentsId>;
  addSpace_post_comments!: Sequelize.HasManyAddAssociationsMixin<space_post_comments, space_post_commentsId>;
  createSpace_post_comment!: Sequelize.HasManyCreateAssociationMixin<space_post_comments>;
  removeSpace_post_comment!: Sequelize.HasManyRemoveAssociationMixin<space_post_comments, space_post_commentsId>;
  removeSpace_post_comments!: Sequelize.HasManyRemoveAssociationsMixin<space_post_comments, space_post_commentsId>;
  hasSpace_post_comment!: Sequelize.HasManyHasAssociationMixin<space_post_comments, space_post_commentsId>;
  hasSpace_post_comments!: Sequelize.HasManyHasAssociationsMixin<space_post_comments, space_post_commentsId>;
  countSpace_post_comments!: Sequelize.HasManyCountAssociationsMixin;
  // space_posts hasMany space_post_followers via space_post_id
  space_post_followers!: space_post_followers[];
  getSpace_post_followers!: Sequelize.HasManyGetAssociationsMixin<space_post_followers>;
  setSpace_post_followers!: Sequelize.HasManySetAssociationsMixin<space_post_followers, space_post_followersId>;
  addSpace_post_follower!: Sequelize.HasManyAddAssociationMixin<space_post_followers, space_post_followersId>;
  addSpace_post_followers!: Sequelize.HasManyAddAssociationsMixin<space_post_followers, space_post_followersId>;
  createSpace_post_follower!: Sequelize.HasManyCreateAssociationMixin<space_post_followers>;
  removeSpace_post_follower!: Sequelize.HasManyRemoveAssociationMixin<space_post_followers, space_post_followersId>;
  removeSpace_post_followers!: Sequelize.HasManyRemoveAssociationsMixin<space_post_followers, space_post_followersId>;
  hasSpace_post_follower!: Sequelize.HasManyHasAssociationMixin<space_post_followers, space_post_followersId>;
  hasSpace_post_followers!: Sequelize.HasManyHasAssociationsMixin<space_post_followers, space_post_followersId>;
  countSpace_post_followers!: Sequelize.HasManyCountAssociationsMixin;
  // space_posts hasMany space_post_likes via space_post_id
  space_post_likes!: space_post_likes[];
  getSpace_post_likes!: Sequelize.HasManyGetAssociationsMixin<space_post_likes>;
  setSpace_post_likes!: Sequelize.HasManySetAssociationsMixin<space_post_likes, space_post_likesId>;
  addSpace_post_like!: Sequelize.HasManyAddAssociationMixin<space_post_likes, space_post_likesId>;
  addSpace_post_likes!: Sequelize.HasManyAddAssociationsMixin<space_post_likes, space_post_likesId>;
  createSpace_post_like!: Sequelize.HasManyCreateAssociationMixin<space_post_likes>;
  removeSpace_post_like!: Sequelize.HasManyRemoveAssociationMixin<space_post_likes, space_post_likesId>;
  removeSpace_post_likes!: Sequelize.HasManyRemoveAssociationsMixin<space_post_likes, space_post_likesId>;
  hasSpace_post_like!: Sequelize.HasManyHasAssociationMixin<space_post_likes, space_post_likesId>;
  hasSpace_post_likes!: Sequelize.HasManyHasAssociationsMixin<space_post_likes, space_post_likesId>;
  countSpace_post_likes!: Sequelize.HasManyCountAssociationsMixin;
  // space_posts hasMany space_posts_topics via space_post_id
  space_posts_topics!: space_posts_topics[];
  getSpace_posts_topics!: Sequelize.HasManyGetAssociationsMixin<space_posts_topics>;
  setSpace_posts_topics!: Sequelize.HasManySetAssociationsMixin<space_posts_topics, space_posts_topicsId>;
  addSpace_posts_topic!: Sequelize.HasManyAddAssociationMixin<space_posts_topics, space_posts_topicsId>;
  addSpace_posts_topics!: Sequelize.HasManyAddAssociationsMixin<space_posts_topics, space_posts_topicsId>;
  createSpace_posts_topic!: Sequelize.HasManyCreateAssociationMixin<space_posts_topics>;
  removeSpace_posts_topic!: Sequelize.HasManyRemoveAssociationMixin<space_posts_topics, space_posts_topicsId>;
  removeSpace_posts_topics!: Sequelize.HasManyRemoveAssociationsMixin<space_posts_topics, space_posts_topicsId>;
  hasSpace_posts_topic!: Sequelize.HasManyHasAssociationMixin<space_posts_topics, space_posts_topicsId>;
  hasSpace_posts_topics!: Sequelize.HasManyHasAssociationsMixin<space_posts_topics, space_posts_topicsId>;
  countSpace_posts_topics!: Sequelize.HasManyCountAssociationsMixin;
  // space_posts belongsTo spaces via space_id
  space!: spaces;
  getSpace!: Sequelize.BelongsToGetAssociationMixin<spaces>;
  setSpace!: Sequelize.BelongsToSetAssociationMixin<spaces, spacesId>;
  createSpace!: Sequelize.BelongsToCreateAssociationMixin<spaces>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_posts {
    return space_posts.init({
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
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
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
    tableName: 'space_posts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_posts_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
