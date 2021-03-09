const dbConnect = require("./connection");

const db = dbConnect("burgers_db", "mySQL86giovanni");

function selectAll() {
  const result = db.query(`SELECT * FROM burgers;`);
  console.log(result, "  ORM");
  return result;
}

async function insertOne(name, devoured) {
  return await db.query(
    `INSERT INTO burgers (burger_name, devoured) VALUE ("${name}",${devoured});`
  );
}

async function updateOne(name, devoured, id) {
  return await db.query(
    `UPDATE burgers SET burger_name="${name}", devoured=${devoured} WHERE id=${id};`
  );
}

module.exports = {
  selectAll,
  insertOne,
  updateOne,
};
