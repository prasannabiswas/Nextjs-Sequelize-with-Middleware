import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { event_instances, event_instancesId } from './event_instances';
import type { event_registration_status, event_registration_statusId } from './event_registration_status';
import type { event_registration_type, event_registration_typeId } from './event_registration_type';
import type { members, membersId } from './members';

export interface event_registrationsAttributes {
  id: number;
  event_instance_id?: number;
  member_id?: number;
  status?: number;
  registration_type?: number;
}

export type event_registrationsPk = "id";
export type event_registrationsId = event_registrations[event_registrationsPk];
export type event_registrationsOptionalAttributes = "id" | "event_instance_id" | "member_id" | "status" | "registration_type";
export type event_registrationsCreationAttributes = Optional<event_registrationsAttributes, event_registrationsOptionalAttributes>;

export class event_registrations extends Model<event_registrationsAttributes, event_registrationsCreationAttributes> implements event_registrationsAttributes {
  id!: number;
  event_instance_id?: number;
  member_id?: number;
  status?: number;
  registration_type?: number;

  // event_registrations belongsTo event_instances via event_instance_id
  event_instance!: event_instances;
  getEvent_instance!: Sequelize.BelongsToGetAssociationMixin<event_instances>;
  setEvent_instance!: Sequelize.BelongsToSetAssociationMixin<event_instances, event_instancesId>;
  createEvent_instance!: Sequelize.BelongsToCreateAssociationMixin<event_instances>;
  // event_registrations belongsTo event_registration_status via status
  status_event_registration_status!: event_registration_status;
  getStatus_event_registration_status!: Sequelize.BelongsToGetAssociationMixin<event_registration_status>;
  setStatus_event_registration_status!: Sequelize.BelongsToSetAssociationMixin<event_registration_status, event_registration_statusId>;
  createStatus_event_registration_status!: Sequelize.BelongsToCreateAssociationMixin<event_registration_status>;
  // event_registrations belongsTo event_registration_type via registration_type
  registration_type_event_registration_type!: event_registration_type;
  getRegistration_type_event_registration_type!: Sequelize.BelongsToGetAssociationMixin<event_registration_type>;
  setRegistration_type_event_registration_type!: Sequelize.BelongsToSetAssociationMixin<event_registration_type, event_registration_typeId>;
  createRegistration_type_event_registration_type!: Sequelize.BelongsToCreateAssociationMixin<event_registration_type>;
  // event_registrations belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;

  static initModel(sequelize: Sequelize.Sequelize): typeof event_registrations {
    return event_registrations.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    event_instance_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'event_instances',
        key: 'id'
      }
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'event_registration_status',
        key: 'id'
      }
    },
    registration_type: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'event_registration_type',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'event_registrations',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "event_registrations_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
