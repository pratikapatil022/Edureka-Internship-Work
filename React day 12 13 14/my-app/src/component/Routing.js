import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Details from './mealtypeRest/Details';
import Header from './Header';
import Restaurant from './RestDetails/ResutaurantDetails'

const Routing = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={Home}></Route>
                <Route path="/details/:id" component={Details}></Route>
                <Route path="/rest/:id" component={Restaurant}></Route>
            </div>
        </BrowserRouter>
    )
}

export default Routing;