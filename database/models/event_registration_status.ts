import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { event_registrations, event_registrationsId } from './event_registrations';

export interface event_registration_statusAttributes {
  id: number;
  status?: string;
}

export type event_registration_statusPk = "id";
export type event_registration_statusId = event_registration_status[event_registration_statusPk];
export type event_registration_statusOptionalAttributes = "id" | "status";
export type event_registration_statusCreationAttributes = Optional<event_registration_statusAttributes, event_registration_statusOptionalAttributes>;

export class event_registration_status extends Model<event_registration_statusAttributes, event_registration_statusCreationAttributes> implements event_registration_statusAttributes {
  id!: number;
  status?: string;

  // event_registration_status hasMany event_registrations via status
  event_registrations!: event_registrations[];
  getEvent_registrations!: Sequelize.HasManyGetAssociationsMixin<event_registrations>;
  setEvent_registrations!: Sequelize.HasManySetAssociationsMixin<event_registrations, event_registrationsId>;
  addEvent_registration!: Sequelize.HasManyAddAssociationMixin<event_registrations, event_registrationsId>;
  addEvent_registrations!: Sequelize.HasManyAddAssociationsMixin<event_registrations, event_registrationsId>;
  createEvent_registration!: Sequelize.HasManyCreateAssociationMixin<event_registrations>;
  removeEvent_registration!: Sequelize.HasManyRemoveAssociationMixin<event_registrations, event_registrationsId>;
  removeEvent_registrations!: Sequelize.HasManyRemoveAssociationsMixin<event_registrations, event_registrationsId>;
  hasEvent_registration!: Sequelize.HasManyHasAssociationMixin<event_registrations, event_registrationsId>;
  hasEvent_registrations!: Sequelize.HasManyHasAssociationsMixin<event_registrations, event_registrationsId>;
  countEvent_registrations!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof event_registration_status {
    return event_registration_status.init({
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
    tableName: 'event_registration_status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "event_registration_status_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
