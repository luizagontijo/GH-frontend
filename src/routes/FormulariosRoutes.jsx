import React from 'react'
import { Switch, Route } from "react-router-dom";
import MainFormularios from "../pages/Formularios/Main";
import InserirFormulario from "../pages/Formularios/Inserir";
import EditarFormulario from "../pages/Formularios/Editar";
import ExcluirFormulario from "../pages/Formularios/Excluir";
import DetalhesFormulario from "../pages/Formularios/Detalhes";
import FormulariosPorTime from "../pages/Formularios/FormularioPorTime";

export default function FormulariosRoute(){
    return(
        <>
            <Switch>
                <Route exact path = {'/formularios'} component={MainFormularios} />
                <Route exact path = {'/inserirFormulario/:id'} component={InserirFormulario} />
                <Route path={'/editarFormulario/:id'} component={EditarFormulario} />
                <Route path={'/excluirFormulario/:id'} component={ExcluirFormulario} />
                <Route path={'/detalhesFormulario/:id'} component={DetalhesFormulario}/>
                <Route exact path = {'/formulariosTime/:id'} component={FormulariosPorTime} />
            </Switch>
        </>
    )
}