import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { community_members, community_membersId } from './community_members';

export interface community_member_statusAttributes {
  id: number;
  name: string;
  createdat?: Date;
  updateat?: Date;
}

export type community_member_statusPk = "id";
export type community_member_statusId = community_member_status[community_member_statusPk];
export type community_member_statusOptionalAttributes = "id" | "createdat" | "updateat";
export type community_member_statusCreationAttributes = Optional<community_member_statusAttributes, community_member_statusOptionalAttributes>;

export class community_member_status extends Model<community_member_statusAttributes, community_member_statusCreationAttributes> implements community_member_statusAttributes {
  id!: number;
  name!: string;
  createdat?: Date;
  updateat?: Date;

  // community_member_status hasMany community_members via community_member_status_id
  community_members!: community_members[];
  getCommunity_members!: Sequelize.HasManyGetAssociationsMixin<community_members>;
  setCommunity_members!: Sequelize.HasManySetAssociationsMixin<community_members, community_membersId>;
  addCommunity_member!: Sequelize.HasManyAddAssociationMixin<community_members, community_membersId>;
  addCommunity_members!: Sequelize.HasManyAddAssociationsMixin<community_members, community_membersId>;
  createCommunity_member!: Sequelize.HasManyCreateAssociationMixin<community_members>;
  removeCommunity_member!: Sequelize.HasManyRemoveAssociationMixin<community_members, community_membersId>;
  removeCommunity_members!: Sequelize.HasManyRemoveAssociationsMixin<community_members, community_membersId>;
  hasCommunity_member!: Sequelize.HasManyHasAssociationMixin<community_members, community_membersId>;
  hasCommunity_members!: Sequelize.HasManyHasAssociationsMixin<community_members, community_membersId>;
  countCommunity_members!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof community_member_status {
    return community_member_status.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
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
    tableName: 'community_member_status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "community_member_status_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
