/* eslint-disable camelcase */
let historyValue = `INSERT INTO "public"."history"(exchangetime, coinsymbol,balance,profileid) VALUES (1638689108, 'ETH', 0.3, '75fi73Fk');
INSERT INTO "public"."history"(exchangetime, coinsymbol,balance,profileid) VALUES (1636374120, 'ETH', 0.12, '75fi73Fk');
INSERT INTO "public"."history"(exchangetime, coinsymbol,balance,profileid) VALUES (1636152840, 'ETH', -0.02, '75fi73Fk');
INSERT INTO "public"."history"(exchangetime, coinsymbol,balance,profileid) VALUES (1636146240, 'BTC', 0.012, '75fi73Fk');`;
let userValue = `INSERT INTO "public"."users"(
  name, profileid,notificationcount) VALUES ('test', '75fi73Fk',2);`;
exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.db.query(userValue);
  pgm.db.query(historyValue);
};

exports.down = (pgm) => {};
