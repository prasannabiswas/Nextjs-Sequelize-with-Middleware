import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { course_quiz_answers, course_quiz_answersId } from './course_quiz_answers';
import type { course_quiz_questions, course_quiz_questionsId } from './course_quiz_questions';
import type { course_quiz_submissions, course_quiz_submissionsId } from './course_quiz_submissions';

export interface quiz_submission_answersAttributes {
  id: number;
  submission_id?: number;
  question_id?: number;
  answer_id?: number;
  is_selected?: boolean;
}

export type quiz_submission_answersPk = "id";
export type quiz_submission_answersId = quiz_submission_answers[quiz_submission_answersPk];
export type quiz_submission_answersOptionalAttributes = "id" | "submission_id" | "question_id" | "answer_id" | "is_selected";
export type quiz_submission_answersCreationAttributes = Optional<quiz_submission_answersAttributes, quiz_submission_answersOptionalAttributes>;

export class quiz_submission_answers extends Model<quiz_submission_answersAttributes, quiz_submission_answersCreationAttributes> implements quiz_submission_answersAttributes {
  id!: number;
  submission_id?: number;
  question_id?: number;
  answer_id?: number;
  is_selected?: boolean;

  // quiz_submission_answers belongsTo course_quiz_answers via answer_id
  answer!: course_quiz_answers;
  getAnswer!: Sequelize.BelongsToGetAssociationMixin<course_quiz_answers>;
  setAnswer!: Sequelize.BelongsToSetAssociationMixin<course_quiz_answers, course_quiz_answersId>;
  createAnswer!: Sequelize.BelongsToCreateAssociationMixin<course_quiz_answers>;
  // quiz_submission_answers belongsTo course_quiz_questions via question_id
  question!: course_quiz_questions;
  getQuestion!: Sequelize.BelongsToGetAssociationMixin<course_quiz_questions>;
  setQuestion!: Sequelize.BelongsToSetAssociationMixin<course_quiz_questions, course_quiz_questionsId>;
  createQuestion!: Sequelize.BelongsToCreateAssociationMixin<course_quiz_questions>;
  // quiz_submission_answers belongsTo course_quiz_submissions via submission_id
  submission!: course_quiz_submissions;
  getSubmission!: Sequelize.BelongsToGetAssociationMixin<course_quiz_submissions>;
  setSubmission!: Sequelize.BelongsToSetAssociationMixin<course_quiz_submissions, course_quiz_submissionsId>;
  createSubmission!: Sequelize.BelongsToCreateAssociationMixin<course_quiz_submissions>;

  static initModel(sequelize: Sequelize.Sequelize): typeof quiz_submission_answers {
    return quiz_submission_answers.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    submission_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'course_quiz_submissions',
        key: 'id'
      }
    },
    question_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'course_quiz_questions',
        key: 'id'
      }
    },
    answer_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'course_quiz_answers',
        key: 'id'
      }
    },
    is_selected: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'quiz_submission_answers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "quiz_submission_answers_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
