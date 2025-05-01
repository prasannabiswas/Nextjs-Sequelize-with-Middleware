import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { course_question_type, course_question_typeId } from './course_question_type';
import type { course_quiz_answers, course_quiz_answersId } from './course_quiz_answers';
import type { course_quizzes, course_quizzesId } from './course_quizzes';
import type { quiz_submission_answers, quiz_submission_answersId } from './quiz_submission_answers';

export interface course_quiz_questionsAttributes {
  id: number;
  quiz_id?: number;
  question_text: string;
  question_type?: number;
  position?: number;
  createdat?: Date;
}

export type course_quiz_questionsPk = "id";
export type course_quiz_questionsId = course_quiz_questions[course_quiz_questionsPk];
export type course_quiz_questionsOptionalAttributes = "id" | "quiz_id" | "question_type" | "position" | "createdat";
export type course_quiz_questionsCreationAttributes = Optional<course_quiz_questionsAttributes, course_quiz_questionsOptionalAttributes>;

export class course_quiz_questions extends Model<course_quiz_questionsAttributes, course_quiz_questionsCreationAttributes> implements course_quiz_questionsAttributes {
  id!: number;
  quiz_id?: number;
  question_text!: string;
  question_type?: number;
  position?: number;
  createdat?: Date;

  // course_quiz_questions belongsTo course_question_type via question_type
  question_type_course_question_type!: course_question_type;
  getQuestion_type_course_question_type!: Sequelize.BelongsToGetAssociationMixin<course_question_type>;
  setQuestion_type_course_question_type!: Sequelize.BelongsToSetAssociationMixin<course_question_type, course_question_typeId>;
  createQuestion_type_course_question_type!: Sequelize.BelongsToCreateAssociationMixin<course_question_type>;
  // course_quiz_questions hasMany course_quiz_answers via question_id
  course_quiz_answers!: course_quiz_answers[];
  getCourse_quiz_answers!: Sequelize.HasManyGetAssociationsMixin<course_quiz_answers>;
  setCourse_quiz_answers!: Sequelize.HasManySetAssociationsMixin<course_quiz_answers, course_quiz_answersId>;
  addCourse_quiz_answer!: Sequelize.HasManyAddAssociationMixin<course_quiz_answers, course_quiz_answersId>;
  addCourse_quiz_answers!: Sequelize.HasManyAddAssociationsMixin<course_quiz_answers, course_quiz_answersId>;
  createCourse_quiz_answer!: Sequelize.HasManyCreateAssociationMixin<course_quiz_answers>;
  removeCourse_quiz_answer!: Sequelize.HasManyRemoveAssociationMixin<course_quiz_answers, course_quiz_answersId>;
  removeCourse_quiz_answers!: Sequelize.HasManyRemoveAssociationsMixin<course_quiz_answers, course_quiz_answersId>;
  hasCourse_quiz_answer!: Sequelize.HasManyHasAssociationMixin<course_quiz_answers, course_quiz_answersId>;
  hasCourse_quiz_answers!: Sequelize.HasManyHasAssociationsMixin<course_quiz_answers, course_quiz_answersId>;
  countCourse_quiz_answers!: Sequelize.HasManyCountAssociationsMixin;
  // course_quiz_questions hasMany quiz_submission_answers via question_id
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
  // course_quiz_questions belongsTo course_quizzes via quiz_id
  quiz!: course_quizzes;
  getQuiz!: Sequelize.BelongsToGetAssociationMixin<course_quizzes>;
  setQuiz!: Sequelize.BelongsToSetAssociationMixin<course_quizzes, course_quizzesId>;
  createQuiz!: Sequelize.BelongsToCreateAssociationMixin<course_quizzes>;

  static initModel(sequelize: Sequelize.Sequelize): typeof course_quiz_questions {
    return course_quiz_questions.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    quiz_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'course_quizzes',
        key: 'id'
      }
    },
    question_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    question_type: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'course_question_type',
        key: 'id'
      }
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
    }
  }, {
    sequelize,
    tableName: 'course_quiz_questions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "course_quiz_questions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
