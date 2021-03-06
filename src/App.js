import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Review from "./components/Review/Review";
import NotFound from "./components/NotFound/NotFound";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Login from "./components/Login/Login";
import { AuthProvider, PrivateRoute } from "./components/Login/useAuth";
import Ship from "./components/Ship/Ship";
import Shipped from "./components/Ship/Shipped";
import Inventory from "./components/Inventory/Inventory";

export const UserContext = React.createContext();

function App() {
  return (
    <div>
      <AuthProvider>
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
            <Route path='/shipped'>
              <Shipped/>
            </Route>
            <Route path="/inventory">
              <Inventory/>
            </Route>
            <Route path="/product/:productKey">
              <ProductDetails />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/ship">
              <Ship/>
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
