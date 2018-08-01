import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/Template'

const createRoutes = () => { //declaring a function that is going to return our routes, the const is a variable that we'll be able to call later when we want to create these routes
    return (
        <Route
        path='/' //root route
        component={Template} 
        >
        </Route> 
    )
}

const Routes = createRoutes() //run the function 

export default Routes 