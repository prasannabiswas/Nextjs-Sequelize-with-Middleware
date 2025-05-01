import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { course_lessons, course_lessonsId } from './course_lessons';
import type { space_courses, space_coursesId } from './space_courses';

export interface course_sectionsAttributes {
  id: number;
  course_id?: number;
  title: string;
  position?: number;
  createdat?: Date;
  updatedat?: Date;
}

export type course_sectionsPk = "id";
export type course_sectionsId = course_sections[course_sectionsPk];
export type course_sectionsOptionalAttributes = "id" | "course_id" | "position" | "createdat" | "updatedat";
export type course_sectionsCreationAttributes = Optional<course_sectionsAttributes, course_sectionsOptionalAttributes>;

export class course_sections extends Model<course_sectionsAttributes, course_sectionsCreationAttributes> implements course_sectionsAttributes {
  id!: number;
  course_id?: number;
  title!: string;
  position?: number;
  createdat?: Date;
  updatedat?: Date;

  // course_sections hasMany course_lessons via section_id
  course_lessons!: course_lessons[];
  getCourse_lessons!: Sequelize.HasManyGetAssociationsMixin<course_lessons>;
  setCourse_lessons!: Sequelize.HasManySetAssociationsMixin<course_lessons, course_lessonsId>;
  addCourse_lesson!: Sequelize.HasManyAddAssociationMixin<course_lessons, course_lessonsId>;
  addCourse_lessons!: Sequelize.HasManyAddAssociationsMixin<course_lessons, course_lessonsId>;
  createCourse_lesson!: Sequelize.HasManyCreateAssociationMixin<course_lessons>;
  removeCourse_lesson!: Sequelize.HasManyRemoveAssociationMixin<course_lessons, course_lessonsId>;
  removeCourse_lessons!: Sequelize.HasManyRemoveAssociationsMixin<course_lessons, course_lessonsId>;
  hasCourse_lesson!: Sequelize.HasManyHasAssociationMixin<course_lessons, course_lessonsId>;
  hasCourse_lessons!: Sequelize.HasManyHasAssociationsMixin<course_lessons, course_lessonsId>;
  countCourse_lessons!: Sequelize.HasManyCountAssociationsMixin;
  // course_sections belongsTo space_courses via course_id
  course!: space_courses;
  getCourse!: Sequelize.BelongsToGetAssociationMixin<space_courses>;
  setCourse!: Sequelize.BelongsToSetAssociationMixin<space_courses, space_coursesId>;
  createCourse!: Sequelize.BelongsToCreateAssociationMixin<space_courses>;

  static initModel(sequelize: Sequelize.Sequelize): typeof course_sections {
    return course_sections.init({
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
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    position: {
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
    tableName: 'course_sections',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "course_sections_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
