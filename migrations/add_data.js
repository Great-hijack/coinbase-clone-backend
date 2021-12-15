const updateDb = require("./database.json");

const { profileid, history } = updateDb;
const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "coinbase",
  password: "admin",
  port: "5432",
});
var queryUser = `INSERT INTO users(
  name, profileId) VALUES(
  '', '${profileid}'
  );`;

var queryHistory = `INSERT INTO history(exchangeTime, coinSymbol,balance,profileId) VALUES`;
let historyValues = ``;
history.forEach((item) => {
  const exchangetime = Math.floor(new Date(item.exchangetime).getTime() / 1000);

  historyValues += `(${exchangetime}, '${item.coinsymbol}', ${item.balance}, '${profileid}'),`;
});
let stringWithoutComma = historyValues.replace(/,*$/, ";");
const finalHistory = queryHistory + stringWithoutComma;
pool.query(queryUser + finalHistory, (err, res) => {
  console.log(err, res);
  pool.end();
});
