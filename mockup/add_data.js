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
const queryUser = `INSERT INTO users(
  name, profileid) VALUES(
  '', '${profileid}'
  );`;

let queryHistory = `INSERT INTO history(exchangetime, coinsymbol,balance,profileid) VALUES`;
const historyValues = history.map((item) => {
  const exchangetime = Math.floor(new Date(item.exchangetime).getTime() / 1000);
  return `(${exchangetime}, '${item.coinsymbol}', ${item.balance}, '${profileid}')`;
});
const stringWithoutComma = historyValues.join(",");
const finalHistory = queryHistory + stringWithoutComma;
pool.query(queryUser + finalHistory, (err, res) => {
  console.log(err, res);
  pool.end();
});
