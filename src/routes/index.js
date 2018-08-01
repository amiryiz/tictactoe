import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/Template'
import Home from '../containers/Home'
import Profile from '../containers/Profile'

const createRoutes = () => { //declaring a function that is going to return our routes, the const is a variable that we'll be able to call later when we want to create these routes
    return (
        <Route
        path='/' //root route
        component={Template} 
        >
            <IndexRoute
              component={Home}      
            />
            <Route
              path={'/profile'}
              component={Profile}
            />
        </Route> 
    )
}

const Routes = createRoutes() //run the function 

export default Routes 