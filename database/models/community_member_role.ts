import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { community_members, community_membersId } from './community_members';
import type { community_permissions, community_permissionsId } from './community_permissions';
import type { course_access_visibility, course_access_visibilityId } from './course_access_visibility';

export interface community_member_roleAttributes {
  id: number;
  name: string;
  createdat?: Date;
  updateat?: Date;
}

export type community_member_rolePk = "id";
export type community_member_roleId = community_member_role[community_member_rolePk];
export type community_member_roleOptionalAttributes = "id" | "createdat" | "updateat";
export type community_member_roleCreationAttributes = Optional<community_member_roleAttributes, community_member_roleOptionalAttributes>;

export class community_member_role extends Model<community_member_roleAttributes, community_member_roleCreationAttributes> implements community_member_roleAttributes {
  id!: number;
  name!: string;
  createdat?: Date;
  updateat?: Date;

  // community_member_role hasMany community_members via community_member_role_id
  community_members!: community_members[];
  getCommunity_members!: Sequelize.HasManyGetAssociationsMixin<community_members>;
  setCommunity_members!: Sequelize.HasManySetAssociationsMixin<community_members, community_membersId>;
  addCommunity_member!: Sequelize.HasManyAddAssociationMixin<community_members, community_membersId>;
  addCommunity_members!: Sequelize.HasManyAddAssociationsMixin<community_members, community_membersId>;
  createCommunity_member!: Sequelize.HasManyCreateAssociationMixin<community_members>;
  removeCommunity_member!: Sequelize.HasManyRemoveAssociationMixin<community_members, community_membersId>;
  removeCommunity_members!: Sequelize.HasManyRemoveAssociationsMixin<community_members, community_membersId>;
  hasCommunity_member!: Sequelize.HasManyHasAssociationMixin<community_members, community_membersId>;
  hasCommunity_members!: Sequelize.HasManyHasAssociationsMixin<community_members, community_membersId>;
  countCommunity_members!: Sequelize.HasManyCountAssociationsMixin;
  // community_member_role hasMany community_permissions via community_member_role_id
  community_permissions!: community_permissions[];
  getCommunity_permissions!: Sequelize.HasManyGetAssociationsMixin<community_permissions>;
  setCommunity_permissions!: Sequelize.HasManySetAssociationsMixin<community_permissions, community_permissionsId>;
  addCommunity_permission!: Sequelize.HasManyAddAssociationMixin<community_permissions, community_permissionsId>;
  addCommunity_permissions!: Sequelize.HasManyAddAssociationsMixin<community_permissions, community_permissionsId>;
  createCommunity_permission!: Sequelize.HasManyCreateAssociationMixin<community_permissions>;
  removeCommunity_permission!: Sequelize.HasManyRemoveAssociationMixin<community_permissions, community_permissionsId>;
  removeCommunity_permissions!: Sequelize.HasManyRemoveAssociationsMixin<community_permissions, community_permissionsId>;
  hasCommunity_permission!: Sequelize.HasManyHasAssociationMixin<community_permissions, community_permissionsId>;
  hasCommunity_permissions!: Sequelize.HasManyHasAssociationsMixin<community_permissions, community_permissionsId>;
  countCommunity_permissions!: Sequelize.HasManyCountAssociationsMixin;
  // community_member_role hasMany course_access_visibility via role
  course_access_visibilities!: course_access_visibility[];
  getCourse_access_visibilities!: Sequelize.HasManyGetAssociationsMixin<course_access_visibility>;
  setCourse_access_visibilities!: Sequelize.HasManySetAssociationsMixin<course_access_visibility, course_access_visibilityId>;
  addCourse_access_visibility!: Sequelize.HasManyAddAssociationMixin<course_access_visibility, course_access_visibilityId>;
  addCourse_access_visibilities!: Sequelize.HasManyAddAssociationsMixin<course_access_visibility, course_access_visibilityId>;
  createCourse_access_visibility!: Sequelize.HasManyCreateAssociationMixin<course_access_visibility>;
  removeCourse_access_visibility!: Sequelize.HasManyRemoveAssociationMixin<course_access_visibility, course_access_visibilityId>;
  removeCourse_access_visibilities!: Sequelize.HasManyRemoveAssociationsMixin<course_access_visibility, course_access_visibilityId>;
  hasCourse_access_visibility!: Sequelize.HasManyHasAssociationMixin<course_access_visibility, course_access_visibilityId>;
  hasCourse_access_visibilities!: Sequelize.HasManyHasAssociationsMixin<course_access_visibility, course_access_visibilityId>;
  countCourse_access_visibilities!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof community_member_role {
    return community_member_role.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
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
    tableName: 'community_member_role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "community_member_role_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
