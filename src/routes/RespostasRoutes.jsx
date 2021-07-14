import React from 'react'
import { Switch, Route } from "react-router-dom";
import MainRespostas from "../pages/Respostas/Main";
import InserirResposta from "../pages/Respostas/Inserir";
import EditarResposta from "../pages/Respostas/Editar";
import ExcluirResposta from "../pages/Respostas/Excluir";
import DetalhesResposta from "../pages/Respostas/Detalhes";
import RespostasPergunta from "../pages/Respostas/RespostaPorPergunta";
import RespostasAvaliador from "../pages/Respostas/RespostaPorAvaliador";

export default function RespostasRoute(){
    return(
        <>
            <Switch>
                <Route exact path = {'/respostas'} component={MainRespostas} />
                <Route exact path = {'/inserirResposta'} component={InserirResposta} />
                <Route path={'/editarResposta/:id'} component={EditarResposta} />
                <Route path={'/excluirResposta/:id'} component={ExcluirResposta} />
                <Route path={'/detalhesResposta/:id'} component={DetalhesResposta}/>
                <Route exact path = {'/respostasPergunta/:id'} component={RespostasPergunta} /> 
                <Route exact path = {'/respostasAvaliador/:id'} component={RespostasAvaliador} />
                
            </Switch>
        </>
    )
}