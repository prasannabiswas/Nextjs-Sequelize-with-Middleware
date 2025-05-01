import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { access_groups, access_groupsId } from './access_groups';
import type { spaces, spacesId } from './spaces';

export interface access_group_spacesAttributes {
  id: number;
  access_group_id?: number;
  space_id?: number;
  added_at?: Date;
}

export type access_group_spacesPk = "id";
export type access_group_spacesId = access_group_spaces[access_group_spacesPk];
export type access_group_spacesOptionalAttributes = "id" | "access_group_id" | "space_id" | "added_at";
export type access_group_spacesCreationAttributes = Optional<access_group_spacesAttributes, access_group_spacesOptionalAttributes>;

export class access_group_spaces extends Model<access_group_spacesAttributes, access_group_spacesCreationAttributes> implements access_group_spacesAttributes {
  id!: number;
  access_group_id?: number;
  space_id?: number;
  added_at?: Date;

  // access_group_spaces belongsTo access_groups via access_group_id
  access_group!: access_groups;
  getAccess_group!: Sequelize.BelongsToGetAssociationMixin<access_groups>;
  setAccess_group!: Sequelize.BelongsToSetAssociationMixin<access_groups, access_groupsId>;
  createAccess_group!: Sequelize.BelongsToCreateAssociationMixin<access_groups>;
  // access_group_spaces belongsTo spaces via space_id
  space!: spaces;
  getSpace!: Sequelize.BelongsToGetAssociationMixin<spaces>;
  setSpace!: Sequelize.BelongsToSetAssociationMixin<spaces, spacesId>;
  createSpace!: Sequelize.BelongsToCreateAssociationMixin<spaces>;

  static initModel(sequelize: Sequelize.Sequelize): typeof access_group_spaces {
    return access_group_spaces.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    access_group_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'access_groups',
        key: 'id'
      },
      unique: "access_group_spaces_access_group_id_space_id_key"
    },
    space_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'spaces',
        key: 'id'
      },
      unique: "access_group_spaces_access_group_id_space_id_key"
    },
    added_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'access_group_spaces',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "access_group_spaces_access_group_id_space_id_key",
        unique: true,
        fields: [
          { name: "access_group_id" },
          { name: "space_id" },
        ]
      },
      {
        name: "access_group_spaces_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
