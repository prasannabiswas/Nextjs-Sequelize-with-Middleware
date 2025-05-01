import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { community_topics, community_topicsId } from './community_topics';
import type { course_access_visibility, course_access_visibilityId } from './course_access_visibility';
import type { course_enrollments, course_enrollmentsId } from './course_enrollments';
import type { course_execution, course_executionId } from './course_execution';
import type { course_sections, course_sectionsId } from './course_sections';
import type { course_waitlist, course_waitlistId } from './course_waitlist';
import type { space_course_topics, space_course_topicsId } from './space_course_topics';
import type { spaces, spacesId } from './spaces';

export interface space_coursesAttributes {
  id: number;
  space_id?: number;
  name: string;
  course_type?: number;
  start_date?: string;
  is_published?: boolean;
  createdat?: Date;
  updatedat?: Date;
}

export type space_coursesPk = "id";
export type space_coursesId = space_courses[space_coursesPk];
export type space_coursesOptionalAttributes = "id" | "space_id" | "course_type" | "start_date" | "is_published" | "createdat" | "updatedat";
export type space_coursesCreationAttributes = Optional<space_coursesAttributes, space_coursesOptionalAttributes>;

export class space_courses extends Model<space_coursesAttributes, space_coursesCreationAttributes> implements space_coursesAttributes {
  id!: number;
  space_id?: number;
  name!: string;
  course_type?: number;
  start_date?: string;
  is_published?: boolean;
  createdat?: Date;
  updatedat?: Date;

  // space_courses belongsTo course_execution via course_type
  course_type_course_execution!: course_execution;
  getCourse_type_course_execution!: Sequelize.BelongsToGetAssociationMixin<course_execution>;
  setCourse_type_course_execution!: Sequelize.BelongsToSetAssociationMixin<course_execution, course_executionId>;
  createCourse_type_course_execution!: Sequelize.BelongsToCreateAssociationMixin<course_execution>;
  // space_courses belongsToMany community_topics via space_cource_id and community_topics_id
  community_topics_id_community_topics!: community_topics[];
  getCommunity_topics_id_community_topics!: Sequelize.BelongsToManyGetAssociationsMixin<community_topics>;
  setCommunity_topics_id_community_topics!: Sequelize.BelongsToManySetAssociationsMixin<community_topics, community_topicsId>;
  addCommunity_topics_id_community_topic!: Sequelize.BelongsToManyAddAssociationMixin<community_topics, community_topicsId>;
  addCommunity_topics_id_community_topics!: Sequelize.BelongsToManyAddAssociationsMixin<community_topics, community_topicsId>;
  createCommunity_topics_id_community_topic!: Sequelize.BelongsToManyCreateAssociationMixin<community_topics>;
  removeCommunity_topics_id_community_topic!: Sequelize.BelongsToManyRemoveAssociationMixin<community_topics, community_topicsId>;
  removeCommunity_topics_id_community_topics!: Sequelize.BelongsToManyRemoveAssociationsMixin<community_topics, community_topicsId>;
  hasCommunity_topics_id_community_topic!: Sequelize.BelongsToManyHasAssociationMixin<community_topics, community_topicsId>;
  hasCommunity_topics_id_community_topics!: Sequelize.BelongsToManyHasAssociationsMixin<community_topics, community_topicsId>;
  countCommunity_topics_id_community_topics!: Sequelize.BelongsToManyCountAssociationsMixin;
  // space_courses hasMany course_access_visibility via course_id
  course_access_visibilities!: course_access_visibility[];
  getCourse_access_visibilities!: Sequelize.HasManyGetAssociationsMixin<course_access_visibility>;
  setCourse_access_visibilities!: Sequelize.HasManySetAssociationsMixin<course_access_visibility, course_access_visibilityId>;
  addCourse_access_visibility!: Sequelize.HasManyAddAssociationMixin<course_access_visibility, course_access_visibilityId>;
  addCourse_access_visibilities!: Sequelize.HasManyAddAssociationsMixin<course_access_visibility, course_access_visibilityId>;
  createCourse_access_visibility!: Sequelize.HasManyCreateAssociationMixin<course_access_visibility>;
  removeCourse_access_visibility!: Sequelize.HasManyRemoveAssociationMixin<course_access_visibility, course_access_visibilityId>;
  removeCourse_access_visibilities!: Sequelize.HasManyRemoveAssociationsMixin<course_access_visibility, course_access_visibilityId>;
  hasCourse_access_visibility!: Sequelize.HasManyHasAssociationMixin<course_access_visibility, course_access_visibilityId>;
  hasCourse_access_visibilities!: Sequelize.HasManyHasAssociationsMixin<course_access_visibility, course_access_visibilityId>;
  countCourse_access_visibilities!: Sequelize.HasManyCountAssociationsMixin;
  // space_courses hasMany course_enrollments via course_id
  course_enrollments!: course_enrollments[];
  getCourse_enrollments!: Sequelize.HasManyGetAssociationsMixin<course_enrollments>;
  setCourse_enrollments!: Sequelize.HasManySetAssociationsMixin<course_enrollments, course_enrollmentsId>;
  addCourse_enrollment!: Sequelize.HasManyAddAssociationMixin<course_enrollments, course_enrollmentsId>;
  addCourse_enrollments!: Sequelize.HasManyAddAssociationsMixin<course_enrollments, course_enrollmentsId>;
  createCourse_enrollment!: Sequelize.HasManyCreateAssociationMixin<course_enrollments>;
  removeCourse_enrollment!: Sequelize.HasManyRemoveAssociationMixin<course_enrollments, course_enrollmentsId>;
  removeCourse_enrollments!: Sequelize.HasManyRemoveAssociationsMixin<course_enrollments, course_enrollmentsId>;
  hasCourse_enrollment!: Sequelize.HasManyHasAssociationMixin<course_enrollments, course_enrollmentsId>;
  hasCourse_enrollments!: Sequelize.HasManyHasAssociationsMixin<course_enrollments, course_enrollmentsId>;
  countCourse_enrollments!: Sequelize.HasManyCountAssociationsMixin;
  // space_courses hasMany course_sections via course_id
  course_sections!: course_sections[];
  getCourse_sections!: Sequelize.HasManyGetAssociationsMixin<course_sections>;
  setCourse_sections!: Sequelize.HasManySetAssociationsMixin<course_sections, course_sectionsId>;
  addCourse_section!: Sequelize.HasManyAddAssociationMixin<course_sections, course_sectionsId>;
  addCourse_sections!: Sequelize.HasManyAddAssociationsMixin<course_sections, course_sectionsId>;
  createCourse_section!: Sequelize.HasManyCreateAssociationMixin<course_sections>;
  removeCourse_section!: Sequelize.HasManyRemoveAssociationMixin<course_sections, course_sectionsId>;
  removeCourse_sections!: Sequelize.HasManyRemoveAssociationsMixin<course_sections, course_sectionsId>;
  hasCourse_section!: Sequelize.HasManyHasAssociationMixin<course_sections, course_sectionsId>;
  hasCourse_sections!: Sequelize.HasManyHasAssociationsMixin<course_sections, course_sectionsId>;
  countCourse_sections!: Sequelize.HasManyCountAssociationsMixin;
  // space_courses hasMany course_waitlist via course_id
  course_waitlists!: course_waitlist[];
  getCourse_waitlists!: Sequelize.HasManyGetAssociationsMixin<course_waitlist>;
  setCourse_waitlists!: Sequelize.HasManySetAssociationsMixin<course_waitlist, course_waitlistId>;
  addCourse_waitlist!: Sequelize.HasManyAddAssociationMixin<course_waitlist, course_waitlistId>;
  addCourse_waitlists!: Sequelize.HasManyAddAssociationsMixin<course_waitlist, course_waitlistId>;
  createCourse_waitlist!: Sequelize.HasManyCreateAssociationMixin<course_waitlist>;
  removeCourse_waitlist!: Sequelize.HasManyRemoveAssociationMixin<course_waitlist, course_waitlistId>;
  removeCourse_waitlists!: Sequelize.HasManyRemoveAssociationsMixin<course_waitlist, course_waitlistId>;
  hasCourse_waitlist!: Sequelize.HasManyHasAssociationMixin<course_waitlist, course_waitlistId>;
  hasCourse_waitlists!: Sequelize.HasManyHasAssociationsMixin<course_waitlist, course_waitlistId>;
  countCourse_waitlists!: Sequelize.HasManyCountAssociationsMixin;
  // space_courses hasMany space_course_topics via space_cource_id
  space_course_topics!: space_course_topics[];
  getSpace_course_topics!: Sequelize.HasManyGetAssociationsMixin<space_course_topics>;
  setSpace_course_topics!: Sequelize.HasManySetAssociationsMixin<space_course_topics, space_course_topicsId>;
  addSpace_course_topic!: Sequelize.HasManyAddAssociationMixin<space_course_topics, space_course_topicsId>;
  addSpace_course_topics!: Sequelize.HasManyAddAssociationsMixin<space_course_topics, space_course_topicsId>;
  createSpace_course_topic!: Sequelize.HasManyCreateAssociationMixin<space_course_topics>;
  removeSpace_course_topic!: Sequelize.HasManyRemoveAssociationMixin<space_course_topics, space_course_topicsId>;
  removeSpace_course_topics!: Sequelize.HasManyRemoveAssociationsMixin<space_course_topics, space_course_topicsId>;
  hasSpace_course_topic!: Sequelize.HasManyHasAssociationMixin<space_course_topics, space_course_topicsId>;
  hasSpace_course_topics!: Sequelize.HasManyHasAssociationsMixin<space_course_topics, space_course_topicsId>;
  countSpace_course_topics!: Sequelize.HasManyCountAssociationsMixin;
  // space_courses belongsTo spaces via space_id
  space!: spaces;
  getSpace!: Sequelize.BelongsToGetAssociationMixin<spaces>;
  setSpace!: Sequelize.BelongsToSetAssociationMixin<spaces, spacesId>;
  createSpace!: Sequelize.BelongsToCreateAssociationMixin<spaces>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_courses {
    return space_courses.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    space_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'spaces',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    course_type: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'course_execution',
        key: 'id'
      }
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    is_published: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'space_courses',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_courses_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
