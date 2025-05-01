import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { course_lessons, course_lessonsId } from './course_lessons';
import type { lesson_file_type, lesson_file_typeId } from './lesson_file_type';

export interface course_lesson_filesAttributes {
  id: number;
  lesson_id?: number;
  file_url: string;
  file_type?: number;
  updatedat?: Date;
}

export type course_lesson_filesPk = "id";
export type course_lesson_filesId = course_lesson_files[course_lesson_filesPk];
export type course_lesson_filesOptionalAttributes = "id" | "lesson_id" | "file_type" | "updatedat";
export type course_lesson_filesCreationAttributes = Optional<course_lesson_filesAttributes, course_lesson_filesOptionalAttributes>;

export class course_lesson_files extends Model<course_lesson_filesAttributes, course_lesson_filesCreationAttributes> implements course_lesson_filesAttributes {
  id!: number;
  lesson_id?: number;
  file_url!: string;
  file_type?: number;
  updatedat?: Date;

  // course_lesson_files belongsTo course_lessons via lesson_id
  lesson!: course_lessons;
  getLesson!: Sequelize.BelongsToGetAssociationMixin<course_lessons>;
  setLesson!: Sequelize.BelongsToSetAssociationMixin<course_lessons, course_lessonsId>;
  createLesson!: Sequelize.BelongsToCreateAssociationMixin<course_lessons>;
  // course_lesson_files belongsTo lesson_file_type via file_type
  file_type_lesson_file_type!: lesson_file_type;
  getFile_type_lesson_file_type!: Sequelize.BelongsToGetAssociationMixin<lesson_file_type>;
  setFile_type_lesson_file_type!: Sequelize.BelongsToSetAssociationMixin<lesson_file_type, lesson_file_typeId>;
  createFile_type_lesson_file_type!: Sequelize.BelongsToCreateAssociationMixin<lesson_file_type>;

  static initModel(sequelize: Sequelize.Sequelize): typeof course_lesson_files {
    return course_lesson_files.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    lesson_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'course_lessons',
        key: 'id'
      }
    },
    file_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    file_type: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'lesson_file_type',
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
    tableName: 'course_lesson_files',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "course_lesson_files_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
