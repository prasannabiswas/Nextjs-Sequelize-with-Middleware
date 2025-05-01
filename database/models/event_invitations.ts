import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { event_invitations_status, event_invitations_statusId } from './event_invitations_status';
import type { members, membersId } from './members';
import type { space_events, space_eventsId } from './space_events';

export interface event_invitationsAttributes {
  id: number;
  event_id?: number;
  invited_member_id?: number;
  invited_by?: number;
  status?: number;
}

export type event_invitationsPk = "id";
export type event_invitationsId = event_invitations[event_invitationsPk];
export type event_invitationsOptionalAttributes = "id" | "event_id" | "invited_member_id" | "invited_by" | "status";
export type event_invitationsCreationAttributes = Optional<event_invitationsAttributes, event_invitationsOptionalAttributes>;

export class event_invitations extends Model<event_invitationsAttributes, event_invitationsCreationAttributes> implements event_invitationsAttributes {
  id!: number;
  event_id?: number;
  invited_member_id?: number;
  invited_by?: number;
  status?: number;

  // event_invitations belongsTo event_invitations_status via status
  status_event_invitations_status!: event_invitations_status;
  getStatus_event_invitations_status!: Sequelize.BelongsToGetAssociationMixin<event_invitations_status>;
  setStatus_event_invitations_status!: Sequelize.BelongsToSetAssociationMixin<event_invitations_status, event_invitations_statusId>;
  createStatus_event_invitations_status!: Sequelize.BelongsToCreateAssociationMixin<event_invitations_status>;
  // event_invitations belongsTo members via invited_by
  invited_by_member!: members;
  getInvited_by_member!: Sequelize.BelongsToGetAssociationMixin<members>;
  setInvited_by_member!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createInvited_by_member!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // event_invitations belongsTo members via invited_member_id
  invited_member!: members;
  getInvited_member!: Sequelize.BelongsToGetAssociationMixin<members>;
  setInvited_member!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createInvited_member!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // event_invitations belongsTo space_events via event_id
  event!: space_events;
  getEvent!: Sequelize.BelongsToGetAssociationMixin<space_events>;
  setEvent!: Sequelize.BelongsToSetAssociationMixin<space_events, space_eventsId>;
  createEvent!: Sequelize.BelongsToCreateAssociationMixin<space_events>;

  static initModel(sequelize: Sequelize.Sequelize): typeof event_invitations {
    return event_invitations.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    event_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'space_events',
        key: 'id'
      }
    },
    invited_member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      }
    },
    invited_by: {
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
        model: 'event_invitations_status',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'event_invitations',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "event_invitations_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
