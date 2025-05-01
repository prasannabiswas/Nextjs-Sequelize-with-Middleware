import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { community_member_role, community_member_roleId } from './community_member_role';
import type { space_courses, space_coursesId } from './space_courses';

export interface course_access_visibilityAttributes {
  id: number;
  course_id?: number;
  role?: number;
  can_view?: boolean;
  can_enroll?: boolean;
  can_comment?: boolean;
}

export type course_access_visibilityPk = "id";
export type course_access_visibilityId = course_access_visibility[course_access_visibilityPk];
export type course_access_visibilityOptionalAttributes = "id" | "course_id" | "role" | "can_view" | "can_enroll" | "can_comment";
export type course_access_visibilityCreationAttributes = Optional<course_access_visibilityAttributes, course_access_visibilityOptionalAttributes>;

export class course_access_visibility extends Model<course_access_visibilityAttributes, course_access_visibilityCreationAttributes> implements course_access_visibilityAttributes {
  id!: number;
  course_id?: number;
  role?: number;
  can_view?: boolean;
  can_enroll?: boolean;
  can_comment?: boolean;

  // course_access_visibility belongsTo community_member_role via role
  role_community_member_role!: community_member_role;
  getRole_community_member_role!: Sequelize.BelongsToGetAssociationMixin<community_member_role>;
  setRole_community_member_role!: Sequelize.BelongsToSetAssociationMixin<community_member_role, community_member_roleId>;
  createRole_community_member_role!: Sequelize.BelongsToCreateAssociationMixin<community_member_role>;
  // course_access_visibility belongsTo space_courses via course_id
  course!: space_courses;
  getCourse!: Sequelize.BelongsToGetAssociationMixin<space_courses>;
  setCourse!: Sequelize.BelongsToSetAssociationMixin<space_courses, space_coursesId>;
  createCourse!: Sequelize.BelongsToCreateAssociationMixin<space_courses>;

  static initModel(sequelize: Sequelize.Sequelize): typeof course_access_visibility {
    return course_access_visibility.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    course_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'space_courses',
        key: 'id'
      }
    },
    role: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'community_member_role',
        key: 'id'
      }
    },
    can_view: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    can_enroll: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    can_comment: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'course_access_visibility',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "course_access_visibility_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
