const orm = require("../config/orm");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.redirect(`/api/burgers`);
  });

  app.get("/api/burgers", async (req, res) => {
    const result = await orm.selectAll().then((result) => {
      // console.log(result);
      res.render("index", { burger_data: result });
    });
    // console.log(result, "  CONTROLLER");
  });

  app.post("/api/burgers", async (req, res) => {
    // console.log("TEST POST");
    // console.log(req.body);
    if (req.body.inputs === "") {
      throw new Error(`Error! Please insert a valid input!`);
    }
    const result = await orm.insertOne(req.body.inputs);
    res.redirect(`/api/burgers`);
  });

  app.put("/api/burgers/:id", async (req, res) => {
    // console.log("test PUT");
    // console.log(req.params.id);
    const result = await orm.updateOne(req.params.id);
    res.send();
  });

  app.delete("/api/burgers/:id", async (req, res) => {
    const result = await orm.deleteOne(req.params.id);
    res.send();
  });
};
