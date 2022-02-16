import React, { Component } from "react";
import Pay from "./components/Pay";
import Success from "./components/Success";


import {  Route, Switch } from 'react-router-dom';
function App() {
  return (
    <main>
    <Switch>
         <Route path="/pay" component={Pay} exact />
        <Route path="/success" component={Success} />
          
        </Switch>
        </main>
  );
}

export default App;
