import { Model, Sequelize, DataTypes } from "sequelize";

export default class Transactions extends Model {
  public id!: number;
  public coinsymbol!: string;
  public issent!: boolean; // true: sent, false:received
  public balance?: number;
  public transactionid!: string;
  public exchangetime?: number;
  public tos!: string;
  public froms!: string;
  public profileid!: string;
  public types!: string;
}
export const TransactionsMap = (sequelize: Sequelize) => {
  Transactions.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      coinsymbol: {
        type: DataTypes.STRING(8),
      },
      issent: {
        type: DataTypes.BOOLEAN,
      },
      balance: {
        type: DataTypes.NUMBER,
      },
      transactionid: {
        type: DataTypes.STRING,
      },
      exchangetime: {
        type: DataTypes.INTEGER,
      },
      tos: {
        type: DataTypes.STRING,
      },
      froms: {
        type: DataTypes.STRING,
      },
      profileid: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      types: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: "transactions",
      timestamps: false,
    }
  );
  Transactions.sync();
};
