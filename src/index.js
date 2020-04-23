import React from "react";
import ReactDOM from "react-dom";
import CrudForm from "./components/CrudForm";

const App = () => {
  return (
    <>
      Hello World
      <CrudForm></CrudForm>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
