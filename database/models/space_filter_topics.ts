import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { community_topics, community_topicsId } from './community_topics';
import type { spaces, spacesId } from './spaces';

export interface space_filter_topicsAttributes {
  id: number;
  space_id?: number;
  topic_id?: number;
  view_position?: number;
  created_at?: Date;
  updatedat?: Date;
}

export type space_filter_topicsPk = "id";
export type space_filter_topicsId = space_filter_topics[space_filter_topicsPk];
export type space_filter_topicsOptionalAttributes = "id" | "space_id" | "topic_id" | "view_position" | "created_at" | "updatedat";
export type space_filter_topicsCreationAttributes = Optional<space_filter_topicsAttributes, space_filter_topicsOptionalAttributes>;

export class space_filter_topics extends Model<space_filter_topicsAttributes, space_filter_topicsCreationAttributes> implements space_filter_topicsAttributes {
  id!: number;
  space_id?: number;
  topic_id?: number;
  view_position?: number;
  created_at?: Date;
  updatedat?: Date;

  // space_filter_topics belongsTo community_topics via topic_id
  topic!: community_topics;
  getTopic!: Sequelize.BelongsToGetAssociationMixin<community_topics>;
  setTopic!: Sequelize.BelongsToSetAssociationMixin<community_topics, community_topicsId>;
  createTopic!: Sequelize.BelongsToCreateAssociationMixin<community_topics>;
  // space_filter_topics belongsTo spaces via space_id
  space!: spaces;
  getSpace!: Sequelize.BelongsToGetAssociationMixin<spaces>;
  setSpace!: Sequelize.BelongsToSetAssociationMixin<spaces, spacesId>;
  createSpace!: Sequelize.BelongsToCreateAssociationMixin<spaces>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_filter_topics {
    return space_filter_topics.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    space_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'spaces',
        key: 'id'
      },
      unique: "space_filter_topics_space_id_topic_id_key"
    },
    topic_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'community_topics',
        key: 'id'
      },
      unique: "space_filter_topics_space_id_topic_id_key"
    },
    view_position: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'space_filter_topics',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "space_filter_topics_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "space_filter_topics_space_id_topic_id_key",
        unique: true,
        fields: [
          { name: "space_id" },
          { name: "topic_id" },
        ]
      },
    ]
  });
  }
}
