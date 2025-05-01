import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { community_topics, community_topicsId } from './community_topics';
import type { space_courses, space_coursesId } from './space_courses';

export interface space_course_topicsAttributes {
  community_topics_id: number;
  space_cource_id: number;
}

export type space_course_topicsPk = "community_topics_id" | "space_cource_id";
export type space_course_topicsId = space_course_topics[space_course_topicsPk];
export type space_course_topicsCreationAttributes = space_course_topicsAttributes;

export class space_course_topics extends Model<space_course_topicsAttributes, space_course_topicsCreationAttributes> implements space_course_topicsAttributes {
  community_topics_id!: number;
  space_cource_id!: number;

  // space_course_topics belongsTo community_topics via community_topics_id
  community_topic!: community_topics;
  getCommunity_topic!: Sequelize.BelongsToGetAssociationMixin<community_topics>;
  setCommunity_topic!: Sequelize.BelongsToSetAssociationMixin<community_topics, community_topicsId>;
  createCommunity_topic!: Sequelize.BelongsToCreateAssociationMixin<community_topics>;
  // space_course_topics belongsTo space_courses via space_cource_id
  space_cource!: space_courses;
  getSpace_cource!: Sequelize.BelongsToGetAssociationMixin<space_courses>;
  setSpace_cource!: Sequelize.BelongsToSetAssociationMixin<space_courses, space_coursesId>;
  createSpace_cource!: Sequelize.BelongsToCreateAssociationMixin<space_courses>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_course_topics {
    return space_course_topics.init({
    community_topics_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'community_topics',
        key: 'id'
      }
    },
    space_cource_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'space_courses',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'space_course_topics',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_course_topics_pkey",
        unique: true,
        fields: [
          { name: "community_topics_id" },
          { name: "space_cource_id" },
        ]
      },
    ]
  });
  }
}
