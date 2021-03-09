const orm = require("../config/orm");

module.exports = function (app) {
  app.post("/api/burgers", async (req, res) => {
    return orm.insertOne(req.body.name, req.body.devoured);
  });

  app.get("/api/burgers", async (req, res) => {
    console.log("hello");
    const result = await orm.selectAll();
    console.log(result, "  CONTROLLER");
    res.send(result);
  });

  app.put("/api/burgers/:id", async (req, res) => {
    return orm.updateOne(req.body.name);
  });
};
