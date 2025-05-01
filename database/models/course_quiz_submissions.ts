import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { course_quizzes, course_quizzesId } from './course_quizzes';
import type { members, membersId } from './members';
import type { quiz_submission_answers, quiz_submission_answersId } from './quiz_submission_answers';

export interface course_quiz_submissionsAttributes {
  id: number;
  quiz_id?: number;
  member_id?: number;
  submitted_at?: Date;
  score?: number;
  is_passed?: boolean;
  duration_seconds?: number;
}

export type course_quiz_submissionsPk = "id";
export type course_quiz_submissionsId = course_quiz_submissions[course_quiz_submissionsPk];
export type course_quiz_submissionsOptionalAttributes = "id" | "quiz_id" | "member_id" | "submitted_at" | "score" | "is_passed" | "duration_seconds";
export type course_quiz_submissionsCreationAttributes = Optional<course_quiz_submissionsAttributes, course_quiz_submissionsOptionalAttributes>;

export class course_quiz_submissions extends Model<course_quiz_submissionsAttributes, course_quiz_submissionsCreationAttributes> implements course_quiz_submissionsAttributes {
  id!: number;
  quiz_id?: number;
  member_id?: number;
  submitted_at?: Date;
  score?: number;
  is_passed?: boolean;
  duration_seconds?: number;

  // course_quiz_submissions hasMany quiz_submission_answers via submission_id
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
  // course_quiz_submissions belongsTo course_quizzes via quiz_id
  quiz!: course_quizzes;
  getQuiz!: Sequelize.BelongsToGetAssociationMixin<course_quizzes>;
  setQuiz!: Sequelize.BelongsToSetAssociationMixin<course_quizzes, course_quizzesId>;
  createQuiz!: Sequelize.BelongsToCreateAssociationMixin<course_quizzes>;
  // course_quiz_submissions belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;

  static initModel(sequelize: Sequelize.Sequelize): typeof course_quiz_submissions {
    return course_quiz_submissions.init({
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
      },
      unique: "course_quiz_submissions_quiz_id_member_id_key"
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      },
      unique: "course_quiz_submissions_quiz_id_member_id_key"
    },
    submitted_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    score: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    is_passed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    duration_seconds: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'course_quiz_submissions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "course_quiz_submissions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "course_quiz_submissions_quiz_id_member_id_key",
        unique: true,
        fields: [
          { name: "quiz_id" },
          { name: "member_id" },
        ]
      },
    ]
  });
  }
}
