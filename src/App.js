import React from "react";
import "./App.css";
import MyForm from "./components/MyForm.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ListExample from "./components/ListExample.js";
import { BrowserRouter, Route , Switch ,Link} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="alert alert-danger">Checking Bootstrap</div>
        <Link to="/">List</Link> <Link to="/form">Open Form</Link>
        <Switch>
        <Route path="/form" exact component={MyForm}/> 
        <Route path="/" exact component={ListExample}/>
        <Route path="/:id" exact component={ListExample}/>
        </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
