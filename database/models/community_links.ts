import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { communities, communitiesId } from './communities';

export interface community_linksAttributes {
  id: number;
  community_id?: number;
  link_title?: string;
  link_url?: string;
}

export type community_linksPk = "id";
export type community_linksId = community_links[community_linksPk];
export type community_linksOptionalAttributes = "id" | "community_id" | "link_title" | "link_url";
export type community_linksCreationAttributes = Optional<community_linksAttributes, community_linksOptionalAttributes>;

export class community_links extends Model<community_linksAttributes, community_linksCreationAttributes> implements community_linksAttributes {
  id!: number;
  community_id?: number;
  link_title?: string;
  link_url?: string;

  // community_links belongsTo communities via community_id
  community!: communities;
  getCommunity!: Sequelize.BelongsToGetAssociationMixin<communities>;
  setCommunity!: Sequelize.BelongsToSetAssociationMixin<communities, communitiesId>;
  createCommunity!: Sequelize.BelongsToCreateAssociationMixin<communities>;

  static initModel(sequelize: Sequelize.Sequelize): typeof community_links {
    return community_links.init({
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
    link_title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    link_url: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'community_links',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "community_links_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
