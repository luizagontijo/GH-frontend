import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import UsuariosRoute from '../routes/UsuariosRoutes';
import TimesRoute from '../routes/TimesRoutes';
import FormulariosRoute from '../routes/FormulariosRoutes';
import PerguntasRoute from '../routes/PerguntasRoutes';
import RespostasRoute from '../routes/RespostasRoutes';
import AvaliacaoRoute from '../routes/AvaliacaoRoutes';
import DashboardRoute from '../routes/DashboardRoutes';

function Content(){
    return(
        <div className="flex-shrink-0">
            <div className="container">
            
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
                <UsuariosRoute/>    
                <TimesRoute/> 
                <FormulariosRoute/>
                <PerguntasRoute/>
                <RespostasRoute/>
                <AvaliacaoRoute/>
                <DashboardRoute/>
            </div>  
        </div>
    )
}

export default Content;