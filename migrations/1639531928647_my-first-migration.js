/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("history", {
    id: "id",
    exchangeTime: { type: "numeric(255)", notNull: true },
    coinSymbol: { type: "varchar(8)", notNull: true },
    balance: { type: "float4" },
    profileId: { type: "varchar(100)", notNull: true },
  });

  pgm.createTable("users", {
    id: "id",
    name: { type: "varchar(255)" },
    profileId: { type: "varchar(255)" },
  });
};

exports.down = (pgm) => {};
