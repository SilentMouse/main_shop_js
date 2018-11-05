import React from "react";
import {IndexRoute, Route} from "react-router";

import Products from './components/Products';
import Product from './components/ProductCard';
import Posts from './components/Posts';
import Post from './components/PostCard';

export default function(history) {
    return <div>
        <Route exact path="/" component={Products}/>
        <Route exact path="/products" component={Products}/>
        <Route exact path="/products/:product_id" component={Product}/>
        <Route exact path="/posts" component={Posts}/>
        <Route exact path="/posts/:post_id" component={Post}/>
    </div>;
}