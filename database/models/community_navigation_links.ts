import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { communities, communitiesId } from './communities';
import type { tab_visibility_status, tab_visibility_statusId } from './tab_visibility_status';

export interface community_navigation_linksAttributes {
  id: number;
  community_id?: number;
  name: string;
  url: string;
  open_in_new_tab?: boolean;
  visibility?: number;
  is_default?: boolean;
  view_position?: number;
  createdat?: Date;
  updatedat?: Date;
}

export type community_navigation_linksPk = "id";
export type community_navigation_linksId = community_navigation_links[community_navigation_linksPk];
export type community_navigation_linksOptionalAttributes = "id" | "community_id" | "open_in_new_tab" | "visibility" | "is_default" | "view_position" | "createdat" | "updatedat";
export type community_navigation_linksCreationAttributes = Optional<community_navigation_linksAttributes, community_navigation_linksOptionalAttributes>;

export class community_navigation_links extends Model<community_navigation_linksAttributes, community_navigation_linksCreationAttributes> implements community_navigation_linksAttributes {
  id!: number;
  community_id?: number;
  name!: string;
  url!: string;
  open_in_new_tab?: boolean;
  visibility?: number;
  is_default?: boolean;
  view_position?: number;
  createdat?: Date;
  updatedat?: Date;

  // community_navigation_links belongsTo communities via community_id
  community!: communities;
  getCommunity!: Sequelize.BelongsToGetAssociationMixin<communities>;
  setCommunity!: Sequelize.BelongsToSetAssociationMixin<communities, communitiesId>;
  createCommunity!: Sequelize.BelongsToCreateAssociationMixin<communities>;
  // community_navigation_links belongsTo tab_visibility_status via visibility
  visibility_tab_visibility_status!: tab_visibility_status;
  getVisibility_tab_visibility_status!: Sequelize.BelongsToGetAssociationMixin<tab_visibility_status>;
  setVisibility_tab_visibility_status!: Sequelize.BelongsToSetAssociationMixin<tab_visibility_status, tab_visibility_statusId>;
  createVisibility_tab_visibility_status!: Sequelize.BelongsToCreateAssociationMixin<tab_visibility_status>;

  static initModel(sequelize: Sequelize.Sequelize): typeof community_navigation_links {
    return community_navigation_links.init({
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
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    open_in_new_tab: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    visibility: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'tab_visibility_status',
        key: 'id'
      }
    },
    is_default: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    view_position: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'community_navigation_links',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "community_navigation_links_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
