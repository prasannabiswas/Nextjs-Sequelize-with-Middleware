import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { course_lessons, course_lessonsId } from './course_lessons';

export interface course_lesson_statusAttributes {
  id: number;
  status?: string;
}

export type course_lesson_statusPk = "id";
export type course_lesson_statusId = course_lesson_status[course_lesson_statusPk];
export type course_lesson_statusOptionalAttributes = "id" | "status";
export type course_lesson_statusCreationAttributes = Optional<course_lesson_statusAttributes, course_lesson_statusOptionalAttributes>;

export class course_lesson_status extends Model<course_lesson_statusAttributes, course_lesson_statusCreationAttributes> implements course_lesson_statusAttributes {
  id!: number;
  status?: string;

  // course_lesson_status hasMany course_lessons via status
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

  static initModel(sequelize: Sequelize.Sequelize): typeof course_lesson_status {
    return course_lesson_status.init({
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
    tableName: 'course_lesson_status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "course_lesson_status_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
