/* eslint-disable camelcase */
let historyValue = `INSERT INTO "public"."transactions"(exchangetime,issent, coinsymbol,balance,profileid,transactionid, tos, froms,types) VALUES (1638689108, false, 'ETH', 0.3, '75fi73Fk', '1e2d958a561b38a65395fe3fbe45e18c49ecd23f9205ca43782c1c75','bc1qag0a4crpg80du436ygjzm2nvemqn42w02vsxy', 'bc1q3aapesgvnwqu46hw4fcajpm3vmyym48w96k6uj', 'Private Key Wallet');

INSERT INTO "public"."transactions"(exchangetime,issent, coinsymbol,balance,profileid,transactionid, tos, froms,types) VALUES (1639791207, false, 'ETH', 0.3, '75fi73Fk', '1e2d958a561b38a65395fe3fbe45e18c49ecd23f9205ca43782c1c75','bc1qag0a4crpg80du436ygjzm2nvemqn42w02vsxy', 'bc1q3aapesgvnwqu46hw4fcajpm3vmyym48w96k6uj', 'Private Key Wallet');

INSERT INTO "public"."transactions"(exchangetime,issent, coinsymbol,balance,profileid,transactionid, tos, froms,types) VALUES (1639731207, false, 'ETH', 0.3, '75fi73Fk', '1e2d958a561b38a65395fe3fbe45e18c49ecd23f9205ca43782c1c75','bc1qag0a4crpg80du436ygjzm2nvemqn42w02vsxy', 'bc1q3aapesgvnwqu46hw4fcajpm3vmyym48w96k6uj', 'Trading Account');

INSERT INTO "public"."transactions"(exchangetime,issent, coinsymbol,balance,profileid,transactionid, tos, froms,types) VALUES (1639704807, true, 'BTC', 0.3, '75fi73Fk', '1e2d958a561b38a65395fe3fbe45e18c49ecd23f9205ca43782c1c75','bc1qag0a4crpg80du436ygjzm2nvemqn42w02vsxy', 'bc1q3aapesgvnwqu46hw4fcajpm3vmyym48w96k6uj', 'Private Key Wallet');

INSERT INTO "public"."transactions"(exchangetime,issent, coinsymbol,balance,profileid,transactionid, tos, froms,types) VALUES (1639618407, false, 'BTC', 0.3, '75fi73Fk', '1e2d958a561b38a65395fe3fbe45e18c49ecd23f9205ca43782c1c75','bc1qag0a4crpg80du436ygjzm2nvemqn42w02vsxy', 'bc1q3aapesgvnwqu46hw4fcajpm3vmyym48w96k6uj', 'Private Key Wallet');

INSERT INTO "public"."transactions"(exchangetime,issent, coinsymbol,balance,profileid,transactionid, tos, froms,types) VALUES (1639532007, false, 'ETH', 0.3, '75fi73Fk', '1e2d958a561b38a65395fe3fbe45e18c49ecd23f9205ca43782c1c75','bc1qag0a4crpg80du436ygjzm2nvemqn42w02vsxy', 'bc1q3aapesgvnwqu46hw4fcajpm3vmyym48w96k6uj', 'Private Key Wallet');

INSERT INTO "public"."transactions"(exchangetime,issent, coinsymbol,balance,profileid,transactionid, tos, froms,types) VALUES (1639445607, true, 'ETH', 0.3, '75fi73Fk', '1e2d958a561b38a65395fe3fbe45e18c49ecd23f9205ca43782c1c75','bc1qag0a4crpg80du436ygjzm2nvemqn42w02vsxy', 'bc1q3aapesgvnwqu46hw4fcajpm3vmyym48w96k6uj', 'Private Key Wallet');

INSERT INTO "public"."transactions"(exchangetime,issent, coinsymbol,balance,profileid,transactionid, tos, froms,types) VALUES (1639442607, true, 'ETH', 0.3, '75fi73Fk', '1e2d958a561b38a65395fe3fbe45e18c49ecd23f9205ca43782c1c75','bc1qag0a4crpg80du436ygjzm2nvemqn42w02vsxy', 'bc1q3aapesgvnwqu46hw4fcajpm3vmyym48w96k6uj', 'Trading Account');
 `;

let userValue = `INSERT INTO "public"."users"(
  name, profileid,notificationcount) VALUES ('test', '75fi73Fk',2);`;

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.db.query(userValue);
  pgm.db.query(historyValue);
};

exports.down = (pgm) => {};
