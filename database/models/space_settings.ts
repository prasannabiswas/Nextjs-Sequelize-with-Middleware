import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { space_viewing_layout, space_viewing_layoutId } from './space_viewing_layout';
import type { spaces, spacesId } from './spaces';

export interface space_settingsAttributes {
  id: number;
  space_id?: number;
  space_viewing_layout_id?: number;
  show_right_sidebar?: boolean;
  show_sidebar_members_block?: boolean;
  enforce_topic_selection?: boolean;
  default_post_sort?: string;
  default_comment_sort?: string;
  default_member_sort?: string;
  allow_member_sort?: boolean;
  allow_member_invite?: boolean;
  seo_slug?: string;
  seo_meta_title?: string;
  seo_meta_description?: string;
  seo_og_title?: string;
  seo_og_description?: string;
  seo_og_image_url?: string;
  createdat?: Date;
  updateat?: Date;
}

export type space_settingsPk = "id";
export type space_settingsId = space_settings[space_settingsPk];
export type space_settingsOptionalAttributes = "id" | "space_id" | "space_viewing_layout_id" | "show_right_sidebar" | "show_sidebar_members_block" | "enforce_topic_selection" | "default_post_sort" | "default_comment_sort" | "default_member_sort" | "allow_member_sort" | "allow_member_invite" | "seo_slug" | "seo_meta_title" | "seo_meta_description" | "seo_og_title" | "seo_og_description" | "seo_og_image_url" | "createdat" | "updateat";
export type space_settingsCreationAttributes = Optional<space_settingsAttributes, space_settingsOptionalAttributes>;

export class space_settings extends Model<space_settingsAttributes, space_settingsCreationAttributes> implements space_settingsAttributes {
  id!: number;
  space_id?: number;
  space_viewing_layout_id?: number;
  show_right_sidebar?: boolean;
  show_sidebar_members_block?: boolean;
  enforce_topic_selection?: boolean;
  default_post_sort?: string;
  default_comment_sort?: string;
  default_member_sort?: string;
  allow_member_sort?: boolean;
  allow_member_invite?: boolean;
  seo_slug?: string;
  seo_meta_title?: string;
  seo_meta_description?: string;
  seo_og_title?: string;
  seo_og_description?: string;
  seo_og_image_url?: string;
  createdat?: Date;
  updateat?: Date;

  // space_settings belongsTo space_viewing_layout via space_viewing_layout_id
  space_viewing_layout!: space_viewing_layout;
  getSpace_viewing_layout!: Sequelize.BelongsToGetAssociationMixin<space_viewing_layout>;
  setSpace_viewing_layout!: Sequelize.BelongsToSetAssociationMixin<space_viewing_layout, space_viewing_layoutId>;
  createSpace_viewing_layout!: Sequelize.BelongsToCreateAssociationMixin<space_viewing_layout>;
  // space_settings belongsTo spaces via space_id
  space!: spaces;
  getSpace!: Sequelize.BelongsToGetAssociationMixin<spaces>;
  setSpace!: Sequelize.BelongsToSetAssociationMixin<spaces, spacesId>;
  createSpace!: Sequelize.BelongsToCreateAssociationMixin<spaces>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_settings {
    return space_settings.init({
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
      unique: "space_settings_space_id_key"
    },
    space_viewing_layout_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'space_viewing_layout',
        key: 'id'
      }
    },
    show_right_sidebar: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    show_sidebar_members_block: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    enforce_topic_selection: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    default_post_sort: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "latest"
    },
    default_comment_sort: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "latest"
    },
    default_member_sort: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "latest"
    },
    allow_member_sort: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    allow_member_invite: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    seo_slug: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    seo_meta_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    seo_meta_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    seo_og_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    seo_og_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    seo_og_image_url: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'space_settings',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_settings_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "space_settings_space_id_key",
        unique: true,
        fields: [
          { name: "space_id" },
        ]
      },
    ]
  });
  }
}
