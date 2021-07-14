import React from 'react'
import { Switch, Route } from "react-router-dom";
import MainUsuarios from "../pages/Usuarios/Main";
import UsuariosPorTime from "../pages/Usuarios/UsuarioPorTime";
import TodosPorTime from "../pages/Usuarios/Recentes";
import InserirUsuario from "../pages/Usuarios/Inserir";
import DetalhesUsuario from "../pages/Usuarios/Detalhes";
import ExcluirUsuario from "../pages/Usuarios/Excluir";
import EditarUsuario from "../pages/Usuarios/Editar";
import Buscar from "../pages/Usuarios/Buscar";

export default function UsuariosRoute(){
    return(
        <>
            <Switch>
                <Route exact path = {'/usuarios2'} component={MainUsuarios} />
                <Route path = {'/usuariosTime/:id'} component={UsuariosPorTime} />
                <Route path = {'/recentes'} component={TodosPorTime} />
                <Route path = {'/inserirUsuario/:id'} component={InserirUsuario} />
                <Route path = {'/detalhesUsuario/:id'} component={DetalhesUsuario} />
                <Route path = {'/excluirUsuario/:id'} component={ExcluirUsuario} />
                <Route path = {'/editarUsuario/:id'} component={EditarUsuario} />
                <Route path = {'/usuarios'} component={Buscar} />
            </Switch>
        </>
    )
}