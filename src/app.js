import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import NavLayout from "./Navigation";
import Body from "./body";

const AppLayout = () => {
  return (
    <div className="appLayout">
      <NavLayout />
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
