import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { course_lessons, course_lessonsId } from './course_lessons';
import type { members, membersId } from './members';

export interface course_lesson_completionsAttributes {
  id: number;
  lesson_id?: number;
  member_id?: number;
  completed_at?: Date;
}

export type course_lesson_completionsPk = "id";
export type course_lesson_completionsId = course_lesson_completions[course_lesson_completionsPk];
export type course_lesson_completionsOptionalAttributes = "id" | "lesson_id" | "member_id" | "completed_at";
export type course_lesson_completionsCreationAttributes = Optional<course_lesson_completionsAttributes, course_lesson_completionsOptionalAttributes>;

export class course_lesson_completions extends Model<course_lesson_completionsAttributes, course_lesson_completionsCreationAttributes> implements course_lesson_completionsAttributes {
  id!: number;
  lesson_id?: number;
  member_id?: number;
  completed_at?: Date;

  // course_lesson_completions belongsTo course_lessons via lesson_id
  lesson!: course_lessons;
  getLesson!: Sequelize.BelongsToGetAssociationMixin<course_lessons>;
  setLesson!: Sequelize.BelongsToSetAssociationMixin<course_lessons, course_lessonsId>;
  createLesson!: Sequelize.BelongsToCreateAssociationMixin<course_lessons>;
  // course_lesson_completions belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;

  static initModel(sequelize: Sequelize.Sequelize): typeof course_lesson_completions {
    return course_lesson_completions.init({
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
      },
      unique: "course_lesson_completions_lesson_id_member_id_key"
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      },
      unique: "course_lesson_completions_lesson_id_member_id_key"
    },
    completed_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'course_lesson_completions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "course_lesson_completions_lesson_id_member_id_key",
        unique: true,
        fields: [
          { name: "lesson_id" },
          { name: "member_id" },
        ]
      },
      {
        name: "course_lesson_completions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
