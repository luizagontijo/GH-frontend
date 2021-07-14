import React from 'react'
import { Switch, Route } from "react-router-dom";
import DashboardAdmin from "../pages/DashboardAdmin";


export default function DashboardRoute(){
    return(
        <>
            <Switch>
                <Route exact path = {'/admin'} component={DashboardAdmin} />
            </Switch>
        </>
    )
}