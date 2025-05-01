import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { community_topics, community_topicsId } from './community_topics';
import type { space_posts, space_postsId } from './space_posts';

export interface space_posts_topicsAttributes {
  community_topics_id: number;
  space_post_id: number;
}

export type space_posts_topicsPk = "community_topics_id" | "space_post_id";
export type space_posts_topicsId = space_posts_topics[space_posts_topicsPk];
export type space_posts_topicsCreationAttributes = space_posts_topicsAttributes;

export class space_posts_topics extends Model<space_posts_topicsAttributes, space_posts_topicsCreationAttributes> implements space_posts_topicsAttributes {
  community_topics_id!: number;
  space_post_id!: number;

  // space_posts_topics belongsTo community_topics via community_topics_id
  community_topic!: community_topics;
  getCommunity_topic!: Sequelize.BelongsToGetAssociationMixin<community_topics>;
  setCommunity_topic!: Sequelize.BelongsToSetAssociationMixin<community_topics, community_topicsId>;
  createCommunity_topic!: Sequelize.BelongsToCreateAssociationMixin<community_topics>;
  // space_posts_topics belongsTo space_posts via space_post_id
  space_post!: space_posts;
  getSpace_post!: Sequelize.BelongsToGetAssociationMixin<space_posts>;
  setSpace_post!: Sequelize.BelongsToSetAssociationMixin<space_posts, space_postsId>;
  createSpace_post!: Sequelize.BelongsToCreateAssociationMixin<space_posts>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_posts_topics {
    return space_posts_topics.init({
    community_topics_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'community_topics',
        key: 'id'
      }
    },
    space_post_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'space_posts',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'space_posts_topics',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_posts_topics_pkey",
        unique: true,
        fields: [
          { name: "community_topics_id" },
          { name: "space_post_id" },
        ]
      },
    ]
  });
  }
}
