import { Model, Sequelize, DataTypes } from "sequelize";

export default class User extends Model {
  public id?: number;
  public name!: string;
  public profileid?: string;
  public notificationcount?: number;
}
export const UserMap = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
      },
      profileid: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      notificationcount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: "users",
      timestamps: false,
    }
  );
  User.sync();
};
