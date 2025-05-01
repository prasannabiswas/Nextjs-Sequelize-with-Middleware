import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { course_quiz_questions, course_quiz_questionsId } from './course_quiz_questions';

export interface course_question_typeAttributes {
  id: number;
  question_type?: string;
}

export type course_question_typePk = "id";
export type course_question_typeId = course_question_type[course_question_typePk];
export type course_question_typeOptionalAttributes = "id" | "question_type";
export type course_question_typeCreationAttributes = Optional<course_question_typeAttributes, course_question_typeOptionalAttributes>;

export class course_question_type extends Model<course_question_typeAttributes, course_question_typeCreationAttributes> implements course_question_typeAttributes {
  id!: number;
  question_type?: string;

  // course_question_type hasMany course_quiz_questions via question_type
  course_quiz_questions!: course_quiz_questions[];
  getCourse_quiz_questions!: Sequelize.HasManyGetAssociationsMixin<course_quiz_questions>;
  setCourse_quiz_questions!: Sequelize.HasManySetAssociationsMixin<course_quiz_questions, course_quiz_questionsId>;
  addCourse_quiz_question!: Sequelize.HasManyAddAssociationMixin<course_quiz_questions, course_quiz_questionsId>;
  addCourse_quiz_questions!: Sequelize.HasManyAddAssociationsMixin<course_quiz_questions, course_quiz_questionsId>;
  createCourse_quiz_question!: Sequelize.HasManyCreateAssociationMixin<course_quiz_questions>;
  removeCourse_quiz_question!: Sequelize.HasManyRemoveAssociationMixin<course_quiz_questions, course_quiz_questionsId>;
  removeCourse_quiz_questions!: Sequelize.HasManyRemoveAssociationsMixin<course_quiz_questions, course_quiz_questionsId>;
  hasCourse_quiz_question!: Sequelize.HasManyHasAssociationMixin<course_quiz_questions, course_quiz_questionsId>;
  hasCourse_quiz_questions!: Sequelize.HasManyHasAssociationsMixin<course_quiz_questions, course_quiz_questionsId>;
  countCourse_quiz_questions!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof course_question_type {
    return course_question_type.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    question_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'course_question_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "course_question_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
