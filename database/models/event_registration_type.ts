import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { event_registrations, event_registrationsId } from './event_registrations';

export interface event_registration_typeAttributes {
  id: number;
  registration_type?: string;
}

export type event_registration_typePk = "id";
export type event_registration_typeId = event_registration_type[event_registration_typePk];
export type event_registration_typeOptionalAttributes = "id" | "registration_type";
export type event_registration_typeCreationAttributes = Optional<event_registration_typeAttributes, event_registration_typeOptionalAttributes>;

export class event_registration_type extends Model<event_registration_typeAttributes, event_registration_typeCreationAttributes> implements event_registration_typeAttributes {
  id!: number;
  registration_type?: string;

  // event_registration_type hasMany event_registrations via registration_type
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

  static initModel(sequelize: Sequelize.Sequelize): typeof event_registration_type {
    return event_registration_type.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    registration_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'event_registration_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "event_registration_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
