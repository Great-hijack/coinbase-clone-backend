/* eslint-disable camelcase */
let historyValue = `INSERT INTO "public"."transactions"(exchangetime,issent, coinsymbol,balance,profileid,transactionid, tos, froms,types) VALUES (1638689108, false, 'ETH', 0.3, '75fi73Fk', '0x556b7c434550e853adf35d62ef20aa517da3939e45981d92f01aed3cb4deff10','0x6ec88a2cb932eb46dfda0280c0eadb93b6eca13b', '0xd9fed8946b3d524b77fb8908b80d8ed4e3c3ee52', 'Private Key Wallet');

INSERT INTO "public"."transactions"(exchangetime,issent, coinsymbol,balance,profileid,transactionid, tos, froms,types) VALUES (1639791207, false, 'ETH', 0.3, '75fi73Fk', '0x556b7c434550e853adf35d62ef20aa517da3939e45981d92f01aed3cb4deff11','0x6ec88a2cb932eb46dfda0280c0eadb93b6eca13b', '0xd9fed8946b3d524b77fb8908b80d8ed4e3c3ee5x', 'Private Key Wallet');

INSERT INTO "public"."transactions"(exchangetime,issent, coinsymbol,balance,profileid,transactionid, tos, froms,types) VALUES (1639731207, false, 'ETH', 0.3, '75fi73Fk', '0x556b7c434550e853adf35d62ef20aa517da3939e45981d92f01aed3cb4deff1f','0x6ec88a2cb932eb46dfda0280c0eadb93b6eca13b', '0xd9fed8946b3d524b77fb8908b80d8ed4e3c3ee5q', 'Trading Account');

INSERT INTO "public"."transactions"(exchangetime,issent, coinsymbol,balance,profileid,transactionid, tos, froms,types) VALUES (1639704807, true, 'BTC', 0.3, '75fi73Fk', '0x556b7c434550e853adf35d62ef20aa517da3939e45981d92f01aed3cb4deff1s','0x6ec88a2cb932eb46dfda0280c0eadb93b6eca13b', '0xd9fed8946b3d524b77fb8908b80d8ed4e3c3ee5j', 'Private Key Wallet');

INSERT INTO "public"."transactions"(exchangetime,issent, coinsymbol,balance,profileid,transactionid, tos, froms,types) VALUES (1639618407, false, 'BTC', 0.3, '75fi73Fk', '0x556b7c434550e853adf35d62ef20aa517da3939e45981d92f01aed3cb4deff1c','0x6ec88a2cb932eb46dfda0280c0eadb93b6eca13b', '0xd9fed8946b3d524b77fb8908b80d8ed4e3c3ee5s', 'Private Key Wallet');

INSERT INTO "public"."transactions"(exchangetime,issent, coinsymbol,balance,profileid,transactionid, tos, froms,types) VALUES (1639532007, false, 'ETH', 0.3, '75fi73Fk', '0x556b7c434550e853adf35d62ef20aa517da3939e45981d92f01aed3cb4deff1z','0x6ec88a2cb932eb46dfda0280c0eadb93b6eca13b', '0xd9fed8946b3d524b77fb8908b80d8ed4e3c3ee5m', 'Private Key Wallet');

INSERT INTO "public"."transactions"(exchangetime,issent, coinsymbol,balance,profileid,transactionid, tos, froms,types) VALUES (1639445607, true, 'ETH', 0.3, '75fi73Fk', '0x556b7c434550e853adf35d62ef20aa517da3939e45981d92f01aed3cb4deff1a','0x6ec88a2cb932eb46dfda0280c0eadb93b6eca13b', '0xd9fed8946b3d524b77fb8908b80d8ed4e3ceee52', 'Private Key Wallet');

INSERT INTO "public"."transactions"(exchangetime,issent, coinsymbol,balance,profileid,transactionid, tos, froms,types) VALUES (1639442607, true, 'ETH', 0.3, '75fi73Fk', '0x556b7c434550e853adf35d62ef20aa51eda3939e45981d92f01aed3cb4deff10','0x6ec88a2cb932eb46dfda0280c0eadb93b6eca13b', '0xd9fed8946b3d524b77fb8908b80d8ed4e3c3ee5f', 'Trading Account');
 `;

let userValue = `INSERT INTO "public"."users"(
  name, profileid,notificationcount) VALUES ('test', '75fi73Fk',2);`;

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.db.query(userValue);
  pgm.db.query(historyValue);
};

exports.down = (pgm) => {};
