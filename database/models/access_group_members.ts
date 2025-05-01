import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { access_groups, access_groupsId } from './access_groups';
import type { community_members, community_membersId } from './community_members';

export interface access_group_membersAttributes {
  id: number;
  access_group_id?: number;
  member_id?: number;
  joined_at?: Date;
}

export type access_group_membersPk = "id";
export type access_group_membersId = access_group_members[access_group_membersPk];
export type access_group_membersOptionalAttributes = "id" | "access_group_id" | "member_id" | "joined_at";
export type access_group_membersCreationAttributes = Optional<access_group_membersAttributes, access_group_membersOptionalAttributes>;

export class access_group_members extends Model<access_group_membersAttributes, access_group_membersCreationAttributes> implements access_group_membersAttributes {
  id!: number;
  access_group_id?: number;
  member_id?: number;
  joined_at?: Date;

  // access_group_members belongsTo access_groups via access_group_id
  access_group!: access_groups;
  getAccess_group!: Sequelize.BelongsToGetAssociationMixin<access_groups>;
  setAccess_group!: Sequelize.BelongsToSetAssociationMixin<access_groups, access_groupsId>;
  createAccess_group!: Sequelize.BelongsToCreateAssociationMixin<access_groups>;
  // access_group_members belongsTo community_members via member_id
  member!: community_members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<community_members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<community_members, community_membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<community_members>;

  static initModel(sequelize: Sequelize.Sequelize): typeof access_group_members {
    return access_group_members.init({
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
      unique: "access_group_members_access_group_id_member_id_key"
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'community_members',
        key: 'id'
      },
      unique: "access_group_members_access_group_id_member_id_key"
    },
    joined_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'access_group_members',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "access_group_members_access_group_id_member_id_key",
        unique: true,
        fields: [
          { name: "access_group_id" },
          { name: "member_id" },
        ]
      },
      {
        name: "access_group_members_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
