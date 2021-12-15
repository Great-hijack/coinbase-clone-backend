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
      exchangetime: {
        type: DataTypes.INTEGER,
      },
      coinsymbol: {
        type: DataTypes.STRING(8),
      },
      balance: {
        type: DataTypes.NUMBER,
      },
      profileid: {
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
