import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/shop/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from "./components/Review/Review";
import NotFound from "./components/NotFound/NotFound";
import ProductDetails from "./components/ProductDetails/ProductDetails";

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
          <ProductDetails/>
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
