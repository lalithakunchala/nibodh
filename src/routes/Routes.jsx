import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import Products from "../components/Products/Products";
import ProductInfo from "../components/ProductInfo/ProductInfo";


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact render={(props) => <Products {...props}/>}/>
            <Route path="/productInfo" exact render={(props) => <ProductInfo {...props}/>}/>
        </Switch>
    )
}

