import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { communities, communitiesId } from './communities';
import type { space_group_members, space_group_membersId } from './space_group_members';
import type { spaces, spacesId } from './spaces';

export interface space_groupsAttributes {
  id: number;
  community_id?: number;
  name: string;
  space_group_slug: string;
  view_position?: number;
  createdat?: Date;
  updateat?: Date;
}

export type space_groupsPk = "id";
export type space_groupsId = space_groups[space_groupsPk];
export type space_groupsOptionalAttributes = "id" | "community_id" | "view_position" | "createdat" | "updateat";
export type space_groupsCreationAttributes = Optional<space_groupsAttributes, space_groupsOptionalAttributes>;

export class space_groups extends Model<space_groupsAttributes, space_groupsCreationAttributes> implements space_groupsAttributes {
  id!: number;
  community_id?: number;
  name!: string;
  space_group_slug!: string;
  view_position?: number;
  createdat?: Date;
  updateat?: Date;

  // space_groups belongsTo communities via community_id
  community!: communities;
  getCommunity!: Sequelize.BelongsToGetAssociationMixin<communities>;
  setCommunity!: Sequelize.BelongsToSetAssociationMixin<communities, communitiesId>;
  createCommunity!: Sequelize.BelongsToCreateAssociationMixin<communities>;
  // space_groups hasMany space_group_members via space_group_id
  space_group_members!: space_group_members[];
  getSpace_group_members!: Sequelize.HasManyGetAssociationsMixin<space_group_members>;
  setSpace_group_members!: Sequelize.HasManySetAssociationsMixin<space_group_members, space_group_membersId>;
  addSpace_group_member!: Sequelize.HasManyAddAssociationMixin<space_group_members, space_group_membersId>;
  addSpace_group_members!: Sequelize.HasManyAddAssociationsMixin<space_group_members, space_group_membersId>;
  createSpace_group_member!: Sequelize.HasManyCreateAssociationMixin<space_group_members>;
  removeSpace_group_member!: Sequelize.HasManyRemoveAssociationMixin<space_group_members, space_group_membersId>;
  removeSpace_group_members!: Sequelize.HasManyRemoveAssociationsMixin<space_group_members, space_group_membersId>;
  hasSpace_group_member!: Sequelize.HasManyHasAssociationMixin<space_group_members, space_group_membersId>;
  hasSpace_group_members!: Sequelize.HasManyHasAssociationsMixin<space_group_members, space_group_membersId>;
  countSpace_group_members!: Sequelize.HasManyCountAssociationsMixin;
  // space_groups hasMany spaces via group_id
  spaces!: spaces[];
  getSpaces!: Sequelize.HasManyGetAssociationsMixin<spaces>;
  setSpaces!: Sequelize.HasManySetAssociationsMixin<spaces, spacesId>;
  addSpace!: Sequelize.HasManyAddAssociationMixin<spaces, spacesId>;
  addSpaces!: Sequelize.HasManyAddAssociationsMixin<spaces, spacesId>;
  createSpace!: Sequelize.HasManyCreateAssociationMixin<spaces>;
  removeSpace!: Sequelize.HasManyRemoveAssociationMixin<spaces, spacesId>;
  removeSpaces!: Sequelize.HasManyRemoveAssociationsMixin<spaces, spacesId>;
  hasSpace!: Sequelize.HasManyHasAssociationMixin<spaces, spacesId>;
  hasSpaces!: Sequelize.HasManyHasAssociationsMixin<spaces, spacesId>;
  countSpaces!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_groups {
    return space_groups.init({
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
      unique: "space_groups_community_id_space_group_slug_key"
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    space_group_slug: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "space_groups_community_id_space_group_slug_key"
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
    updateat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'space_groups',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_groups_community_id_space_group_slug_key",
        unique: true,
        fields: [
          { name: "community_id" },
          { name: "space_group_slug" },
        ]
      },
      {
        name: "space_groups_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
