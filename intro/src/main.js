import React from "react"
import { createRoot } from "react-dom/client"

console.log(React);

const reactMainElement = React.createElement("main", { className: "xfg", style: { color: "red" } }, "helo")

console.log(reactMainElement);


const root = createRoot(document.getElementById("app"));

root.render(reactMainElement)


// HTML Element
// const doc = document;

// const main = doc.createElement("main");

// main.className

// main.innerHTML = "HTML ELEMENT"

// doc.getElementById("app").appendChild(main)

// console.log(main);
