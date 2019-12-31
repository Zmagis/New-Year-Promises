import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div className="container-fluid d-flex flex-column justify-content-center align-items-center app">
    <h1 className="m-5 jump">New Year - Fresh Start!</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
