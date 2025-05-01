import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { members, membersId } from './members';
import type { space_courses, space_coursesId } from './space_courses';

export interface course_waitlistAttributes {
  id: number;
  course_id?: number;
  member_id?: number;
  joined_at?: Date;
}

export type course_waitlistPk = "id";
export type course_waitlistId = course_waitlist[course_waitlistPk];
export type course_waitlistOptionalAttributes = "id" | "course_id" | "member_id" | "joined_at";
export type course_waitlistCreationAttributes = Optional<course_waitlistAttributes, course_waitlistOptionalAttributes>;

export class course_waitlist extends Model<course_waitlistAttributes, course_waitlistCreationAttributes> implements course_waitlistAttributes {
  id!: number;
  course_id?: number;
  member_id?: number;
  joined_at?: Date;

  // course_waitlist belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // course_waitlist belongsTo space_courses via course_id
  course!: space_courses;
  getCourse!: Sequelize.BelongsToGetAssociationMixin<space_courses>;
  setCourse!: Sequelize.BelongsToSetAssociationMixin<space_courses, space_coursesId>;
  createCourse!: Sequelize.BelongsToCreateAssociationMixin<space_courses>;

  static initModel(sequelize: Sequelize.Sequelize): typeof course_waitlist {
    return course_waitlist.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    course_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'space_courses',
        key: 'id'
      },
      unique: "course_waitlist_course_id_member_id_key"
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      },
      unique: "course_waitlist_course_id_member_id_key"
    },
    joined_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'course_waitlist',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "course_waitlist_course_id_member_id_key",
        unique: true,
        fields: [
          { name: "course_id" },
          { name: "member_id" },
        ]
      },
      {
        name: "course_waitlist_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
