// const handlebars = require("handlebars");

/////////////// create the code that will call the ORM functions using burger specific input for the ORM.

async function addBurger() {
  /////READ INPUTS HERE
  const burger_name = document.querySelector("#inputs").value;
  if (!burger_name) return;
  const newBurger = await fetch("/api/burgers", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      name: burger_name,
      devoured: false,
    }),
  });
}

async function update(id) {
  /////CLICK ON  DEVOUR IT BUTTON
  ///read id from obj
  // console.log(id,'  script id);
  const result = await fetch(`/api/burgers/${id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
  }).then((res) => {
    window.location.href = `/api/burgers`;
  });
}

async function deleteBurger(id) {
  const result = await fetch(`/api/burgers/${id}`, {
    method: "DELETE",
  }).then((res) => {
    window.location.href = `/api/burgers`;
  });
}
