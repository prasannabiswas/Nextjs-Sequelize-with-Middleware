import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { community_topics, community_topicsId } from './community_topics';
import type { event_instances, event_instancesId } from './event_instances';
import type { event_invitations, event_invitationsId } from './event_invitations';
import type { members, membersId } from './members';
import type { space_event_mode, space_event_modeId } from './space_event_mode';
import type { space_event_recuring_mode, space_event_recuring_modeId } from './space_event_recuring_mode';
import type { space_event_topics, space_event_topicsId } from './space_event_topics';
import type { spaces, spacesId } from './spaces';

export interface space_eventsAttributes {
  id: number;
  space_id: number;
  host_id: number;
  title: string;
  description?: string;
  location?: string;
  registration_type?: number;
  repeat_type?: number;
  createdat?: Date;
  updateat?: Date;
}

export type space_eventsPk = "id";
export type space_eventsId = space_events[space_eventsPk];
export type space_eventsOptionalAttributes = "id" | "description" | "location" | "registration_type" | "repeat_type" | "createdat" | "updateat";
export type space_eventsCreationAttributes = Optional<space_eventsAttributes, space_eventsOptionalAttributes>;

export class space_events extends Model<space_eventsAttributes, space_eventsCreationAttributes> implements space_eventsAttributes {
  id!: number;
  space_id!: number;
  host_id!: number;
  title!: string;
  description?: string;
  location?: string;
  registration_type?: number;
  repeat_type?: number;
  createdat?: Date;
  updateat?: Date;

  // space_events belongsTo members via host_id
  host!: members;
  getHost!: Sequelize.BelongsToGetAssociationMixin<members>;
  setHost!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createHost!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // space_events belongsTo space_event_mode via registration_type
  registration_type_space_event_mode!: space_event_mode;
  getRegistration_type_space_event_mode!: Sequelize.BelongsToGetAssociationMixin<space_event_mode>;
  setRegistration_type_space_event_mode!: Sequelize.BelongsToSetAssociationMixin<space_event_mode, space_event_modeId>;
  createRegistration_type_space_event_mode!: Sequelize.BelongsToCreateAssociationMixin<space_event_mode>;
  // space_events belongsTo space_event_recuring_mode via repeat_type
  repeat_type_space_event_recuring_mode!: space_event_recuring_mode;
  getRepeat_type_space_event_recuring_mode!: Sequelize.BelongsToGetAssociationMixin<space_event_recuring_mode>;
  setRepeat_type_space_event_recuring_mode!: Sequelize.BelongsToSetAssociationMixin<space_event_recuring_mode, space_event_recuring_modeId>;
  createRepeat_type_space_event_recuring_mode!: Sequelize.BelongsToCreateAssociationMixin<space_event_recuring_mode>;
  // space_events belongsToMany community_topics via space_event_id and community_topics_id
  community_topics_id_community_topics_space_event_topics!: community_topics[];
  getCommunity_topics_id_community_topics_space_event_topics!: Sequelize.BelongsToManyGetAssociationsMixin<community_topics>;
  setCommunity_topics_id_community_topics_space_event_topics!: Sequelize.BelongsToManySetAssociationsMixin<community_topics, community_topicsId>;
  addCommunity_topics_id_community_topics_space_event_topic!: Sequelize.BelongsToManyAddAssociationMixin<community_topics, community_topicsId>;
  addCommunity_topics_id_community_topics_space_event_topics!: Sequelize.BelongsToManyAddAssociationsMixin<community_topics, community_topicsId>;
  createCommunity_topics_id_community_topics_space_event_topic!: Sequelize.BelongsToManyCreateAssociationMixin<community_topics>;
  removeCommunity_topics_id_community_topics_space_event_topic!: Sequelize.BelongsToManyRemoveAssociationMixin<community_topics, community_topicsId>;
  removeCommunity_topics_id_community_topics_space_event_topics!: Sequelize.BelongsToManyRemoveAssociationsMixin<community_topics, community_topicsId>;
  hasCommunity_topics_id_community_topics_space_event_topic!: Sequelize.BelongsToManyHasAssociationMixin<community_topics, community_topicsId>;
  hasCommunity_topics_id_community_topics_space_event_topics!: Sequelize.BelongsToManyHasAssociationsMixin<community_topics, community_topicsId>;
  countCommunity_topics_id_community_topics_space_event_topics!: Sequelize.BelongsToManyCountAssociationsMixin;
  // space_events hasMany event_instances via space_event_id
  event_instances!: event_instances[];
  getEvent_instances!: Sequelize.HasManyGetAssociationsMixin<event_instances>;
  setEvent_instances!: Sequelize.HasManySetAssociationsMixin<event_instances, event_instancesId>;
  addEvent_instance!: Sequelize.HasManyAddAssociationMixin<event_instances, event_instancesId>;
  addEvent_instances!: Sequelize.HasManyAddAssociationsMixin<event_instances, event_instancesId>;
  createEvent_instance!: Sequelize.HasManyCreateAssociationMixin<event_instances>;
  removeEvent_instance!: Sequelize.HasManyRemoveAssociationMixin<event_instances, event_instancesId>;
  removeEvent_instances!: Sequelize.HasManyRemoveAssociationsMixin<event_instances, event_instancesId>;
  hasEvent_instance!: Sequelize.HasManyHasAssociationMixin<event_instances, event_instancesId>;
  hasEvent_instances!: Sequelize.HasManyHasAssociationsMixin<event_instances, event_instancesId>;
  countEvent_instances!: Sequelize.HasManyCountAssociationsMixin;
  // space_events hasMany event_invitations via event_id
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
  // space_events hasMany space_event_topics via space_event_id
  space_event_topics!: space_event_topics[];
  getSpace_event_topics!: Sequelize.HasManyGetAssociationsMixin<space_event_topics>;
  setSpace_event_topics!: Sequelize.HasManySetAssociationsMixin<space_event_topics, space_event_topicsId>;
  addSpace_event_topic!: Sequelize.HasManyAddAssociationMixin<space_event_topics, space_event_topicsId>;
  addSpace_event_topics!: Sequelize.HasManyAddAssociationsMixin<space_event_topics, space_event_topicsId>;
  createSpace_event_topic!: Sequelize.HasManyCreateAssociationMixin<space_event_topics>;
  removeSpace_event_topic!: Sequelize.HasManyRemoveAssociationMixin<space_event_topics, space_event_topicsId>;
  removeSpace_event_topics!: Sequelize.HasManyRemoveAssociationsMixin<space_event_topics, space_event_topicsId>;
  hasSpace_event_topic!: Sequelize.HasManyHasAssociationMixin<space_event_topics, space_event_topicsId>;
  hasSpace_event_topics!: Sequelize.HasManyHasAssociationsMixin<space_event_topics, space_event_topicsId>;
  countSpace_event_topics!: Sequelize.HasManyCountAssociationsMixin;
  // space_events belongsTo spaces via space_id
  space!: spaces;
  getSpace!: Sequelize.BelongsToGetAssociationMixin<spaces>;
  setSpace!: Sequelize.BelongsToSetAssociationMixin<spaces, spacesId>;
  createSpace!: Sequelize.BelongsToCreateAssociationMixin<spaces>;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_events {
    return space_events.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    space_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'spaces',
        key: 'id'
      }
    },
    host_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'members',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    registration_type: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'space_event_mode',
        key: 'id'
      }
    },
    repeat_type: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'space_event_recuring_mode',
        key: 'id'
      }
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
    tableName: 'space_events',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_events_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
