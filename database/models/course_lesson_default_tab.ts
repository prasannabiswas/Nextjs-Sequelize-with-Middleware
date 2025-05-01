import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { course_lessons, course_lessonsId } from './course_lessons';

export interface course_lesson_default_tabAttributes {
  id: number;
  status?: string;
}

export type course_lesson_default_tabPk = "id";
export type course_lesson_default_tabId = course_lesson_default_tab[course_lesson_default_tabPk];
export type course_lesson_default_tabOptionalAttributes = "id" | "status";
export type course_lesson_default_tabCreationAttributes = Optional<course_lesson_default_tabAttributes, course_lesson_default_tabOptionalAttributes>;

export class course_lesson_default_tab extends Model<course_lesson_default_tabAttributes, course_lesson_default_tabCreationAttributes> implements course_lesson_default_tabAttributes {
  id!: number;
  status?: string;

  // course_lesson_default_tab hasMany course_lessons via default_tab
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

  static initModel(sequelize: Sequelize.Sequelize): typeof course_lesson_default_tab {
    return course_lesson_default_tab.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'course_lesson_default_tab',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "course_lesson_default_tab_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
