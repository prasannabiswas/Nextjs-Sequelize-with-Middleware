import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { event_invitations, event_invitationsId } from './event_invitations';

export interface event_invitations_statusAttributes {
  id: number;
  status?: string;
}

export type event_invitations_statusPk = "id";
export type event_invitations_statusId = event_invitations_status[event_invitations_statusPk];
export type event_invitations_statusOptionalAttributes = "id" | "status";
export type event_invitations_statusCreationAttributes = Optional<event_invitations_statusAttributes, event_invitations_statusOptionalAttributes>;

export class event_invitations_status extends Model<event_invitations_statusAttributes, event_invitations_statusCreationAttributes> implements event_invitations_statusAttributes {
  id!: number;
  status?: string;

  // event_invitations_status hasMany event_invitations via status
  event_invitations!: event_invitations[];
  getEvent_invitations!: Sequelize.HasManyGetAssociationsMixin<event_invitations>;
  setEvent_invitations!: Sequelize.HasManySetAssociationsMixin<event_invitations, event_invitationsId>;
  addEvent_invitation!: Sequelize.HasManyAddAssociationMixin<event_invitations, event_invitationsId>;
  addEvent_invitations!: Sequelize.HasManyAddAssociationsMixin<event_invitations, event_invitationsId>;
  createEvent_invitation!: Sequelize.HasManyCreateAssociationMixin<event_invitations>;
  removeEvent_invitation!: Sequelize.HasManyRemoveAssociationMixin<event_invitations, event_invitationsId>;
  removeEvent_invitations!: Sequelize.HasManyRemoveAssociationsMixin<event_invitations, event_invitationsId>;
  hasEvent_invitation!: Sequelize.HasManyHasAssociationMixin<event_invitations, event_invitationsId>;
  hasEvent_invitations!: Sequelize.HasManyHasAssociationsMixin<event_invitations, event_invitationsId>;
  countEvent_invitations!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof event_invitations_status {
    return event_invitations_status.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'event_invitations_status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "event_invitations_status_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
