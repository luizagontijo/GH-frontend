import React from 'react'
import { Switch, Route } from "react-router-dom";
import Avaliacao from "../pages/Avaliacao";
import AvaliacaoDemo from '../pages/AvaliacaoDemo';

export default function UsuariosRoute(){
    return(
        <>
            <Switch>
                <Route exact path = {'/avaliacao/:id'} component={Avaliacao} />
                <Route exact path = {'/avaliacaoDemo/'} component={AvaliacaoDemo} />
            </Switch>
        </>
    )
}