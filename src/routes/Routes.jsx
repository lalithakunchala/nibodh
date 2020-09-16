import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import Products from "../components/Products/Products";


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact render={(props) => <Products {...props}/>}/>
        </Switch>
    )
}

