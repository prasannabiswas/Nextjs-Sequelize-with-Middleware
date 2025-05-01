import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { communities, communitiesId } from './communities';
import type { members, membersId } from './members';
import type { space_course_topics, space_course_topicsId } from './space_course_topics';
import type { space_courses, space_coursesId } from './space_courses';
import type { space_event_topics, space_event_topicsId } from './space_event_topics';
import type { space_events, space_eventsId } from './space_events';
import type { space_filter_topics, space_filter_topicsId } from './space_filter_topics';
import type { space_image_topics, space_image_topicsId } from './space_image_topics';
import type { space_images, space_imagesId } from './space_images';
import type { space_posts, space_postsId } from './space_posts';
import type { space_posts_topics, space_posts_topicsId } from './space_posts_topics';

export interface community_topicsAttributes {
  id: number;
  community_id?: number;
  name: string;
  position?: number;
  is_active?: boolean;
  created_by?: number;
  admin_only?: boolean;
  created_at?: Date;
  updatedat?: Date;
}

export type community_topicsPk = "id";
export type community_topicsId = community_topics[community_topicsPk];
export type community_topicsOptionalAttributes = "id" | "community_id" | "position" | "is_active" | "created_by" | "admin_only" | "created_at" | "updatedat";
export type community_topicsCreationAttributes = Optional<community_topicsAttributes, community_topicsOptionalAttributes>;

export class community_topics extends Model<community_topicsAttributes, community_topicsCreationAttributes> implements community_topicsAttributes {
  id!: number;
  community_id?: number;
  name!: string;
  position?: number;
  is_active?: boolean;
  created_by?: number;
  admin_only?: boolean;
  created_at?: Date;
  updatedat?: Date;

  // community_topics belongsTo communities via community_id
  community!: communities;
  getCommunity!: Sequelize.BelongsToGetAssociationMixin<communities>;
  setCommunity!: Sequelize.BelongsToSetAssociationMixin<communities, communitiesId>;
  createCommunity!: Sequelize.BelongsToCreateAssociationMixin<communities>;
  // community_topics hasMany space_course_topics via community_topics_id
  space_course_topics!: space_course_topics[];
  getSpace_course_topics!: Sequelize.HasManyGetAssociationsMixin<space_course_topics>;
  setSpace_course_topics!: Sequelize.HasManySetAssociationsMixin<space_course_topics, space_course_topicsId>;
  addSpace_course_topic!: Sequelize.HasManyAddAssociationMixin<space_course_topics, space_course_topicsId>;
  addSpace_course_topics!: Sequelize.HasManyAddAssociationsMixin<space_course_topics, space_course_topicsId>;
  createSpace_course_topic!: Sequelize.HasManyCreateAssociationMixin<space_course_topics>;
  removeSpace_course_topic!: Sequelize.HasManyRemoveAssociationMixin<space_course_topics, space_course_topicsId>;
  removeSpace_course_topics!: Sequelize.HasManyRemoveAssociationsMixin<space_course_topics, space_course_topicsId>;
  hasSpace_course_topic!: Sequelize.HasManyHasAssociationMixin<space_course_topics, space_course_topicsId>;
  hasSpace_course_topics!: Sequelize.HasManyHasAssociationsMixin<space_course_topics, space_course_topicsId>;
  countSpace_course_topics!: Sequelize.HasManyCountAssociationsMixin;
  // community_topics belongsToMany space_courses via community_topics_id and space_cource_id
  space_cource_id_space_courses!: space_courses[];
  getSpace_cource_id_space_courses!: Sequelize.BelongsToManyGetAssociationsMixin<space_courses>;
  setSpace_cource_id_space_courses!: Sequelize.BelongsToManySetAssociationsMixin<space_courses, space_coursesId>;
  addSpace_cource_id_space_course!: Sequelize.BelongsToManyAddAssociationMixin<space_courses, space_coursesId>;
  addSpace_cource_id_space_courses!: Sequelize.BelongsToManyAddAssociationsMixin<space_courses, space_coursesId>;
  createSpace_cource_id_space_course!: Sequelize.BelongsToManyCreateAssociationMixin<space_courses>;
  removeSpace_cource_id_space_course!: Sequelize.BelongsToManyRemoveAssociationMixin<space_courses, space_coursesId>;
  removeSpace_cource_id_space_courses!: Sequelize.BelongsToManyRemoveAssociationsMixin<space_courses, space_coursesId>;
  hasSpace_cource_id_space_course!: Sequelize.BelongsToManyHasAssociationMixin<space_courses, space_coursesId>;
  hasSpace_cource_id_space_courses!: Sequelize.BelongsToManyHasAssociationsMixin<space_courses, space_coursesId>;
  countSpace_cource_id_space_courses!: Sequelize.BelongsToManyCountAssociationsMixin;
  // community_topics hasMany space_event_topics via community_topics_id
  space_event_topics!: space_event_topics[];
  getSpace_event_topics!: Sequelize.HasManyGetAssociationsMixin<space_event_topics>;
  setSpace_event_topics!: Sequelize.HasManySetAssociationsMixin<space_event_topics, space_event_topicsId>;
  addSpace_event_topic!: Sequelize.HasManyAddAssociationMixin<space_event_topics, space_event_topicsId>;
  addSpace_event_topics!: Sequelize.HasManyAddAssociationsMixin<space_event_topics, space_event_topicsId>;
  createSpace_event_topic!: Sequelize.HasManyCreateAssociationMixin<space_event_topics>;
  removeSpace_event_topic!: Sequelize.HasManyRemoveAssociationMixin<space_event_topics, space_event_topicsId>;
  removeSpace_event_topics!: Sequelize.HasManyRemoveAssociationsMixin<space_event_topics, space_event_topicsId>;
  hasSpace_event_topic!: Sequelize.HasManyHasAssociationMixin<space_event_topics, space_event_topicsId>;
  hasSpace_event_topics!: Sequelize.HasManyHasAssociationsMixin<space_event_topics, space_event_topicsId>;
  countSpace_event_topics!: Sequelize.HasManyCountAssociationsMixin;
  // community_topics belongsToMany space_events via community_topics_id and space_event_id
  space_event_id_space_events!: space_events[];
  getSpace_event_id_space_events!: Sequelize.BelongsToManyGetAssociationsMixin<space_events>;
  setSpace_event_id_space_events!: Sequelize.BelongsToManySetAssociationsMixin<space_events, space_eventsId>;
  addSpace_event_id_space_event!: Sequelize.BelongsToManyAddAssociationMixin<space_events, space_eventsId>;
  addSpace_event_id_space_events!: Sequelize.BelongsToManyAddAssociationsMixin<space_events, space_eventsId>;
  createSpace_event_id_space_event!: Sequelize.BelongsToManyCreateAssociationMixin<space_events>;
  removeSpace_event_id_space_event!: Sequelize.BelongsToManyRemoveAssociationMixin<space_events, space_eventsId>;
  removeSpace_event_id_space_events!: Sequelize.BelongsToManyRemoveAssociationsMixin<space_events, space_eventsId>;
  hasSpace_event_id_space_event!: Sequelize.BelongsToManyHasAssociationMixin<space_events, space_eventsId>;
  hasSpace_event_id_space_events!: Sequelize.BelongsToManyHasAssociationsMixin<space_events, space_eventsId>;
  countSpace_event_id_space_events!: Sequelize.BelongsToManyCountAssociationsMixin;
  // community_topics hasMany space_filter_topics via topic_id
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
  // community_topics hasMany space_image_topics via community_topics_id
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
  // community_topics belongsToMany space_images via community_topics_id and space_image_id
  space_image_id_space_images!: space_images[];
  getSpace_image_id_space_images!: Sequelize.BelongsToManyGetAssociationsMixin<space_images>;
  setSpace_image_id_space_images!: Sequelize.BelongsToManySetAssociationsMixin<space_images, space_imagesId>;
  addSpace_image_id_space_image!: Sequelize.BelongsToManyAddAssociationMixin<space_images, space_imagesId>;
  addSpace_image_id_space_images!: Sequelize.BelongsToManyAddAssociationsMixin<space_images, space_imagesId>;
  createSpace_image_id_space_image!: Sequelize.BelongsToManyCreateAssociationMixin<space_images>;
  removeSpace_image_id_space_image!: Sequelize.BelongsToManyRemoveAssociationMixin<space_images, space_imagesId>;
  removeSpace_image_id_space_images!: Sequelize.BelongsToManyRemoveAssociationsMixin<space_images, space_imagesId>;
  hasSpace_image_id_space_image!: Sequelize.BelongsToManyHasAssociationMixin<space_images, space_imagesId>;
  hasSpace_image_id_space_images!: Sequelize.BelongsToManyHasAssociationsMixin<space_images, space_imagesId>;
  countSpace_image_id_space_images!: Sequelize.BelongsToManyCountAssociationsMixin;
  // community_topics belongsToMany space_posts via community_topics_id and space_post_id
  space_post_id_space_posts!: space_posts[];
  getSpace_post_id_space_posts!: Sequelize.BelongsToManyGetAssociationsMixin<space_posts>;
  setSpace_post_id_space_posts!: Sequelize.BelongsToManySetAssociationsMixin<space_posts, space_postsId>;
  addSpace_post_id_space_post!: Sequelize.BelongsToManyAddAssociationMixin<space_posts, space_postsId>;
  addSpace_post_id_space_posts!: Sequelize.BelongsToManyAddAssociationsMixin<space_posts, space_postsId>;
  createSpace_post_id_space_post!: Sequelize.BelongsToManyCreateAssociationMixin<space_posts>;
  removeSpace_post_id_space_post!: Sequelize.BelongsToManyRemoveAssociationMixin<space_posts, space_postsId>;
  removeSpace_post_id_space_posts!: Sequelize.BelongsToManyRemoveAssociationsMixin<space_posts, space_postsId>;
  hasSpace_post_id_space_post!: Sequelize.BelongsToManyHasAssociationMixin<space_posts, space_postsId>;
  hasSpace_post_id_space_posts!: Sequelize.BelongsToManyHasAssociationsMixin<space_posts, space_postsId>;
  countSpace_post_id_space_posts!: Sequelize.BelongsToManyCountAssociationsMixin;
  // community_topics hasMany space_posts_topics via community_topics_id
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
  // community_topics belongsTo members via created_by
  created_by_member!: members;
  getCreated_by_member!: Sequelize.BelongsToGetAssociationMixin<members>;
  setCreated_by_member!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createCreated_by_member!: Sequelize.BelongsToCreateAssociationMixin<members>;

  static initModel(sequelize: Sequelize.Sequelize): typeof community_topics {
    return community_topics.init({
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
      },
      unique: "community_topics_community_id_name_key"
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "community_topics_community_id_name_key"
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      }
    },
    admin_only: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'community_topics',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "community_topics_community_id_name_key",
        unique: true,
        fields: [
          { name: "community_id" },
          { name: "name" },
        ]
      },
      {
        name: "community_topics_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
