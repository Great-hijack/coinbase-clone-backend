/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("history", {
    id: "id",
    exchangetime: { type: "numeric(255)", notNull: true },
    coinsymbol: { type: "varchar(8)", notNull: true },
    balance: { type: "float4" },
    profileid: { type: "varchar(100)", notNull: true },
  });

  pgm.createTable("users", {
    id: "id",
    name: { type: "varchar(255)" },
    profileid: { type: "varchar(255)" },
  });
};

exports.down = (pgm) => {};
