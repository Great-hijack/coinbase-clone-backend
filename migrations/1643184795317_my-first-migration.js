/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("transactions", {
    id: "id",
    coinsymbol: { type: "varchar(8)", notNull: true },
    issent: { type: "boolean" },
    balance: { type: "float4" },
    transactionid: { type: "varchar(255)", notNull: true },
    exchangetime: { type: "numeric(255)", notNull: true },
    tos: { type: "varchar(255)", notNull: true },
    froms: { type: "varchar(255)", notNull: true },
    profileid: { type: "varchar(255)", notNull: true },
    types: { type: "varchar(255)", notNull: false },
  });

  pgm.createTable("users", {
    id: "id",
    name: { type: "varchar(255)" },
    profileid: { type: "varchar(255)" },
    notificationcount: { type: "numeric(255)", notNull: true },
  });
};

exports.down = (pgm) => {};
