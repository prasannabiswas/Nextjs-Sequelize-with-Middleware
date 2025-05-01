import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { course_enrollments, course_enrollmentsId } from './course_enrollments';
import type { course_lesson_comments, course_lesson_commentsId } from './course_lesson_comments';
import type { course_lesson_completions, course_lesson_completionsId } from './course_lesson_completions';
import type { course_lesson_default_tab, course_lesson_default_tabId } from './course_lesson_default_tab';
import type { course_lesson_files, course_lesson_filesId } from './course_lesson_files';
import type { course_lesson_status, course_lesson_statusId } from './course_lesson_status';
import type { course_quizzes, course_quizzesId } from './course_quizzes';
import type { course_sections, course_sectionsId } from './course_sections';

export interface course_lessonsAttributes {
  id: number;
  section_id?: number;
  title: string;
  content?: string;
  media_url?: string;
  status?: number;
  enable_comments?: boolean;
  enable_featured_media?: boolean;
  enforce_video_completion?: boolean;
  auto_advance_after_video?: boolean;
  default_tab?: number;
  position?: number;
  createdat?: Date;
  updatedat?: Date;
}

export type course_lessonsPk = "id";
export type course_lessonsId = course_lessons[course_lessonsPk];
export type course_lessonsOptionalAttributes = "id" | "section_id" | "content" | "media_url" | "status" | "enable_comments" | "enable_featured_media" | "enforce_video_completion" | "auto_advance_after_video" | "default_tab" | "position" | "createdat" | "updatedat";
export type course_lessonsCreationAttributes = Optional<course_lessonsAttributes, course_lessonsOptionalAttributes>;

export class course_lessons extends Model<course_lessonsAttributes, course_lessonsCreationAttributes> implements course_lessonsAttributes {
  id!: number;
  section_id?: number;
  title!: string;
  content?: string;
  media_url?: string;
  status?: number;
  enable_comments?: boolean;
  enable_featured_media?: boolean;
  enforce_video_completion?: boolean;
  auto_advance_after_video?: boolean;
  default_tab?: number;
  position?: number;
  createdat?: Date;
  updatedat?: Date;

  // course_lessons belongsTo course_lesson_default_tab via default_tab
  default_tab_course_lesson_default_tab!: course_lesson_default_tab;
  getDefault_tab_course_lesson_default_tab!: Sequelize.BelongsToGetAssociationMixin<course_lesson_default_tab>;
  setDefault_tab_course_lesson_default_tab!: Sequelize.BelongsToSetAssociationMixin<course_lesson_default_tab, course_lesson_default_tabId>;
  createDefault_tab_course_lesson_default_tab!: Sequelize.BelongsToCreateAssociationMixin<course_lesson_default_tab>;
  // course_lessons belongsTo course_lesson_status via status
  status_course_lesson_status!: course_lesson_status;
  getStatus_course_lesson_status!: Sequelize.BelongsToGetAssociationMixin<course_lesson_status>;
  setStatus_course_lesson_status!: Sequelize.BelongsToSetAssociationMixin<course_lesson_status, course_lesson_statusId>;
  createStatus_course_lesson_status!: Sequelize.BelongsToCreateAssociationMixin<course_lesson_status>;
  // course_lessons hasMany course_enrollments via last_completed_lesson_id
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
  // course_lessons hasMany course_lesson_comments via lesson_id
  course_lesson_comments!: course_lesson_comments[];
  getCourse_lesson_comments!: Sequelize.HasManyGetAssociationsMixin<course_lesson_comments>;
  setCourse_lesson_comments!: Sequelize.HasManySetAssociationsMixin<course_lesson_comments, course_lesson_commentsId>;
  addCourse_lesson_comment!: Sequelize.HasManyAddAssociationMixin<course_lesson_comments, course_lesson_commentsId>;
  addCourse_lesson_comments!: Sequelize.HasManyAddAssociationsMixin<course_lesson_comments, course_lesson_commentsId>;
  createCourse_lesson_comment!: Sequelize.HasManyCreateAssociationMixin<course_lesson_comments>;
  removeCourse_lesson_comment!: Sequelize.HasManyRemoveAssociationMixin<course_lesson_comments, course_lesson_commentsId>;
  removeCourse_lesson_comments!: Sequelize.HasManyRemoveAssociationsMixin<course_lesson_comments, course_lesson_commentsId>;
  hasCourse_lesson_comment!: Sequelize.HasManyHasAssociationMixin<course_lesson_comments, course_lesson_commentsId>;
  hasCourse_lesson_comments!: Sequelize.HasManyHasAssociationsMixin<course_lesson_comments, course_lesson_commentsId>;
  countCourse_lesson_comments!: Sequelize.HasManyCountAssociationsMixin;
  // course_lessons hasMany course_lesson_completions via lesson_id
  course_lesson_completions!: course_lesson_completions[];
  getCourse_lesson_completions!: Sequelize.HasManyGetAssociationsMixin<course_lesson_completions>;
  setCourse_lesson_completions!: Sequelize.HasManySetAssociationsMixin<course_lesson_completions, course_lesson_completionsId>;
  addCourse_lesson_completion!: Sequelize.HasManyAddAssociationMixin<course_lesson_completions, course_lesson_completionsId>;
  addCourse_lesson_completions!: Sequelize.HasManyAddAssociationsMixin<course_lesson_completions, course_lesson_completionsId>;
  createCourse_lesson_completion!: Sequelize.HasManyCreateAssociationMixin<course_lesson_completions>;
  removeCourse_lesson_completion!: Sequelize.HasManyRemoveAssociationMixin<course_lesson_completions, course_lesson_completionsId>;
  removeCourse_lesson_completions!: Sequelize.HasManyRemoveAssociationsMixin<course_lesson_completions, course_lesson_completionsId>;
  hasCourse_lesson_completion!: Sequelize.HasManyHasAssociationMixin<course_lesson_completions, course_lesson_completionsId>;
  hasCourse_lesson_completions!: Sequelize.HasManyHasAssociationsMixin<course_lesson_completions, course_lesson_completionsId>;
  countCourse_lesson_completions!: Sequelize.HasManyCountAssociationsMixin;
  // course_lessons hasMany course_lesson_files via lesson_id
  course_lesson_files!: course_lesson_files[];
  getCourse_lesson_files!: Sequelize.HasManyGetAssociationsMixin<course_lesson_files>;
  setCourse_lesson_files!: Sequelize.HasManySetAssociationsMixin<course_lesson_files, course_lesson_filesId>;
  addCourse_lesson_file!: Sequelize.HasManyAddAssociationMixin<course_lesson_files, course_lesson_filesId>;
  addCourse_lesson_files!: Sequelize.HasManyAddAssociationsMixin<course_lesson_files, course_lesson_filesId>;
  createCourse_lesson_file!: Sequelize.HasManyCreateAssociationMixin<course_lesson_files>;
  removeCourse_lesson_file!: Sequelize.HasManyRemoveAssociationMixin<course_lesson_files, course_lesson_filesId>;
  removeCourse_lesson_files!: Sequelize.HasManyRemoveAssociationsMixin<course_lesson_files, course_lesson_filesId>;
  hasCourse_lesson_file!: Sequelize.HasManyHasAssociationMixin<course_lesson_files, course_lesson_filesId>;
  hasCourse_lesson_files!: Sequelize.HasManyHasAssociationsMixin<course_lesson_files, course_lesson_filesId>;
  countCourse_lesson_files!: Sequelize.HasManyCountAssociationsMixin;
  // course_lessons hasMany course_quizzes via lesson_id
  course_quizzes!: course_quizzes[];
  getCourse_quizzes!: Sequelize.HasManyGetAssociationsMixin<course_quizzes>;
  setCourse_quizzes!: Sequelize.HasManySetAssociationsMixin<course_quizzes, course_quizzesId>;
  addCourse_quiz!: Sequelize.HasManyAddAssociationMixin<course_quizzes, course_quizzesId>;
  addCourse_quizzes!: Sequelize.HasManyAddAssociationsMixin<course_quizzes, course_quizzesId>;
  createCourse_quiz!: Sequelize.HasManyCreateAssociationMixin<course_quizzes>;
  removeCourse_quiz!: Sequelize.HasManyRemoveAssociationMixin<course_quizzes, course_quizzesId>;
  removeCourse_quizzes!: Sequelize.HasManyRemoveAssociationsMixin<course_quizzes, course_quizzesId>;
  hasCourse_quiz!: Sequelize.HasManyHasAssociationMixin<course_quizzes, course_quizzesId>;
  hasCourse_quizzes!: Sequelize.HasManyHasAssociationsMixin<course_quizzes, course_quizzesId>;
  countCourse_quizzes!: Sequelize.HasManyCountAssociationsMixin;
  // course_lessons belongsTo course_sections via section_id
  section!: course_sections;
  getSection!: Sequelize.BelongsToGetAssociationMixin<course_sections>;
  setSection!: Sequelize.BelongsToSetAssociationMixin<course_sections, course_sectionsId>;
  createSection!: Sequelize.BelongsToCreateAssociationMixin<course_sections>;

  static initModel(sequelize: Sequelize.Sequelize): typeof course_lessons {
    return course_lessons.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    section_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'course_sections',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    media_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'course_lesson_status',
        key: 'id'
      }
    },
    enable_comments: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    enable_featured_media: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    enforce_video_completion: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    auto_advance_after_video: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    default_tab: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'course_lesson_default_tab',
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
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'course_lessons',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "course_lessons_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
