import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { notifications, notificationsId } from './notifications';

export interface notification_typeAttributes {
  id: number;
  type?: string;
}

export type notification_typePk = "id";
export type notification_typeId = notification_type[notification_typePk];
export type notification_typeOptionalAttributes = "id" | "type";
export type notification_typeCreationAttributes = Optional<notification_typeAttributes, notification_typeOptionalAttributes>;

export class notification_type extends Model<notification_typeAttributes, notification_typeCreationAttributes> implements notification_typeAttributes {
  id!: number;
  type?: string;

  // notification_type hasMany notifications via type
  notifications!: notifications[];
  getNotifications!: Sequelize.HasManyGetAssociationsMixin<notifications>;
  setNotifications!: Sequelize.HasManySetAssociationsMixin<notifications, notificationsId>;
  addNotification!: Sequelize.HasManyAddAssociationMixin<notifications, notificationsId>;
  addNotifications!: Sequelize.HasManyAddAssociationsMixin<notifications, notificationsId>;
  createNotification!: Sequelize.HasManyCreateAssociationMixin<notifications>;
  removeNotification!: Sequelize.HasManyRemoveAssociationMixin<notifications, notificationsId>;
  removeNotifications!: Sequelize.HasManyRemoveAssociationsMixin<notifications, notificationsId>;
  hasNotification!: Sequelize.HasManyHasAssociationMixin<notifications, notificationsId>;
  hasNotifications!: Sequelize.HasManyHasAssociationsMixin<notifications, notificationsId>;
  countNotifications!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof notification_type {
    return notification_type.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'notification_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "notification_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
