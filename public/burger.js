const handlebars = require("handlebars");

/////////////// create the code that will call the ORM functions using burger specific input for the ORM.

async function addBurger(burger_name) {
  /////READ INPUTS HERE
  const newBurger = await fetch("/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      name: burger_name,
      devoured: false,
    }),
  }).then((res) => console.log("done"));
}

async function show() {
  const list = await fetch("/api/burgers", {
    method: "GET",
    headers: { "Content-Type": "javascript/json" },
  }).then((r) => r.json());
  // console.log(list, "   SCRIPT");
  createHtml(list);
}

function createHtml(data) {
  console.log(data, "  CREATEHTML FUNCTION");
}

// async function showAll() {
//   const res = await orm.selectAll().then((res) => console.log(res));
//   console.log(res);
// }

async function update(burger_name) {
  /////CLICK ON  DEVOUR IT BUTTON
  ///read id from obj
  const result = await fetch("/", {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      name: burger_name,
      devoured: true,
    }),
  }).then((res) => console.log("Updated"));
}

show();
