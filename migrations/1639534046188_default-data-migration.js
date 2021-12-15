/* eslint-disable camelcase */
let historyValue = `INSERT INTO "public"."history" VALUES (4, 1638689108, 'ETH', 0.3, '75fi73Fk');
INSERT INTO "public"."history" VALUES (3, 1636374120, 'ETH', 0.12, '75fi73Fk');
INSERT INTO "public"."history" VALUES (2, 1636152840, 'ETH', -0.02, '75fi73Fk');
INSERT INTO "public"."history" VALUES (6, 1636146240, 'BTC', 0.012, '75fi73Fk');`;
let userValue = `INSERT INTO "public"."users" VALUES (1, 'test', '75fi73Fk');`;
exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.db.query(userValue);
  pgm.db.query(historyValue);
};

exports.down = (pgm) => {};
