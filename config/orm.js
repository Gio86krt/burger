const db = require("./connection");
// const dbConnect = require("./connection");

// const db = dbConnect("burgers_db", "mySQL86giovanni");

function selectAll() {
  const result = db.query(`SELECT * FROM burgers;`);
  return result;
}

async function insertOne(name) {
  return db.query(
    `INSERT INTO burgers (burger_name, devoured) VALUE ("${name}",false);`
  );
}

async function updateOne(id) {
  return db.query(`UPDATE burgers SET devoured=true WHERE id=${id};`);
}

async function deleteOne(id) {
  return db.query(`DELETE FROM burgers WHERE id=${id};`);
}

module.exports = {
  selectAll,
  insertOne,
  updateOne,
  deleteOne,
};
