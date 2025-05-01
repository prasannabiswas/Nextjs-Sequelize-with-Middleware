import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { event_registrations, event_registrationsId } from './event_registrations';
import type { space_events, space_eventsId } from './space_events';

export interface event_instancesAttributes {
  id: number;
  space_event_id: number;
  start_time: Date;
  end_time: Date;
  is_cancelled?: boolean;
  cancelled_reason?: string;
  createdat?: Date;
  updateat?: Date;
}

export type event_instancesPk = "id";
export type event_instancesId = event_instances[event_instancesPk];
export type event_instancesOptionalAttributes = "id" | "is_cancelled" | "cancelled_reason" | "createdat" | "updateat";
export type event_instancesCreationAttributes = Optional<event_instancesAttributes, event_instancesOptionalAttributes>;

export class event_instances extends Model<event_instancesAttributes, event_instancesCreationAttributes> implements event_instancesAttributes {
  id!: number;
  space_event_id!: number;
  start_time!: Date;
  end_time!: Date;
  is_cancelled?: boolean;
  cancelled_reason?: string;
  createdat?: Date;
  updateat?: Date;

  // event_instances hasMany event_registrations via event_instance_id
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
  // event_instances belongsTo space_events via space_event_id
  space_event!: space_events;
  getSpace_event!: Sequelize.BelongsToGetAssociationMixin<space_events>;
  setSpace_event!: Sequelize.BelongsToSetAssociationMixin<space_events, space_eventsId>;
  createSpace_event!: Sequelize.BelongsToCreateAssociationMixin<space_events>;

  static initModel(sequelize: Sequelize.Sequelize): typeof event_instances {
    return event_instances.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    space_event_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'space_events',
        key: 'id'
      }
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    is_cancelled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    cancelled_reason: {
      type: DataTypes.TEXT,
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
    tableName: 'event_instances',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "event_instances_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
