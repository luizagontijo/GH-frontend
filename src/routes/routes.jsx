import React, {Suspense, Lazy}  from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const Routes = () => (
     <BrowserRouter>
        SUS
        <Switch>
            <Route exact path ="/" component={() => <h1>sera que da certo?</h1>} />
        </Switch>
     </BrowserRouter>
);