const mysql = require("mysql");

// use this wrapper to create promise around mysql
class Database {
  constructor(config) {
    this.connection = mysql.createConnection(
      process.env.JAWSDB_URL ? process.env.JAWSDB_URL : config
    );
  }
  query(sql, args = []) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  }
  close() {
    return new Promise((resolve, reject) => {
      this.connection.end((err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
}

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     /*! please fill in your password; then create the database name below and create the table */
//     password: "mySQL86giovanni",
//     database: "burgers_db",
//   });
// }

// connection.connect();

function dbConnect() {
  // at top INIT DB connection
  const db = new Database({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USE || "root",
    /*! please fill in your password; then create the database name below and create the table */
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
  });
  return db;
}

module.exports = dbConnect;

// module.exports = connection;
