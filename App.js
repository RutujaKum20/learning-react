import React from "react";
import ReactDOM from "react-dom/client";

/* Assignment 3

Create a Nested header Element using React.createElement(h1,h2,h3 inside a
div with class “title”)
○ Create the same element using JSX
○ Create a functional component of the same with JSX
○ Pass attributes into the tag in JSX
○ Composition of Component(Add a component inside another)
○ {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX
*/

// Element using React.createElement
const head = React.createElement("div", { class: "title" }, [
  React.createElement(
    "h1",
    { id: "h1Ele" },
    React.createElement(
      "h2",
      { id: "h2Ele" },
      React.createElement("h3", { id: "h3ele" }, "React createElements")
    )
  ),
]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(head);

// same element using JSX
const jsxHead = (
  <div className="title">
    <h1 className="h1" tabIndex="2">
      JSX h1 Element
    </h1>
    <h2 className="h2" tabIndex="2">
      JSX h2 Element
    </h2>
    <h3 className="h3"> JSX h3 Element</h3>
  </div>
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHead);

// React functional component
const Title = () => <h1 id="title">React functional component</h1>;

// composition component
const Heading = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {/* {Title} */}
    <h1 className="">React composition component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
