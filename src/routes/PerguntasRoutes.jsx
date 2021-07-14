import React from 'react'
import { Switch, Route } from "react-router-dom";
import MainPerguntas from "../pages/Perguntas/Main";
import InserirPergunta from "../pages/Perguntas/Inserir";
import EditarPergunta from "../pages/Perguntas/Editar";
import ExcluirPergunta from "../pages/Perguntas/Excluir";
import DetalhesPergunta from "../pages/Perguntas/Detalhes";
import PerguntasFormulario from "../pages/Perguntas/PerguntaPorFormulario";


export default function PerguntasRoute(){
    return(
        <>
            <Switch>
                <Route exact path = {'/perguntas'} component={MainPerguntas} />
                <Route exact path = {'/inserirPergunta/:id'} component={InserirPergunta} />
                <Route path={'/editarPergunta/:id'} component={EditarPergunta} />
                <Route path={'/excluirPergunta/:id'} component={ExcluirPergunta} />
                <Route path={'/detalhesPergunta/:id'} component={DetalhesPergunta}/>
                <Route exact path = {'/perguntasFormulario/:id'} component={PerguntasFormulario} /> 
                
            </Switch>
        </>
    )
}