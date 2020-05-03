import React from "react";
import "./App.css";
import Header from "./componenets/Header/Header";
import Shop from "./componenets/shop/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from "./componenets/Review/Review";
import NotFound from "./componenets/NotFound/NotFound";
import ProductKey from "./componenets/ProductKey/ProductKey";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
        <Route exact path="/">
          <Shop />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/inventory">
          <h1>Developer is sleeping</h1>
        </Route>
        <Route path='/product/:productKey'>
          <ProductKey/>
        </Route>
        <Route  path="*">
          <NotFound />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
