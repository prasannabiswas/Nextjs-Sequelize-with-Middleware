import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { course_lessons, course_lessonsId } from './course_lessons';
import type { members, membersId } from './members';
import type { space_courses, space_coursesId } from './space_courses';

export interface course_enrollmentsAttributes {
  id: number;
  course_id?: number;
  member_id?: number;
  enrolled_at?: Date;
  progress_percent?: number;
  last_completed_lesson_id?: number;
  updatedat?: Date;
}

export type course_enrollmentsPk = "id";
export type course_enrollmentsId = course_enrollments[course_enrollmentsPk];
export type course_enrollmentsOptionalAttributes = "id" | "course_id" | "member_id" | "enrolled_at" | "progress_percent" | "last_completed_lesson_id" | "updatedat";
export type course_enrollmentsCreationAttributes = Optional<course_enrollmentsAttributes, course_enrollmentsOptionalAttributes>;

export class course_enrollments extends Model<course_enrollmentsAttributes, course_enrollmentsCreationAttributes> implements course_enrollmentsAttributes {
  id!: number;
  course_id?: number;
  member_id?: number;
  enrolled_at?: Date;
  progress_percent?: number;
  last_completed_lesson_id?: number;
  updatedat?: Date;

  // course_enrollments belongsTo course_lessons via last_completed_lesson_id
  last_completed_lesson!: course_lessons;
  getLast_completed_lesson!: Sequelize.BelongsToGetAssociationMixin<course_lessons>;
  setLast_completed_lesson!: Sequelize.BelongsToSetAssociationMixin<course_lessons, course_lessonsId>;
  createLast_completed_lesson!: Sequelize.BelongsToCreateAssociationMixin<course_lessons>;
  // course_enrollments belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // course_enrollments belongsTo space_courses via course_id
  course!: space_courses;
  getCourse!: Sequelize.BelongsToGetAssociationMixin<space_courses>;
  setCourse!: Sequelize.BelongsToSetAssociationMixin<space_courses, space_coursesId>;
  createCourse!: Sequelize.BelongsToCreateAssociationMixin<space_courses>;

  static initModel(sequelize: Sequelize.Sequelize): typeof course_enrollments {
    return course_enrollments.init({
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
      },
      unique: "course_enrollments_course_id_member_id_key"
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      },
      unique: "course_enrollments_course_id_member_id_key"
    },
    enrolled_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    progress_percent: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    last_completed_lesson_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'course_lessons',
        key: 'id'
      }
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'course_enrollments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "course_enrollments_course_id_member_id_key",
        unique: true,
        fields: [
          { name: "course_id" },
          { name: "member_id" },
        ]
      },
      {
        name: "course_enrollments_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
