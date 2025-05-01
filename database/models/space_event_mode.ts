import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { space_events, space_eventsId } from './space_events';

export interface space_event_modeAttributes {
  id: number;
  registration_type?: string;
  createdat?: Date;
  updateat?: Date;
}

export type space_event_modePk = "id";
export type space_event_modeId = space_event_mode[space_event_modePk];
export type space_event_modeOptionalAttributes = "id" | "registration_type" | "createdat" | "updateat";
export type space_event_modeCreationAttributes = Optional<space_event_modeAttributes, space_event_modeOptionalAttributes>;

export class space_event_mode extends Model<space_event_modeAttributes, space_event_modeCreationAttributes> implements space_event_modeAttributes {
  id!: number;
  registration_type?: string;
  createdat?: Date;
  updateat?: Date;

  // space_event_mode hasMany space_events via registration_type
  space_events!: space_events[];
  getSpace_events!: Sequelize.HasManyGetAssociationsMixin<space_events>;
  setSpace_events!: Sequelize.HasManySetAssociationsMixin<space_events, space_eventsId>;
  addSpace_event!: Sequelize.HasManyAddAssociationMixin<space_events, space_eventsId>;
  addSpace_events!: Sequelize.HasManyAddAssociationsMixin<space_events, space_eventsId>;
  createSpace_event!: Sequelize.HasManyCreateAssociationMixin<space_events>;
  removeSpace_event!: Sequelize.HasManyRemoveAssociationMixin<space_events, space_eventsId>;
  removeSpace_events!: Sequelize.HasManyRemoveAssociationsMixin<space_events, space_eventsId>;
  hasSpace_event!: Sequelize.HasManyHasAssociationMixin<space_events, space_eventsId>;
  hasSpace_events!: Sequelize.HasManyHasAssociationsMixin<space_events, space_eventsId>;
  countSpace_events!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof space_event_mode {
    return space_event_mode.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    registration_type: {
      type: DataTypes.STRING(50),
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
    tableName: 'space_event_mode',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "space_event_mode_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
