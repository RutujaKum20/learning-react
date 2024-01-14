import React from "react";
import ReactDOM from "react-dom/client";

//jsx React functional componemt
// react functional component is a normal js fun which return a jsx code
const HeadingComponent = () => (
  <h1 className="heading">React functional component1</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

//component composition  - > to render a component into another component
const HeadingComponent1 = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title}
    <h1 className="heading">React functional component2</h1>
  </div>
);
root.render(<HeadingComponent1 />);

// if i have to render title in the heading component
const Title = () => (
  <div id="container">
    <h1 className="title">React functional component for composition </h1>
  </div>
);

//javaScript inside jsx()
const number = 1000;
const JsInsideJsx = () => (
  <div className="jsjsx">
    <h2>{100 + 200}</h2>
    <h1>{number}</h1>
    {number}
  </div>
);

//react element inside component
const title = <h1>React element</h1>;
const Header = () => (
  <div id="container">
    <h1>react jsx componrnt </h1>
  </div>
);
