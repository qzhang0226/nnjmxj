import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Details from './component/Details';
// import Cart from './component/Cart';
import Contact from './component/Contact';
import Business from './component/Business';
import Default from './component/Default';

function App() {

  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/details" component={Details}></Route>
        {/* <Route path="/cart" component={Cart}></Route */}
        <Route path="/business" component={Business}></Route>     
        <Route component={Default}></Route>
      </Switch>
    </React.Fragment>

  );
}

export default App;
