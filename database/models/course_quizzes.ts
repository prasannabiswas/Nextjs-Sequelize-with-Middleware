import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { course_lessons, course_lessonsId } from './course_lessons';
import type { course_quiz_questions, course_quiz_questionsId } from './course_quiz_questions';
import type { course_quiz_submissions, course_quiz_submissionsId } from './course_quiz_submissions';

export interface course_quizzesAttributes {
  id: number;
  lesson_id?: number;
  description?: string;
  passing_percentage?: number;
  enforce_passing_grade?: boolean;
  hide_answers?: boolean;
  createdat?: Date;
}

export type course_quizzesPk = "id";
export type course_quizzesId = course_quizzes[course_quizzesPk];
export type course_quizzesOptionalAttributes = "id" | "lesson_id" | "description" | "passing_percentage" | "enforce_passing_grade" | "hide_answers" | "createdat";
export type course_quizzesCreationAttributes = Optional<course_quizzesAttributes, course_quizzesOptionalAttributes>;

export class course_quizzes extends Model<course_quizzesAttributes, course_quizzesCreationAttributes> implements course_quizzesAttributes {
  id!: number;
  lesson_id?: number;
  description?: string;
  passing_percentage?: number;
  enforce_passing_grade?: boolean;
  hide_answers?: boolean;
  createdat?: Date;

  // course_quizzes belongsTo course_lessons via lesson_id
  lesson!: course_lessons;
  getLesson!: Sequelize.BelongsToGetAssociationMixin<course_lessons>;
  setLesson!: Sequelize.BelongsToSetAssociationMixin<course_lessons, course_lessonsId>;
  createLesson!: Sequelize.BelongsToCreateAssociationMixin<course_lessons>;
  // course_quizzes hasMany course_quiz_questions via quiz_id
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
  // course_quizzes hasMany course_quiz_submissions via quiz_id
  course_quiz_submissions!: course_quiz_submissions[];
  getCourse_quiz_submissions!: Sequelize.HasManyGetAssociationsMixin<course_quiz_submissions>;
  setCourse_quiz_submissions!: Sequelize.HasManySetAssociationsMixin<course_quiz_submissions, course_quiz_submissionsId>;
  addCourse_quiz_submission!: Sequelize.HasManyAddAssociationMixin<course_quiz_submissions, course_quiz_submissionsId>;
  addCourse_quiz_submissions!: Sequelize.HasManyAddAssociationsMixin<course_quiz_submissions, course_quiz_submissionsId>;
  createCourse_quiz_submission!: Sequelize.HasManyCreateAssociationMixin<course_quiz_submissions>;
  removeCourse_quiz_submission!: Sequelize.HasManyRemoveAssociationMixin<course_quiz_submissions, course_quiz_submissionsId>;
  removeCourse_quiz_submissions!: Sequelize.HasManyRemoveAssociationsMixin<course_quiz_submissions, course_quiz_submissionsId>;
  hasCourse_quiz_submission!: Sequelize.HasManyHasAssociationMixin<course_quiz_submissions, course_quiz_submissionsId>;
  hasCourse_quiz_submissions!: Sequelize.HasManyHasAssociationsMixin<course_quiz_submissions, course_quiz_submissionsId>;
  countCourse_quiz_submissions!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof course_quizzes {
    return course_quizzes.init({
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
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    passing_percentage: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    enforce_passing_grade: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    hide_answers: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'course_quizzes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "course_quizzes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
