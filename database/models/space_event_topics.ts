import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { community_topics, community_topicsId } from './community_topics';
import type { space_events, space_eventsId } from './space_events';

export interface space_event_topicsAttributes {
  community_topics_id: number;
  space_event_id: number;
}

export type space_event_topicsPk = "community_topics_id" | "space_event_id";
export type space_event_topicsId = space_event_topics[space_event_topicsPk];
export type space_event_topicsCreationAttributes = space_event_topicsAttributes;

export class space_event_topics extends Model<space_event_topicsAttributes, space_event_topicsCreationAttributes> implements space_event_topicsAttributes {
  community_topics_id!: number;
  space_event_id!: number;

  // space_event_topics belongsTo community_topics via community_topics_id
  community_topic!: community_topics;
  getCommunity_topic!: Sequelize.BelongsToGetAssociationMixin<community_topics>;
  setCommunity_topic!: Sequelize.BelongsToSetAssociationMixin<community_topics, community_topicsId>;
  createCommunity_topic!: Sequelize.BelongsToCreateAssociationMixin<community_topics>;
  // space_event_topics belongsTo space_events via space_event_id
  space_event!: space_events;
  getSpace_event!: Sequelize.BelongsToGetAssociationMixin<space_events>;
  setSpace_event!: Sequelize.BelongsToSetAssociationMixin<space_events, space_eventsId>;
  createSpace_event!: Sequelize.BelongsToCreateAssociationMixin<space_events>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_event_topics {
    return space_event_topics.init({
    community_topics_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'community_topics',
        key: 'id'
      }
    },
    space_event_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'space_events',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'space_event_topics',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_event_topics_pkey",
        unique: true,
        fields: [
          { name: "community_topics_id" },
          { name: "space_event_id" },
        ]
      },
    ]
  });
  }
}
