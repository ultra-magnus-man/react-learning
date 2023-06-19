const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

// Craeted h1 tag
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
// console.log(heading);
console.log(parent);
// To put H1 into the browser we need to create root
const root = ReactDOM.createRoot(document.getElementById("root"));
// Remdering the elelemnt inside the root
// root.render(heading);
root.render(parent);
