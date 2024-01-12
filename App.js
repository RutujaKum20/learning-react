import React from "react";
import ReactDOM from "react-dom/client";

// ReactElement using createElement
// ReactElement => object => HTMLELement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "React js Element using createElement !!!!!"
);

/*in this way it is very difficult to create complex html structure the react code will be not proper readable
 to overcome this react JSX comes into picture */

//jsx
const jsxHeading = <h1 className="jsxHeading">React using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(jsxHeading);

// jsx(transpiled before it reached to js) - parcel - Babel
// jsx => balel transplied it to React.createElement => ReactElement -js object => HTMLElement(render)
// jsx example
// const jsxfooter = <h1 id="heading"> Hello React using jsx !!!!!!</h1>;
// console.log(jsxfooter);
