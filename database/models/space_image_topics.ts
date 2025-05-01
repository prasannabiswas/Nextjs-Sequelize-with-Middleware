import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { community_topics, community_topicsId } from './community_topics';
import type { space_images, space_imagesId } from './space_images';

export interface space_image_topicsAttributes {
  community_topics_id: number;
  space_image_id: number;
}

export type space_image_topicsPk = "community_topics_id" | "space_image_id";
export type space_image_topicsId = space_image_topics[space_image_topicsPk];
export type space_image_topicsCreationAttributes = space_image_topicsAttributes;

export class space_image_topics extends Model<space_image_topicsAttributes, space_image_topicsCreationAttributes> implements space_image_topicsAttributes {
  community_topics_id!: number;
  space_image_id!: number;

  // space_image_topics belongsTo community_topics via community_topics_id
  community_topic!: community_topics;
  getCommunity_topic!: Sequelize.BelongsToGetAssociationMixin<community_topics>;
  setCommunity_topic!: Sequelize.BelongsToSetAssociationMixin<community_topics, community_topicsId>;
  createCommunity_topic!: Sequelize.BelongsToCreateAssociationMixin<community_topics>;
  // space_image_topics belongsTo space_images via space_image_id
  space_image!: space_images;
  getSpace_image!: Sequelize.BelongsToGetAssociationMixin<space_images>;
  setSpace_image!: Sequelize.BelongsToSetAssociationMixin<space_images, space_imagesId>;
  createSpace_image!: Sequelize.BelongsToCreateAssociationMixin<space_images>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_image_topics {
    return space_image_topics.init({
    community_topics_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'community_topics',
        key: 'id'
      }
    },
    space_image_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'space_images',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'space_image_topics',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_image_topics_pkey",
        unique: true,
        fields: [
          { name: "community_topics_id" },
          { name: "space_image_id" },
        ]
      },
    ]
  });
  }
}
