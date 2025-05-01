import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { course_lessons, course_lessonsId } from './course_lessons';
import type { members, membersId } from './members';

export interface course_lesson_commentsAttributes {
  id: number;
  lesson_id?: number;
  member_id?: number;
  content: string;
  created_at?: Date;
  updatedat?: Date;
}

export type course_lesson_commentsPk = "id";
export type course_lesson_commentsId = course_lesson_comments[course_lesson_commentsPk];
export type course_lesson_commentsOptionalAttributes = "id" | "lesson_id" | "member_id" | "created_at" | "updatedat";
export type course_lesson_commentsCreationAttributes = Optional<course_lesson_commentsAttributes, course_lesson_commentsOptionalAttributes>;

export class course_lesson_comments extends Model<course_lesson_commentsAttributes, course_lesson_commentsCreationAttributes> implements course_lesson_commentsAttributes {
  id!: number;
  lesson_id?: number;
  member_id?: number;
  content!: string;
  created_at?: Date;
  updatedat?: Date;

  // course_lesson_comments belongsTo course_lessons via lesson_id
  lesson!: course_lessons;
  getLesson!: Sequelize.BelongsToGetAssociationMixin<course_lessons>;
  setLesson!: Sequelize.BelongsToSetAssociationMixin<course_lessons, course_lessonsId>;
  createLesson!: Sequelize.BelongsToCreateAssociationMixin<course_lessons>;
  // course_lesson_comments belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;

  static initModel(sequelize: Sequelize.Sequelize): typeof course_lesson_comments {
    return course_lesson_comments.init({
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
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'course_lesson_comments',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "course_lesson_comments_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
