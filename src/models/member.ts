import { getSequelize } from '@/lib/db';
import { Model, DataTypes } from 'sequelize';


const sequelize = getSequelize();

export class Member extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public mobile_number?: string;
  public country_code?: string;
  public profile_image_url!: string;
  public gender!: 'male' | 'female' | 'other' | 'prefer_not_to_say';
  public address?: string;
  public city?: string;
  public state?: string;
  public country?: string;
  public pincode?: string;
  public is_online!: boolean;
  public last_seen?: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Member.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    mobile_number: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    country_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    profile_image_url: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'no-profile.png',
    },
    gender: {
      type: DataTypes.ENUM('male', 'female', 'other', 'prefer_not_to_say'),
      allowNull: false,
      defaultValue: 'prefer_not_to_say',
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    pincode: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    is_online: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    last_seen: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Member',
    tableName: 'members',
    indexes: [
      {
        unique: true,
        fields: ['country_code', 'mobile_number'],
        name: 'unique_mobile_per_country',
      },
    ],
  }
);
