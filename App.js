const root = ReactDOM.createRoot(document.getElementById("root"));
//const heading = React.createElement("h1", {id: "heading"}, "My first React program");
const parent = React.createElement("div", {id:"parent"}, [React.createElement("div", {id:"child1"}, React.createElement("h1", {id:"heading"},
    "I am Afsah")), React.createElement("div", {id:"child2"}, [React.createElement("h1", {id:"heading"}, "A developer"), 
    React.createElement("h1", {}, "Age 24")])]);
console.log(parent);
root.render(parent);