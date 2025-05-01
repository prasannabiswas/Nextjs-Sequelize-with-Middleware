import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { course_quiz_questions, course_quiz_questionsId } from './course_quiz_questions';
import type { quiz_submission_answers, quiz_submission_answersId } from './quiz_submission_answers';

export interface course_quiz_answersAttributes {
  id: number;
  question_id?: number;
  answer_text: string;
  is_correct?: boolean;
  position?: number;
}

export type course_quiz_answersPk = "id";
export type course_quiz_answersId = course_quiz_answers[course_quiz_answersPk];
export type course_quiz_answersOptionalAttributes = "id" | "question_id" | "is_correct" | "position";
export type course_quiz_answersCreationAttributes = Optional<course_quiz_answersAttributes, course_quiz_answersOptionalAttributes>;

export class course_quiz_answers extends Model<course_quiz_answersAttributes, course_quiz_answersCreationAttributes> implements course_quiz_answersAttributes {
  id!: number;
  question_id?: number;
  answer_text!: string;
  is_correct?: boolean;
  position?: number;

  // course_quiz_answers hasMany quiz_submission_answers via answer_id
  quiz_submission_answers!: quiz_submission_answers[];
  getQuiz_submission_answers!: Sequelize.HasManyGetAssociationsMixin<quiz_submission_answers>;
  setQuiz_submission_answers!: Sequelize.HasManySetAssociationsMixin<quiz_submission_answers, quiz_submission_answersId>;
  addQuiz_submission_answer!: Sequelize.HasManyAddAssociationMixin<quiz_submission_answers, quiz_submission_answersId>;
  addQuiz_submission_answers!: Sequelize.HasManyAddAssociationsMixin<quiz_submission_answers, quiz_submission_answersId>;
  createQuiz_submission_answer!: Sequelize.HasManyCreateAssociationMixin<quiz_submission_answers>;
  removeQuiz_submission_answer!: Sequelize.HasManyRemoveAssociationMixin<quiz_submission_answers, quiz_submission_answersId>;
  removeQuiz_submission_answers!: Sequelize.HasManyRemoveAssociationsMixin<quiz_submission_answers, quiz_submission_answersId>;
  hasQuiz_submission_answer!: Sequelize.HasManyHasAssociationMixin<quiz_submission_answers, quiz_submission_answersId>;
  hasQuiz_submission_answers!: Sequelize.HasManyHasAssociationsMixin<quiz_submission_answers, quiz_submission_answersId>;
  countQuiz_submission_answers!: Sequelize.HasManyCountAssociationsMixin;
  // course_quiz_answers belongsTo course_quiz_questions via question_id
  question!: course_quiz_questions;
  getQuestion!: Sequelize.BelongsToGetAssociationMixin<course_quiz_questions>;
  setQuestion!: Sequelize.BelongsToSetAssociationMixin<course_quiz_questions, course_quiz_questionsId>;
  createQuestion!: Sequelize.BelongsToCreateAssociationMixin<course_quiz_questions>;

  static initModel(sequelize: Sequelize.Sequelize): typeof course_quiz_answers {
    return course_quiz_answers.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    question_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'course_quiz_questions',
        key: 'id'
      }
    },
    answer_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_correct: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'course_quiz_answers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "course_quiz_answers_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
