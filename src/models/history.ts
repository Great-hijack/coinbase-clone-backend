import { Model, Sequelize, DataTypes } from "sequelize";

export default class History extends Model {
  public exchangeTime?: number;
  public coinSymbol!: string;
  public balance?: number;
  public profileId!: string;
}
export const HistoryMap = (sequelize: Sequelize) => {
  History.init(
    {
      exchangeTime: {
        type: DataTypes.INTEGER,
      },
      coinSymbol: {
        type: DataTypes.STRING(8),
      },
      balance: {
        type: DataTypes.NUMBER,
      },
      profileId: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "history",
      timestamps: false,
    }
  );
  History.sync();
};
