import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { community_navigation_links, community_navigation_linksId } from './community_navigation_links';

export interface tab_visibility_statusAttributes {
  id: number;
  visibility_status?: string;
}

export type tab_visibility_statusPk = "id";
export type tab_visibility_statusId = tab_visibility_status[tab_visibility_statusPk];
export type tab_visibility_statusOptionalAttributes = "id" | "visibility_status";
export type tab_visibility_statusCreationAttributes = Optional<tab_visibility_statusAttributes, tab_visibility_statusOptionalAttributes>;

export class tab_visibility_status extends Model<tab_visibility_statusAttributes, tab_visibility_statusCreationAttributes> implements tab_visibility_statusAttributes {
  id!: number;
  visibility_status?: string;

  // tab_visibility_status hasMany community_navigation_links via visibility
  community_navigation_links!: community_navigation_links[];
  getCommunity_navigation_links!: Sequelize.HasManyGetAssociationsMixin<community_navigation_links>;
  setCommunity_navigation_links!: Sequelize.HasManySetAssociationsMixin<community_navigation_links, community_navigation_linksId>;
  addCommunity_navigation_link!: Sequelize.HasManyAddAssociationMixin<community_navigation_links, community_navigation_linksId>;
  addCommunity_navigation_links!: Sequelize.HasManyAddAssociationsMixin<community_navigation_links, community_navigation_linksId>;
  createCommunity_navigation_link!: Sequelize.HasManyCreateAssociationMixin<community_navigation_links>;
  removeCommunity_navigation_link!: Sequelize.HasManyRemoveAssociationMixin<community_navigation_links, community_navigation_linksId>;
  removeCommunity_navigation_links!: Sequelize.HasManyRemoveAssociationsMixin<community_navigation_links, community_navigation_linksId>;
  hasCommunity_navigation_link!: Sequelize.HasManyHasAssociationMixin<community_navigation_links, community_navigation_linksId>;
  hasCommunity_navigation_links!: Sequelize.HasManyHasAssociationsMixin<community_navigation_links, community_navigation_linksId>;
  countCommunity_navigation_links!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tab_visibility_status {
    return tab_visibility_status.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    visibility_status: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tab_visibility_status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tab_visibility_status_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
