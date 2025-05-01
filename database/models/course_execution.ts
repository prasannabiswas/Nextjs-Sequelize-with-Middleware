import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { space_courses, space_coursesId } from './space_courses';

export interface course_executionAttributes {
  id: number;
  execution_type?: string;
  createdat?: Date;
  updateat?: Date;
}

export type course_executionPk = "id";
export type course_executionId = course_execution[course_executionPk];
export type course_executionOptionalAttributes = "id" | "execution_type" | "createdat" | "updateat";
export type course_executionCreationAttributes = Optional<course_executionAttributes, course_executionOptionalAttributes>;

export class course_execution extends Model<course_executionAttributes, course_executionCreationAttributes> implements course_executionAttributes {
  id!: number;
  execution_type?: string;
  createdat?: Date;
  updateat?: Date;

  // course_execution hasMany space_courses via course_type
  space_courses!: space_courses[];
  getSpace_courses!: Sequelize.HasManyGetAssociationsMixin<space_courses>;
  setSpace_courses!: Sequelize.HasManySetAssociationsMixin<space_courses, space_coursesId>;
  addSpace_course!: Sequelize.HasManyAddAssociationMixin<space_courses, space_coursesId>;
  addSpace_courses!: Sequelize.HasManyAddAssociationsMixin<space_courses, space_coursesId>;
  createSpace_course!: Sequelize.HasManyCreateAssociationMixin<space_courses>;
  removeSpace_course!: Sequelize.HasManyRemoveAssociationMixin<space_courses, space_coursesId>;
  removeSpace_courses!: Sequelize.HasManyRemoveAssociationsMixin<space_courses, space_coursesId>;
  hasSpace_course!: Sequelize.HasManyHasAssociationMixin<space_courses, space_coursesId>;
  hasSpace_courses!: Sequelize.HasManyHasAssociationsMixin<space_courses, space_coursesId>;
  countSpace_courses!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof course_execution {
    return course_execution.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    execution_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    updateat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'course_execution',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "course_execution_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
