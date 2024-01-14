import React from "react";
import ReactDOM from "react-dom/client";

// adding react logo using import
import Rlogo from "./images/Rlogo.png";
import userIcon from "./images/usericon.svg";

// adding user icon
// import { faHeart } from "react-icons/fa";

/* Assignment 3 part 2

● Create a Header Component from scratch using Functional Components with
JSX
○ Add a Logo on left
○ Add a search bar in middle
○ Add User icon on right
○ Add CSS to make it look nice
*/

// ● Create a Header Component from scratch using Functional Components with JSX
const HeaderComponent = () => (
  <div id="header">
    <img src={Rlogo} height={100} width={100} alt="React_logo" />
    <input type="text" placeholder="Search bar" />
    <div className="userIcon">
      <img src={userIcon} alt="user icon" height={50} width={50} />
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
