import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { members, membersId } from './members';
import type { notification_type, notification_typeId } from './notification_type';

export interface notificationsAttributes {
  id: number;
  member_id?: number;
  type?: number;
  data?: object;
  read?: boolean;
  created_at?: Date;
}

export type notificationsPk = "id";
export type notificationsId = notifications[notificationsPk];
export type notificationsOptionalAttributes = "id" | "member_id" | "type" | "data" | "read" | "created_at";
export type notificationsCreationAttributes = Optional<notificationsAttributes, notificationsOptionalAttributes>;

export class notifications extends Model<notificationsAttributes, notificationsCreationAttributes> implements notificationsAttributes {
  id!: number;
  member_id?: number;
  type?: number;
  data?: object;
  read?: boolean;
  created_at?: Date;

  // notifications belongsTo members via member_id
  member!: members;
  getMember!: Sequelize.BelongsToGetAssociationMixin<members>;
  setMember!: Sequelize.BelongsToSetAssociationMixin<members, membersId>;
  createMember!: Sequelize.BelongsToCreateAssociationMixin<members>;
  // notifications belongsTo notification_type via type
  type_notification_type!: notification_type;
  getType_notification_type!: Sequelize.BelongsToGetAssociationMixin<notification_type>;
  setType_notification_type!: Sequelize.BelongsToSetAssociationMixin<notification_type, notification_typeId>;
  createType_notification_type!: Sequelize.BelongsToCreateAssociationMixin<notification_type>;

  static initModel(sequelize: Sequelize.Sequelize): typeof notifications {
    return notifications.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'notification_type',
        key: 'id'
      }
    },
    data: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    read: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'notifications',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "notifications_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
