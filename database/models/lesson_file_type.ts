import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { course_lesson_files, course_lesson_filesId } from './course_lesson_files';

export interface lesson_file_typeAttributes {
  id: number;
  file_type?: string;
}

export type lesson_file_typePk = "id";
export type lesson_file_typeId = lesson_file_type[lesson_file_typePk];
export type lesson_file_typeOptionalAttributes = "id" | "file_type";
export type lesson_file_typeCreationAttributes = Optional<lesson_file_typeAttributes, lesson_file_typeOptionalAttributes>;

export class lesson_file_type extends Model<lesson_file_typeAttributes, lesson_file_typeCreationAttributes> implements lesson_file_typeAttributes {
  id!: number;
  file_type?: string;

  // lesson_file_type hasMany course_lesson_files via file_type
  course_lesson_files!: course_lesson_files[];
  getCourse_lesson_files!: Sequelize.HasManyGetAssociationsMixin<course_lesson_files>;
  setCourse_lesson_files!: Sequelize.HasManySetAssociationsMixin<course_lesson_files, course_lesson_filesId>;
  addCourse_lesson_file!: Sequelize.HasManyAddAssociationMixin<course_lesson_files, course_lesson_filesId>;
  addCourse_lesson_files!: Sequelize.HasManyAddAssociationsMixin<course_lesson_files, course_lesson_filesId>;
  createCourse_lesson_file!: Sequelize.HasManyCreateAssociationMixin<course_lesson_files>;
  removeCourse_lesson_file!: Sequelize.HasManyRemoveAssociationMixin<course_lesson_files, course_lesson_filesId>;
  removeCourse_lesson_files!: Sequelize.HasManyRemoveAssociationsMixin<course_lesson_files, course_lesson_filesId>;
  hasCourse_lesson_file!: Sequelize.HasManyHasAssociationMixin<course_lesson_files, course_lesson_filesId>;
  hasCourse_lesson_files!: Sequelize.HasManyHasAssociationsMixin<course_lesson_files, course_lesson_filesId>;
  countCourse_lesson_files!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof lesson_file_type {
    return lesson_file_type.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    file_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lesson_file_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "lesson_file_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
